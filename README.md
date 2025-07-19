# ConnectTechPro - E-Learning Platform

A comprehensive e-learning platform for project management training built with React, Tailwind CSS, and Supabase.

## 🚀 Features

### For Students
- **Interactive Dashboard**: Track progress, view enrolled courses, and monitor quiz scores
- **Weekly Quizzes**: Progressive quiz system with automatic locking/unlocking
- **Course Management**: Enroll in courses and access learning materials
- **Progress Tracking**: Visual progress indicators and performance analytics
- **Resource Downloads**: Access study materials and templates

### For Administrators
- **Student Management**: View all students, their progress, and performance metrics
- **Quiz Creation**: Create and manage weekly quizzes with multiple choice questions
- **Analytics Dashboard**: Comprehensive analytics on student performance and platform usage
- **Coupon System**: Create and manage discount coupons for student enrollment

### Platform Features
- **Responsive Design**: Mobile-first design that works on all devices
- **Role-Based Access**: Secure authentication with student and admin roles
- **Real-time Updates**: Live data synchronization with Supabase
- **Modern UI**: Beautiful interface with Tailwind CSS and Lucide icons

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router DOM
- **Styling**: Tailwind CSS with custom design tokens
- **Backend**: Supabase (Authentication, Database, Real-time)
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd connectechpro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_SUPABASE_URL=your_supabase_url
   REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🗄️ Database Setup

### Required Supabase Tables

1. **profiles**
   ```sql
   CREATE TABLE profiles (
     id UUID REFERENCES auth.users(id) PRIMARY KEY,
     full_name TEXT,
     email TEXT,
     role TEXT DEFAULT 'student',
     phone TEXT,
     company TEXT,
     position TEXT,
     bio TEXT,
     average_score INTEGER DEFAULT 0,
     enrolled_courses INTEGER DEFAULT 0,
     completed_quizzes INTEGER DEFAULT 0,
     certificates INTEGER DEFAULT 0,
     created_at TIMESTAMP DEFAULT NOW(),
     updated_at TIMESTAMP DEFAULT NOW()
   );
   ```

2. **courses**
   ```sql
   CREATE TABLE courses (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     description TEXT,
     level TEXT DEFAULT 'beginner',
     duration TEXT,
     price INTEGER DEFAULT 0,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

3. **enrollments**
   ```sql
   CREATE TABLE enrollments (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES profiles(id),
     course_id UUID REFERENCES courses(id),
     enrolled_at TIMESTAMP DEFAULT NOW()
   );
   ```

4. **quizzes**
   ```sql
   CREATE TABLE quizzes (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     week_number INTEGER NOT NULL,
     title TEXT NOT NULL,
     description TEXT,
     time_limit INTEGER DEFAULT 30,
     passing_score INTEGER DEFAULT 70,
     questions_count INTEGER DEFAULT 0,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

5. **quiz_questions**
   ```sql
   CREATE TABLE quiz_questions (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     quiz_id UUID REFERENCES quizzes(id),
     question_text TEXT NOT NULL,
     options TEXT[] NOT NULL,
     correct_answer_index INTEGER NOT NULL,
     question_order INTEGER DEFAULT 0,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

6. **quiz_scores**
   ```sql
   CREATE TABLE quiz_scores (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     user_id UUID REFERENCES profiles(id),
     quiz_id UUID REFERENCES quizzes(id),
     score INTEGER NOT NULL,
     answers JSONB,
     submitted_at TIMESTAMP DEFAULT NOW()
   );
   ```

7. **coupons**
   ```sql
   CREATE TABLE coupons (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     code TEXT UNIQUE NOT NULL,
     discount_percent INTEGER NOT NULL,
     max_uses INTEGER DEFAULT 1,
     current_uses INTEGER DEFAULT 0,
     created_at TIMESTAMP DEFAULT NOW()
   );
   ```

### Row Level Security (RLS)

Enable RLS on all tables and create appropriate policies for data security.

## 🎨 Design System

The platform uses a custom design system with:

- **Colors**: Primary (blue), Secondary (gray), Accent (orange), Success (green), Error (red)
- **Typography**: Inter for body text, Poppins for headings
- **Spacing**: Consistent spacing scale with Tailwind utilities
- **Components**: Reusable components with consistent styling

## 📱 Pages & Routes

### Public Pages
- `/` - Landing page with features, pricing, and testimonials
- `/login` - User authentication
- `/signup` - User registration with role selection

### Protected Pages (Students)
- `/dashboard` - Student dashboard with progress tracking
- `/quiz/:weekNumber` - Weekly quiz interface
- `/profile` - User profile management

### Protected Pages (Admins)
- `/admin` - Admin dashboard with analytics and management tools

## 🔧 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Auth)
├── lib/               # Utility functions
├── pages/             # Page components
├── services/          # API and external services
└── App.js             # Main app component
```

### Key Components
- `Layout.js` - Main layout with sidebar and navigation
- `ProtectedRoute.js` - Role-based route protection
- `StudentDashboard.js` - Student dashboard with progress tracking
- `QuizPage.js` - Interactive quiz interface
- `AdminDashboard.js` - Admin management interface

### Styling
- Custom Tailwind configuration with design tokens
- Component-specific CSS classes
- Responsive design patterns
- Dark mode support (ready for implementation)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the build folder
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload build files to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: contact@connecttechpro.dz
- Phone: +213 123 456 789
- Address: Algiers, Algeria

## 🎯 Roadmap

- [ ] Dark mode implementation
- [ ] Advanced analytics dashboard
- [ ] Video course integration
- [ ] Mobile app development
- [ ] Multi-language support
- [ ] Advanced quiz types (matching, fill-in-the-blank)
- [ ] Certificate generation
- [ ] Payment integration
- [ ] Live chat support
- [ ] Email notifications

---

Built with ❤️ by ConnectTechPro Team 