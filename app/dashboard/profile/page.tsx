'use client';

import React, { useState } from 'react';
import { FaAward, FaEdit } from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    xpPoints: 1200,
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    address: '1234 Street Name, City, Country',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center bg-white mt-16 relative px-4">
      <div className="relative mb-4 lg:mb-0">
        <img
          src="https://ideogram.ai/assets/publicly-available/image-1.jpg"
          alt="Profile"
          className="w-40 h-40 lg:w-80 lg:h-80 rounded-lg mb-4 lg:mr-6 mx-auto"
        />
        <button
          className="absolute bottom-4 right-2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none flex items-center transform -translate-y-2"
          onClick={handleEditClick}
        >
          <FaEdit className="w-5 h-5 mr-1" />
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>
      <div className="flex flex-col text-left w-full lg:w-auto">

        {/* XP Points Field */}
        <div className="flex items-center mb-2">
          <span className="text-blue-500 text-sm mr-2">XP Points:</span>
          <span className="ml-2 text-sm text-blue-500">{profileData.xpPoints}</span>
          <FaAward className="w-6 h-6 ml-2 text-blue-500" />
        </div>
        
        {/* Name Field */}
        <div className="flex items-center mb-4">
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleInputChange}
              className="text-lg lg:text-xl border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-64"
            />
          ) : (
            <span className="text-xl lg:text-2xl">{profileData.name}</span>
          )}
        </div>

        {/* Email Field */}
        <div className="flex items-center">
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleInputChange}
              className="text-lg lg:text-xl border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-64"
            />
          ) : (
            <span className="text-xl">{profileData.email}</span>
          )}
        </div>

        {/* Phone Field */}
        <div className="flex items-center mt-4">
          {isEditing ? (
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleInputChange}
              className="text-lg lg:text-xl border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-64"
            />
          ) : (
            <span className="text-xl">{profileData.phone}</span>
          )}
        </div>

        {/* Address Field */}
        <div className="flex items-center mt-4">
          {isEditing ? (
            <textarea
              name="address"
              value={profileData.address}
              onChange={handleInputChange}
              className="text-lg lg:text-xl border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full lg:w-64 h-24 resize-none"
            />
          ) : (
            <span className="text-xl">{profileData.address}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
