import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import C3L from '../components/C/C3L';

export const C3 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 3: Operators" />
      <C3L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default C3;