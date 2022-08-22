import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/MainLayout'
//import FreelancersProfile from './FreelancersProfile';
export default function Signin() { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    // Make POST request to the /login API endpoint

    // if successful => JWT token is returned
    dispatch(Signin(form.username));
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
          <h2 className='text-center mb-5 text-2xl font-bold text-amber-400'>SignIn Page</h2>
          
           <label className='text-amber-400 font-medium' htmlFor="usernsme ">Username</label> 
           <input className='bg-gray-100 rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="username" id="username" value={form.username || ''}
              onChange={onChangeHandler} />
           <label className='text-amber-400 font-medium ' htmlFor="password">Password</label> 
           <input className='bg-gray-100 rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="password" id="password" value={form.password || ''}
              onChange={onChangeHandler} />
        { <Link to="/freelancersprofile" type="submit" className="bg-amber-400 pl-32 px-3 py-2 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Signin</Link>
        ? (
                  <>
                     <Link to="/freelancersprofile" type="submit" className="bg-amber-400 pl-32 px-3 py-2 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Signin</Link>
        
                  </>
                ) : (
                  <Link to="/Companyprofile" type="submit" className="bg-amber-400 pl-32 px-3 py-2 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Signin</Link>
        
                )}

       
        
        <div className="mt-5 text-sm text-gray-500 flex items-center justify-center flex-col">
              <button className="pt-2 underline">Forgot password?</button>
              <Link to="/signup" className="pt-2 underline">
                Signup?
              </Link>
              <a href='https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjU5ODMyNDk5LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D' className="pt-2 underline">
              Signin With Facebook?
              </a>
          </div>
         </form>
        </div>
      </div>
    </div>
    </Layout>
  );
}
