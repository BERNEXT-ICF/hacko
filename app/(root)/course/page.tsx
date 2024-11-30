'use client';

import React, { useState } from 'react';
import Fuse from 'fuse.js';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/constants/course';

const Course = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Setup Fuse.js with search options
  const fuse = new Fuse(courses, {
    keys: ['title', 'classCode'], // We want to search by title and classCode
    threshold: 0.3, // Adjust threshold for fuzzy matching, 0.3 allows some tolerance for typos
  });

  // Perform the search based on the search term
  const result = searchTerm ? fuse.search(searchTerm) : courses;

  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {result.map((item) => {
          const course = 'item' in item ? item.item : item; // Extract the course data from the Fuse.js search result
          return <CourseCard key={course.id} course={course} />;
        })}
      </div>
    </div>
  );
};

export default Course;
