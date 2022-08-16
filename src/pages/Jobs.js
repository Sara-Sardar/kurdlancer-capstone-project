import React from 'react'
import Layout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

export default function Jobs() {
  return <Layout>

<div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
      <div className=" mt-11 p-8">
        {' '}
        <div className=" flex flex-col items-center justify-center mt-11">
       <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl ">
       Find Suitable Jobs, Find Great Works with bigest companies, 
          <span className="text-blue-900"> Make Money.</span>
        </h2></div>
        <p className="text-2xl text-blue-900 mt-3">
        Hire a pro for any skills.
        </p>
       
        

        <div className="mt-12 pt-5 ">
          <Link to="/freelancers" className="shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold mr-4">
           Freelancers
          </Link>
          <Link to="/jobs" className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold mr-4">
            Jobs
          </Link>
          <Link to="/postjobs" className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold">
            Post Jobs
          </Link>
        </div>
      </div>
      <div className="bg-red-300">
        <img
          className="h-full w-auto object-cover "
          src="https://images.unsplash.com/photo-1486607303850-bc051a4ffad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80" 
          alt="woman holding bags while shopping"
        />
      </div>
    </div>






   


        <div className='container mx-auto h-screen p-10 rounded-md  bg-amber-400 mt-10'>
              <div className=' text-white md:flex flex space-x-96'>
                  <div className='p-10 m-10'>
                        <p className=' text-4xl font-medium py-4'>Jobs List:</p>
                  </div>
                  

                    <div className="md:shrink-0">
                      <img className="h-96 w-full object-cover md:h-full md:w-96 rounded-md "  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="immage not loading"/>
                    </div>

              </div>
            </div>


    
    
  </Layout>;
}
