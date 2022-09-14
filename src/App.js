import React from "react";
import "./App.css";
import "leaflet/dist/leaflet.css";
//import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom";
import Freelancers from "./pages/Freelancers";
import Jobs from "./pages/Jobs";
import PostJobs from "./pages/PostJobs";
import Home from "./pages/Home";
//import Footer from './components/Footer';
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Choose from "./pages/Choose";
import FreelancersProfile from "./pages/FreelancersProfile";
import CompanyProfile from "./pages/CompanyProfile";
import JobInfo from "./pages/JobInfo";
import FreelancerInfo from "./pages/FreelancerInfo";
import CreateProfile from "./pages/CreateProfile";
import Emails from "./pages/Emails";
import AddSkills from "./pages/AddSkills";
import DarkFreelancersProfile from "./pages/DarkProfileFreelancer";
import ContractModal from "./components/ContractModal";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/postjobs" element={<PostJobs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/choose" element={<Choose />} />
        <Route path="/freelancersprofile" element={<FreelancersProfile />} />
        <Route path="/companyprofile" element={<CompanyProfile />} />
        <Route path="/jobinfo" element={<JobInfo />} />
        <Route path="/freelancerinfo" element={<FreelancerInfo />} />
        <Route path="/createprofile" element={<CreateProfile />} />
        <Route path="/emails" element={<Emails />} />
        <Route path="/addskills" element={<AddSkills />} />
        <Route
          path="/darkfreelancersprofile"
          element={<DarkFreelancersProfile />}
        />
        <Route path="/contractmodal" element={<ContractModal />} />
      </Routes>

      {/* <Footer/> */}
    </div>
  );
}
