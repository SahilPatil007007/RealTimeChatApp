import { useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {

  return (
    <div className=' h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/login' element = {<Login />}></Route>
        <Route path='/signup' element = {<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default App
