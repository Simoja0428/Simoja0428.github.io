import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import J8L from '../components/Java/J8L';


export const J8 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 8: Classes and Inheritance"/>
      <J8L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default J8;