import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignupPage = () => {
  const handleGoogleSignIn = () => {
    window.location.href = 'http://localhost:3000/google/callback';
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-700">or sign up with:</p>
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center mt-4 bg-white text-gray-700 font-medium px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors duration-300 w-full"
          >
            <FcGoogle className="mr-2 text-2xl" />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;