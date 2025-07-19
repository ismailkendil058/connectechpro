import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../services/supabaseClient';
import { 
  Menu,
  X,
  BookOpen, 
  Clock, 
  CheckCircle, 
  Lock, 
  Download, 
  BarChart3,
  Calendar,
  Award,
  FileText,
  Play,
  ChevronRight,
  User,
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { formatDate, calculatePercentage } from '../lib/utils';

const StudentDashboard = () => {
  const { user, profile } = useAuth();
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [quizScores, setQuizScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const loadDashboardData = useCallback(async () => {
    if (!user) return;

    try {
      setLoading(true);
      
      // Load enrolled courses
      const { data: courses, error: coursesError } = await db.getEnrolledCourses(user.id);
      if (coursesError) throw coursesError;
      
      // Load quiz scores
      const { data: scores, error: scoresError } = await db.getUserQuizScores(user.id);
      if (scoresError) throw scoresError;

      setEnrolledCourses(courses || []);
      setQuizScores(scores || []);
    } catch (err) {
      setError('Failed to load dashboard data');
      console.error('Dashboard loading error:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  const getQuizProgress = (weekNumber) => {
    const quizScore = quizScores.find(score => score.quizzes?.week_number === weekNumber);
    return quizScore ? quizScore.score : null;
  };

  const isQuizLocked = (weekNumber) => {
    if (weekNumber === 1) return false;
    const previousQuizScore = getQuizProgress(weekNumber - 1);
    return previousQuizScore === null;
  };

  const getOverallProgress = () => {
    const totalQuizzes = 12;
    const completedQuizzes = quizScores.length;
    return calculatePercentage(completedQuizzes, totalQuizzes);
  };

  const getAverageScore = () => {
    if (quizScores.length === 0) return 0;
    const totalScore = quizScores.reduce((sum, score) => sum + score.score, 0);
    return Math.round(totalScore / quizScores.length);
  };

  if (loading) {
    return (
      <div className="mobile-container">
        <div className="flex items-center justify-center min-h-64">
          <div className="loading-spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mobile-container">
        <div className="text-center py-8">
          <div className="error-message">
            <div className="flex items-center">
              <FileText className="error-icon" />
              <span className="error-text">{error}</span>
            </div>
          </div>
          <button onClick={loadDashboardData} className="btn-primary-mobile mt-4">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-container">
      {/* Header */}
      <header className="mobile-header">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-back-button"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <h1 className="mobile-header-title">Dashboard</h1>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="text-white text-sm font-bold">YB</span>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          <div className="drawer-overlay" onClick={() => setIsMenuOpen(false)} />
          <div className="drawer-content">
            <div className="drawer-header">
              <h2 className="drawer-title">Menu</h2>
              <button onClick={() => setIsMenuOpen(false)} className="drawer-close">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="drawer-body">
              <nav className="space-y-4">
                <Link to="/" className="block py-2 text-gray-600">Home</Link>
                <Link to="/courses" className="block py-2 text-gray-600">Courses</Link>
                <Link to="/dashboard" className="block py-2 text-gray-900 font-medium">Dashboard</Link>
                <Link to="/profile" className="block py-2 text-gray-600">Profile</Link>
                <Link to="/quiz-history" className="block py-2 text-gray-600">Quiz History</Link>
                <Link to="/contact" className="block py-2 text-gray-600">Contact</Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="px-4 pb-20">
        {/* User Profile */}
        <div className="profile-section">
          <div className="profile-header">
            <div className="profile-avatar">
              YB
            </div>
            <div className="profile-info">
              <h3>Youcef Belouz</h3>
              <p>Student</p>
            </div>
          </div>
        </div>

        {/* My Courses */}
        <div className="mobile-card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">My Courses</h2>
          
          {enrolledCourses.length === 0 ? (
            <div className="empty-state">
              <BookOpen className="empty-icon" />
              <h3 className="empty-title">No courses enrolled yet</h3>
              <p className="empty-description">Start your learning journey by enrolling in our project management courses.</p>
              <Link to="/courses" className="btn-primary-mobile">
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {enrolledCourses.map((enrollment) => (
                <div key={enrollment.id} className="mobile-card-horizontal">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{enrollment.courses?.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <div className="course-progress w-20">
                        <div 
                          className="course-progress-fill"
                          style={{ width: `${enrollment.progress || 0}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{enrollment.progress || 0}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Next Step */}
        <div className="mobile-card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Next Step</h2>
          <div className="space-y-3">
            <Link to="/quiz/1" className="dashboard-action">
              <div className="flex items-center">
                <Play className="action-icon" />
                <div className="flex-1">
                  <div className="action-title">Project Management Quiz</div>
                  <div className="action-description">Continue your progress</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
            <Link to="/quiz/2" className="dashboard-action">
              <div className="flex items-center">
                <Play className="action-icon" />
                <div className="flex-1">
                  <div className="action-title">Agile Quiz</div>
                  <div className="action-description">Test your knowledge</div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </Link>
          </div>
        </div>

        {/* Final Exam Access */}
        <div className="mobile-card">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Final Exam Access</h3>
              <p className="text-sm text-gray-600">Complete all quizzes to unlock</p>
            </div>
          </div>
          <button className="btn-primary-mobile flex items-center justify-center">
            <Award className="h-5 w-5 mr-2" />
            Start Exam
          </button>
        </div>

        {/* Weekly Quizzes */}
        <div className="mobile-card">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Weekly Quizzes</h2>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 12 }, (_, i) => i + 1).map((week) => {
              const score = getQuizProgress(week);
              const isLocked = isQuizLocked(week);
              
              return (
                <div key={week} className="quiz-card text-center">
                  <div className="mb-2">
                    {isLocked ? (
                      <Lock className="h-6 w-6 text-gray-400 mx-auto" />
                    ) : score !== null ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                    ) : (
                      <Play className="h-6 w-6 text-green-600 mx-auto" />
                    )}
                  </div>
                  <div className="text-sm font-medium text-gray-900">Week {week}</div>
                  {score !== null && (
                    <div className="text-xs text-green-600 font-medium">{score}%</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="dashboard-action">
            <Download className="action-icon" />
            <div className="action-title">Download Resources</div>
            <div className="action-description">Study materials & templates</div>
          </div>
          <div className="dashboard-action">
            <Calendar className="action-icon" />
            <div className="action-title">Schedule Consultation</div>
            <div className="action-description">Book 1-on-1 session</div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="bottom-nav safe-area-bottom">
        <div className="flex justify-around">
          <Link to="/" className="bottom-nav-item">
            <div className="w-6 h-6 mb-1">
              <div className="w-full h-full bg-gray-300 rounded-full" />
            </div>
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/courses" className="bottom-nav-item">
            <BookOpen className="h-6 w-6 mb-1" />
            <span className="text-xs">Courses</span>
          </Link>
          <Link to="/dashboard" className="bottom-nav-item active">
            <BarChart3 className="h-6 w-6 mb-1" />
            <span className="text-xs">Dashboard</span>
          </Link>
          <Link to="/profile" className="bottom-nav-item">
            <User className="h-6 w-6 mb-1" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default StudentDashboard; 