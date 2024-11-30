import React from 'react';

interface Course {
  image: string;
  title: string;
  description: string;
  classCode: string;
}

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        <p className="text-sm text-gray-500 mb-4">Class Code: {course.classCode}</p>
        <button className="bg-yellow-300 text-black py-2 px-4 rounded-md font-semibold text-sm hover:bg-yellow-400">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
