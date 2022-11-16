import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import Ru4L from '../components/Ruby/Ru4L';

export const Ru4 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 4: Methods"/>
      <Ru4L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Ru4;