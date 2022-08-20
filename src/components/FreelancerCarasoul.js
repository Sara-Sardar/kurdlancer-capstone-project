import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

export default function 
() {
  return (
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    //autoPlay={true}
    interval={2500}
    showIndicators={false}
    showStatus={false}
    showThumbs={false}
    >



     {/*start carasoul1*/}
     <div className=' grid grid-cols-4 gap-y-7 gap-x-0 pl-0 pb-10 ml-20 mt-5'>

                    {/*card1*/}
      
                    <Link to='./freelancers' className="h-min w-72  bg-white pb-4  rounded-lg  border-gray-200 shadow-md ">
                          
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1621140122187-3c03fe00d223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="not loaded" />
                           
                        
                            
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Alan Soran</h5>
                        
                            <p className=" mb-3 font-normal text-gray-700 ">Skills: UX/UI Designer</p>
                            <p className="mb-3 font-normal text-gray-700 ">Location:Slemani</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </p>
                            
                        {/**/}<div class="flex justify-between mt-8">
                        <div className='flex items-center'>

                            
                        <div className="flex items-center ml-5">
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        </div>

                                   <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                    <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
                            </div>

                            
                                <div><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>

                             <div className=''>
                             </div>
                                </div>




                    </Link>


       
                {/*card2*/}
                
                <Link to='./freelancers' className="h-min w-72  bg-white pb-4  rounded-lg  border-gray-200 shadow-md ">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="not loaded" />
                        
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Hawren Abdulla</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Web Devloper</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Erbil</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
                    
                        

                         {/**/}<div class="flex justify-between mt-8">
                         <div class="flex items-center">

                            
<div class="flex items-center ml-5">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>

           <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
    </div>

    
        <div> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
</svg>
        </div>

     <div className=''>
     </div>
        </div>


                </Link>

                {/*card3*/}
                
                <Link to='./freelancers' className="h-min w-72  bg-white pb-4  rounded-lg  border-gray-200 shadow-md 0">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1627660692856-bc032e058cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="not loaded" />
                    
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Tara Ali</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: UX/UI Designer</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
    
                </Link>

                {/*card4*/}
                
                <Link to='./freelancers' className="h-min w-72  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" alt="not loaded" />
                    
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Lana Karem</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Graphic Designer</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
    
                </Link>

    </div>
    {/*end carasoul1*/}


             {/*start carasoul2*/}
             <div className=' grid grid-cols-4 gap-y-7 gap-x-0 pl-0 pb-10 ml-20'>

                        {/*card1*/}
      
                        <Link to='./freelancers' className="h-min w-72 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1527565290982-018bcfdbee74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="not loaded" />
                        
                        
                            
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Dalia Jamal</h5>
                        
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: HR & Training</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location:Halabja</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </p>


                            
                                                       
                    </Link>



                {/*card2*/}
                
                <Link to='./freelancers' className="h-min w-72 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="not loaded" />
                    
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Nahla Abas</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Accounting</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Kerkuk</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
                    
                </Link>

                {/*card3*/}
                
                <Link to='./freelancers' className="h-min w-72 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="not loaded" />
                    
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Tara Ali</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: UX/UI Designer</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
    
                </Link>


                     {/*card4*/}
                
                     <Link to='./freelancers' className="h-min w-72  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="not loaded" />
                    
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Sharo Sardar</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Graphic Designer</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
    
                </Link>

    </div>
                    {/*end carasoul2*/}



                    {/*start carasoul3*/}
                    <div className=' grid grid-cols-4 gap-y-7 gap-x-0 pl-0 pb-10 ml-20'>

                        {/*card1*/}
      
                        <Link to='./freelancers' className="h-min w-72  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            
                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" alt="not loaded" />
                        
                        
                            
                                <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Soma Azad</h5>
                        
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Translator</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location:Slemani</p>
                                
                            <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                            View
                                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </p>
                        
                    </Link>



                {/*card2*/}
                
                <Link to='./freelancers' className="h-min w-72 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1573497161529-95eb65b7a2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="not loaded" />
                    
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Ala Abdulla</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Back-End Devloper</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
                    
                </Link>

                {/*card3*/}
                
                <Link to='./freelancers' className="h-min w-72 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="not loaded" />
                    
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Shang Bakhtyar</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Full Stack</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Erbil</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
    
                </Link>



                  {/*card4*/}
                
                  <Link to='./freelancers' className="h-min w-72  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        
                        <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1587732279092-23ff8f3573b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80" alt="not loaded" />
                    
                    
                        
                            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Shene Bahzad</h5>
                    
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Graphic Designer</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                            
                        <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        View
                            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </p>
    
                </Link>

    </div>
                    {/*end carasoul3*/}
                
            </Carousel>
  );
}
