# Personalized Course Management System

This system allows admins to create, edit, and manage personalized course details for an e-learning platform. Each course can have unique content, pricing, curriculum, and metadata.

## Features

### For Admins
- **Course Management Dashboard**: View all courses in a table format
- **Add New Courses**: Create courses with personalized details
- **Edit Existing Courses**: Modify any course information
- **Delete Courses**: Remove courses from the platform
- **Course Status Management**: Activate/deactivate courses and mark as featured

### For Students
- **Personalized Course Details**: Each course shows unique information
- **Dynamic Content**: Course descriptions, benefits, curriculum, and pricing
- **Search & Filter**: Find courses by category, level, or search terms
- **Real-time Updates**: Changes made by admins are immediately visible

## Database Schema

The system uses a comprehensive `courses` table with the following fields:

```sql
- id: Primary key
- title: Course title
- description: Detailed course description
- instructor: Course instructor name
- price: Current price
- original_price: Original price for discount display
- image: Course thumbnail image URL
- hero_image: Hero image for course details page
- duration: Course duration (e.g., "8 weeks")
- level: Difficulty level (Beginner, Intermediate, Advanced)
- language: Course language
- category: Course category
- tags: Array of tags for filtering
- benefits: Array of course benefits
- curriculum: JSON array of course modules
- accreditation: Certification/accreditation info
- rating: Average course rating
- review_count: Number of reviews
- enrollment_count: Number of enrolled students
- is_active: Whether course is available
- is_featured: Whether course is featured
- created_at: Creation timestamp
- updated_at: Last update timestamp
```

## Setup Instructions

### 1. Database Setup

Run the SQL script in `database/courses_table.sql` in your Supabase SQL editor:

```bash
# Copy the contents of database/courses_table.sql
# Paste into Supabase SQL Editor and execute
```

### 2. Environment Configuration

Ensure your Supabase configuration is set up in `src/services/supabaseClient.js`:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
```

### 3. Admin Access

To access the admin course management:

1. Log in with an admin account
2. Navigate to `/admin/courses`
3. You'll see the course management interface

## Usage Guide

### Adding a New Course

1. Click "Add New Course" button
2. Fill in all required fields:
   - **Title**: Course name
   - **Description**: Detailed course description
   - **Instructor**: Instructor name
   - **Price**: Current price
   - **Original Price**: Original price for discount display
   - **Images**: Course and hero image URLs
   - **Duration**: Course length
   - **Level**: Difficulty level
   - **Category**: Course category
   - **Tags**: Comma-separated tags
   - **Benefits**: One benefit per line
   - **Accreditation**: Certification info
3. Set course status (Active/Inactive, Featured)
4. Click "Create Course"

### Editing a Course

1. Click "Edit" next to any course
2. Modify the desired fields
3. Click "Update Course"

### Course Personalization Features

#### 1. Dynamic Content
- Each course can have unique descriptions, benefits, and curriculum
- Images can be customized per course
- Pricing can be set individually

#### 2. Curriculum Management
The curriculum is stored as JSON and can include:
```json
{
  "title": "Module Title",
  "description": "Module description",
  "duration": "2 weeks",
  "lessons": ["Lesson 1", "Lesson 2", "Lesson 3"]
}
```

#### 3. Benefits & Tags
- Benefits are stored as an array of strings
- Tags are used for filtering and categorization
- Both can be customized per course

#### 4. Course Status
- **Active**: Course is visible to students
- **Inactive**: Course is hidden from students
- **Featured**: Course appears in featured sections

## API Endpoints

The course service provides these functions:

```javascript
// Get all courses
getAllCourses()

// Get course by ID
getCourseById(id)

// Create new course (Admin only)
createCourse(courseData)

// Update course (Admin only)
updateCourse(id, updates)

// Delete course (Admin only)
deleteCourse(id)

// Search courses
searchCourses(query)

// Get courses by category
getCoursesByCategory(category)

// Get featured courses
getFeaturedCourses()
```

## Security

- Row Level Security (RLS) is enabled
- Public users can only view active courses
- Authenticated users can view all courses
- Only admins can create, update, or delete courses

## File Structure

```
src/
├── services/
│   ├── courseService.js          # Course API functions
│   └── supabaseClient.js         # Supabase configuration
├── pages/
│   ├── AdminCourseManagement.js  # Admin course management interface
│   ├── CourseDetailsPage.js      # Course details page (updated)
│   └── CoursesPage.js            # Courses listing page (updated)
└── database/
    └── courses_table.sql         # Database setup script
```

## Customization

### Adding New Fields

To add new course fields:

1. Update the database schema in `courses_table.sql`
2. Update the `defaultCourseData` object in `courseService.js`
3. Update the admin form in `AdminCourseManagement.js`
4. Update the display components in `CourseDetailsPage.js`

### Styling

All components use Tailwind CSS for styling. The design is mobile-first and responsive.

## Troubleshooting

### Common Issues

1. **Courses not loading**: Check Supabase connection and RLS policies
2. **Admin access denied**: Ensure user has admin role
3. **Form validation errors**: Check required fields and data types
4. **Image not displaying**: Verify image URLs are accessible

### Debug Mode

Enable debug logging in `courseService.js`:

```javascript
console.log('Course data:', data);
```

## Future Enhancements

- Course enrollment tracking
- Student progress management
- Course reviews and ratings
- Advanced search filters
- Course analytics dashboard
- Bulk course operations
- Course templates
- Media upload functionality 