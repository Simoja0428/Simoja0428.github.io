import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import C7L from "../components/C/C7L";

export const C7 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 7: Loops"/>
      <C7L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C7;