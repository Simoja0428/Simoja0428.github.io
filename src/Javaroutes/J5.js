import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import J5L from '../components/Java/J5L';


export const J5 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 5: Loops"/>
      <J5L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default J5;