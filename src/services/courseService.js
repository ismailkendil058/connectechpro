import { supabase } from './supabaseClient';

// Course data structure
const defaultCourseData = {
  id: null,
  title: '',
  description: '',
  instructor: '',
  price: 0,
  originalPrice: 0,
  image: '',
  heroImage: '',
  duration: '',
  level: '',
  language: 'English',
  category: '',
  tags: [],
  benefits: [],
  curriculum: [],
  accreditation: '',
  rating: 0,
  reviewCount: 0,
  enrollmentCount: 0,
  isActive: true,
  isFeatured: false,
  createdAt: null,
  updatedAt: null
};

// Sample course data for development when Supabase is not configured
export const sampleCourses = [
  {
    id: 1,
    title: 'Agile Project Management',
    description: 'Master Agile methodologies with Youcef Belouz\'s comprehensive course. Learn to manage projects effectively, adapt to change, and deliver value consistently. This course covers Scrum, Kanban, and other Agile frameworks, equipping you with the skills to lead successful projects in any industry. Perfect for project managers, team leads, and anyone looking to implement Agile practices in their organization.',
    instructor: 'Youcef Belouz',
    price: 79,
    originalPrice: 99,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFJbKJn97bhsAkkbvasPvQUu_zebPNCdN0q7THfYOW6j1dXcaNuCcND3JwR9UBMAhdFVEGp-ci_7Zu7M_L3aPZLlq5z9jBFKmvxTUtL50c20mRu8Sr-Nj9Zgo17GrTLYJPqzv5UKynUjygMov_ILAsK9uQYGUT_KuWfdlAzCZepHv7CU06lrtxPGyJZY0dFaGDAcuR1mtQOL4VmbaAsRVQ9vLhhtD4UlDnD0hsiGzKP1d2wpxhijGuNjQ577UZ2QZuq826dCv-6GA',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpSnWQ2C0FikW2STitI04xEq-aKqFXtPhJ-LJHMkuXk4yoK4SjLZnxIkRz5evjxrC-2bA44fqk_71ytSEs_uCUx1Ti6ex87PdVYd0bCiVqhvgWmBBaN8HRt9MKzH-xKpbkgFm4oYgGjAaovsRM3N16gNp2s3_2DSIPKkF7JFVAhYbGEnyt1fViDxV03u2G3E7hiUo7BJAo3icAVlW_C-v62AgLS5LzHXBK1dijc8LFfEKkPDu4C0mmNKlnef-W_zdMtheJbwhAGGI',
    duration: '8 weeks',
    level: 'Intermediate',
    language: 'English',
    category: 'Agile',
    tags: ['Project Management', 'Scrum', 'Kanban', 'Agile', 'Team Leadership'],
    benefits: ['Enhanced Project Success Rates', 'Improved Team Collaboration', 'Increased Adaptability to Change', 'Higher Customer Satisfaction', 'Better Risk Management'],
    curriculum: [
      {
        title: 'Module 1: Agile Fundamentals',
        description: 'Introduction to Agile principles, values, and mindset. Understanding Agile methodologies and their applications in modern project management.',
        duration: '2 weeks',
        lessons: ['Agile Manifesto', 'Agile Values', 'Agile Principles', 'Agile vs Traditional Methods']
      },
      {
        title: 'Module 2: Scrum Framework',
        description: 'Deep dive into Scrum methodology, roles, events, and artifacts. Learn to implement Scrum effectively in your projects.',
        duration: '3 weeks',
        lessons: ['Scrum Roles', 'Sprint Planning', 'Daily Standups', 'Sprint Review', 'Sprint Retrospective']
      },
      {
        title: 'Module 3: Kanban Implementation',
        description: 'Learn Kanban methodology and its practical implementation for workflow optimization and continuous improvement.',
        duration: '2 weeks',
        lessons: ['Kanban Principles', 'Visual Management', 'Flow Optimization', 'WIP Limits']
      },
      {
        title: 'Module 4: Advanced Agile Techniques',
        description: 'Advanced techniques for scaling Agile, handling complex projects, and integrating multiple methodologies.',
        duration: '1 week',
        lessons: ['Scaling Agile', 'SAFe Framework', 'Lean-Agile Integration', 'Agile Metrics']
      }
    ],
    accreditation: 'PMI-ACP Certified',
    rating: 4.8,
    reviewCount: 125,
    enrollmentCount: 342,
    isActive: true,
    isFeatured: true
  },
  {
    id: 2,
    title: 'Project Management Fundamentals',
    description: 'Learn the fundamentals of project management with this comprehensive course. Covering traditional and modern project management methodologies, this course provides a solid foundation for anyone looking to excel in project management. From initiation to closure, you\'ll master the essential skills needed to deliver projects on time, within budget, and to stakeholder satisfaction.',
    instructor: 'Sarah Johnson',
    price: 49,
    originalPrice: 69,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfV9preMTmmTsF2jvvR6PbEp90slIEcjRFxUh9ucwDn3SovN3UhqEF_n522A49oHq3Bb2TuapgYCTcI6YMtsiNY3WeiL1qT45NjTVUzXQg_GWZ3CQ4DaGw95LJLplgAtK9Yls9aJFwz1LgedASM63WB2fDnIE722qdXHfAfb0jC-KWY7H4D1ZT1MLQPxrf6WC28zRoyDQ7FELc-5zvJ37DG8FQR2jH3BchCSRu3L34CRSEWQeCDNZPLmmvJo73Bxub0XVvdmRTBSY',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfV9preMTmmTsF2jvvR6PbEp90slIEcjRFxUh9ucwDn3SovN3UhqEF_n522A49oHq3Bb2TuapgYCTcI6YMtsiNY3WeiL1qT45NjTVUzXQg_GWZ3CQ4DaGw95LJLplgAtK9Yls9aJFwz1LgedASM63WB2fDnIE722qdXHfAfb0jC-KWY7H4D1ZT1MLQPxrf6WC28zRoyDQ7FELc-5zvJ37DG8FQR2jH3BchCSRu3L34CRSEWQeCDNZPLmmvJo73Bxub0XVvdmRTBSY',
    duration: '6 weeks',
    level: 'Beginner',
    language: 'English',
    category: 'Project Management',
    tags: ['Fundamentals', 'Planning', 'Execution', 'Monitoring', 'Control'],
    benefits: ['Solid Foundation in Project Management', 'Improved Planning Skills', 'Better Risk Management', 'Enhanced Communication', 'Stakeholder Management'],
    curriculum: [
      {
        title: 'Module 1: Introduction to Project Management',
        description: 'Basic concepts and principles of project management. Understanding the project lifecycle and key terminology.',
        duration: '1 week',
        lessons: ['What is Project Management', 'Project Lifecycle', 'Stakeholder Management', 'Project Constraints']
      },
      {
        title: 'Module 2: Project Planning',
        description: 'Learn effective project planning techniques including scope, schedule, and resource planning.',
        duration: '2 weeks',
        lessons: ['Scope Definition', 'Schedule Planning', 'Resource Planning', 'Cost Estimation']
      },
      {
        title: 'Module 3: Project Execution',
        description: 'Understanding project execution, team management, and quality assurance processes.',
        duration: '2 weeks',
        lessons: ['Team Building', 'Communication Management', 'Quality Assurance', 'Procurement']
      },
      {
        title: 'Module 4: Monitoring and Control',
        description: 'Learn to monitor project progress and implement control measures to ensure project success.',
        duration: '1 week',
        lessons: ['Progress Monitoring', 'Change Management', 'Risk Control', 'Performance Reporting']
      }
    ],
    accreditation: 'PMI-PMP Prep',
    rating: 4.6,
    reviewCount: 89,
    enrollmentCount: 156,
    isActive: true,
    isFeatured: false
  },
  {
    id: 3,
    title: 'Scrum Master Certification',
    description: 'Become a certified Scrum Master with this comprehensive training program. Learn the essential skills to facilitate Scrum events, coach teams, and remove impediments. This course prepares you for Scrum Master certification while providing practical experience with real-world scenarios and best practices.',
    instructor: 'Michael Chen',
    price: 99,
    originalPrice: 129,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQQThd2D3_QRfwb8ccGri0snG86WuYW1y_w4XwxgW2hjvBLsORCnC5E3a_6Vjfx85NDPRQRMFOSlUXQdKG90uZ8B1ogln8fl4U6UdRJrYvl-hG35382FAhfc8_TsOT8cIjqM8598trdOL2GEaatvF1PcmmcfrCqH8Uq9BfATDnXxPcSXrAhaCsyEUB76uCHG5WGQgo1Os-5FtP_1n6o0NqzA5Y8nObCGMMslD4xpb7dWjfAHWstihvic-T0Oprp7di-WZqK3iyUM',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQQThd2D3_QRfwb8ccGri0snG86WuYW1y_w4XwxgW2hjvBLsORCnC5E3a_6Vjfx85NDPRQRMFOSlUXQdKG90uZ8B1ogln8fl4U6UdRJrYvl-hG35382FAhfc8_TsOT8cIjqM8598trdOL2GEaatvF1PcmmcfrCqH8Uq9BfATDnXxPcSXrAhaCsyEUB76uCHG5WGQgo1Os-5FtP_1n6o0NqzA5Y8nObCGMMslD4xpb7dWjfAHWstihvic-T0Oprp7di-WZqK3iyUM',
    duration: '10 weeks',
    level: 'Advanced',
    language: 'English',
    category: 'Scrum',
    tags: ['Scrum Master', 'Certification', 'Team Coaching', 'Facilitation', 'Agile Leadership'],
    benefits: ['Scrum Master Certification', 'Enhanced Team Facilitation Skills', 'Improved Conflict Resolution', 'Better Impediment Removal', 'Advanced Coaching Techniques'],
    curriculum: [
      {
        title: 'Module 1: Scrum Framework Deep Dive',
        description: 'Comprehensive understanding of the Scrum framework, roles, events, and artifacts.',
        duration: '3 weeks',
        lessons: ['Scrum Theory', 'Scrum Values', 'Scrum Roles', 'Scrum Events', 'Scrum Artifacts']
      },
      {
        title: 'Module 2: Scrum Master Responsibilities',
        description: 'Learn the core responsibilities and duties of a Scrum Master in various organizational contexts.',
        duration: '3 weeks',
        lessons: ['Servant Leadership', 'Team Coaching', 'Facilitation Skills', 'Impediment Removal']
      },
      {
        title: 'Module 3: Advanced Facilitation',
        description: 'Master advanced facilitation techniques for Scrum events and team interactions.',
        duration: '2 weeks',
        lessons: ['Meeting Facilitation', 'Conflict Resolution', 'Stakeholder Management', 'Change Management']
      },
      {
        title: 'Module 4: Certification Preparation',
        description: 'Prepare for Scrum Master certification with practice exams and real-world scenarios.',
        duration: '2 weeks',
        lessons: ['Exam Preparation', 'Practice Tests', 'Case Studies', 'Certification Process']
      }
    ],
    accreditation: 'Certified Scrum Master (CSM)',
    rating: 4.9,
    reviewCount: 203,
    enrollmentCount: 567,
    isActive: true,
    isFeatured: true
  },
  {
    id: 4,
    title: 'Kanban for Beginners',
    description: 'Start your Kanban journey with this beginner-friendly course. Learn the fundamentals of Kanban methodology, visualize your workflow, and implement continuous improvement practices. Perfect for teams looking to improve their productivity and workflow efficiency.',
    instructor: 'Emma Rodriguez',
    price: 39,
    originalPrice: 59,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf-d9jHjFwpTeb0eqEI8ObwX6Hnv-luKHiY1_4jr7cdeOVStHnYVrknBPZqK0M_N3PaA7mgYjmEK6i87K5TsdBjGAtFy0qfOj8m0MqRc3E3sXFPgVQUFwmdjprY98Qxn7bx2D7-Y-P6_rc71t7rOfdivMHSjyT4g32wiAdKQEKKbqlsbeZLe71EifZz7KusWwB01JFoYTF6zGIMjG9yJh-qDf8VDmblwo4f14Q18KnAVCZsHfNFfjfpaOqoBpHOyEndhzD9pJccmw',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBf-d9jHjFwpTeb0eqEI8ObwX6Hnv-luKHiY1_4jr7cdeOVStHnYVrknBPZqK0M_N3PaA7mgYjmEK6i87K5TsdBjGAtFy0qfOj8m0MqRc3E3sXFPgVQUFwmdjprY98Qxn7bx2D7-Y-P6_rc71t7rOfdivMHSjyT4g32wiAdKQEKKbqlsbeZLe71EifZz7KusWwB01JFoYTF6zGIMjG9yJh-qDf8VDmblwo4f14Q18KnAVCZsHfNFfjfpaOqoBpHOyEndhzD9pJccmw',
    duration: '4 weeks',
    level: 'Beginner',
    language: 'English',
    category: 'Kanban',
    tags: ['Kanban', 'Workflow', 'Visualization', 'Continuous Improvement', 'Productivity'],
    benefits: ['Improved Workflow Visualization', 'Enhanced Productivity', 'Better Work Management', 'Reduced Bottlenecks', 'Continuous Improvement Mindset'],
    curriculum: [
      {
        title: 'Module 1: Kanban Basics',
        description: 'Introduction to Kanban methodology, principles, and core concepts.',
        duration: '1 week',
        lessons: ['What is Kanban', 'Kanban Principles', 'Core Practices', 'Benefits of Kanban']
      },
      {
        title: 'Module 2: Visualizing Work',
        description: 'Learn to create and maintain effective Kanban boards for workflow visualization.',
        duration: '1 week',
        lessons: ['Kanban Board Design', 'Work Item Types', 'Columns and Swimlanes', 'Visual Signals']
      },
      {
        title: 'Module 3: Limiting Work in Progress',
        description: 'Understand WIP limits and their importance in maintaining flow and quality.',
        duration: '1 week',
        lessons: ['WIP Limits', 'Flow Management', 'Bottleneck Identification', 'Capacity Planning']
      },
      {
        title: 'Module 4: Continuous Improvement',
        description: 'Implement continuous improvement practices and metrics in your Kanban system.',
        duration: '1 week',
        lessons: ['Metrics and KPIs', 'Retrospectives', 'Process Improvement', 'Team Collaboration']
      }
    ],
    accreditation: 'Kanban Management Professional (KMP)',
    rating: 4.7,
    reviewCount: 156,
    enrollmentCount: 289,
    isActive: true,
    isFeatured: false
  },
  {
    id: 5,
    title: 'Lean Six Sigma Green Belt',
    description: 'Master Lean Six Sigma methodologies to improve processes, reduce waste, and enhance quality. This comprehensive course covers both Lean and Six Sigma principles, preparing you for Green Belt certification while providing practical tools for process improvement.',
    instructor: 'David Thompson',
    price: 129,
    originalPrice: 159,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoCGf--oqgJyGXbHvMMHxAwluWErSaU7LGwLK5YEznguKw0XAsrAorNBkegC5DvWLcKBd2QU9YQXHKXrhgCxkEZO0Z-QZlZ_QOPRp7SRx78aZm_9v6Rjx-VSrC59bk_JevOdtIUEFK5FDjyVvHZX3DdNaW65lR7FW4DG3xREbsiDVtqbuh_7zYJOR81BSE_kx-jCTzDRPYHwlkQ3SOje3Qcq8SUrvfWbnFike1Xg9-EjeepchTJt68ORp9fTV-Pce9_9bTSsAO7Yg',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoCGf--oqgJyGXbHvMMHxAwluWErSaU7LGwLK5YEznguKw0XAsrAorNBkegC5DvWLcKBd2QU9YQXHKXrhgCxkEZO0Z-QZlZ_QOPRp7SRx78aZm_9v6Rjx-VSrC59bk_JevOdtIUEFK5FDjyVvHZX3DdNaW65lR7FW4DG3xREbsiDVtqbuh_7zYJOR81BSE_kx-jCTzDRPYHwlkQ3SOje3Qcq8SUrvfWbnFike1Xg9-EjeepchTJt68ORp9fTV-Pce9_9bTSsAO7Yg',
    duration: '12 weeks',
    level: 'Advanced',
    language: 'English',
    category: 'Six Sigma',
    tags: ['Lean', 'Six Sigma', 'Process Improvement', 'Quality Management', 'Green Belt'],
    benefits: ['Process Improvement Skills', 'Quality Enhancement', 'Waste Reduction', 'Cost Savings', 'Green Belt Certification'],
    curriculum: [
      {
        title: 'Module 1: Lean Principles',
        description: 'Introduction to Lean methodology and its core principles for waste elimination.',
        duration: '3 weeks',
        lessons: ['Lean Philosophy', '8 Types of Waste', 'Value Stream Mapping', '5S Methodology']
      },
      {
        title: 'Module 2: Six Sigma Fundamentals',
        description: 'Understanding Six Sigma methodology, DMAIC process, and statistical tools.',
        duration: '4 weeks',
        lessons: ['Six Sigma Overview', 'DMAIC Process', 'Statistical Tools', 'Process Capability']
      },
      {
        title: 'Module 3: Advanced Tools and Techniques',
        description: 'Master advanced Lean Six Sigma tools for process improvement and problem solving.',
        duration: '3 weeks',
        lessons: ['Root Cause Analysis', 'Design of Experiments', 'Control Charts', 'Process Optimization']
      },
      {
        title: 'Module 4: Project Implementation',
        description: 'Learn to implement Lean Six Sigma projects and prepare for Green Belt certification.',
        duration: '2 weeks',
        lessons: ['Project Selection', 'Implementation Strategy', 'Change Management', 'Certification Preparation']
      }
    ],
    accreditation: 'Six Sigma Green Belt Certification',
    rating: 4.8,
    reviewCount: 178,
    enrollmentCount: 423,
    isActive: true,
    isFeatured: true
  },
  {
    id: 6,
    title: 'Advanced Agile Techniques',
    description: 'Take your Agile skills to the next level with advanced techniques and methodologies. Learn to scale Agile across organizations, handle complex projects, and integrate multiple frameworks. Perfect for experienced Agile practitioners looking to expand their expertise.',
    instructor: 'Lisa Wang',
    price: 89,
    originalPrice: 119,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYUFwm2myVGFtntebV33APubeJzmXuABWRb51m86pMq5pstnBbzExPTbPYKnUE3b7RS_vL5piZOEdUwcsgmALtnDLzp4mSxliFhiBivRgitt75D98nQ_3oMBMiq6TVuSGK4bjytLT4wKjGUP3jhie1qdDt888UkrS2iOyqhQQGBeGVZDWfGMruLx2zomiO0b7-dy7AwsKN6pncGOP8d1TQL6A2ihcXchb_cLjkQSfChQ2-shggySmQxEOIsk_XmRbSEofBQrNlGns',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYUFwm2myVGFtntebV33APubeJzmXuABWRb51m86pMq5pstnBbzExPTbPYKnUE3b7RS_vL5piZOEdUwcsgmALtnDLzp4mSxliFhiBivRgitt75D98nQ_3oMBMiq6TVuSGK4bjytLT4wKjGUP3jhie1qdDt888UkrS2iOyqhQQGBeGVZDWfGMruLx2zomiO0b7-dy7AwsKN6pncGOP8d1TQL6A2ihcXchb_cLjkQSfChQ2-shggySmQxEOIsk_XmRbSEofBQrNlGns',
    duration: '10 weeks',
    level: 'Advanced',
    language: 'English',
    category: 'Agile',
    tags: ['Advanced Agile', 'Scaling', 'Complex Projects', 'Framework Integration', 'Leadership'],
    benefits: ['Advanced Agile Leadership', 'Scaling Techniques', 'Complex Project Management', 'Framework Integration', 'Organizational Transformation'],
    curriculum: [
      {
        title: 'Module 1: Scaling Agile',
        description: 'Learn to scale Agile methodologies across large organizations and multiple teams.',
        duration: '3 weeks',
        lessons: ['SAFe Framework', 'LeSS Framework', 'Nexus Framework', 'Scaling Challenges']
      },
      {
        title: 'Module 2: Complex Project Management',
        description: 'Handle complex projects with multiple stakeholders, dependencies, and constraints.',
        duration: '3 weeks',
        lessons: ['Complexity Management', 'Stakeholder Alignment', 'Dependency Management', 'Risk Mitigation']
      },
      {
        title: 'Module 3: Framework Integration',
        description: 'Integrate multiple Agile frameworks and methodologies for optimal results.',
        duration: '2 weeks',
        lessons: ['Hybrid Approaches', 'Framework Selection', 'Integration Strategies', 'Best Practices']
      },
      {
        title: 'Module 4: Agile Leadership',
        description: 'Develop advanced leadership skills for Agile transformation and organizational change.',
        duration: '2 weeks',
        lessons: ['Agile Leadership', 'Change Management', 'Culture Transformation', 'Continuous Improvement']
      }
    ],
    accreditation: 'Advanced Agile Leadership Certification',
    rating: 4.7,
    reviewCount: 134,
    enrollmentCount: 298,
    isActive: true,
    isFeatured: false
  },
  {
    id: 7,
    title: 'Digital Project Management',
    description: 'Master the art of managing digital projects in today\'s fast-paced technology landscape. Learn to handle software development, digital marketing, and technology implementation projects using modern methodologies and tools.',
    instructor: 'Alex Kim',
    price: 69,
    originalPrice: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfV9preMTmmTsF2jvvR6PbEp90slIEcjRFxUh9ucwDn3SovN3UhqEF_n522A49oHq3Bb2TuapgYCTcI6YMtsiNY3WeiL1qT45NjTVUzXQg_GWZ3CQ4DaGw95LJLplgAtK9Yls9aJFwz1LgedASM63WB2fDnIE722qdXHfAfb0jC-KWY7H4D1ZT1MLQPxrf6WC28zRoyDQ7FELc-5zvJ37DG8FQR2jH3BchCSRu3L34CRSEWQeCDNZPLmmvJo73Bxub0XVvdmRTBSY',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBfV9preMTmmTsF2jvvR6PbEp90slIEcjRFxUh9ucwDn3SovN3UhqEF_n522A49oHq3Bb2TuapgYCTcI6YMtsiNY3WeiL1qT45NjTVUzXQg_GWZ3CQ4DaGw95LJLplgAtK9Yls9aJFwz1LgedASM63WB2fDnIE722qdXHfAfb0jC-KWY7H4D1ZT1MLQPxrf6WC28zRoyDQ7FELc-5zvJ37DG8FQR2jH3BchCSRu3L34CRSEWQeCDNZPLmmvJo73Bxub0XVvdmRTBSY',
    duration: '8 weeks',
    level: 'Intermediate',
    language: 'English',
    category: 'Digital Management',
    tags: ['Digital Projects', 'Technology', 'Software Development', 'Digital Marketing', 'Remote Teams'],
    benefits: ['Digital Project Expertise', 'Technology Implementation', 'Remote Team Management', 'Digital Tool Mastery', 'Modern Methodology Skills'],
    curriculum: [
      {
        title: 'Module 1: Digital Project Fundamentals',
        description: 'Understanding digital project characteristics, challenges, and success factors.',
        duration: '2 weeks',
        lessons: ['Digital Project Types', 'Technology Stack', 'Digital Challenges', 'Success Metrics']
      },
      {
        title: 'Module 2: Software Development Projects',
        description: 'Managing software development projects using Agile and DevOps methodologies.',
        duration: '3 weeks',
        lessons: ['SDLC Management', 'Agile Development', 'DevOps Integration', 'Quality Assurance']
      },
      {
        title: 'Module 3: Digital Marketing Projects',
        description: 'Managing digital marketing campaigns and technology implementation projects.',
        duration: '2 weeks',
        lessons: ['Campaign Management', 'Analytics Integration', 'Technology Implementation', 'Performance Tracking']
      },
      {
        title: 'Module 4: Remote Team Management',
        description: 'Leading and managing remote digital teams effectively.',
        duration: '1 week',
        lessons: ['Remote Leadership', 'Virtual Collaboration', 'Communication Tools', 'Team Building']
      }
    ],
    accreditation: 'Digital Project Management Professional',
    rating: 4.5,
    reviewCount: 98,
    enrollmentCount: 234,
    isActive: true,
    isFeatured: false
  },
  {
    id: 8,
    title: 'Strategic Project Management',
    description: 'Develop strategic thinking and leadership skills for managing high-impact projects that align with organizational goals. Learn to connect project outcomes with business strategy and create lasting value for stakeholders.',
    instructor: 'Robert Martinez',
    price: 149,
    originalPrice: 179,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFJbKJn97bhsAkkbvasPvQUu_zebPNCdN0q7THfYOW6j1dXcaNuCcND3JwR9UBMAhdFVEGp-ci_7Zu7M_L3aPZLlq5z9jBFKmvxTUtL50c20mRu8Sr-Nj9Zgo17GrTLYJPqzv5UKynUjygMov_ILAsK9uQYGUT_KuWfdlAzCZepHv7CU06lrtxPGyJZY0dFaGDAcuR1mtQOL4VmbaAsRVQ9vLhhtD4UlDnD0hsiGzKP1d2wpxhijGuNjQ577UZ2QZuq826dCv-6GA',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpSnWQ2C0FikW2STitI04xEq-aKqFXtPhJ-LJHMkuXk4yoK4SjLZnxIkRz5evjxrC-2bA44fqk_71ytSEs_uCUx1Ti6ex87PdVYd0bCiVqhvgWmBBaN8HRt9MKzH-xKpbkgFm4oYgGjAaovsRM3N16gNp2s3_2DSIPKkF7JFVAhYbGEnyt1fViDxV03u2G3E7hiUo7BJAo3icAVlW_C-v62AgLS5LzHXBK1dijc8LFfEKkPDu4C0mmNKlnef-W_zdMtheJbwhAGGI',
    duration: '12 weeks',
    level: 'Advanced',
    language: 'English',
    category: 'Strategic Management',
    tags: ['Strategic Planning', 'Leadership', 'Business Alignment', 'Value Creation', 'Executive Management'],
    benefits: ['Strategic Leadership Skills', 'Business Alignment', 'Value Creation', 'Executive Communication', 'Portfolio Management'],
    curriculum: [
      {
        title: 'Module 1: Strategic Thinking',
        description: 'Develop strategic thinking skills to align projects with organizational objectives.',
        duration: '3 weeks',
        lessons: ['Strategic Planning', 'Business Alignment', 'Value Proposition', 'Strategic Analysis']
      },
      {
        title: 'Module 2: Executive Leadership',
        description: 'Learn executive-level project management and stakeholder communication.',
        duration: '3 weeks',
        lessons: ['Executive Communication', 'Stakeholder Management', 'Leadership Styles', 'Influence Strategies']
      },
      {
        title: 'Module 3: Portfolio Management',
        description: 'Manage project portfolios to maximize organizational value and strategic impact.',
        duration: '3 weeks',
        lessons: ['Portfolio Strategy', 'Resource Optimization', 'Risk Management', 'Performance Measurement']
      },
      {
        title: 'Module 4: Value Creation',
        description: 'Focus on creating lasting value through strategic project outcomes.',
        duration: '3 weeks',
        lessons: ['Value Metrics', 'ROI Analysis', 'Sustainability', 'Long-term Impact']
      }
    ],
    accreditation: 'Strategic Project Management Professional',
    rating: 4.9,
    reviewCount: 167,
    enrollmentCount: 445,
    isActive: true,
    isFeatured: true
  }
];

