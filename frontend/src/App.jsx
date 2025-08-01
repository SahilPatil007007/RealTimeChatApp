import { useEffect, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home.jsx'
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';
import Profile from './pages/profile/Profile.jsx';

function App() {
    const {setAuthUser} = useAuthContext();
    useEffect(() => {
      const verifyUser = async () => {
          try {
              const API_URL = import.meta.env.VITE_API_URL;
              const res = await fetch(`${API_URL}/api/auth/check`, {
                  credentials: "include"
              });
              const data = await res.json();

              if (data.error) throw new Error();

              setAuthUser(data);
              localStorage.setItem("chat-user", JSON.stringify(data));
          } catch {
              setAuthUser(null);
              localStorage.removeItem("chat-user");
          }
      };

      verifyUser();
    }, []);

  const {authUser} = useAuthContext();
  return (
    <div className=''>
      <Routes>
        <Route path='/' element= {authUser ?<Home />:<Navigate to={"/login"}/>}></Route>
        <Route path='/profile' element = {authUser ?<Profile />:<Navigate to={"/login"}/>}></Route>
        <Route path='/login' element = {authUser ?<Navigate to={"/"}/>: <Login />}></Route>
        <Route path='/signup' element = {authUser ?<Navigate to={"/"}/>: <Signup />}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
