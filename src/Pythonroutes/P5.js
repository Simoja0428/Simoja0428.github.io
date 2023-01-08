import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import P5L from '../components/Python/P5L';


export const P5 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 5: Loops"/>
      <P5L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default P5;