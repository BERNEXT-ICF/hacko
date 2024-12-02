import { courses } from '@/constants/course';
import React from 'react';

// Define the Course interface to match the course data structure
interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  classCode: string;
  courseType: string;
}

// Fetch course data based on the `id` from the URL
const CourseDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  // Find the course with the corresponding id
  const course = courses.find(course => course.id.toString() === id) || null;

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-8 sm:px-8">
      <div className="flex flex-col sm:flex-row w-full max-w-6xl">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full sm:w-1/3 h-auto sm:mr-4 rounded-xl mb-6 sm:mb-0" 
        />
        <div className="sm:w-2/3">
          <div className="flex items-center mb-4">
            <i className="ml-2 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </i>
            <span className="text-">Jumlah siswa terdaftar: 120</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold">{course.title}</h1>
          <p className="mt-2 text-gray-700">{course.description}</p>
          <div className="flex space-x-4 mt-4">
            <p className="border border-gray-300 rounded px-2 py-1">Class Code: {course.classCode}</p>
            <p className="bg-blue-500 text-white rounded px-2 py-1">{course.courseType}</p>
          </div>

          {/* Card with buttons */}
          <div className="mt-6 p-4 border rounded-lg shadow-md flex flex-col space-y-4">
            <button className="px-6 py-2 mx-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200">
              Enroll
            </button>
            <button className="px-6 py-2 mx-4 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-200">
              See Syllabus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
