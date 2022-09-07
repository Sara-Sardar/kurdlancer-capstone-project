import Layout from "../layouts/MainLayout";
import React, { useState } from "react";
//import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ContactUS() {
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
    dispatch(ContactUS(form.username));
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
      <div className="m-6  text-white ">
        <div className="container mx-auto h-60  p-12 rounded-md  bg-amber-400 ">
          <div className=" text-white md:flex flex  space-x-96">
            <div className="p-5 my-5 mx-10">
              <p className=" text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl">
                Contact Us
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto h-screen p-10 rounded-md  shadow-md my-10 ">
          <div className="   ">
            <div className="flex flex-col justify-center items-center">
              <p className="  text-2xl tracking-tight font-bold text-amber-400 sm:text-2xl md:text-4xl pb-3">
                Feedback Form:
              </p>
              <p className="text-lg text-blue-900">
                Fill this form , give us your opinion about us.
              </p>
              {/*form*/}

              <div className=" p-10 flex items-center justify-center ">
                <div className="container mx-auto flex items-center justify-center">
                  <div className="bg-white p-10 rounded-lg shadow-xl w-96">
                    <form className="grid grid-cols-1">
                      <h2 className="text-center mb-5 text-2xl font-bold text-amber-400">
                        Contact Us Form
                      </h2>

                      <label
                        className="text-amber-400 font-medium"
                        htmlFor="usernsme "
                      >
                        Full Name
                      </label>
                      <input
                        className="bg-gray-100 rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"
                        type="text"
                        name="usernsme"
                        id="usernsme"
                        value={form.text || ""}
                      />
                      <label
                        className="text-amber-400 font-medium "
                        htmlFor="password"
                      >
                        Email
                      </label>
                      <input
                        className="bg-gray-100 rounded-md mb-3 mt-1  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"
                        type="text"
                        name="password"
                        id="password"
                        value={form.text || ""}
                      />
                      <label
                        className="text-amber-400 font-medium"
                        htmlFor="usernsme "
                      >
                        Feedback:
                      </label>
                      <textarea
                        className='bg-gray-100 rounded-md mb-3 mt-1 text-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white"'
                        value=" Write your feedback here..."
                        onChange={handleChange}
                      />

                      <button className="bg-amber-400 px-3 py-2 text-lg font-medium mt-4 hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              {/*form*/}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
