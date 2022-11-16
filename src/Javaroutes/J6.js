import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import J6L from '../components/Java/J6L';


export const J6 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 6: Arrays"/>
      <J6L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default J6;