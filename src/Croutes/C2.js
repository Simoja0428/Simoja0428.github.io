import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import CL2 from "../components/C/C2L";

export const C2 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 2: Data Types" />
      <CL2 />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C2;