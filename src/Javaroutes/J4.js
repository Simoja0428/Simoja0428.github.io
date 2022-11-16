import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import J4L from '../components/Java/J4L';


export const J4 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 4: Conditionals"/>
      <J4L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default J4;