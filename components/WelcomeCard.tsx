import React from 'react';

const WelcomeCard = () => {
  return (
    <div className="bg-black text-white p-10 m-8 rounded-lg text-2xl font-semibold flex flex-col md:flex-row items-center justify-between max-w-6xl max-h-[900px]">
      <div className="w-full md:w-1/2 pr-8 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">Welcome to HACK[O]</h1>
        <p className="text-lg sm:text-xl mb-6">
          Hacko is the platform where you can learn, grow, and connect with other developers. 
          Join us to explore amazing opportunities and resources. We help you build the skills that matter.
        </p>
        <div className="flex space-x-6 justify-center md:justify-start">
          <a href="/course">
            <button className="bg-yellow-300 text-black py-3 px-6 rounded-md font-semibold text-base hover:bg-yellow-400 transition">
              Explore Course
            </button>
          </a>
          {/* Link to video section */}
          <a href="#video-section">
            <button className="border border-white text-white py-3 px-6 rounded-full font-semibold text-base flex items-center hover:bg-white hover:text-black transition">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-6.518-3.759A1 1 0 007 8.25v7.5a1 1 0 001.234.97l6.518-3.759a1 1 0 000-1.742z" />
              </svg>
              Watch Video
            </button>
          </a>
        </div>
      </div>

      {/* Test Image */}
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
