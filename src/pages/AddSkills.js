import React from "react";
import Layout from "../layouts/MainLayout";
import Tabs from "../components/Tabs";
import { Link } from "react-router-dom";
import DropdwonSkill from "../components/DropdwonSkill";
import { Carousel } from "react-responsive-carousel";
export default function AddSkills() {
  return (
    <Layout>
      <div className="container  rounded-md   mx-auto flex justify-center mt-8 md:mt-0 ">
        <div className="  ">
          {" "}
          <div className=" flex items-center justify-center">
            <Tabs />
          </div>
        </div>
      </div>

      {/*Hero section*/}
      <div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
        <div className=" my-5 p-8">
          {" "}
          <div className=" flex flex-col items-center justify-center">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl ">
              Find Freelancer By Their Skills,
              <span className="text-white">
                {" "}
                Search and add any skills to find your
              </span>
              <span className="text-blue-900"> desired freelancers.</span>
            </h2>
          </div>
        </div>
      </div>

      {/*body*/}
      <div className="container mx-auto rounded-md bg-amber-400 pb-2">
        <div className="mt-11 pt-8 pl-8 pb-4">
          {" "}
          {/* Add skils section*/}
          <div className="container mx-auto rounded-md   ">
            <div className="mt-11 pt-8 pl-8 ">
              {" "}
              <div className="flex flex-col  justify-center">
                <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl  ">
                  Hire A Freelancer For Any
                  <span className="text-blue-900"> Skills.</span>
                </h2>
              </div>
            </div>

            <div className=" grid grid-cols-2">
              <div>
                {/*Dropdown skill */}
                <DropdwonSkill />
              </div>

              <div
                className="pl-28
          "
              >
                <Carousel
                  showArrows={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={2500}
                  showIndicators={false}
                  showStatus={false}
                  showThumbs={false}
                >
                  {/*start carasoul1*/}
                  <div className=" grid grid-cols-1  pl-96 pb-10 ml-96 mt-5 ">
                    {/*card1*/}

                    <Link
                      to="./freelancers"
                      className="h-min w-96  bg-white pb-4  rounded-lg  border-gray-200 shadow-md "
                    >
                      <img
                        className="rounded-t-lg h-72 w-96 object-cover"
                        src="https://images.unsplash.com/photo-1621140122187-3c03fe00d223?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                        alt="not loaded"
                      />

                      <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                        Name: Alan Soran
                      </h5>

                      <p className=" mb-3 font-normal text-gray-700 ">
                        Skills: UX/UI Designer
                      </p>
                      <p className="mb-3 font-normal text-gray-700 ">
                        Location:Slemani
                      </p>

                      <p className="inline-flex items-center py-2 px-10 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
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
                    </Link>
                  </div>

                  {/*card2*/}
                  <div className=" grid grid-cols-1 gap-y-80 w-96 gap-x-80 pl-96 pb-10 ml-96 mt-5">
                    <Link
                      to="./freelancers"
                      className="h-min w-96  bg-white pb-4  rounded-lg  border-gray-200 shadow-md "
                    >
                      <img
                        className="rounded-t-lg h-72 w-96 object-cover"
                        src="https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt="not loaded"
                      />

                      <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                        Name: Hawren Abdulla
                      </h5>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Skills: Web Devloper
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Location: Erbil
                      </p>

                      <p className="inline-flex items-center py-2 px-10 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
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
                    </Link>
                  </div>
                  {/*card3*/}
                  <div className=" grid grid-cols-1 gap-y-80 gap-x-80 pl-96 pb-10 ml-96 mt-5">
                    <Link
                      to="./freelancers"
                      className="h-min w-96  bg-white pb-4  rounded-lg  border-gray-200 shadow-md 0"
                    >
                      <img
                        className="rounded-t-lg h-72 w-96 object-cover"
                        src="https://images.unsplash.com/photo-1627660692856-bc032e058cc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                        alt="not loaded"
                      />

                      <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                        Name: Tara Ali
                      </h5>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Skills: UX/UI Designer
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Location: Dhok
                      </p>

                      <p className="inline-flex items-center py-2 px-10 bg-amber-400  text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
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
                    </Link>
                  </div>

                  {/*card4*/}
                  <div className=" grid grid-cols-1 gap-y-80 gap-x-80 pl-96 pb-10 ml-96 mt-5">
                    <Link
                      to="./freelancers"
                      className="h-min w-96  pb-2 bg-white rounded-lg  border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                    >
                      <img
                        className="rounded-t-lg h-72 w-96 object-cover"
                        src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                        alt="not loaded"
                      />

                      <h5 className="mb-2 pt-2 text-xl font-semibold  text-amber-400">
                        Name: Lana Karem
                      </h5>

                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Skills: Graphic Designer
                      </p>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Location: Dhok
                      </p>

                      <p className="inline-flex items-center py-2 px-10 bg-amber-400 text-sm font-medium hover:bg-amber-300 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
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
                    </Link>
                  </div>

                  {/*end carasoul1*/}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
