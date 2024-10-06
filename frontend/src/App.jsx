import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home.jsx'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element= {<Home />}></Route>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/signup' element = {<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default App
