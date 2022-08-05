import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import {Route,Routes,BrowserRouter} from "react-router-dom";
import Freelancers from "./pages/Freelancers";
import Jobs from './pages/Jobs';
import PostJobs from './pages/PostJobs';
import Home from './pages/Home';

export default function App() {
  return (
  <BrowserRouter>
    <div>
          <NavBar/>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/freelancers" element={<Freelancers/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/postjobs" element={<PostJobs/>} />
          </Routes>
          
    </div>
  </BrowserRouter>
  );
}
