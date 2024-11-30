import { getCourseTypeColor } from '@/constants/course';
import React from 'react';

interface Course {
  image: string;
  title: string;
  description: string;
  classCode: string;
  courseType: string;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const courseTypeColor = getCourseTypeColor(course.courseType); // Use the imported function

  return (
    <div className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
      </div>
      
      <div className="p-4">
        {/* Course Title and Description */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h2>
        <p className="text-sm text-gray-600 mb-4">{course.description}</p>
        
        {/* Course Type Label with dynamic color */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-500">Class Code: {course.classCode}</p>
          <span className={`${courseTypeColor} text-white px-3 py-1 rounded-md`}>
            {course.courseType.charAt(0).toUpperCase() + course.courseType.slice(1)}
          </span>
        </div>

        {/* Enroll Button */}
        <button className="bg-yellow-300 text-black py-2 px-4 rounded-md font-semibold text-sm hover:bg-yellow-400">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
