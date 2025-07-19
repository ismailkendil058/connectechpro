-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructor VARCHAR(255),
    price DECIMAL(10,2) DEFAULT 0,
    original_price DECIMAL(10,2) DEFAULT 0,
    image TEXT,
    hero_image TEXT,
    duration VARCHAR(100),
    level VARCHAR(50),
    language VARCHAR(50) DEFAULT 'English',
    category VARCHAR(100),
    tags TEXT[], -- Array of tags
    benefits TEXT[], -- Array of benefits
    curriculum JSONB, -- JSON array of curriculum modules
    accreditation VARCHAR(255),
    rating DECIMAL(3,2) DEFAULT 0,
    review_count INTEGER DEFAULT 0,
    enrollment_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_is_active ON courses(is_active);
CREATE INDEX IF NOT EXISTS idx_courses_is_featured ON courses(is_featured);
CREATE INDEX IF NOT EXISTS idx_courses_created_at ON courses(created_at);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_courses_updated_at 
    BEFORE UPDATE ON courses 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Clear existing data and insert comprehensive course data
DELETE FROM courses;

INSERT INTO courses (
    title,
    description,
    instructor,
    price,
    original_price,
    image,
    hero_image,
    duration,
    level,
    language,
    category,
    tags,
    benefits,
    curriculum,
    accreditation,
    rating,
    review_count,
    enrollment_count,
    is_active,
    is_featured
) VALUES 
-- Course 1: Agile Project Management
(
    'Agile Project Management',
    'Master Agile methodologies with Youcef Belouz''s comprehensive course. Learn to manage projects effectively, adapt to change, and deliver value consistently. This course covers Scrum, Kanban, and other Agile frameworks, equipping you with the skills to lead successful projects in any industry. Perfect for project managers, team leads, and anyone looking to implement Agile practices in their organization.',
    'Youcef Belouz',
    79.00,
    99.00,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDFJbKJn97bhsAkkbvasPvQUu_zebPNCdN0q7THfYOW6j1dXcaNuCcND3JwR9UBMAhdFVEGp-ci_7Zu7M_L3aPZLlq5z9jBFKmvxTUtL50c20mRu8Sr-Nj9Zgo17GrTLYJPqzv5UKynUjygMov_ILAsK9uQYGUT_KuWfdlAzCZepHv7CU06lrtxPGyJZY0dFaGDAcuR1mtQOL4VmbaAsRVQ9vLhhtD4UlDnD0hsiGzKP1d2wpxhijGuNjQ577UZ2QZuq826dCv-6GA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDpSnWQ2C0FikW2STitI04xEq-aKqFXtPhJ-LJHMkuXk4yoK4SjLZnxIkRz5evjxrC-2bA44fqk_71ytSEs_uCUx1Ti6ex87PdVYd0bCiVqhvgWmBBaN8HRt9MKzH-xKpbkgFm4oYgGjAaovsRM3N16gNp2s3_2DSIPKkF7JFVAhYbGEnyt1fViDxV03u2G3E7hiUo7BJAo3icAVlW_C-v62AgLS5LzHXBK1dijc8LFfEKkPDu4C0mmNKlnef-W_zdMtheJbwhAGGI',
    '8 weeks',
    'Intermediate',
    'English',
    'Agile',
    ARRAY['Project Management', 'Scrum', 'Kanban', 'Agile', 'Team Leadership'],
    ARRAY['Enhanced Project Success Rates', 'Improved Team Collaboration', 'Increased Adaptability to Change', 'Higher Customer Satisfaction', 'Better Risk Management'],
    '[
        {
            "title": "Module 1: Agile Fundamentals",
            "description": "Introduction to Agile principles, values, and mindset. Understanding Agile methodologies and their applications in modern project management.",
            "duration": "2 weeks",
            "lessons": ["Agile Manifesto", "Agile Values", "Agile Principles", "Agile vs Traditional Methods"]
        },
        {
            "title": "Module 2: Scrum Framework",
            "description": "Deep dive into Scrum methodology, roles, events, and artifacts. Learn to implement Scrum effectively in your projects.",
            "duration": "3 weeks",
            "lessons": ["Scrum Roles", "Sprint Planning", "Daily Standups", "Sprint Review", "Sprint Retrospective"]
        },
        {
            "title": "Module 3: Kanban Implementation",
            "description": "Learn Kanban methodology and its practical implementation for workflow optimization and continuous improvement.",
            "duration": "2 weeks",
            "lessons": ["Kanban Principles", "Visual Management", "Flow Optimization", "WIP Limits"]
        },
        {
            "title": "Module 4: Advanced Agile Techniques",
            "description": "Advanced techniques for scaling Agile, handling complex projects, and integrating multiple methodologies.",
            "duration": "1 week",
            "lessons": ["Scaling Agile", "SAFe Framework", "Lean-Agile Integration", "Agile Metrics"]
        }
    ]'::jsonb,
    'PMI-ACP Certified',
    4.8,
    125,
    342,
    true,
    true
),

