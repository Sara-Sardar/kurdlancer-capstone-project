import React from 'react'
import './App.css';
//import NavBar from './components/NavBar';
import {Route,Routes} from "react-router-dom";
import Freelancers from "./pages/Freelancers";
import Jobs from './pages/Jobs';
import PostJobs from './pages/PostJobs';
import Home from './pages/Home';
//import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Signin from './pages/Signin';
import Signup from './pages/Signup';



export default function App() {
  return (

    <div>
          
          
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/freelancers" element={<Freelancers/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/postjobs" element={<PostJobs/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
            <Route path="/contactus" element={<ContactUs/>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>


        {/* <Footer/> */}
          
    </div>
  
  );
}
