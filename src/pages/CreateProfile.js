import React, { useState } from "react";
import Layout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FreelancersProfile from "./FreelancersProfile";
export default function CreateProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  ); //text area
  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  function submitHandler(e) {
    e.preventDefault();

    // Make POST request to the /login API endpoint

    // if successful => JWT token is returned
    dispatch(CreateProfile(form.username));
    navigate("/", { replace: true });
    // if rejected =>  error telling u what's going on (username doesn't exist)
  }

  function onChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));

    console.log(form);
  }
  return (
    <Layout>
      <div className="container mx-auto text-white pt-10 ">
        <div className="container mx-auto h-60  p-12 rounded-md  bg-amber-400 ">
          <div className=" text-white md:flex flex  space-x-96">
            <div className="p-5 my-5 mx-10">
              <p className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                Create Profile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*body*/}
      <div className="container mx-auto h-full rounded-md  bg-amber-400 mt-10 ">
        <div className=" text-white ">
          <div className="p-10 m-10">
            <p className=" text-4xl font-medium py-4">Lets Create Profile</p>
            <p className="text-xl mb-10">Fill the below form :</p>

            {/*start form*/}
            <div className="bg-amber-400 min-h-screen p-10 flex items-center justify-center rounded-lg ">
              <div className="container mx-auto flex items-center justify-center  w-1/2">
                <div className="bg-white p-10 rounded-lg shadow-xl w-full">
                  <form className="grid grid-cols-1" action="/action_page.php">
                    <h2 className="text-center mb-5 text-3xl font-semibold text-amber-400">
                      Create Profile Form
                    </h2>

                    <label
                      className="text-amber-400 font-medium"
                      htmlFor="usernsme "
                    >
                      Create Your Profile Using
                    </label>
                    <input
                      className='bg-gray-100 text-gray-400 p-2 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="Import from Linkedin"
                    />
                    <input
                      className='bg-gray-100 text-gray-400 p-2 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="Aplod your resume"
                    />
                    <input
                      className='bg-gray-100 text-gray-400 p-2 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="Fill out manually ( 15 min )"
                    />

                    <p
                      className="align-middle text-amber-400 font-medium"
                      htmlFor="usernsme "
                    >
                      Are You Ready To Create Your Profile? Lets Start
                    </p>

                    <label
                      className="text-amber-400 font-medium"
                      htmlFor="usernsme "
                    >
                      Full Name:
                    </label>
                    <input
                      className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="Enter Your Name"
                    />
                    <label
                      className="text-amber-400 font-medium"
                      htmlFor="usernsme "
                    >
                      Password
                    </label>
                    <input
                      className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="Enter Your Password"
                    />
                    <label
                      className="text-amber-400 font-medium"
                      htmlFor="usernsme "
                    >
                      Email
                    </label>
                    <input
                      className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="name@gmail.com"
                    />
                    <label
                      className="text-amber-400 font-medium"
                      htmlFor="usernsme "
                    >
                      Gender
                    </label>
                    <input
                      className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="Choose Gender"
                    />

                    <div className="grid grid-cols-4 p-5 ">
                      {" "}
                      {/*chakika*/}
                      <label
                        className="text-amber-400  font-medium"
                        htmlFor="usernsme "
                      >
                        Birthday
                      </label>
                      <input
                        className='bg-gray-100 pr-5 text-gray-400 p-1  font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                        type="text"
                        name="usernsme"
                        id="usernsme"
                        value="DD/MM/YYYY"
                      />
                      <label
                        className="text-amber-400 font-medium"
                        htmlFor="usernsme "
                      >
                        City
                      </label>
                      <input
                        className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                        type="text"
                        name="usernsme"
                        id="usernsme"
                        value="Erbil"
                      />
                    </div>
                    <label
                      className="text-amber-400 font-medium"
                      htmlFor="usernsme "
                    >
                      Zip Code:
                    </label>
                    <input
                      className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="#####"
                    />
                    <label
                      className="text-amber-400 font-medium "
                      htmlFor="password"
                    >
                      Phone Number
                    </label>
                    <input
                      className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="password"
                      id="password"
                      value="+941(#### ### ## ##)"
                    />
                    <label
                      className="text-amber-400 font-medium"
                      htmlFor="usernsme "
                    >
                      Work Number
                    </label>
                    <input
                      className='bg-gray-100 text-gray-400 p-1 font-light text-sm rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      type="text"
                      name="usernsme"
                      id="usernsme"
                      value="+941(#### ### ## ##)"
                    />

                    <div className="flex flex-row my-3 ">
                      <label
                        className="text-amber-400 font-medium mt-2 "
                        htmlFor="usernsme "
                      >
                        Upload your picture
                      </label>
                      <button
                        type="file"
                        id="myFile"
                        name="filename"
                        className="ml-72 px-2 py-1 mb-2 bg-amber-400  text-md font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"
                      >
                        Upload
                      </button>
                    </div>

                    <label
                      className="text-amber-400 mb-1 font-medium mt-5"
                      htmlFor="usernsme "
                    >
                      Comment
                    </label>
                    <textarea
                      className='bg-gray-100 rounded-md mb-3  text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                      value=" Write your comment here..."
                      onChange={handleChange}
                    />

                    <Link
                      to="/freelancersprofile"
                      className="bg-amber-400 mt-7 pl-64 px-3 py-2 text-lg font-medium  hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"
                    >
                      Create Profile
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            {/*end form*/}
          </div>
        </div>
      </div>
    </Layout>
  );
}
