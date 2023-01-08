import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import P3L from '../components/Python/P3L';


export const P3 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 3: Operators"/>
      <P3L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default P3;