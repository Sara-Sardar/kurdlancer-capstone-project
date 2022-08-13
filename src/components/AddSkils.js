

import React from 'react'

export default function AddSkils() {
  return (
    <div>AddSkils</div>
  )
}




//import React, { useEffect, useState } from 'react';
//import axios from 'axios';
//import FreelancerCard from './FreelancerCard';
//import LoadingSpinner from './LoadingSpinner';

/*export default function AddSkils() { 
    return (
    <div> slawww
        
    </div>
        ); 
}*/
 {/* const [categories, setCategories] = useState([]);
  const [err, setErr] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products/categories')
      .then((response) => {
        setCategories(response.data);

        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto">
      <p className="text-2xl text-center my-8 lg:my-10">Our Categories</p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
        {categories.map((category, index) => {
          return <FreelancerCard title={category} key={index} />;
        })}
      </div>*/}
   
  
