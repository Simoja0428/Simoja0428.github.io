import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import CDir from '../components/C/CDir';

export const CLH = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="An Introduction to C++:" />
      <CDir />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default CLH;