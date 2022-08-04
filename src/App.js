import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from "react-router-dom";
import Freelancers from './pages/Freelancers';
import Jobs from './pages/Jobs';
import PostJobs from './pages/PostJobs';


export default function App() {
  return (
    <div>slaw
          <NavBar/>

          <Routes>
            <Route path="/" element={<home/>} />
            <Route path="/freelancers " element={<Freelancers/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/postjobs" element={<PostJobs/>} />
          </Routes>
    </div>
  )
}
