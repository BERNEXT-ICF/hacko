'use client'; 

import React, { useState, useEffect } from 'react';
import { FaFire, FaAward } from 'react-icons/fa';

const Dashboard = () => {
  // Set streak status 
  const [streakStatus, setStreakStatus] = useState([true, true, true, false, false, false, false]); // Active Mon to Wed
  const [xpPoints, setXpPoints] = useState(150); // Example XP points
  const [level, setLevel] = useState(2); // set current level
  const [nextLevelPoints, setNextLevelPoints] = useState(200); // Points

  return (
    <div className="h-screen bg-gray-100 p-6">
      {/* Welcome Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">Welcome, User</h1>
      </div>

      {/* Streaks and XP Section */}
      <div className="mb-6 flex justify-center gap-6">
        {/* Streaks Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-full flex flex-col items-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Your Streak: 1 Week</h2>

          {/* Streak Days */}
          <div className="grid grid-cols-7 gap-6 justify-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <div key={index} className="flex flex-col items-center justify-center">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-2 ${
                    streakStatus[index] ? 'bg-red-500' : 'bg-gray-400'
                  }`}
                >
                  <FaFire className={`w-10 h-10 ${streakStatus[index] ? 'text-white' : 'text-gray-300'}`} />
                </div>
                <span className="text-gray-800 text-sm text-center">{day}</span>
              </div>
            ))}
          </div>

          {/* Streak Details */}
          <div className="text-center text-gray-600 mt-4">
            <p>You have been consistent for a week! Keep it up!</p>
            <p className="mt-2 text-lg">7 Days</p>
          </div>
        </div>


        {/* XP Points Card */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Your XP Points</h2>
          
          {/* XP Points Display */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center">
              <FaAward className="text-white w-10 h-10" />
            </div>
          </div>

          {/* XP Information */}
          <div className="text-center">
            <p className="text-sm text-gray-600">Current XP Points:</p>
            <h3 className="text-3xl font-bold text-gray-800">{xpPoints}</h3>

            <div className="mt-4">
              <p className="text-sm text-gray-600">Level:</p>
              <h4 className="text-2xl font-bold text-gray-800">Level {level}</h4>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-600">XP to Next Level:</p>
              <h4 className="text-2xl font-bold text-gray-800">{nextLevelPoints - xpPoints} XP</h4>
            </div>

            {/* XP Progress */}
            <div className="mt-4">
              <p className="text-sm text-gray-600">Progress to Next Level:</p>
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${(xpPoints / nextLevelPoints) * 100}%` }}
                />
              </div>
              <p className="text-sm text-gray-600">{Math.round((xpPoints / nextLevelPoints) * 100)}% to Level {level + 1}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex gap-6">
        {/* Card 1: What You're Studying */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">What You're Studying</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Math 101</span>
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Physics 201</span>
            </li>
            <li className="flex items-center">
              <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">Chemistry 103</span>
            </li>
          </ul>
        </div>

        {/* Card 2: Another Activity */}
        <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Another Course</h2>
          <p className="text-gray-600 mb-4">
            Explore additional courses to enhance your skills and knowledge.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
