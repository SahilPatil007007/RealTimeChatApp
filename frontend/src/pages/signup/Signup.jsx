import React, { useState } from 'react';

const Signup = () => {
  const [gender, setGender] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white">Create your Chit-Chat Account</h1>
        {/* Full Name Input */}
        <input 
          type="text" 
          placeholder="Full Name" 
          className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Username Input */}
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Email Input */}
        <input 
          type="email" 
          placeholder="Email" 
          className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Password Input */}
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Gender Selection */}
        <div className="w-full p-3 bg-gray-700 rounded-lg">
          <label className="text-white">Gender:</label>
          <div className="flex items-center mt-2">
            <label className="mr-4 text-gray-200">
              <input 
                type="radio" 
                name="gender" 
                value="male" 
                className="mr-1"
                onChange={() => setGender('male')}
              />
              Male
            </label>
            <label className="mr-4 text-gray-200">
              <input 
                type="radio" 
                name="gender" 
                value="female" 
                className="mr-1"
                onChange={() => setGender('female')}
              />
              Female
            </label>
          </div>
        </div>
        {/* Signup Button */}
        <button className="w-full p-3 mt-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500">
          Sign Up
        </button>
        {/* Redirect to Login */}
        <p className="text-center text-gray-400">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
