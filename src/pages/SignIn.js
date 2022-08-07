import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() { 
  return (
    
       <div className="bg-amber-500 min-h-screen p-10 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-xl w-96">
         <form className='grid grid-cols-1'>
          <h2 className='text-center mb-5 text-2xl font-bold text-amber-400'>SignIn Page</h2>
          
           <label className='text-amber-400 font-medium' htmlFor="usernsme ">Username</label> 
           <input className='bg-gray-100 rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" />
           <label className='text-amber-400 font-medium ' htmlFor="password">Password</label> 
           <input className='bg-gray-100 rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="password" id="password" />
        
        <button className="bg-amber-400 px-3 py-2 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Signin</button>
        
        
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
    
  )
}
