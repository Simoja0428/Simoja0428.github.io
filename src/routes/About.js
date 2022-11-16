import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import AbPanel from '../components/Core/AbPanel';

export const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading = "About CodeMine" text="Learn more about CodeMine and how it was developed below!"/>
      <AbPanel/>
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default About;