-- Course 2: Project Management Fundamentals
(
    'Project Management Fundamentals',
    'Learn the fundamentals of project management with this comprehensive course. Covering traditional and modern project management methodologies, this course provides a solid foundation for anyone looking to excel in project management. From initiation to closure, you''ll master the essential skills needed to deliver projects on time, within budget, and to stakeholder satisfaction.',
    'Sarah Johnson',
    49.00,
    69.00,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBfV9preMTmmTsF2jvvR6PbEp90slIEcjRFxUh9ucwDn3SovN3UhqEF_n522A49oHq3Bb2TuapgYCTcI6YMtsiNY3WeiL1qT45NjTVUzXQg_GWZ3CQ4DaGw95LJLplgAtK9Yls9aJFwz1LgedASM63WB2fDnIE722qdXHfAfb0jC-KWY7H4D1ZT1MLQPxrf6WC28zRoyDQ7FELc-5zvJ37DG8FQR2jH3BchCSRu3L34CRSEWQeCDNZPLmmvJo73Bxub0XVvdmRTBSY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBfV9preMTmmTsF2jvvR6PbEp90slIEcjRFxUh9ucwDn3SovN3UhqEF_n522A49oHq3Bb2TuapgYCTcI6YMtsiNY3WeiL1qT45NjTVUzXQg_GWZ3CQ4DaGw95LJLplgAtK9Yls9aJFwz1LgedASM63WB2fDnIE722qdXHfAfb0jC-KWY7H4D1ZT1MLQPxrf6WC28zRoyDQ7FELc-5zvJ37DG8FQR2jH3BchCSRu3L34CRSEWQeCDNZPLmmvJo73Bxub0XVvdmRTBSY',
    '6 weeks',
    'Beginner',
    'English',
    'Project Management',
    ARRAY['Fundamentals', 'Planning', 'Execution', 'Monitoring', 'Control'],
    ARRAY['Solid Foundation in Project Management', 'Improved Planning Skills', 'Better Risk Management', 'Enhanced Communication', 'Stakeholder Management'],
    '[
        {
            "title": "Module 1: Introduction to Project Management",
            "description": "Basic concepts and principles of project management. Understanding the project lifecycle and key terminology.",
            "duration": "1 week",
            "lessons": ["What is Project Management", "Project Lifecycle", "Stakeholder Management", "Project Constraints"]
        },
        {
            "title": "Module 2: Project Planning",
            "description": "Learn effective project planning techniques including scope, schedule, and resource planning.",
            "duration": "2 weeks",
            "lessons": ["Scope Definition", "Schedule Planning", "Resource Planning", "Cost Estimation"]
        },
        {
            "title": "Module 3: Project Execution",
            "description": "Understanding project execution, team management, and quality assurance processes.",
            "duration": "2 weeks",
            "lessons": ["Team Building", "Communication Management", "Quality Assurance", "Procurement"]
        },
        {
            "title": "Module 4: Monitoring and Control",
            "description": "Learn to monitor project progress and implement control measures to ensure project success.",
            "duration": "1 week",
            "lessons": ["Progress Monitoring", "Change Management", "Risk Control", "Performance Reporting"]
        }
    ]'::jsonb,
    'PMI-PMP Prep',
    4.6,
    89,
    156,
    true,
    false
),

