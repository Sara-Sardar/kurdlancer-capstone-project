import React from 'react'
import HorisontalJobsCards from '../components/HorisontalJobsCards'
import SecondLayout from '../layouts/SecondLayout'

export default function FreelancersProfile() {
  return (
    <SecondLayout >


        <div className='container mx-auto text-white m-10'>
          <div className='container mx-auto h-60  p-12 rounded-md  bg-amber-400 '>
            <div className=' text-white md:flex flex  space-x-96'>
                <div className='p-5 my-5 mx-10'>
                      <p className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl'>Freelancers Profile</p>
                </div>
             </div>
          </div>
        </div>





        <div className='container mx-auto bg-amber-400 p-12 rounded-md '>
          

        <div className='grid grid-cols-2 mb-20'>
  <div><img className='rounded-full w-48 h-48 object-cover' src='https://images.unsplash.com/photo-1621140122187-3c03fe00d223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt='not loading'></img></div>
  <div className='pl-44'>
  <h1 className="text-2xl text-white font-medium mt-2 mb-2">Languages</h1>
  <p className="text-lg text-white text-justify">English: Very good</p>
  <p className="text-lg text-white text-justify">Arabic: Basic</p>
  <p className="text-lg text-white text-justify">Kurdish: Naitive</p></div>
</div>
          
          
          <h2 className="text-2xl text-white font-medium mt-2 mb-2">UX/UI Designer</h2>
          <p className="text-lg text-white text-justify">I'm a good provisional designer of mobile application and website I got taring in very academic and provisional ways I will make a design to be proud of.</p>
          
          <h2 className="text-md text-white font-medium mt-2 mb-2">Skills</h2>
          <p className="text-lg text-white text-justify">Figma, Adope XD</p>
          
          <h2 className="text-md text-white font-medium mt-2 mb-2">Education</h2>
          <p className="text-lg text-white text-justify">Salahaddin university-college of engineering-software department</p>
          
          <h2 className="text-md text-white font-medium mt-2 mb-2">Payment</h2>
          <p className="text-lg text-white text-justify">100$/ 1 hour or 100$/ 1 page</p>
          
</div>


<div className='container mx-auto  p-12 rounded-md  bg-amber-400'><HorisontalJobsCards/></div>
    </SecondLayout>
  )
}
