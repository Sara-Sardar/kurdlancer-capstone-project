import React from 'react';

export default function HeroSection() {
  return (
    <div className="container rounded-md  bg-amber-400 mx-auto grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-10 ">
      <div className=" mt-11 p-8">
        {' '}
        <div className=" flex flex-col items-center justify-center">
       <h2  className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-5xl ">
        Hire The Best Talent Freelancers In Kurdlancer In KRI,
          <span className="text-blue-900"> Build Your Business.</span>
        </h2></div>
        <p className="text-2xl text-blue-900 mt-3">
        Turn Your Ideas Into Reality,
        </p>
        <p className="text-2xl text-blue-900 mt-3">
        Take Your Carrier To The Next Level.{' '}
        </p>
        

        <div className="mt-10 ">
          <button className="shadow-md hover:shadow-lg  bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-lg text-xl font-semibold mr-4">
           Freelancers
          </button>
          <button className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold mr-4">
            Jobs
          </button>
          <button className="shadow-md hover:shadow-lg hover:text-amber-500 bg-white text-blue-900 px-6 py-4 rounded-lg text-xl font-semibold">
            Post Jobs
          </button>
        </div>
      </div>
      <div className="bg-red-300">
        <img
          className="h-full w-auto object-cover "
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3871&q=80"
          alt="woman holding bags while shopping"
        />
      </div>
    </div>
  );
}