-- Course 3: Scrum Master Certification
(
    'Scrum Master Certification',
    'Become a certified Scrum Master with this comprehensive training program. Learn the essential skills to facilitate Scrum events, coach teams, and remove impediments. This course prepares you for Scrum Master certification while providing practical experience with real-world scenarios and best practices.',
    'Michael Chen',
    99.00,
    129.00,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQQThd2D3_QRfwb8ccGri0snG86WuYW1y_w4XwxgW2hjvBLsORCnC5E3a_6Vjfx85NDPRQRMFOSlUXQdKG90uZ8B1ogln8fl4U6UdRJrYvl-hG35382FAhfc8_TsOT8cIjqM8598trdOL2GEaatvF1PcmmcfrCqH8Uq9BfATDnXxPcSXrAhaCsyEUB76uCHG5WGQgo1Os-5FtP_1n6o0NqzA5Y8nObCGMMslD4xpb7dWjfAHWstihvic-T0Oprp7di-WZqK3iyUM',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQQThd2D3_QRfwb8ccGri0snG86WuYW1y_w4XwxgW2hjvBLsORCnC5E3a_6Vjfx85NDPRQRMFOSlUXQdKG90uZ8B1ogln8fl4U6UdRJrYvl-hG35382FAhfc8_TsOT8cIjqM8598trdOL2GEaatvF1PcmmcfrCqH8Uq9BfATDnXxPcSXrAhaCsyEUB76uCHG5WGQgo1Os-5FtP_1n6o0NqzA5Y8nObCGMMslD4xpb7dWjfAHWstihvic-T0Oprp7di-WZqK3iyUM',
    '10 weeks',
    'Advanced',
    'English',
    'Scrum',
    ARRAY['Scrum Master', 'Certification', 'Team Coaching', 'Facilitation', 'Agile Leadership'],
    ARRAY['Scrum Master Certification', 'Enhanced Team Facilitation Skills', 'Improved Conflict Resolution', 'Better Impediment Removal', 'Advanced Coaching Techniques'],
    '[
        {
            "title": "Module 1: Scrum Framework Deep Dive",
            "description": "Comprehensive understanding of the Scrum framework, roles, events, and artifacts.",
            "duration": "3 weeks",
            "lessons": ["Scrum Theory", "Scrum Values", "Scrum Roles", "Scrum Events", "Scrum Artifacts"]
        },
        {
            "title": "Module 2: Scrum Master Responsibilities",
            "description": "Learn the core responsibilities and duties of a Scrum Master in various organizational contexts.",
            "duration": "3 weeks",
            "lessons": ["Servant Leadership", "Team Coaching", "Facilitation Skills", "Impediment Removal"]
        },
        {
            "title": "Module 3: Advanced Facilitation",
            "description": "Master advanced facilitation techniques for Scrum events and team interactions.",
            "duration": "2 weeks",
            "lessons": ["Meeting Facilitation", "Conflict Resolution", "Stakeholder Management", "Change Management"]
        },
        {
            "title": "Module 4: Certification Preparation",
            "description": "Prepare for Scrum Master certification with practice exams and real-world scenarios.",
            "duration": "2 weeks",
            "lessons": ["Exam Preparation", "Practice Tests", "Case Studies", "Certification Process"]
        }
    ]'::jsonb,
    'Certified Scrum Master (CSM)',
    4.9,
    203,
    567,
    true,
    true
),

