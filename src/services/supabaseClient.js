import { createClient } from '@supabase/supabase-js';
import { mockSupabase } from './mockData';

// Replace with your actual Supabase URL and anon key
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// Use mock data if Supabase is not properly configured
const useMockData = !supabaseUrl || supabaseUrl === 'YOUR_SUPABASE_URL' || !supabaseAnonKey || supabaseAnonKey === 'YOUR_SUPABASE_ANON_KEY';

export const supabase = useMockData ? null : createClient(supabaseUrl, supabaseAnonKey);

// Auth helper functions
export const auth = {
  // Sign up with email and password
  signUp: async (email, password, role = 'student') => {
    if (!supabase) {
      return mockSupabase.auth.signUp(email, password, role);
    }
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: role
        }
      }
    });
    return { data, error };
  },

  // Sign in with email and password
  signIn: async (email, password) => {
    if (!supabase) {
      return mockSupabase.auth.signIn(email, password);
    }
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  // Sign out
  signOut: async () => {
    if (!supabase) {
      return mockSupabase.auth.signOut();
    }
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  // Get current user
  getCurrentUser: async () => {
    if (!supabase) {
      return mockSupabase.auth.getCurrentUser();
    }
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },

  // Listen to auth changes
  onAuthStateChange: (callback) => {
    if (!supabase) {
      return mockSupabase.auth.onAuthStateChange(callback);
    }
    return supabase.auth.onAuthStateChange(callback);
  }
};

// Database helper functions
export const db = {
  // Get user profile
  getUserProfile: async (userId) => {
    if (!supabase) {
      return mockSupabase.db.getUserProfile(userId);
    }
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    return { data, error };
  },

  // Update user profile
  updateUserProfile: async (userId, updates) => {
    if (!supabase) {
      return mockSupabase.db.updateUserProfile(userId, updates);
    }
    const { data, error } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', userId);
    return { data, error };
  },

  // Get courses
  getCourses: async () => {
    if (!supabase) {
      return mockSupabase.db.getCourses();
    }
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Get user's enrolled courses
  getEnrolledCourses: async (userId) => {
    if (!supabase) {
      return mockSupabase.db.getEnrolledCourses(userId);
    }
    const { data, error } = await supabase
      .from('enrollments')
      .select(`
        *,
        courses (*)
      `)
      .eq('user_id', userId);
    return { data, error };
  },

  // Enroll in a course
  enrollInCourse: async (userId, courseId) => {
    const { data, error } = await supabase
      .from('enrollments')
      .insert({
        user_id: userId,
        course_id: courseId,
        enrolled_at: new Date().toISOString()
      });
    return { data, error };
  },

  // Get quizzes
  getQuizzes: async () => {
    if (!supabase) {
      return mockSupabase.db.getQuizzes();
    }
    const { data, error } = await supabase
      .from('quizzes')
      .select('*')
      .order('week_number', { ascending: true });
    return { data, error };
  },

  // Get quiz questions
  getQuizQuestions: async (quizId) => {
    if (!supabase) {
      return mockSupabase.db.getQuizQuestions(quizId);
    }
    const { data, error } = await supabase
      .from('quiz_questions')
      .select('*')
      .eq('quiz_id', quizId)
      .order('question_order', { ascending: true });
    return { data, error };
  },

  // Submit quiz score
  submitQuizScore: async (userId, quizId, score, answers) => {
    if (!supabase) {
      return mockSupabase.db.submitQuizScore(userId, quizId, score, answers);
    }
    const { data, error } = await supabase
      .from('quiz_scores')
      .insert({
        user_id: userId,
        quiz_id: quizId,
        score: score,
        answers: answers,
        submitted_at: new Date().toISOString()
      });
    return { data, error };
  },

  // Get user's quiz scores
  getUserQuizScores: async (userId) => {
    if (!supabase) {
      return mockSupabase.db.getUserQuizScores(userId);
    }
    const { data, error } = await supabase
      .from('quiz_scores')
      .select(`
        *,
        quizzes (*)
      `)
      .eq('user_id', userId)
      .order('submitted_at', { ascending: false });
    return { data, error };
  },

  // Get all students (admin only)
  getAllStudents: async () => {
    if (!supabase) {
      return mockSupabase.db.getAllStudents();
    }
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('role', 'student')
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Create coupon
  createCoupon: async (code, discount_percent, max_uses) => {
    const { data, error } = await supabase
      .from('coupons')
      .insert({
        code: code,
        discount_percent: discount_percent,
        max_uses: max_uses,
        current_uses: 0,
        created_at: new Date().toISOString()
      });
    return { data, error };
  },

  // Validate coupon
  validateCoupon: async (code) => {
    const { data, error } = await supabase
      .from('coupons')
      .select('*')
      .eq('code', code)
      .single();
    return { data, error };
  },

  // Use coupon
  useCoupon: async (couponId) => {
    const { data, error } = await supabase
      .from('coupons')
      .update({ current_uses: supabase.rpc('increment') })
      .eq('id', couponId);
    return { data, error };
  }
};

export default supabase; 