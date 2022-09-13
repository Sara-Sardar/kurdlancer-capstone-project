import React from "react";
import Layout from "../layouts/MainLayout";
import HeroSection from "../components/HeroSection";
import FreelancerCarasoul from "../components/FreelancerCarasoul";
import JobsCarasoul from "../components/JobsCarasoul";
import "../App.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import DropdwonSkill from "../components/DropdwonSkill";
import Trans from "../components/Trans";
import { useTranslation } from "react-i18next";

//import ContactList from "../components/ContactList";

export default function Home() {
  const { t, i18n } = useTranslation("common");
  return (
    <Layout>
      {" "}
      {/*<Categories/>*/}
      <HeroSection />
      {/* freelancer section*/}
      <div className="container mx-auto rounded-md bg-amber-400 pb-2">
        <div className="mt-11 pt-8 pl-8 pb-4">
          {" "}
          <div className=" flex flex-col  justify-center">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl ">
              {t("translation.For Clients, Make it real with the best")}
              <span className="text-blue-900 ">
                {" "}
                {t("translation.Freelancers")}
              </span>
            </h2>
          </div>
          <p className="text-2xl text-blue-900 mt-3  font-medium ">
            {t("translation.Hire a pro for any skills")}
          </p>
        </div>
        <div className="mt-5">
          <FreelancerCarasoul />
        </div>
      </div>
      {/* Jobs section*/}
      <div className="container mx-auto rounded-md  bg-amber-400  pb-2">
        <div className="mt-11 pt-8 pl-8 pb-4">
          {" "}
          <div className="flex flex-col  justify-center">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl  ">
              {t(
                "translation.For Freelancers, Find Great Works With Bigest Companies"
              )}{" "}
              <span className="text-blue-900 ">
                {" "}
                {t("translation.Make Money.")}
              </span>
            </h2>
          </div>
        </div>
        <div className="mt-5">
          <JobsCarasoul />
        </div>
      </div>
      {/* Add skils section*/}
      <div className="container mx-auto rounded-md  bg-amber-400  ">
        <div className="mt-11 pt-8 pl-8 ">
          {" "}
          <div className="flex flex-col  justify-center">
            <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-3xl md:text-3xl  ">
              {t("translation.Hire A Freelancer For Any")}
              <span className="text-blue-900"> {t("translation.Skills")}</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">
          <div>
            {/*Dropdown skill */}
            <DropdwonSkill />
            <div className="my-12 ml-16 md:ml-36 lg:ml-72">
              <Link
                to="/addskills"
                className="shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold  lg:mr-4"
              >
                View Add Skills
              </Link>
            </div>
          </div>

          <div
            className="pl-20 lg:pl-28
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  lg:pl-96 pb-10 lg:ml-96 mt-5 ">
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
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-80 w-96  pl-96 pb-10 ml-96 mt-5">
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
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-80 pl-96 pb-10 ml-96 mt-5">
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
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-80  pl-96 pb-10 ml-96 mt-5">
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
      {/* Top specialest section*/}
      <div className="container mx-auto rounded-md bg-amber-400/5 pb-2">
        <div className="mt-11 pt-8 pl-8 pb-4">
          {" "}
          <div className=" flex flex-col  justify-center ">
            <h2 className="text-4xl tracking-tight font-extrabold text-amber-400 sm:text-3xl md:text-3xl ">
              {t("translation.Top Specialest")}
              <span className="text-blue-900 ">
                {t("translation.Freelancers")}{" "}
              </span>
            </h2>
          </div>
        </div>
        {/*card1*/}
        <div className="flex flex-cols justify-start items-center lg:ml-36 mt-5">
          <img
            className="w-48  h-1/2 p-2 rounded-2xl  "
            src="https://images.unsplash.com/photo-1527565290982-018bcfdbee74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
          />

          <div className="w-auto h-64 py-4 px-8 bg-amber-400 hover:bg-amber-500/80 rounded-lg text-white font-semibold text-lg flex flex-col items-center justify-center ">
            <h5 className="mb-2 pt-2 text-xl font-semibold  text-white">
              Name: Dalia Jamal
            </h5>
            <p className="mb-3">Speciality: JavaScript</p>

            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Location:Halabja
            </p>

            <div className="pl-2 mt-4 flex flex-col justify-center items-center">
              <p className="inline-flex items-center py-2 px-3 bg-blue-900 hover:bg-blue-800 text-sm font-medium rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
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
          </div>
        </div>

        {/*card2*/}
        <div className="flex flex-cols justify-center items-center ">
          <img
            className="w-48  h-1/2 p-2 rounded-2xl  "
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
            alt=""
          />

          <div className="w-auto h-64 py-4 px-8 bg-amber-400 hover:bg-amber-500/80  rounded-lg text-white font-semibold text-lg flex flex-col items-center justify-center ">
            <h5 className="mb-2 pt-2 text-xl font-semibold  text-white">
              Name: Shang Bakhtyar
            </h5>
            <p className="mb-3">Speciality: Full Stack</p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Location: Erbil
            </p>

            <div className="pl-2 mt-4 flex flex-col justify-center items-center">
              <p className="inline-flex items-center py-2 px-3 bg-blue-900 hover:bg-blue-800  text-sm font-medium  rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
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
          </div>
        </div>

        {/*card3*/}
        <div className=" flex flex-cols justify-end items-center lg:mr-32">
          <img
            className="w-48  h-1/2 p-2 rounded-2xl  "
            src="https://images.unsplash.com/photo-1587732279092-23ff8f3573b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
            alt=""
          />

          <div className="w-auto h-64 py-4 px-8 bg-amber-400 hover:bg-amber-500/80  rounded-lg text-white font-semibold text-lg flex flex-col items-center justify-center ">
            <h5 className="mb-2 pt-2 text-xl font-semibold  text-white">
              Name: Shene Bahzad
            </h5>
            <p className="mb-3">Speciality: Graphic Designer</p>
            <p className="mb-3 font-normal text-white dark:text-gray-400">
              Location: Dhok
            </p>

            <div className="pl-2 mt-4 flex flex-col justify-center items-center">
              <p className="inline-flex items-center py-2 px-3 bg-blue-900 hover:bg-blue-800   text-sm font-medium  rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-400 focus:ring-white">
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
          </div>
        </div>
      </div>
      {/*Hearfrom clients*/}
      <div className="container mx-auto  rounded-md  pb-2 ">
        <div className="mt-11 pt-8 pl-8 pb-4 ">
          {" "}
          <div>
            <h2 className="text-4xl tracking-tight font-extrabold text-amber-400 sm:text-3xl md:text-3xl ">
              {t("translation.Hear from some of our")}
              <span className="text-blue-900  ">
                {" "}
                {t("translation.clients")}
              </span>
            </h2>
          </div>
          {/*1*/}
          <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="text-md text-amber-400 m-5 p-10 font-medium w-auto h-98 py-4 px-8 outline-dashed outline-4 outline-offset-2 outline-amber-400 hover:outline-blue-900 rounded-lg">
              <div className="py-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <div className="mb-3">
                Working with Kurdlancer has been a great expereience for
                us.their crew was quite helpful in assisting us in our search
                for the ideal talent (Freelancer) for our project.We couldn't
                have been happier with the overall experience since the work was
                good , The communication was excellent , we were very sutisfied
                with overall experience. We're gladly looking forward to working
                with Kurdlancer on future projects.
                <div className="flex items-center  my-4  w-64 p-2  rounded-md">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1527565290982-018bcfdbee74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt="img"
                      className="h-20 w-20 rounded-full object-fill"
                    />
                  </div>
                  <div className="ml-5">Tara Osman</div>
                </div>
              </div>
            </div>
            {/*2*/}
            <div className="text-md text-amber-400 m-5 p-10 font-medium w-auto h-98 py-4 px-8 outline-dashed outline-4 outline-offset-2 outline-amber-400 hover:outline-blue-900 rounded-lg">
              <div className="py-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <div className="mb-3">
                Working with Kurdlancer has been a great expereience for
                us.their crew was quite helpful in assisting us in our search
                for the ideal talent (Freelancer) for our project.We couldn't
                have been happier with the overall experience since the work was
                good , The communication was excellent , we were very sutisfied
                with overall experience. We're gladly looking forward to working
                with Kurdlancer on future projects.
                <div className="flex items-center  my-4 w-64 p-2 rounded-md">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60"
                      alt="img"
                      className="h-20 w-20 rounded-full object-fill"
                    />
                  </div>
                  <div className="ml-5">rezan dler</div>
                </div>
              </div>
            </div>
            {/*3*/}
            <div className="text-md text-amber-400 m-5 p-10 font-medium w-auto h-98 py-4 px-8 outline-dashed outline-4 outline-offset-2 outline-amber-400 hover:outline-blue-900 rounded-lg">
              <div className="py-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <div className="mb-3">
                Working with Kurdlancer has been a great expereience for
                us.their crew was quite helpful in assisting us in our search
                for the ideal talent (Freelancer) for our project.We couldn't
                have been happier with the overall experience since the work was
                good , The communication was excellent , we were very sutisfied
                with overall experience. We're gladly looking forward to working
                with Kurdlancer on future projects.
                <div className="flex items-center  my-4 w-64 p-2 rounded-md">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1587732279092-23ff8f3573b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                      alt="img"
                      className="h-20 w-20 rounded-full object-fill"
                    />
                  </div>
                  <div className="ml-5">Tavga Rahim</div>
                </div>
              </div>
            </div>{" "}
            {/*end3*/}
          </div>
        </div>
      </div>
      <Trans />
    </Layout>
  );
}
