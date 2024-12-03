'use client';

import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineArrowLeft } from 'react-icons/ai';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log('Sign up with Google');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-sm">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <p className="text-xs text-left flex items-center text-blue-500 mb-4">
            <AiOutlineArrowLeft className="mr-1" />
            <a href="/" className="hover:underline">Back to Homepage</a>
          </p>
          <h2 className="text-2xl text-center">Sign Up to Hack[o]</h2>
          <p className="text-gray-500 text-sm py-4">Create a new account.</p>
          <label className="mb-2 text-sm">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-2 p-2 text-base border rounded w-full"
            />
          </label>
          <label className="mb-2 text-sm">
            Password:
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mb-2 p-2 text-base border rounded w-full"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-500"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <AiFillEye size={24} />
                ) : (
                  <AiFillEyeInvisible size={24} />
                )}
              </button>
            </div>
          </label>
          <label className="mb-2 text-sm">
            Confirm Password:
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mb-2 p-2 text-base border rounded w-full"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-2 top-2 text-gray-500"
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? (
                  <AiFillEye size={24} />
                ) : (
                  <AiFillEyeInvisible size={24} />
                )}
              </button>
            </div>
          </label>
          <button type="submit" className="p-2 text-base bg-yellow-500 text-white rounded">Sign Up</button>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <button type="button" onClick={handleGoogleSignUp} className="p-2 text-base bg-white text-gray-700 border border-gray-300 rounded flex items-center justify-center">
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google icon" className="w-6 h-6 mr-2" />
            Sign Up with Google
          </button>
          <p className="text-sm text-center mt-4">
            Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;