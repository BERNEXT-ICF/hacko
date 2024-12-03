'use client';

import React, { useState } from 'react';
import Fuse from 'fuse.js';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/constants/course';

const ITEMS_PER_PAGE = 9;

const Course = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Setup Fuse.js with search options
  const fuse = new Fuse(courses, {
    keys: ['title', 'classCode'], 
    threshold: 0.3, 
  });

  // Perform the search based on the search term
  const searchResult = searchTerm ? fuse.search(searchTerm) : courses;

  // Filter courses based on the selected category
  const filteredCourses = selectedCategory === 'all'
    ? searchResult
    : searchResult.filter((item) => {
        const course = 'item' in item ? item.item : item;
        return course.courseType === selectedCategory;
      });

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Get unique course types for the dropdown
  const courseTypes = ['all', ...Array.from(new Set(courses.map(course => course.courseType)))];

  return (
    <div className="px-4 py-4 sm:px-10 sm:py-8">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center">Our Courses</h1>
      <div className="mb-4 sm:mb-8 text-center flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
        >
          {courseTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {paginatedCourses.map((item) => {
          const course = 'item' in item ? item.item : item; // Extract the course data from the Fuse.js search result
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
      <div className="mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          Back
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 border border-gray-300 rounded-md ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Course;
