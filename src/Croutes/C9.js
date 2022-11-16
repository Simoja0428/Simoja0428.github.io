import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import C9L from "../components/C/C9L";

export const C9 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 9: Vectors" />
      <C9L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C9;