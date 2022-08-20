import React, { useState } from 'react';
import Layout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PostJobs() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [textarea, setTextarea] = useState("The content of a textarea goes in the value attribute" ); //text area
  const handleChange = (event) => {setTextarea(event.target.value)}
    
      


  function submitHandler(e) {
    e.preventDefault();

    // Make POST request to the /login API endpoint

    // if successful => JWT token is returned
    dispatch(PostJobs(form.username));
    navigate('/', { replace: true });
    // if rejected =>  error telling u what's going on (username doesn't exist)



    



  }

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));

    console.log(form);
  }


  return <Layout>

  

<div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
      <div className=" mt-11 p-8">
        {' '}
        <div className=" flex flex-col items-center justify-center mt-11">
          <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl ">
          Publish Your Work To Find Best Freelancers, Post Your 
              <span className="text-blue-900"> Work In KRI.</span>
            </h2></div>
        {/*<p className="text-2xl text-blue-900 mt-3">

        </p>*/}
       
        

       <div className="mt-12 pt-5">
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
          src="https://images.unsplash.com/photo-1601933974703-d25155828f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
          alt="woman holding bags while shopping"
        />
      </div>
    </div>





   
              


{/*body*/}
        <div className='container mx-auto h-full rounded-md  bg-amber-400 mt-10'>
          <div className=' text-white '>
              <div className='p-10 m-10'>
                    <p className=' text-4xl font-medium py-4'>Lets start posting a job,</p>
                    <p className='text-xl mb-10'>Fill the below form :</p>
                       
                          {/*start form*/}
                          <div className="bg-amber-400 min-h-screen p-10 flex items-center justify-center rounded-lg ">
                                <div className="container mx-auto flex items-center justify-center  w-1/2">
                                  <div className="bg-white p-10 rounded-lg shadow-xl w-full">
                                  <form className='grid grid-cols-1' action="/action_page.php">
                                    <h2 className='text-center mb-5 text-3xl font-semibold text-amber-400'>Post a job form</h2>
                                    
                                    <label className='text-amber-400 font-medium' htmlFor="usernsme ">Company Name:</label>
                                    <input className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" value="Enter your company name/individual name"/>
                                    <label className='text-amber-400 font-medium' htmlFor="usernsme ">Project Owner Name:</label>
                                    <input className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" value="Ali Kareem" />
                                    <label className='text-amber-400 font-medium' htmlFor="usernsme ">Project Type:</label>
                                    <input className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" value="Design and creatives"/>
                                    <label className='text-amber-400 font-medium' htmlFor="usernsme ">Skill Requied:</label>
                                   <input className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" value="UX/UI Designer"/>
                                    
                                    <div className='grid grid-cols-4 p-5 '> {/*chakika*/}
                                    <label className='text-amber-400  font-medium' htmlFor="usernsme ">City:</label>
                                    <input className='bg-gray-100 pr-5 text-gray-400 p-1  font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" value="Erbil"/>
                                    <label className='text-amber-400 font-medium' htmlFor="usernsme ">Zip Code:</label>
                                    <input className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" value="44001"/>
                                    </div> 
                                    <label className='text-amber-400 font-medium' htmlFor="usernsme ">Payment Method:</label>
                                    <input className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" value="Asia Hawala"/>
                                    <label className='text-amber-400 font-medium ' htmlFor="password">Payment Amount:</label> 
                                    <input className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="password" id="password" value="100$"/>
                                    <label className='text-amber-400 font-medium' htmlFor="usernsme ">Project Duration:</label>
                                    <input className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' type="text" name="usernsme" id="usernsme" value="1 Hour/ 1 Page" />
                                    
                                    <div className='flex flex-row my-3 '>
                                    <label className='text-amber-400 font-medium mt-2 ' htmlFor="usernsme ">Upload a sample of the requied work: </label>
                                    <button type="file" id="myFile" name="filename" className="ml-72 px-2 py-1 mb-2 bg-amber-400  text-md font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white" >Upload</button>
                                    </div>
                                    <div className='flex flex-row my-3 '>
                                    <label className='text-amber-400 font-medium  pr-20' htmlFor="usernsme ">Upload an image:</label>
                                    <button type="file" id="myFile" name="filename" className=" ml-72 px-2 py-1  bg-amber-400  text-md font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white" >Upload</button>
                                    </div> 
                                    <label className='text-amber-400 mb-1 font-medium mt-5' htmlFor="usernsme ">Feedback:</label> 
                                    <textarea className='bg-gray-100 rounded-md mb-3  text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"' value=' Write your feedback here...' onChange={handleChange} />
         
                                    
                                  <Link to="/jobs" className="bg-amber-400 mt-7 pl-64 px-3 py-2 text-lg font-medium  hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">Post Job</Link>
                                  
                                  
                                  
                                  </form>
                                  
                                  </div>
                                </div>
                              </div>
                          {/*end form*/}

                </div>
          </div>
        </div>





    
    </Layout>;
}
