import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import C1L from "../components/C/C1L";

export const C1 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 1: Hello World!"/>
      <C1L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C1;