import React from 'react';
import Layout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import AddSkils from '../components/AddSkils';
import FreelancerCarasoul from '../components/FreelancerCarasoul';
import JobsCarasoul from '../components/JobsCarasoul';


export default function Home() {
  return <Layout>
    <HeroSection />
    

      


    {/* freelancer section*/}
    <div className='container mx-auto rounded-md bg-amber-400 pb-2'>
    <div className="mt-11 pt-8 pl-8 pb-4">
      
        {' '}
        <div className=" flex flex-col  justify-center">
       <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl ">
         For Clients, Make it real with the best 
          <span className="text-blue-900 "> Freelancers,</span>
        </h2></div>
        <p className="text-2xl text-blue-900 mt-3  font-medium ">
        Hire a pro for any skills.
        </p>
        
      </div>
      <div className='grid grid-cols-3 md:grid-cols-1 mt-4 md:mt-4 sm:grid-cols-1 '><FreelancerCarasoul/></div>
    </div>




     {/* Jobs section*/}
     <div className="container mx-auto rounded-md  bg-amber-400  ">
      <div className="mt-11 pt-8 pl-8 pb-4">
        {' '}
        <div className="flex flex-col  justify-center">
       <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl  ">
       For Freelancers, Find Great Works with bigest companies,
          <span className="text-blue-900"> Make Money.</span>
        </h2></div>
        
      </div>
      <div  className='grid grid-cols-3 md:grid-cols-1 mt-4 md:mt-4 sm:grid-cols-1 '><JobsCarasoul/></div>
    </div>


 {/* Add skils section*/}
      <div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
            <div className=" mt-11 p-8">
              {' '}
              <div className=" flex flex-col items-center justify-center">
                  <h2  className="text-xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl ">
                  Hire A Freelancer For Any 
                      <span className="text-blue-900"> Skills. </span>
                    </h2>
              </div>
              
            </div>
        </div>
<AddSkils/>


    
   </Layout>;}


         

   
