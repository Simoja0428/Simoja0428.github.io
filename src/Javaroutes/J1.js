import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import J1L from '../components/Java/J1L';


export const J1 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 1: Hello World!"/>
      <J1L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default J1;