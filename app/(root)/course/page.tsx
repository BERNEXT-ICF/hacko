import React from 'react';

const courses = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Learn full-stack web development with HTML, CSS, JavaScript, and React.',
    image: 'https://media.istockphoto.com/id/469806772/vector/yellow-and-white-waves-seamless-pattern.jpg?s=612x612&w=0&k=20&c=f71etxOPJvaKEwCbGuPfNZi-WWGJafpYoTv2JE4eebQ=', // Replace with your image URL
  },
  {
    id: 2,
    title: 'Data Science with Python',
    description: 'Master data analysis and machine learning using Python and popular libraries.',
    image: 'https://media.istockphoto.com/id/469806772/vector/yellow-and-white-waves-seamless-pattern.jpg?s=612x612&w=0&k=20&c=f71etxOPJvaKEwCbGuPfNZi-WWGJafpYoTv2JE4eebQ=', // Replace with your image URL
  },
  {
    id: 3,
    title: 'UI/UX Design Essentials',
    description: 'Become a pro at designing user-friendly interfaces and experiences.',
    image: 'https://media.istockphoto.com/id/469806772/vector/yellow-and-white-waves-seamless-pattern.jpg?s=612x612&w=0&k=20&c=f71etxOPJvaKEwCbGuPfNZi-WWGJafpYoTv2JE4eebQ=', // Replace with your image URL
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Learn to build native apps for iOS and Android using React Native.',
    image: 'https://media.istockphoto.com/id/469806772/vector/yellow-and-white-waves-seamless-pattern.jpg?s=612x612&w=0&k=20&c=f71etxOPJvaKEwCbGuPfNZi-WWGJafpYoTv2JE4eebQ= ', // Replace with your image URL
  },
];

const Course = () => {
  return (
    <div className="px-10 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            {/* Image inside card */}
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
              <button className="bg-yellow-300 text-black py-2 px-4 rounded-md font-semibold text-sm hover:bg-yellow-400">
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
