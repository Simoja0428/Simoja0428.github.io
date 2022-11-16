import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import C4L from "../components/C/C4L";

export const C4 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 4: Methods"/>
      <C4L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C4;