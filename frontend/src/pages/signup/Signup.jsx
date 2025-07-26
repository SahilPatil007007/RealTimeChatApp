import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    gender: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const {loading, signup} = useSignup();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-400">Create your Chit-Chat Account</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name Input */}
          <div className="space-y-1">
            <label htmlFor="fullName" className="text-sm font-semibold text-gray-300">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={inputs.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Username Input */}
          <div className="space-y-1">
            <label htmlFor="userName" className="text-sm font-semibold text-gray-300">Username</label>
            <input
              type="text"
              name="username"
              value={inputs.username}
              onChange={handleChange}
              placeholder="Username"
              className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>


          {/* Password Input */}
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-semibold text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full p-3 text-white bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>

          {/* Gender Selection */}
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-300">Gender</label>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center text-gray-200">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={inputs.gender === 'male'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center text-gray-200">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={inputs.gender === 'female'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Signup Button */}
          <button className="w-full py-3 mt-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg" disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
          </button>

          <Link to='/login' className='block text-center text-sm text-blue-400 hover:underline hover:text-blue-500 mt-2'>
            {"Already have an account? Login here"}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
