// Mock data for development without Supabase
export const mockData = {
  courses: [
    {
      id: '1',
      title: 'Project Management Fundamentals',
      description: 'Learn the basics of project management including planning, execution, and monitoring.',
      level: 'beginner',
      duration: '8 weeks',
      price: 15000
    },
    {
      id: '2',
      title: 'Advanced Project Management',
      description: 'Master advanced techniques in project management and leadership.',
      level: 'advanced',
      duration: '12 weeks',
      price: 25000
    },
    {
      id: '3',
      title: 'Agile Project Management',
      description: 'Learn Agile methodologies and Scrum framework for modern project management.',
      level: 'intermediate',
      duration: '10 weeks',
      price: 20000
    }
  ],
  
  quizzes: [
    {
      id: '1',
      week_number: 1,
      title: 'Introduction to Project Management',
      description: 'Basic concepts and principles',
      time_limit: 30,
      passing_score: 70,
      questions_count: 10
    },
    {
      id: '2',
      week_number: 2,
      title: 'Project Planning Fundamentals',
      description: 'Planning techniques and tools',
      time_limit: 30,
      passing_score: 70,
      questions_count: 10
    },
    {
      id: '3',
      week_number: 3,
      title: 'Risk Management',
      description: 'Identifying and managing project risks',
      time_limit: 30,
      passing_score: 70,
      questions_count: 10
    }
  ],
  
  quizQuestions: {
    '1': [
      {
        id: '1-1',
        question_text: 'What is the primary goal of project management?',
        options: [
          'To complete tasks quickly',
          'To deliver value within constraints',
          'To manage people',
          'To create documentation'
        ],
        correct_answer_index: 1
      },
      {
        id: '1-2',
        question_text: 'Which of the following is NOT a project management process group?',
        options: [
          'Initiating',
          'Planning',
          'Executing',
          'Budgeting'
        ],
        correct_answer_index: 3
      },
      {
        id: '1-3',
        question_text: 'What is a project charter?',
        options: [
          'A legal document',
          'A project authorization document',
          'A budget document',
          'A schedule document'
        ],
        correct_answer_index: 1
      }
    ],
    '2': [
      {
        id: '2-1',
        question_text: 'What is the Work Breakdown Structure (WBS)?',
        options: [
          'A project schedule',
          'A hierarchical decomposition of project work',
          'A budget document',
          'A risk register'
        ],
        correct_answer_index: 1
      },
      {
        id: '2-2',
        question_text: 'Which planning document defines project scope?',
        options: [
          'Project charter',
          'Scope statement',
          'Schedule',
          'Budget'
        ],
        correct_answer_index: 1
      }
    ],
    '3': [
      {
        id: '3-1',
        question_text: 'What is risk identification?',
        options: [
          'Creating a risk response plan',
          'Determining which risks may affect the project',
          'Implementing risk responses',
          'Monitoring risk triggers'
        ],
        correct_answer_index: 1
      }
    ]
  },
  
  students: [
    {
      id: '1',
      full_name: 'Ahmed Benali',
      email: 'ahmed@example.com',
      role: 'student',
      average_score: 85,
      last_login: new Date().toISOString(),
      enrolled_courses: 2,
      completed_quizzes: 3
    },
    {
      id: '2',
      full_name: 'Fatima Zohra',
      email: 'fatima@example.com',
      role: 'student',
      average_score: 92,
      last_login: new Date().toISOString(),
      enrolled_courses: 1,
      completed_quizzes: 2
    },
    {
      id: '3',
      full_name: 'Karim Messaoudi',
      email: 'karim@example.com',
      role: 'student',
      average_score: 78,
      last_login: new Date().toISOString(),
      enrolled_courses: 3,
      completed_quizzes: 5
    }
  ],
  
  enrollments: [
    {
      id: '1',
      user_id: '1',
      course_id: '1',
      enrolled_at: new Date().toISOString(),
      courses: {
        title: 'Project Management Fundamentals',
        description: 'Learn the basics of project management',
        level: 'beginner',
        duration: '8 weeks'
      }
    }
  ],
  
  quizScores: [
    {
      id: '1',
      user_id: '1',
      quiz_id: '1',
      score: 85,
      submitted_at: new Date().toISOString(),
      quizzes: {
        week_number: 1,
        title: 'Introduction to Project Management'
      }
    },
    {
      id: '2',
      user_id: '1',
      quiz_id: '2',
      score: 90,
      submitted_at: new Date().toISOString(),
      quizzes: {
        week_number: 2,
        title: 'Project Planning Fundamentals'
      }
    }
  ]
};

// Mock functions that simulate Supabase operations
export const mockSupabase = {
  auth: {
    signUp: async (email, password, role = 'student') => {
      return { data: { user: { id: 'mock-user-id', email } }, error: null };
    },
    signIn: async (email, password) => {
      return { data: { user: { id: 'mock-user-id', email } }, error: null };
    },
    signOut: async () => {
      return { error: null };
    },
    getCurrentUser: async () => {
      return { id: 'mock-user-id', email: 'test@example.com' };
    },
    onAuthStateChange: (callback) => {
      return { data: { subscription: { unsubscribe: () => {} } } };
    }
  },
  
  db: {
    getUserProfile: async (userId) => {
      return { 
        data: {
          id: userId,
          full_name: 'Test User',
          email: 'test@example.com',
          role: 'student',
          average_score: 85,
          enrolled_courses: 2,
          completed_quizzes: 3,
          created_at: new Date().toISOString()
        }, 
        error: null 
      };
    },
    updateUserProfile: async (userId, updates) => {
      return { data: updates, error: null };
    },
    getCourses: async () => {
      return { data: mockData.courses, error: null };
    },
    getEnrolledCourses: async (userId) => {
      return { data: mockData.enrollments, error: null };
    },
    enrollInCourse: async (userId, courseId) => {
      return { data: { id: 'new-enrollment' }, error: null };
    },
    getQuizzes: async () => {
      return { data: mockData.quizzes, error: null };
    },
    getQuizQuestions: async (quizId) => {
      return { data: mockData.quizQuestions[quizId] || [], error: null };
    },
    submitQuizScore: async (userId, quizId, score, answers) => {
      return { data: { id: 'new-score' }, error: null };
    },
    getUserQuizScores: async (userId) => {
      return { data: mockData.quizScores, error: null };
    },
    getAllStudents: async () => {
      return { data: mockData.students, error: null };
    },
    createCoupon: async (code, discount_percent, max_uses) => {
      return { data: { id: 'new-coupon' }, error: null };
    },
    validateCoupon: async (code) => {
      return { data: null, error: { message: 'Coupon not found' } };
    },
    useCoupon: async (couponId) => {
      return { data: null, error: null };
    }
  }
}; 