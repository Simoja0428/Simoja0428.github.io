import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import Ru7L from '../components/Ruby/Ru7L';


export const Ru7 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 7: Closures"/>
      <Ru7L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Ru7;