import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import J2L from '../components/Java/J2L';


export const J2 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 2: Data Types"/>
      <J2L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default J2;