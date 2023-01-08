import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import P4L from '../components/Python/P4L';


export const P4 = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="Lesson 4: Conditionals"/>
      <P4L />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default P4;