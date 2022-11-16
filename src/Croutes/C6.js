import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import C6L from "../components/C/C6L";

export const C6 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 6: Arrays"/>
      <C6L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C6;