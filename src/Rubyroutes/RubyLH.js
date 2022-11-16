import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import RuDir from '../components/Ruby/RuDir';

export const RubyLH = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Ruby Lessons" text="Take a look at what  we have to offer below!"/>
      <RuDir />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default RubyLH;