import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import P7L from '../components/Python/P7L';


export const P7 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 7: Methods"/>
      <P7L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default P7;