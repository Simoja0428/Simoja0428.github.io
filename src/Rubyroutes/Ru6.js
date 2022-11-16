import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import Ru6L from "../components/Ruby/Ru6L";

export const Ru6 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 6: Arrays"/>
      <Ru6L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Ru6;