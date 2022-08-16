import React from 'react'
import Layout from '../layouts/MainLayout';

export default function AddSkills() {
  return (
    <Layout>
        {/*Hero section*/}
  <div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
      <div className=" mt-11 p-8">
        {' '}
        <div className=" flex flex-col items-center justify-center">
            <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl ">
            Find Freelancer By Thieir Skills,
            <span className="text-blue-900"> Search and add any skills to find your desired freelancers</span>
        </h2></div>
        </div>
    </div>

{/*body*/}
    <div className='container mx-auto rounded-md bg-amber-400 pb-2'>
    <div className="mt-11 pt-8 pl-8 pb-4">
      
        {' '}
        <div className=" flex flex-col  justify-center">
       <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl ">
       Add Any Skills: 
       </h2>
       
      </div>
      <div className=''>dropdowns </div>
    </div>
    </div>
    </Layout>
  );
}
