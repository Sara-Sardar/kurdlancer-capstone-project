import React from 'react'
import NavBar from '../components/NavBar';

export default function MainLayout(props) {
  return (
    <>
    <NavBar/>
    {props.children}
    </>
  );
}
