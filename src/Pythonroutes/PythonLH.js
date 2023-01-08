import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import PDir from "../components/Python/PDir";

export const PythonLH = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Python Lessons" text="Take a look at what we have to offer below!"/>
      <PDir />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default PythonLH;