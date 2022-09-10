import React from "react";
import { Link } from "react-router-dom";
import ReactCarasoul from "./ReactCarasoul";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
      <div className=" mt-11 p-8">
        <div className=" flex flex-col items-center justify-center">
          <h2 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl ">
            {t("Welcome to React")}
            <span className="text-blue-900"> {t("Build Your Business")} </span>
          </h2>
        </div>
        <p className="text-2xl text-blue-900 mt-3">
          {t("Turn Your Ideas Into Reality")}
        </p>
        <p className="text-2xl text-blue-900 mt-3">
          {t("Take Your Carrier To The Next Level")}
        </p>
        <div className="mt-12 pt-5">
          <Link
            to="/freelancers"
            className="shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold mr-4"
          >
            {t("Freelancers")}
          </Link>
          <Link
            to="/jobs"
            className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold mr-4"
          >
            {t("Jobs")}
          </Link>
          <Link
            to="/postjobs"
            className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold"
          >
            {t("PostJobs")}
          </Link>
        </div>
      </div>
      <div>
        <ReactCarasoul />
      </div>
    </div>
  );
}
