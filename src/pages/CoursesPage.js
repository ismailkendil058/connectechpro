import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllCourses, searchCourses, getCoursesByCategory } from '../services/courseService';

const CoursesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Popular');
  const [activeCategory, setActiveCategory] = useState('');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const filters = ['Popular', 'New', 'Certified'];
  const categories = ['Project Management', 'Agile', 'Scrum', 'Kanban', 'Lean', 'Six Sigma'];
  const filterOptions = ['Format', 'Level', 'Language'];

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    try {
      setLoading(true);
      const data = await getAllCourses();
      setCourses(data);
    } catch (error) {
      console.error('Error loading courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      try {
        const results = await searchCourses(query);
        setCourses(results);
      } catch (error) {
        console.error('Error searching courses:', error);
      }
    } else {
      loadCourses();
    }
  };

  const handleCategoryFilter = async (category) => {
    setActiveCategory(category);
    try {
      const results = await getCoursesByCategory(category);
      setCourses(results);
    } catch (error) {
      console.error('Error filtering courses:', error);
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white justify-between group/design-root overflow-x-hidden">
      <div>
        {/* Header */}
        <div className="flex items-center bg-white p-4 pb-2 justify-between">
          <div 
            className="text-[#111418] flex size-12 shrink-0 items-center cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
          </div>
          <h2 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Courses</h2>
        </div>

        {/* Search Bar */}
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#637588] flex border-none bg-[#f0f2f4] items-center justify-center pl-4 rounded-l-lg border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                placeholder="Search courses"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111418] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f4] focus:border-none h-full placeholder:text-[#637588] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </label>
        </div>

        {/* Quick Filters */}
        <div className="flex gap-3 p-3 overflow-x-hidden">
          {filters.map((filter) => (
            <div
              key={filter}
              className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 cursor-pointer ${
                activeFilter === filter ? 'bg-[#1672ce] text-white' : 'bg-[#f0f2f4] text-[#111418]'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              <p className="text-sm font-medium leading-normal">{filter}</p>
            </div>
          ))}
        </div>

        {/* Categories */}
        <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Categories</h3>
        <div className="flex gap-3 flex-wrap px-4 pb-2">
          {categories.map((category) => (
            <div
              key={category}
              className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg pl-4 pr-4 cursor-pointer transition-colors font-medium text-sm
                ${activeCategory === category ? 'bg-[#1672ce] text-white' : 'bg-[#f0f2f4] text-[#111418]'}`}
              onClick={() => handleCategoryFilter(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Course Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-gray-500">Loading courses...</p>
          </div>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
            {courses.map((course) => (
              <Link key={course.id} to={`/course/${course.id}`} className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: `url("${course.image}")` }}
                ></div>
                <div>
                  <p className="text-[#111418] text-base font-medium leading-normal">{course.title}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div>
        <div className="flex gap-2 border-t border-[#f0f2f4] bg-white px-4 pb-3 pt-2">
          <Link to="/" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]">
            <div className="text-[#637588] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
              </svg>
            </div>
            <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">Home</p>
          </Link>
          <Link to="/courses" className="just flex flex-1 flex-col items-center justify-end gap-1 rounded-full text-[#111418]">
            <div className="text-[#111418] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"></path>
              </svg>
            </div>
            <p className="text-[#111418] text-xs font-medium leading-normal tracking-[0.015em]">Courses</p>
          </Link>
          <Link to="/resources" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]">
            <div className="text-[#637588] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,56H216V168H40Zm32,32a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8H80a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8Zm88-56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Zm0,56a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8v24a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8Z"></path>
              </svg>
            </div>
            <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">Resources</p>
          </Link>
          <Link to="/about" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]">
            <div className="text-[#637588] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
              </svg>
            </div>
            <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">About Us</p>
          </Link>
          <Link to="/contact" className="just flex flex-1 flex-col items-center justify-end gap-1 text-[#637588]">
            <div className="text-[#637588] flex h-8 items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
              </svg>
            </div>
            <p className="text-[#637588] text-xs font-medium leading-normal tracking-[0.015em]">Contact</p>
          </Link>
        </div>
        <div className="h-5 bg-white"></div>
      </div>
    </div>
  );
};

export default CoursesPage; 