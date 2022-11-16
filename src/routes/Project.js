import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import PricingCard from '../components/Core/PricingCard';

export const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lessons" text="Take a look at what  we have to offer below!"/>
      <PricingCard  />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Project;
