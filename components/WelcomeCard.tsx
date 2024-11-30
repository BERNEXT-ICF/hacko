import React from 'react';

const WelcomeCard = () => {
  return (
    <div className="bg-black text-white p-6 m-6 rounded-lg text-2xl font-semibold flex flex-col md:flex-row items-center justify-between max-w-4xl max-h-[700px]">
      <div className="w-full md:w-1/2 pr-6 text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to Hacko</h1>
        <p className="text-sm sm:text-lg mb-4">
          Hacko is the platform where you can learn, grow, and connect with other developers. 
          Join us to explore amazing opportunities and resources. We help you build the skills that matter.
        </p>
        <div className="flex space-x-4 justify-center md:justify-start">
          <button className="bg-yellow-300 text-black py-2 px-4 rounded-md font-semibold text-sm hover:bg-yellow-400">
            Explore Course
          </button>
          <button className="border border-white text-white py-2 px-4 rounded-full font-semibold text-sm flex items-center hover:bg-white hover:text-black">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.25v7.5a1 1 0 001.234.97l6.518-3.759a1 1 0 000-1.742z" />
            </svg>
            Watch Video
          </button>
        </div>
      </div>

      {/*Test Image */}
      <div className="w-full md:w-1/2">
        <img
          src="https://media.istockphoto.com/id/469806772/vector/yellow-and-white-waves-seamless-pattern.jpg?s=612x612&w=0&k=20&c=f71etxOPJvaKEwCbGuPfNZi-WWGJafpYoTv2JE4eebQ=" // Replace with your image URL
          alt="Hacko"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default WelcomeCard;
