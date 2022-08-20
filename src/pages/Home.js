import React from 'react';
import Layout from '../layouts/MainLayout';
import HeroSection from '../components/HeroSection';
import FreelancerCarasoul from '../components/FreelancerCarasoul';
import JobsCarasoul from '../components/JobsCarasoul';
import '../App.css'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Choose from './Choose';
import Dropdown from '../components/Dropdown';


export default function Home() {
  return <Layout>
    {/*<Categories/>*/}
    <HeroSection />
    

      


    {/* freelancer section*/}
    <div className='container mx-auto rounded-md bg-amber-400 pb-2'>
    <div className="mt-11 pt-8 pl-8 pb-4">
      
        {' '}
        <div className=" flex flex-col  justify-center">
       <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl ">
         For Clients, Make it real with the best 
          {/*<input type="text" id="search-navbar" class="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>*/}
          <span className="text-blue-900 "> Freelancers,</span>
        </h2></div>
        <p className="text-2xl text-blue-900 mt-3  font-medium ">
        Hire a pro for any skills.
        </p>
        
        
      </div>
      <div className=''><FreelancerCarasoul/></div>
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
 <div className="container mx-auto rounded-md  bg-amber-400  ">
      <div className="mt-11 pt-8 pl-8 pb-4">
        {' '}
        <div className="flex flex-col  justify-center">
       <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl  ">
        Hire A Freelancer For Any 
        <span className="text-blue-900"> Skills.</span>
        </h2></div>
      </div>



      <div className='m-5 grid grid-cols-2'>

        <div >
          <p className='mb-5'>dropdown </p>
          
         
        <button id="dropdownRightButton" data-dropdown-toggle="dropdownRight" data-dropdown-placement="right"  class="mr-3 mb-3 md:mb-0 text-white px-6 py-4 rounded-lg text-xl font-semibold bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown right <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>

          {/*Dropdown menu*/ }
          <div id="dropdownLeft" class=" hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="left" > {/*style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(-229.6px, 180px, 0px);"*/}
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLeftButton">
                <li>
                  <a href="/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                  <a href="/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                </li>
                <li>
                  <a href="/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                  <a href="/" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
              </ul>
          </div>

<div className='mt-5'><Dropdown/></div>
              
        </div>




          <div>Freelancer up on your requied skills

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
                  <div className=' grid grid-cols-1  pl-96 pb-10 ml-96 mt-5 '>

                                  {/*card1*/}
                    
                                  <Link to='./freelancers' className="h-min w-96  bg-white pb-4  rounded-lg  border-gray-200 shadow-md ">
                                        
                                          <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1621140122187-3c03fe00d223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="not loaded" />
                                        
                                      
                                          
                                          <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Alan Soran</h5>
                                      
                                          <p className=" mb-3 font-normal text-gray-700 ">Skills: UX/UI Designer</p>
                                          <p className="mb-3 font-normal text-gray-700 ">Location:Slemani</p>
                                              
                                          <p className="inline-flex items-center py-2 px-10 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                          View
                                              <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                          </p>
                                      
                                  </Link>

                   </div>

                              {/*card2*/}
                              <div  className=' grid grid-cols-1 gap-y-80 w-96 gap-x-80 pl-96 pb-10 ml-96 mt-5'> 
                              <Link to='./freelancers' className="h-min w-96  bg-white pb-4  rounded-lg  border-gray-200 shadow-md ">
                                      
                                      <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="not loaded" />
                                      
                                  
                                      
                                          <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Hawren Abdulla</h5>
                                  
                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Web Devloper</p>
                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Erbil</p>
                                          
                                      <p className="inline-flex items-center py-2 px-10 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                      View
                                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                      </p>
                                  
                              </Link>
              </div>
                              {/*card3*/}
                              <div className=' grid grid-cols-1 gap-y-80 gap-x-80 pl-96 pb-10 ml-96 mt-5'>
                              <Link to='./freelancers' className="h-min w-96  bg-white pb-4  rounded-lg  border-gray-200 shadow-md 0">
                                      
                                      <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1627660692856-bc032e058cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="not loaded" />
                                  
                                  
                                      
                                          <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Tara Ali</h5>
                                  
                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: UX/UI Designer</p>
                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                                          
                                      <p className="inline-flex items-center py-2 px-10 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                      View
                                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                      </p>
                  
                              </Link></div>

                              {/*card4*/}
                              <div className=' grid grid-cols-1 gap-y-80 gap-x-80 pl-96 pb-10 ml-96 mt-5'>
                                <Link to='./freelancers' className="h-min w-96  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                      
                                      <img className="rounded-t-lg h-72 w-96 object-cover" src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" alt="not loaded" />
                                  
                                  
                                      
                                          <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">Name: Lana Karem</h5>
                                  
                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Skills: Graphic Designer</p>
                                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: Dhok</p>
                                          
                                      <p className="inline-flex items-center py-2 px-10 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                      View
                                          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                      </p>
                  
                              </Link></div>

                  
                  {/*end carasoul1*/}

              </Carousel>

        </div>
      </div>

   






      </div>
    
            

   </Layout>;}


         

   
