import React from 'react'
import { Link } from 'react-router-dom';


export default function Signup() { 
  return (
    
       <div className="bg-amber-500 min-h-screen p-10 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-xl w-96">
         <form className='grid grid-cols-1'>
          <h2 className='text-center mb-5 text-2xl font-bold text-amber-400'>Signup Page</h2>
          
           <label className='text-amber-400 font-medium' htmlFor="usernsme ">Username</label> 
           <input className='bg-gray-100 rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" />
           <label className='text-amber-400 font-medium ' htmlFor="password">Password</label> 
           <input className='bg-gray-100 rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="password" id="password" />
        
        <button className="bg-amber-400 px-3 py-2 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Signin</button>
        
        
        <div className="mt-5 text-sm text-gray-500 flex items-center justify-center flex-col">
              <button className="pt-2 underline">Forgot password?</button>
              <Link to="/signin" className="pt-2 underline">
                Signin?
              </Link>
              <a href='https://www.facebook.com/campaign/landing.php?&campaign_id=1654929119&extra_1=s%7Cc%7C318714369583%7Ce%7Cfacebook%20com%20login%7C&placement=&creative=318714369583&keyword=facebook%20com%20login&partner_id=googlesem&extra_2=campaignid%3D1654929119%26adgroupid%3D63159116346%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-296947902365%26loc_physical_ms%3D9069852%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjworiXBhDJARIsAMuzAuwt7AQMeYad-a8Yi4THNOYDocpLolSO2Qq8XLuCyyM1EOM0fhiRHIMaAiQ_EALw_wcB' className="pt-2 underline">
              Signup With Facebook?
              </a>
          </div>
         </form>
        </div>
      </div>
    </div>
    
  )
}
