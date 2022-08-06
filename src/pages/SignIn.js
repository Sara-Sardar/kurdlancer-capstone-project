import React from 'react'

export default function Signin() { 
  return (
    
       <div className="bg-amber-400 min-h-screen p-10 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-xl w-96">
         <form className='grid grid-cols-1'>
          <h2 className='text-center mb-5 text-2xl font-bold text-amber-400'>SignIn Page</h2>
          
           <label className='text-amber-400 font-medium' htmlFor="usernsme ">Username</label> 
           <input className='bg-gray-100 rounded-md mb-3 mt-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" />
           <label className='text-amber-400 font-medium ' htmlFor="password">Password</label> 
           <input className='bg-gray-100 rounded-md mb-3 mt-1 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="password" id="password" />
        
        <button className="bg-amber-400 px-3 py-2 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Signin</button>
        
        
        <div className="mt-8 text-sm text-gray-500 flex items-center justify-center flex-col">
              <button className=" underline">Forgot password?</button>{' '}
              <br />
              <button className="  underline">
                Signup?
              </button>
              <button className="  underline">
              Log In With Facebook
              </button>
          </div>
         </form>
        </div>
      </div>
    </div>
    
  )
}
