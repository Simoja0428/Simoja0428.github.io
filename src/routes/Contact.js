import React from 'react'
import Navbar from "../components/Core/Navbar";
import Footer from "../components/Core/Footer";
import HeroImg2 from '../components/Core/HeroImg2';
import ContactForm from '../components/Core/ContactForm';

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading = "Contact CodeMine" text="Bounce ideas off the developer of this site to help make CodeMine better!"/>
      <ContactForm />
      <p className="titleLine"></p>
      <Footer />
      <p className="titleLine2"></p>
    </div>
  );
}

export default Contact;