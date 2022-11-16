import "./HeroImgStyles.css";
import React from 'react'
import IntroImage from "../assets/carthage.jpg";
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntroImage} alt="IntroImg" />
        </div>
        <div className="content">
            <h1>Hello, Welcome to CodeMine!</h1>
            <p>
              Welcome to CodeMine! CodeMine is the site where you can 
              get a crash course in the basic programming 
              skills you need for the language you desire.
              We offer a number of modules for a variety of
              different languages to suit your needs. If you're 
              ready to learn then you can click the 'Lessons'
              button below or explore the website!
            </p>
            <div>
                <Link to="/lessons" className="btn">Lessons</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
            <br></br>
        </div>
    </div>
  )
}

export default HeroImg