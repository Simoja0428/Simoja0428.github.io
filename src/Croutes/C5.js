import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import C5L from "../components/C/C5L";

export const C5 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 5: Conditionals"/>
      <C5L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C5;