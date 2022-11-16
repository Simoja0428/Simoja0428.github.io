import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import JDir from '../components/Java/JDir';

export const JavaLH = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Java Lessons" text="Take a look at what  we have to offer below!"/>
      <JDir />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default JavaLH;