-- Course 4: Kanban for Beginners
(
    'Kanban for Beginners',
    'Start your Kanban journey with this beginner-friendly course. Learn the fundamentals of Kanban methodology, visualize your workflow, and implement continuous improvement practices. Perfect for teams looking to improve their productivity and workflow efficiency.',
    'Emma Rodriguez',
    39.00,
    59.00,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBf-d9jHjFwpTeb0eqEI8ObwX6Hnv-luKHiY1_4jr7cdeOVStHnYVrknBPZqK0M_N3PaA7mgYjmEK6i87K5TsdBjGAtFy0qfOj8m0MqRc3E3sXFPgVQUFwmdjprY98Qxn7bx2D7-Y-P6_rc71t7rOfdivMHSjyT4g32wiAdKQEKKbqlsbeZLe71EifZz7KusWwB01JFoYTF6zGIMjG9yJh-qDf8VDmblwo4f14Q18KnAVCZsHfNFfjfpaOqoBpHOyEndhzD9pJccmw',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBf-d9jHjFwpTeb0eqEI8ObwX6Hnv-luKHiY1_4jr7cdeOVStHnYVrknBPZqK0M_N3PaA7mgYjmEK6i87K5TsdBjGAtFy0qfOj8m0MqRc3E3sXFPgVQUFwmdjprY98Qxn7bx2D7-Y-P6_rc71t7rOfdivMHSjyT4g32wiAdKQEKKbqlsbeZLe71EifZz7KusWwB01JFoYTF6zGIMjG9yJh-qDf8VDmblwo4f14Q18KnAVCZsHfNFfjfpaOqoBpHOyEndhzD9pJccmw',
    '4 weeks',
    'Beginner',
    'English',
    'Kanban',
    ARRAY['Kanban', 'Workflow', 'Visualization', 'Continuous Improvement', 'Productivity'],
    ARRAY['Improved Workflow Visualization', 'Enhanced Productivity', 'Better Work Management', 'Reduced Bottlenecks', 'Continuous Improvement Mindset'],
    '[
        {
            "title": "Module 1: Kanban Basics",
            "description": "Introduction to Kanban methodology, principles, and core concepts.",
            "duration": "1 week",
            "lessons": ["What is Kanban", "Kanban Principles", "Core Practices", "Benefits of Kanban"]
        },
        {
            "title": "Module 2: Visualizing Work",
            "description": "Learn to create and maintain effective Kanban boards for workflow visualization.",
            "duration": "1 week",
            "lessons": ["Kanban Board Design", "Work Item Types", "Columns and Swimlanes", "Visual Signals"]
        },
        {
            "title": "Module 3: Limiting Work in Progress",
            "description": "Understand WIP limits and their importance in maintaining flow and quality.",
            "duration": "1 week",
            "lessons": ["WIP Limits", "Flow Management", "Bottleneck Identification", "Capacity Planning"]
        },
        {
            "title": "Module 4: Continuous Improvement",
            "description": "Implement continuous improvement practices and metrics in your Kanban system.",
            "duration": "1 week",
            "lessons": ["Metrics and KPIs", "Retrospectives", "Process Improvement", "Team Collaboration"]
        }
    ]'::jsonb,
    'Kanban Management Professional (KMP)',
    4.7,
    156,
    289,
    true,
    false
),

