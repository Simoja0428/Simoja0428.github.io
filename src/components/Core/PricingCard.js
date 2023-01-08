import "./PricingCardStyles.css"
import {Link} from "react-router-dom";
import React from 'react';
import Java from "../assets/j.webp";
import Ruby  from "../assets/ru.jpeg";
import C from "../assets/c.png";
import Python from "../assets/python.png";

const PricingCard = () => {
  return (
    <div className= "pricing">
        <div className = "card-container">
            <div className = "card">
                <h3>   Java  </h3>
                <span className = "bar"></span>
                <img className= "itt" src={Java} alt="Java" />
                <p className="ccon"> Understand one of the most popular and continously updated object-oriented languages ever created! </p>
                <Link to="/lessons/java" className="btn"> Lessons</Link>
            </div>
            <div className = "card">
                <h3>   Ruby  </h3>
                <span className = "bar"></span>
                <img className= "itt" src={Ruby} alt="Ruby" />
                <p className="ccon"> Learn about one of the more modern and most well-documented object-oriented languages out there! </p>
                <Link to="/lessons/ruby" className="btn"> Lessons</Link>
            </div>
            <div className = "card">
                <h3>   C++  </h3>
                <span className = "bar"></span>
                <img className= "itt" src={C} alt="C" />
                <p className="ccon"> Get an introduction into a language fundamental to understanding Computer Science. </p>
                <Link to="/lessons/c" className="btn"> Lessons</Link>
            </div>
            <div className = "card">
                <h3>   Python  </h3>
                <span className = "bar"></span>
                <img className= "itt" src={Python} alt="Python" />
                <p className="ccon"> Learn the fundamentals of an interpreted language at the heart of modern development. </p>
                <Link to="/lessons/python" className="btn"> Lessons</Link>
            </div>
        </div>

    </div>
  );
}

export default PricingCard;