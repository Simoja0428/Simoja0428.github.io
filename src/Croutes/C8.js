import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import C8L from "../components/C/C8L";

export const C8 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 8: Classes"/>
      <C8L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C8;