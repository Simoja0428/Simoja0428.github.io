import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import Ru1L from "../components/Ruby/Ru1L";

export const Ru1 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 1: Hello World!"/>
      <Ru1L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Ru1;