import React from 'react';
//import Freelancers from './Freelancers';
//import Jobs from './Jobs';
//import PostJobs from './PostJobs';


export default function Home() {
  return (
    <div className='m-6 text-white bg-orange-200 '> Home page
          <div className='container mx-auto h-96  p-10 rounded-md  bg-amber-400 '>
            <div className=' text-white md:flex flex space-x-96'>
                <div className='p-10 m-10'>
                  <p className='text-4xl font-medium py-4 '>Find Best Freelancers,</p>
                  <p className='text-xl'>Work with in-demand global talent </p>
                  <p className='text-xl'>who are at the top of their field</p>
                </div> 

                <div className="md:shrink-0">
                  <img className="h-96 w-full object-cover md:h-full rounded-md md:w-96" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80"  alt="immage not loading"/>
                </div>
            </div>
         </div>

         {/*<Freelancers/>
         <Jobs/>
         <PostJobs/>*/}

    </div>
  )
}