-- Course 5: Lean Six Sigma Green Belt
(
    'Lean Six Sigma Green Belt',
    'Master Lean Six Sigma methodologies to improve processes, reduce waste, and enhance quality. This comprehensive course covers both Lean and Six Sigma principles, preparing you for Green Belt certification while providing practical tools for process improvement.',
    'David Thompson',
    129.00,
    159.00,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBoCGf--oqgJyGXbHvMMHxAwluWErSaU7LGwLK5YEznguKw0XAsrAorNBkegC5DvWLcKBd2QU9YQXHKXrhgCxkEZO0Z-QZlZ_QOPRp7SRx78aZm_9v6Rjx-VSrC59bk_JevOdtIUEFK5FDjyVvHZX3DdNaW65lR7FW4DG3xREbsiDVtqbuh_7zYJOR81BSE_kx-jCTzDRPYHwlkQ3SOje3Qcq8SUrvfWbnFike1Xg9-EjeepchTJt68ORp9fTV-Pce9_9bTSsAO7Yg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBoCGf--oqgJyGXbHvMMHxAwluWErSaU7LGwLK5YEznguKw0XAsrAorNBkegC5DvWLcKBd2QU9YQXHKXrhgCxkEZO0Z-QZlZ_QOPRp7SRx78aZm_9v6Rjx-VSrC59bk_JevOdtIUEFK5FDjyVvHZX3DdNaW65lR7FW4DG3xREbsiDVtqbuh_7zYJOR81BSE_kx-jCTzDRPYHwlkQ3SOje3Qcq8SUrvfWbnFike1Xg9-EjeepchTJt68ORp9fTV-Pce9_9bTSsAO7Yg',
    '12 weeks',
    'Advanced',
    'English',
    'Six Sigma',
    ARRAY['Lean', 'Six Sigma', 'Process Improvement', 'Quality Management', 'Green Belt'],
    ARRAY['Process Improvement Skills', 'Quality Enhancement', 'Waste Reduction', 'Cost Savings', 'Green Belt Certification'],
    '[
        {
            "title": "Module 1: Lean Principles",
            "description": "Introduction to Lean methodology and its core principles for waste elimination.",
            "duration": "3 weeks",
            "lessons": ["Lean Philosophy", "8 Types of Waste", "Value Stream Mapping", "5S Methodology"]
        },
        {
            "title": "Module 2: Six Sigma Fundamentals",
            "description": "Understanding Six Sigma methodology, DMAIC process, and statistical tools.",
            "duration": "4 weeks",
            "lessons": ["Six Sigma Overview", "DMAIC Process", "Statistical Tools", "Process Capability"]
        },
        {
            "title": "Module 3: Advanced Tools and Techniques",
            "description": "Master advanced Lean Six Sigma tools for process improvement and problem solving.",
            "duration": "3 weeks",
            "lessons": ["Root Cause Analysis", "Design of Experiments", "Control Charts", "Process Optimization"]
        },
        {
            "title": "Module 4: Project Implementation",
            "description": "Learn to implement Lean Six Sigma projects and prepare for Green Belt certification.",
            "duration": "2 weeks",
            "lessons": ["Project Selection", "Implementation Strategy", "Change Management", "Certification Preparation"]
        }
    ]'::jsonb,
    'Six Sigma Green Belt Certification',
    4.8,
    178,
    423,
    true,
    true
),

-- Course 6: Advanced Agile Techniques
(
    'Advanced Agile Techniques',
    'Take your Agile skills to the next level with advanced techniques and methodologies. Learn to scale Agile across organizations, handle complex projects, and integrate multiple frameworks. Perfect for experienced Agile practitioners looking to expand their expertise.',
    'Lisa Wang',
    89.00,
    119.00,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBYUFwm2myVGFtntebV33APubeJzmXuABWRb51m86pMq5pstnBbzExPTbPYKnUE3b7RS_vL5piZOEdUwcsgmALtnDLzp4mSxliFhiBivRgitt75D98nQ_3oMBMiq6TVuSGK4bjytLT4wKjGUP3jhie1qdDt888UkrS2iOyqhQQGBeGVZDWfGMruLx2zomiO0b7-dy7AwsKN6pncGOP8d1TQL6A2ihcXchb_cLjkQSfChQ2-shggySmQxEOIsk_XmRbSEofBQrNlGns',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBYUFwm2myVGFtntebV33APubeJzmXuABWRb51m86pMq5pstnBbzExPTbPYKnUE3b7RS_vL5piZOEdUwcsgmALtnDLzp4mSxliFhiBivRgitt75D98nQ_3oMBMiq6TVuSGK4bjytLT4wKjGUP3jhie1qdDt888UkrS2iOyqhQQGBeGVZDWfGMruLx2zomiO0b7-dy7AwsKN6pncGOP8d1TQL6A2ihcXchb_cLjkQSfChQ2-shggySmQxEOIsk_XmRbSEofBQrNlGns',
    '10 weeks',
    'Advanced',
    'English',
    'Agile',
    ARRAY['Advanced Agile', 'Scaling', 'Complex Projects', 'Framework Integration', 'Leadership'],
    ARRAY['Advanced Agile Leadership', 'Scaling Techniques', 'Complex Project Management', 'Framework Integration', 'Organizational Transformation'],
    '[
        {
            "title": "Module 1: Scaling Agile",
            "description": "Learn to scale Agile methodologies across large organizations and multiple teams.",
            "duration": "3 weeks",
            "lessons": ["SAFe Framework", "LeSS Framework", "Nexus Framework", "Scaling Challenges"]
        },
        {
            "title": "Module 2: Complex Project Management",
            "description": "Handle complex projects with multiple stakeholders, dependencies, and constraints.",
            "duration": "3 weeks",
            "lessons": ["Complexity Management", "Stakeholder Alignment", "Dependency Management", "Risk Mitigation"]
        },
        {
            "title": "Module 3: Framework Integration",
            "description": "Integrate multiple Agile frameworks and methodologies for optimal results.",
            "duration": "2 weeks",
            "lessons": ["Hybrid Approaches", "Framework Selection", "Integration Strategies", "Best Practices"]
        },
        {
            "title": "Module 4: Agile Leadership",
            "description": "Develop advanced leadership skills for Agile transformation and organizational change.",
            "duration": "2 weeks",
            "lessons": ["Agile Leadership", "Change Management", "Culture Transformation", "Continuous Improvement"]
        }
    ]'::jsonb,
    'Advanced Agile Leadership Certification',
    4.7,
    134,
    298,
    true,
    false
),

