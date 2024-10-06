import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-4 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-white">Login to Chit-Chat</h1>
        {/* Username Input */}
        <input 
          type="text" 
          placeholder="Username" 
          className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Password Input */}
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Login Button */}
        <button className="w-full p-3 mt-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500">
          Login
        </button>
        {/* Redirect to Signup */}
        <p className="text-center text-gray-400">
          Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