// Get all courses
export const getAllCourses = async () => {
  try {
    if (!supabase) {
      console.log('Using sample courses data (Supabase not configured)');
      return sampleCourses;
    }

    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching courses from Supabase:', error);
      console.log('Falling back to sample courses data');
      return sampleCourses;
    }

    return data || sampleCourses;
  } catch (error) {
    console.error('Error fetching courses:', error);
    console.log('Falling back to sample courses data');
    return sampleCourses;
  }
};

// Get course by ID
export const getCourseById = async (id) => {
  try {
    if (!supabase) {
      console.log('Using sample courses data (Supabase not configured)');
      return sampleCourses.find(course => course.id === parseInt(id)) || null;
    }

    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching course from Supabase:', error);
      console.log('Falling back to sample courses data');
      return sampleCourses.find(course => course.id === parseInt(id)) || null;
    }

    return data || sampleCourses.find(course => course.id === parseInt(id)) || null;
  } catch (error) {
    console.error('Error fetching course:', error);
    console.log('Falling back to sample courses data');
    return sampleCourses.find(course => course.id === parseInt(id)) || null;
  }
};

// Create new course (Admin only)
export const createCourse = async (courseData) => {
  try {
    if (!supabase) {
      console.log('Cannot create course - Supabase not configured');
      throw new Error('Supabase not configured');
    }

    const courseToInsert = {
      ...defaultCourseData,
      ...courseData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from('courses')
      .insert([courseToInsert])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating course:', error);
    throw error;
  }
};

// Update course (Admin only)
export const updateCourse = async (id, updates) => {
  try {
    if (!supabase) {
      console.log('Cannot update course - Supabase not configured');
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase
      .from('courses')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating course:', error);
    throw error;
  }
};

// Delete course (Admin only)
export const deleteCourse = async (id) => {
  try {
    if (!supabase) {
      console.log('Cannot delete course - Supabase not configured');
      throw new Error('Supabase not configured');
    }

    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Error deleting course:', error);
    throw error;
  }
};

// Get courses by category
export const getCoursesByCategory = async (category) => {
  try {
    if (!supabase) {
      console.log('Using sample courses data (Supabase not configured)');
      return sampleCourses.filter(course => course.category === category);
    }

    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('category', category)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching courses by category:', error);
      return sampleCourses.filter(course => course.category === category);
    }

    return data || sampleCourses.filter(course => course.category === category);
  } catch (error) {
    console.error('Error fetching courses by category:', error);
    return sampleCourses.filter(course => course.category === category);
  }
};

// Search courses
export const searchCourses = async (query) => {
  try {
    if (!supabase) {
      console.log('Using sample courses data (Supabase not configured)');
      return sampleCourses.filter(course => 
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase())
      );
    }

    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .or(`title.ilike.%${query}%,description.ilike.%${query}%,instructor.ilike.%${query}%`)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error searching courses:', error);
      return sampleCourses.filter(course => 
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.description.toLowerCase().includes(query.toLowerCase()) ||
        course.instructor.toLowerCase().includes(query.toLowerCase())
      );
    }

    return data || sampleCourses.filter(course => 
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.instructor.toLowerCase().includes(query.toLowerCase())
    );
  } catch (error) {
    console.error('Error searching courses:', error);
    return sampleCourses.filter(course => 
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.instructor.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// Get featured courses
export const getFeaturedCourses = async () => {
  try {
    if (!supabase) {
      console.log('Using sample courses data (Supabase not configured)');
      return sampleCourses.filter(course => course.isFeatured);
    }

    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('is_featured', true)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching featured courses:', error);
      return sampleCourses.filter(course => course.isFeatured);
    }

    return data || sampleCourses.filter(course => course.isFeatured);
  } catch (error) {
    console.error('Error fetching featured courses:', error);
    return sampleCourses.filter(course => course.isFeatured);
  }
};

// Update course rating
export const updateCourseRating = async (courseId, newRating, reviewCount) => {
  try {
    if (!supabase) {
      console.log('Cannot update rating - Supabase not configured');
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase
      .from('courses')
      .update({
        rating: newRating,
        review_count: reviewCount,
        updated_at: new Date().toISOString()
      })
      .eq('id', courseId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating course rating:', error);
    throw error;
  }
};

// Increment enrollment count
export const incrementEnrollmentCount = async (courseId) => {
  try {
    if (!supabase) {
      console.log('Cannot increment enrollment - Supabase not configured');
      throw new Error('Supabase not configured');
    }

    const { data, error } = await supabase
      .from('courses')
      .update({
        enrollment_count: supabase.rpc('increment', { row_count: 1 }),
        updated_at: new Date().toISOString()
      })
      .eq('id', courseId)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error incrementing enrollment count:', error);
    throw error;
  }
}; 