import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/MainLayout'
import FreelancersProfile from './FreelancersProfile';
export default function Choose() { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    // Make POST request to the /login API endpoint

    // if successful => JWT token is returned
    dispatch(Choose(form.username));
    navigate('/', { replace: true });
    // if rejected =>  error telling u what's going on (username doesn't exist)
  }

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));

    console.log(form);
  }
  return (
    <Layout>
    
       <div className="bg-amber-500 min-h-screen p-10 flex items-center justify-center mt-10">
      <div className="container mx-auto flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-xl w-96">
         <form className='grid grid-cols-1' onSubmit={submitHandler} >
          <h2 className='text-center mb-5 text-2xl font-medium text-amber-400'>Create Account As:</h2>
          
        
        <Link to="/createprofile" className="bg-amber-400 pl-24 px-3 py-2 ml-5 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Freelancer .</Link>
        <Link to="/createprofile" className="bg-amber-400 pl-16  px-3 py-2 ml-5 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Company / Indivisual</Link>
       
    
         </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}
