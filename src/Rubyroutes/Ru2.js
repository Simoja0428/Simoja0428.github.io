import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import Ru2L from "../components/Ruby/Ru2L";

export const Ru2 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 2: Operators"/>
      <Ru2L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Ru2;