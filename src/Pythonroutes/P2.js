import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import P2L from '../components/Python/P2L';


export const P2 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 2: Variables"/>
      <P2L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default P2;