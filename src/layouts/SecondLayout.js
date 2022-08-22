import React from 'react'
import Footer from '../components/Footer';
import ProfileNavbar from '../components/ProfileNavbar';

export default function SecondLayout(propss) {
  return (
    <>
    <ProfileNavbar/>
    
    {propss.children}
   <Footer/>
    </> 
  );
}
