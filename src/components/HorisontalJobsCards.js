import React from 'react'
import RatingStars from './RatingStarts'
import { Link } from 'react-router-dom';
export default function HorisontalJobsCards() {
  return (
    
    <div >





      <h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl'>Jobs for your skills :</h1>
      {/*card 1*/}
      <Link to={'/jobs'} className="container mt-5 mx-auto grid grid-cols-2 divide-x-2 rounded-md  bg-blue-900 py-5">
        <div className="px-10">
          <h2 className="text-md text-white font-medium mt-2 mb-2">Company Name: Asia cell</h2>
          <p className="text-sm text-white text-justify">Job position: Website desiner</p>
          <p className="text-sm text-white text-justify">Location: Erbil</p> 
          <p className="text-sm text-white text-justify">Skills requierd: UX/UI Designer</p>
          <p className="text-sm text-white text-justify mb-5">Payment: 700$</p>
          
          <div className="flex justify-between ">
          <div className='mb-5'><RatingStars/></div>
          <div><p className="text-sm text-amber-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          </p></div>
        </div>

        <button className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-3 py-2 rounded-lg  font-semibold   mb-5  text-xs  ">
              View 
            </button>

        </div>
        <div className="px-10 ">
          <img className='rounded w-1/2' src="https://cards2pay.com/wp-content/uploads/2021/05/asiacell.png" alt="not loading" />
        </div>
      </Link>



{/*card 2*/}
<Link to={'/jobs'} className="container mt-5 mx-auto grid grid-cols-2 divide-x-2 rounded-md  bg-blue-900 py-5">
        <div className="px-10">
          <h2 className="text-md text-white font-medium mt-2 mb-2">Company Name: Asia cell</h2>
          <p className="text-sm text-white text-justify">Job position: Website desiner</p>
          <p className="text-sm text-white text-justify">Location: Erbil</p> 
          <p className="text-sm text-white text-justify">Skills requierd: UX/UI Designer</p>
          <p className="text-sm text-white text-justify mb-5">Payment: 700$</p>
          
          <div className="flex justify-between ">
          <div className='mb-5'><RatingStars/></div>
          <div><p className="text-sm text-amber-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path stroke-linecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg></p></div>
        </div>

        <button className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-3 py-2 rounded-lg  font-semibold   mb-5  text-xs  ">
              View 
            </button>

        </div>
        <div className="px-10 ">
          <img className='rounded w-1/2' src="https://cards2pay.com/wp-content/uploads/2021/05/asiacell.png" alt="not loading" />
        </div>
      </Link>


{/*card 3*/}
<Link to={'/jobs'} className="container mt-5 mx-auto grid grid-cols-2 divide-x-2 rounded-md  bg-blue-900 py-5 mb-20  ">
        <div className="px-10">
          <h2 className="text-md text-white font-medium mt-2 mb-2">Company Name: Asia cell</h2>
          <p className="text-sm text-white text-justify">Job position: Website desiner</p>
          <p className="text-sm text-white text-justify">Location: Erbil</p> 
          <p className="text-sm text-white text-justify">Skills requierd: UX/UI Designer</p>
          <p className="text-sm text-white text-justify mb-5">Payment: 700$</p>
          
          <div className="flex justify-between ">
          <div className='mb-5'><RatingStars/></div>
          <div><p className="text-sm text-amber-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path stroke-linecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg></p></div>
        </div>

        <button className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-3 py-2 rounded-lg  font-semibold   mb-5  text-xs  ">
              View 
            </button>

        </div>
        <div className="px-10 ">
          <img className='rounded w-1/2' src="https://cards2pay.com/wp-content/uploads/2021/05/asiacell.png" alt="not loading" />
        </div>
      </Link>

            <div className='flex justify-center'>
                <Link to="/freelancers" className=" shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold ">
                 View More Jobs
                </Link>
            </div>
            




    </div>

  );
}
