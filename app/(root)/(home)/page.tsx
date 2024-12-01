'use client';

import React, { useState } from 'react';
import { FaUserGraduate, FaLaptopCode, FaLaptop, FaUsers } from 'react-icons/fa';
import WelcomeCard from '@/components/WelcomeCard';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/constants/course';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const courseTypes = ['all', ...Array.from(new Set(courses.map(course => course.courseType)))];

  const filteredCourses = selectedCategory === 'all'
    ? courses
    : courses.filter((course) => course.courseType === selectedCategory);

  return (
    <>
      <section className="flex items-center justify-center h-screen px-6 sm:px-10">
        <WelcomeCard />
      </section>

      <section id="video-section" className="flex flex-col items-center justify-center px-6 sm:px-10 mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          Our Courses are Suitable for ...
        </h1>

        {/* Video Section with Gray Background */}
        <div className="w-full max-w-4xl mb-8 rounded-lg p-6">
          <iframe
            className="w-full h-64 sm:h-96 rounded-lg"
            src="https://www.youtube.com/embed/bC8fvcpocBU?si=VQikwIWIW3i8dJnD"
            title="Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Icon + Description Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {/* For Student Beginner */}
          <div className="flex flex-col items-center text-center p-4">
            <FaUserGraduate className="text-4xl mb-4 text-blue-500" />
            <p className="text-lg font-semibold">For Student Beginner</p>
            <p className="text-gray-500">Start your learning journey with foundational courses.</p>
          </div>

          {/* For Beginner IT Specialist */}
          <div className="flex flex-col items-center text-center p-4">
            <FaLaptopCode className="text-4xl mb-4 text-green-500" />
            <p className="text-lg font-semibold">For Beginner IT Specialists</p>
            <p className="text-gray-500">Dive into programming and tech skills tailored for beginners.</p>
          </div>

          {/* For Current IT Specialist */}
          <div className="flex flex-col items-center text-center p-4">
            <FaLaptop className="text-4xl mb-4 text-orange-500" />
            <p className="text-lg font-semibold">For Current IT Specialists</p>
            <p className="text-gray-500">Enhance your skills and stay ahead with advanced tech courses.</p>
          </div>

          {/* For Public Customers */}
          <div className="flex flex-col items-center text-center p-4">
            <FaUsers className="text-4xl mb-4 text-purple-500" />
            <p className="text-lg font-semibold">For Public Customers</p>
            <p className="text-gray-500">Courses designed for anyone looking to expand their knowledge.</p>
          </div>
        </div>
      </section>

      {/* Scrollable Section */}
      <section className="mt-16 pt-10">
        <h2 className="text-2xl font-semibold text-center mb-4">Recommendation Courses</h2>

        {/* Filter buttons */}
        <div className="text-center mb-8">
          {courseTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedCategory(type)}
              className={`px-4 py-2 m-2 rounded-md ${
                selectedCategory === type
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-300'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Courses List */}
        <div className="flex overflow-x-auto space-x-4 py-4 px-6 sm:px-10 scrollbar-hide">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="flex-shrink-0 w-64 mt-12 transition-transform transform hover:scale-105"
            >
              {/* Wrap CourseCard with a div to apply line-clamp for description */}
              <div className="line-clamp-2">
                <CourseCard course={course} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
