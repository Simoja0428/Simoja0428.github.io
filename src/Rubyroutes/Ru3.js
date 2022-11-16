import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import Ru3L from "../components/Ruby/Ru3L";

export const Ru3 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 3: Conditionals"/>
      <Ru3L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Ru3;