-- Course 7: Digital Project Management
(
    'Digital Project Management',
    'Master the art of managing digital projects in today''s fast-paced technology landscape. Learn to handle software development, digital marketing, and technology implementation projects using modern methodologies and tools.',
    'Alex Kim',
    69.00,
    89.00,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBfV9preMTmmTsF2jvvR6PbEp90slIEcjRFxUh9ucwDn3SovN3UhqEF_n522A49oHq3Bb2TuapgYCTcI6YMtsiNY3WeiL1qT45NjTVUzXQg_GWZ3CQ4DaGw95LJLplgAtK9Yls9aJFwz1LgedASM63WB2fDnIE722qdXHfAfb0jC-KWY7H4D1ZT1MLQPxrf6WC28zRoyDQ7FELc-5zvJ37DG8FQR2jH3BchCSRu3L34CRSEWQeCDNZPLmmvJo73Bxub0XVvdmRTBSY',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBfV9preMTmmTsF2jvvR6PbEp90slIEcjRFxUh9ucwDn3SovN3UhqEF_n522A49oHq3Bb2TuapgYCTcI6YMtsiNY3WeiL1qT45NjTVUzXQg_GWZ3CQ4DaGw95LJLplgAtK9Yls9aJFwz1LgedASM63WB2fDnIE722qdXHfAfb0jC-KWY7H4D1ZT1MLQPxrf6WC28zRoyDQ7FELc-5zvJ37DG8FQR2jH3BchCSRu3L34CRSEWQeCDNZPLmmvJo73Bxub0XVvdmRTBSY',
    '8 weeks',
    'Intermediate',
    'English',
    'Digital Management',
    ARRAY['Digital Projects', 'Technology', 'Software Development', 'Digital Marketing', 'Remote Teams'],
    ARRAY['Digital Project Expertise', 'Technology Implementation', 'Remote Team Management', 'Digital Tool Mastery', 'Modern Methodology Skills'],
    '[
        {
            "title": "Module 1: Digital Project Fundamentals",
            "description": "Understanding digital project characteristics, challenges, and success factors.",
            "duration": "2 weeks",
            "lessons": ["Digital Project Types", "Technology Stack", "Digital Challenges", "Success Metrics"]
        },
        {
            "title": "Module 2: Software Development Projects",
            "description": "Managing software development projects using Agile and DevOps methodologies.",
            "duration": "3 weeks",
            "lessons": ["SDLC Management", "Agile Development", "DevOps Integration", "Quality Assurance"]
        },
        {
            "title": "Module 3: Digital Marketing Projects",
            "description": "Managing digital marketing campaigns and technology implementation projects.",
            "duration": "2 weeks",
            "lessons": ["Campaign Management", "Analytics Integration", "Technology Implementation", "Performance Tracking"]
        },
        {
            "title": "Module 4: Remote Team Management",
            "description": "Leading and managing remote digital teams effectively.",
            "duration": "1 week",
            "lessons": ["Remote Leadership", "Virtual Collaboration", "Communication Tools", "Team Building"]
        }
    ]'::jsonb,
    'Digital Project Management Professional',
    4.5,
    98,
    234,
    true,
    false
),

