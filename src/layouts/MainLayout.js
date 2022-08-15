import React from 'react'
import NavBar from '../components/NavBar';
//import Categories from '../components/Categories';
import Footer from '../components/Footer';
export default function MainLayout(props) {
  return (
    <>
    <NavBar/>
    
    {props.children}
   <Footer/>
    </> 
  );
}
