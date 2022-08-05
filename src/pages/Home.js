import React from 'react';
import Layout from '../layouts/MainLayout';
//import Freelancers from './Freelancers';
//import Jobs from './Jobs';
//import PostJobs from './PostJobs';


export default function Home() {
  return <Layout>
    <div className='m-6 text-white '>
          <div className='container mx-auto h-96  rounded-md  bg-amber-400 '>
            <div className=' text-white md:flex flex space-x-96'>
                <div className='p-10 m-10'>
                  <p className='text-4xl font-medium py-4 '>Hire The Best Talent Freelancers In Kurdlancer In KRI,Build Your Business.</p>
                  <p className='text-xl'>Turn Your Ideas Into Reality,</p>
                  <p className='text-xl'>Take Your Carrier To The Next Level.</p>
                </div> 

                <div className="md:shrink-0 p-10">
                  <img className="h-72 w-full object-cover md:h-72 rounded-md md:w-96" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80"  alt="immage not loading"/>
                </div>
            </div>
         </div>
         </div>

         {/*<Freelancers/>
         <Jobs/>
         <PostJobs/>*/}

   </Layout>;}


         

   
