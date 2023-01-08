import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import P1L from '../components/Python/P1L';


export const P1 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 1: Hello World!"/>
      <P1L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default P1;