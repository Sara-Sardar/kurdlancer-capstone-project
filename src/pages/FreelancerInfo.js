import React from "react";
import Layout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

export default function FreelancerInfo() {
  return (
    <Layout>
      <div className="bg-amber-400 h-full w-auto flex justify-center m-10 rounded-md p-10">
        {/*card1*/}

        <Link
          to="/emails"
          className="h-min w-96  bg-white pb-4  rounded-lg  border-gray-200 shadow-md  "
        >
          <img
            className="rounded-t-lg h-72 w-96 object-cover"
            src="https://images.unsplash.com/photo-1621140122187-3c03fe00d223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="not loaded"
          />

          <div className="pl-2 flex flex-col justify-center items-center">
            <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
              Freelancer Name: Alan Soran
            </h5>

            <p className=" mb-3 font-normal text-gray-700 ">
              Requied Skills: UX/UI Designer
            </p>
            <p className="mb-3 font-normal text-gray-700 ">Location:Slemani</p>

            <p className="mb-3 pl-2 font-normal text-gray-700 ">
              Project type: Design and creative.
            </p>
            <p className=" mb-3 pl-2 font-normal text-gray-700 ">
              payment method: 1 page/100${" "}
            </p>
            <p className="mb-3 pl-2 font-normal text-gray-700 ">
              Project deadline: 1 Hour/100$.
            </p>
            <p className=" mb-3 pl-2 font-normal text-gray-700 ">
              Email: Ala.soran@gmail.com
            </p>
            <p className="mb-3 pl-2 font-normal text-gray-700 ">
              Phone number: +964 770 132 7685
            </p>
            <p className=" mb-3 pl-2 font-normal text-gray-700 ">
              Work number: +964 770 132 7685
            </p>
            <p className="mb-3 pl-2 font-normal text-gray-700 ">CV</p>

            <p className="m-10  inline-flex items-center ml-2 py-3 px-10 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
              Hire Freelancer
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillrulcliprule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
