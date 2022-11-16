import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import Ru5L from '../components/Ruby/Ru5L';

export const Ru5 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 5: Loops"/>
      <Ru5L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Ru5;