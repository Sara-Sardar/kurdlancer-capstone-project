import Layout from "../layouts/MainLayout";
import { Link } from "react-router-dom";
//import AllFreelancers from '../components/AllFreelancers';
import React, { useEffect, useState } from "react";
export default function Freelancers() {
  return (
    <Layout>
      <div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
        <div className=" mt-11 p-8">
          {" "}
          <div className=" flex flex-col items-center justify-center mt-11">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl ">
              For Clients, Make it real with the best
              <span className="text-blue-900"> Freelancers,</span>
            </h2>
          </div>
          <p className="text-2xl text-blue-900 mt-3">
            Hire a pro for any skills.
          </p>
          <div className="mt-12 pt-5">
            <Link
              to="/freelancers"
              className="shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold mr-4"
            >
              Freelancers
            </Link>
            <Link
              to="/jobs"
              className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold mr-4"
            >
              Jobs
            </Link>
            <Link
              to="/postjobs"
              className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold"
            >
              Post Jobs
            </Link>
          </div>
        </div>
        <div className="bg-red-300">
          <img
            className="h-full w-auto object-cover "
            src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="woman holding bags while shopping"
          />
        </div>
      </div>

      <div className="container mx-auto h-full  rounded-md  bg-amber-400 mt-10">
        <div className=" text-white space-x-70 relative">
          <div className="p-10">
            <p className=" text-4xl font-medium py-4">Freelancers List:</p>

            {/*freelancers carts list*/}
            {/*start carasoul1*/}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-0 pb-10 ml-20 mt-5">
              {/*card1*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64  bg-white pb-4  rounded-lg  border-gray-200 shadow-md "
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1621140122187-3c03fe00d223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Alan Soran
                  </h5>

                  <p className=" mb-3 font-normal text-gray-700 ">
                    Skills: UX/UI Designer
                  </p>
                  <p className="mb-3 font-normal text-gray-700 ">
                    Location:Slemani
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card2*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64  bg-white pb-4  rounded-lg  border-gray-200 shadow-md "
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Hawren Abdulla
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: Web Devloper
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Erbil
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card3*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64  bg-white pb-4  rounded-lg  border-gray-200 shadow-md 0"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1627660692856-bc032e058cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Tara Ali
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: UX/UI Designer
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Dhok
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card4*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Lana Karem
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: Graphic Designer
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Dhok
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>
            </div>
            {/*end carasoul1*/}

            {/*start carasoul2*/}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-0 pb-10 ml-20">
              {/*card1*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1527565290982-018bcfdbee74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Dalia Jamal
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: HR & Training
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location:Halabja
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card2*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Nahla Abas
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: Accounting
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Kerkuk
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card3*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Tara Ali
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: UX/UI Designer
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Dhok
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card4*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Sharo Sardar
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: Graphic Designer
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Dhok
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>
            </div>
            {/*end carasoul2*/}

            {/*start carasoul3*/}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-0 pb-10 ml-20">
              {/*card1*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1610631066894-62452ccb927c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Soma Azad
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: Translator
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location:Slemani
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card2*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1573497161529-95eb65b7a2fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Ala Abdulla
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: Back-End Devloper
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Dhok
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card3*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64 pb-2  bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Shang Bakhtyar
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: Full Stack
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Erbil
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>

              {/*card4*/}

              <Link
                to="/freelancerinfo"
                className="h-min w-64  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                <img
                  className="rounded-t-lg h-72 w-96 object-cover"
                  src="https://images.unsplash.com/photo-1587732279092-23ff8f3573b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt="not loaded"
                />

                <div className="pl-2 flex flex-col justify-center items-center">
                  <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                    Name: Shene Bahzad
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Skills: Graphic Designer
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Location: Dhok
                  </p>

                  <p className="inline-flex items-center py-2 px-3 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
                    View
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </p>
                </div>
              </Link>
            </div>
            {/*end carasoul3*/}
          </div>
        </div>
      </div>
    </Layout>
  );
}