-- Course 8: Strategic Project Management
(
    'Strategic Project Management',
    'Develop strategic thinking and leadership skills for managing high-impact projects that align with organizational goals. Learn to connect project outcomes with business strategy and create lasting value for stakeholders.',
    'Robert Martinez',
    149.00,
    179.00,
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDFJbKJn97bhsAkkbvasPvQUu_zebPNCdN0q7THfYOW6j1dXcaNuCcND3JwR9UBMAhdFVEGp-ci_7Zu7M_L3aPZLlq5z9jBFKmvxTUtL50c20mRu8Sr-Nj9Zgo17GrTLYJPqzv5UKynUjygMov_ILAsK9uQYGUT_KuWfdlAzCZepHv7CU06lrtxPGyJZY0dFaGDAcuR1mtQOL4VmbaAsRVQ9vLhhtD4UlDnD0hsiGzKP1d2wpxhijGuNjQ577UZ2QZuq826dCv-6GA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDpSnWQ2C0FikW2STitI04xEq-aKqFXtPhJ-LJHMkuXk4yoK4SjLZnxIkRz5evjxrC-2bA44fqk_71ytSEs_uCUx1Ti6ex87PdVYd0bCiVqhvgWmBBaN8HRt9MKzH-xKpbkgFm4oYgGjAaovsRM3N16gNp2s3_2DSIPKkF7JFVAhYbGEnyt1fViDxV03u2G3E7hiUo7BJAo3icAVlW_C-v62AgLS5LzHXBK1dijc8LFfEKkPDu4C0mmNKlnef-W_zdMtheJbwhAGGI',
    '12 weeks',
    'Advanced',
    'English',
    'Strategic Management',
    ARRAY['Strategic Planning', 'Leadership', 'Business Alignment', 'Value Creation', 'Executive Management'],
    ARRAY['Strategic Leadership Skills', 'Business Alignment', 'Value Creation', 'Executive Communication', 'Portfolio Management'],
    '[
        {
            "title": "Module 1: Strategic Thinking",
            "description": "Develop strategic thinking skills to align projects with organizational objectives.",
            "duration": "3 weeks",
            "lessons": ["Strategic Planning", "Business Alignment", "Value Proposition", "Strategic Analysis"]
        },
        {
            "title": "Module 2: Executive Leadership",
            "description": "Learn executive-level project management and stakeholder communication.",
            "duration": "3 weeks",
            "lessons": ["Executive Communication", "Stakeholder Management", "Leadership Styles", "Influence Strategies"]
        },
        {
            "title": "Module 3: Portfolio Management",
            "description": "Manage project portfolios to maximize organizational value and strategic impact.",
            "duration": "3 weeks",
            "lessons": ["Portfolio Strategy", "Resource Optimization", "Risk Management", "Performance Measurement"]
        },
        {
            "title": "Module 4: Value Creation",
            "description": "Focus on creating lasting value through strategic project outcomes.",
            "duration": "3 weeks",
            "lessons": ["Value Metrics", "ROI Analysis", "Sustainability", "Long-term Impact"]
        }
    ]'::jsonb,
    'Strategic Project Management Professional',
    4.9,
    167,
    445,
    true,
    true
);

-- Enable Row Level Security (RLS)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public read access to active courses
CREATE POLICY "Public can view active courses" ON courses
    FOR SELECT USING (is_active = true);

-- Allow authenticated users to read all courses
CREATE POLICY "Authenticated users can view all courses" ON courses
    FOR SELECT USING (auth.role() = 'authenticated');

-- Allow admins to perform all operations
CREATE POLICY "Admins can manage all courses" ON courses
    FOR ALL USING (auth.role() = 'admin');

-- Grant necessary permissions
GRANT SELECT ON courses TO authenticated;
GRANT ALL ON courses TO service_role; 