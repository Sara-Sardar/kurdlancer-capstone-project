import React from "react";
import NavBar from "../components/NavBar";
//import Tabs from "../components/Tabs";
import Footer from "../components/Footer";
export default function MainLayout(props) {
  return (
    <>
      <NavBar />

      {props.children}
      <Footer />
    </>
  );
}
