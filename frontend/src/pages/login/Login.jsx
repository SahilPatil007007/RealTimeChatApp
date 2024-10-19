import React, { useState } from 'react';
import useLogin from '../../hooks/useLogin';
import { Link } from 'react-router-dom';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const {loading, login} = useLogin();

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await login(inputs);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-400">Create your Chit-Chat Account</h1>

        <form onSubmit={handleSubmit} className="space-y-6">

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

          {/* Signup Button */}
          <button className="w-full py-3 mt-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg" disabled={loading}>
            {loading ? <span className='loading loading-spinner'></span> : "Log In"}
          </button>

          <Link to='/signup' className='block text-center text-sm text-blue-400 hover:underline hover:text-blue-500 mt-2'>
            {"Don't have an account? Sign-Up here"}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
