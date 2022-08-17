import React from 'react'
import Layout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

export default function JobInfo() {
  return (
    <Layout>

        <div className='bg-amber-400 h-full w-auto flex justify-center m-10 rounded-md p-10'>
         {/*card1*/}
                <Link to='/email' className="h-min w-96  bg-white pb-4  rounded-lg  border-gray-200 shadow-md ">
                                            
                                            <img className="rounded-t-lg h-72 w-96 object-cover" src="https://cards2pay.com/wp-content/uploads/2021/05/asiacell.png" alt="not loaded" />
                                            
                                        
                                            <div className='pl-2 flex flex-col justify-center items-center'>
                                                    <h5 className="mb-2 pt-2 pl-2 text-xl font-semibold  text-amber-400">Company Name: Asiacell</h5>
                                                
                                                    <p className=" mb-3 pl-2 font-normal text-gray-700 ">Skill Requied: UX/UI Designer</p>
                                                    <p className="mb-3 pl-2 font-normal text-gray-700 ">Location:Slemani</p>
                                                    <p className=" mb-3 pl-2 font-normal text-gray-700 ">Requied: UX/UI Designer</p>
                                                    <p className="mb-3 pl-2 font-normal text-gray-700 ">Location:Slemani</p>
                                                    <p className=" mb-3 pl-2 font-normal text-gray-700 ">Project owner name: Mhamad ali</p>
                                                    <p className="mb-3 pl-2 font-normal text-gray-700 ">Project type: Design and creative.</p>
                                                    <p className=" mb-3 pl-2 font-normal text-gray-700 ">payment method: total 1500$</p>
                                                    <p className="mb-3 pl-2 font-normal text-gray-700 ">Project deadline: 1 Weak.</p>
                                                    <p className=" mb-3 pl-2 font-normal text-gray-700 ">Email: mhamad@gmail.com</p>
                                                    <p className="mb-3 pl-2 font-normal text-gray-700 ">Phone number: +964 770 132 7685</p>
                                                    <p className=" mb-3 pl-2 font-normal text-gray-700 ">Work number: +964 770 132 7685</p>
                                                    <p className="mb-3 pl-2 font-normal text-gray-700 ">Sample of the requierd work:</p>
                                                    <img className='w-60 h-60 rounded-lg mx-5 ' src='https://images-platform.99static.com//99h9s3-khhJ39dJvrg8nirBK9B8=/0x0:1600x1600/fit-in/500x500/99designs-contests-attachments/61/61420/attachment_61420639' alt='not loading'/>

                                                    <p className="m-10  inline-flex items-center ml-2 py-3 px-10 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                                                    Start The Job
                                                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    </p>
                                            </div>
                                    </Link>
            </div>
    </Layout>
  )
}
