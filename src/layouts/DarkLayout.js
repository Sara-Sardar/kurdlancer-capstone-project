import React from "react";
import Footer from "../components/Footer";
import ProfileNavbar from "../components/ProfileNavbar";

export default function DarkLayout(propss) {
  return (
    <>
      <ProfileNavbar />

      {propss.children}
      <Footer />
    </>
  );
}
