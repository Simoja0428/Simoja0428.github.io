import "./JDirStyles.css";
import React from "react";
import {Link} from "react-router-dom";

const JDir = () => {
    return (
      <div className="jdircon">
        <div className = "jtitle">
            <h2> Java Lessons </h2>
            <div className="titleLine" />
            <div className ="jcont">
                <div className="jheaderInfo">
                    <p> Lesson Number: </p>
                    <p> Lesson: </p>
                </div>
                <div className="jcons">
                    <ul className="nums">
                        <div className="line" />
                        <li> 1) Learn what Java is and how to work with it on your device! </li>
                        <div className="line" />
                        <li> 2) Discover how to store various types of information in Java! </li>
                        <div className="line" />
                        <li> 3) Learn how to manipulate and compare variables in Java using operators! </li>
                        <div className="line" />
                        <li> 4) Discover how to set conditions for code in Java!  </li>
                        <div className="line" />
                        <li> 5) Discover how to repeat lines of code multiple times using Java loops!</li>
                        <div className="line" />
                        <li> 6) Learn how to store multiple values in one variable using arrays in Java! </li>
                        <div className="line" />
                        <li> 7) Focuses on breaking code up and make it more usable using methods in Java! </li>
                        <div className="line" />
                        <li> 8) Create objects of your own design and more using Java classes!  </li>
                        <div className="line" />
                    </ul>
                    <ul className="jlinks">
                        <div className="line" />
                        <li>
                            <Link to="/lessons/java/j1" target="_blank">Hello World!</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/java/j2" target="_blank">Data Types</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/java/j3" target="_blank">Operators</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/java/j4" target="_blank">Conditionals</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/java/j5" target="_blank">Loops</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/java/j6" target="_blank"> Arrays </Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/java/j7" target="_blank">Methods</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/java/j8" target="_blank">Classes and Inheritance</Link>
                        </li>
                        <div className="line" />
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default JDir;