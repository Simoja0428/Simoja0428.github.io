import "./CDirStyles.css";
import React from "react";
import {Link} from "react-router-dom";

const CDir = () => {
    return (
      <div className="cdircon">
        <div className = "ctitle">
            <h2> C++ Lessons </h2>
            <div className="titleLine" />
            <div className ="ccont">
                <div className="cheaderInfo">
                    <p> Lesson Number: </p>
                    <p> Lesson: </p>
                </div>
                <div className="ccons">
                    <ul className="nums">
                        <div className="line" />
                        <li> 1) Learn what C++ is and how to work with it on your device! </li>
                        <div className="line" />
                        <li> 2) Discover how to store various types of information in C++! </li>
                        <div className="line" />
                        <li> 3) Learn how to manipulate and compare variables in C++ using operators! </li>
                        <div className="line" />
                        <li> 4) Focuses on breaking code up and make it more usable using methods in C++! </li>
                        <div className="line" />
                        <li> 5) Discover how to set conditions for code in C++! </li>
                        <div className="line" />
                        <li> 6) Learn how to store multiple values in one variable using arrays in C++! </li>
                        <div className="line" />
                        <li> 7) Discover how to repeat lines of code multiple times using C++ loops! </li>
                        <div className="line" />
                        <li> 8) Create objects of your own design and more using C++ classes!  </li>
                        <div className="line" />
                        <li> 9) Learn about an incredibly valuable data structure in C++ programming! </li>
                        <div className="line" />
                    </ul>
                    <ul className="clinks">
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c1" target="_blank">Hello World!</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c2" target="_blank">Data Types</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c3" target="_blank">Operators</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c4" target="_blank">Methods</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c5" target="_blank">Conditionals</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c6" target="_blank"> Arrays </Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c7" target="_blank">Loops</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c8" target="_blank">Classes</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/c/c9" target="_blank">Vectors</Link>
                        </li>
                        <div className="line" />
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default CDir;