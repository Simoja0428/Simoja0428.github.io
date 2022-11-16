import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import J3L from '../components/Java/J3L';


export const J3 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 3: Operators"/>
      <J3L/>
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default J3;