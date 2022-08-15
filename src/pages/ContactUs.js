import React from 'react';
import Layout from '../layouts/MainLayout';

export default function AboutUs() {
  return (
    <Layout>
    <div className='m-6  text-white '>
          <div className='container mx-auto h-60  p-10 rounded-md  bg-amber-400 '>
            <div className=' text-white md:flex flex  space-x-96'>
                <div className='p-5 my-5 mx-10'>
                      <p className=' text-4xl font-medium py-4'>Contact Us</p>
                </div>
              

            </div>
          </div>


        <div className='container mx-auto h-screen p-10 rounded-md  shadow-md my-10 '>
          <div className=' text-slate-900  '>
              <div className='p-10 mt-10'>
                    <p className=' text-4xl font-medium py-4'>Feedback Form:</p>
                    <p>Fill this form , give us your opinion about us.</p>
              </div>
          
      </div>
    </div>
</div>
</Layout>
  );
}
