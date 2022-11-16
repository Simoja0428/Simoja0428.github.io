import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import Ru8L from '../components/Ruby/Ru8L';

export const Ru8 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 8: Classes"/>
      <Ru8L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Ru8;