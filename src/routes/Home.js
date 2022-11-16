import React from 'react'
import Navbar from "../components/Core/Navbar";
import HeroImg from "../components/Core/HeroImg";
import Footer from "../components/Core/Footer";

export const Home = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg />
    <p className="titleLine"></p>
    <Footer />
    <p className="titleLine2"></p>
    </div>
  );
}

export default Home;
