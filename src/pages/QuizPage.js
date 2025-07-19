import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/supabaseClient';
import { 
  ArrowLeft, 
  ArrowRight, 
  AlertCircle,
  Trophy,
  RefreshCw
} from 'lucide-react';

const QuizPage = () => {
  const { weekNumber } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [quiz, setQuiz] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(null);

  const loadQuiz = useCallback(async () => {
    try {
      setLoading(true);
      
      // Get quiz details
      const { data: quizData, error: quizError } = await db.getQuizzes();
      if (quizError) throw quizError;
      
      const currentQuiz = quizData?.find(q => q.week_number === parseInt(weekNumber));
      if (!currentQuiz) {
        setError('Quiz not found');
        return;
      }
      
      setQuiz(currentQuiz);
      setTimeLeft(currentQuiz.time_limit * 60); // Convert minutes to seconds
      
      // Get quiz questions
      const { data: questionsData, error: questionsError } = await db.getQuizQuestions(currentQuiz.id);
      if (questionsError) throw questionsError;
      
      setQuestions(questionsData || []);
    } catch (err) {
      setError('Failed to load quiz');
      console.error('Quiz loading error:', err);
    } finally {
      setLoading(false);
    }
  }, [weekNumber]);

  const handleSubmitQuiz = useCallback(async () => {
    if (submitting) return;
    
    setSubmitting(true);
    
    try {
      // Calculate score
      let correctAnswers = 0;
      const totalQuestions = questions.length;
      
      questions.forEach(question => {
        const selectedAnswer = selectedAnswers[question.id];
        if (selectedAnswer === question.correct_answer_index) {
          correctAnswers++;
        }
      });
      
      const finalScore = Math.round((correctAnswers / totalQuestions) * 100);
      setScore(finalScore);
      
      // Submit score to database
      const { error } = await db.submitQuizScore(
        user.id,
        quiz.id,
        finalScore,
        selectedAnswers
      );
      
      if (error) throw error;
      
      setQuizCompleted(true);
    } catch (err) {
      setError('Failed to submit quiz');
      console.error('Quiz submission error:', err);
    } finally {
      setSubmitting(false);
    }
  }, [submitting, questions, selectedAnswers, user.id, quiz.id]);

  useEffect(() => {
    loadQuiz();
  }, [loadQuiz]);

  useEffect(() => {
    if (timeLeft > 0 && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !quizCompleted) {
      handleSubmitQuiz();
    }
  }, [timeLeft, quizCompleted, handleSubmitQuiz]);

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="h-12 w-12 text-error-500 mx-auto mb-4" />
        <div className="text-error-600 mb-4">{error}</div>
        <button onClick={loadQuiz} className="btn-primary">
          <RefreshCw className="h-4 w-4 mr-2" />
          Try Again
        </button>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="card text-center">
          <div className="mb-6">
            {score >= 70 ? (
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            ) : (
              <AlertCircle className="h-16 w-16 text-error-500 mx-auto mb-4" />
            )}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {score >= 70 ? 'Congratulations!' : 'Quiz Completed'}
            </h2>
            <p className="text-gray-600 mb-6">
              {score >= 70 
                ? 'You passed the quiz! Keep up the great work.' 
                : 'You completed the quiz. Review the material and try again if needed.'
              }
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">{score}%</div>
            <div className="text-gray-600">Your Score</div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="btn-primary w-full"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => navigate(`/quiz/${weekNumber}`)}
              className="btn-secondary w-full"
            >
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Quiz Header */}
      <div className="card mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Week {weekNumber} Quiz
            </h1>
            <p className="text-gray-600">{quiz?.title}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-sm text-gray-600">Time Left</div>
              <div className={`text-lg font-bold ${timeLeft < 300 ? 'text-error-600' : 'text-gray-900'}`}>
                {formatTime(timeLeft)}
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">Progress</div>
              <div className="text-lg font-bold text-gray-900">
                {currentQuestionIndex + 1} / {questions.length}
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="card">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-500">
              {Math.round(getProgressPercentage())}% Complete
            </span>
          </div>
          
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            {currentQuestion?.question_text}
          </h2>
        </div>

        {/* Answer Options */}
        <div className="space-y-3 mb-8">
          {currentQuestion?.options?.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(currentQuestion.id, index)}
              className={`quiz-option ${
                selectedAnswers[currentQuestion.id] === index ? 'selected' : ''
              }`}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full mr-3 flex items-center justify-center">
                  {selectedAnswers[currentQuestion.id] === index && (
                    <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  )}
                </div>
                <span className="text-left">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="btn-secondary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </button>
          
          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-8 h-8 rounded-full text-sm font-medium ${
                  index === currentQuestionIndex
                    ? 'bg-primary-600 text-white'
                    : selectedAnswers[questions[index]?.id] !== undefined
                    ? 'bg-success-100 text-success-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={handleSubmitQuiz}
              disabled={submitting || Object.keys(selectedAnswers).length < questions.length}
              className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  Submit Quiz
                  <ArrowRight className="h-4 w-4 ml-2" />
                </>
              )}
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="btn-primary flex items-center"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          )}
        </div>
      </div>

      {/* Quiz Instructions */}
      <div className="card bg-blue-50 border-blue-200">
        <h3 className="font-semibold text-blue-900 mb-2">Quiz Instructions</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• You have {quiz?.time_limit} minutes to complete this quiz</li>
          <li>• You can navigate between questions using the numbered buttons</li>
          <li>• You must answer all questions to submit the quiz</li>
          <li>• Once submitted, you cannot change your answers</li>
          <li>• A score of 70% or higher is required to pass</li>
        </ul>
      </div>
    </div>
  );
};

export default QuizPage; 