'use client';

import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log('Login with Google');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md md:max-w-sm">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="text-2xl text-center">Login to Hack[o]</h2>
          <p className="text-gray-500 text-sm py-4">Welcome back! Please login to your account.</p>
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
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mb-2 p-2 text-base border rounded w-full"
            />
          </label>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" className="p-2 text-base bg-yellow-500 text-white rounded">Login</button>
          <div className="flex items-center my-2">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-2 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <button type="button" onClick={handleGoogleLogin} className="p-2 text-base bg-white text-gray-700 border border-gray-300 rounded flex items-center justify-center">
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google icon" className="w-6 h-6 mr-2" />
            Login with Google
          </button>
          <p className="text-sm text-center mt-4">
            Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">SignUp</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;