import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className=''>
      <Routes>
        <Route path='/' element= {authUser ?<Home />:<Navigate to={"/login"}/>}></Route>
        <Route path='/login' element = {authUser ?<Navigate to={"/"}/>: <Login />}></Route>
        <Route path='/signup' element = {authUser ?<Navigate to={"/"}/>: <Signup />}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
