import "./PDirStyles.css";
import React from "react";
import {Link} from "react-router-dom";

const PDir = () => {
    return (
      <div className="pdircon">
        <div className = "ptitle">
            <h2> Python Lessons </h2>
            <div className="titleLine" />
            <div className ="pcont">
                <div className="pheaderInfo">
                    <p> Lesson Number: </p>
                    <p> Lesson: </p>
                </div>
                <div className="pcons">
                    <ul className="nums">
                        <div className="line" />
                        <li> 1) Learn what Python is and how to work with it on your device! </li>
                        <div className="line" />
                        <li> 2) Learn how we can easily store different types of information in Python! </li>
                        <div className="line" />
                        <li> 3) Learn how to manipulate and compare variables in Python using operators! </li>
                        <div className="line" />
                        <li> 4) Discover how to set conditions for code in Python!  </li>
                        <div className="line" />
                        <li> 5) Discover how to repeat lines of code multiple times using Python loops!</li>
                        <div className="line" />
                        <li> 6) Learn how to store multiple values in one variable using lists in Python! </li>
                        <div className="line" />
                        <li> 7) Focus on breaking code up and making it more reusable using methods in Python! </li>
                        <div className="line" />
                        <li> 8) Create objects of your own design and more using Python classes!  </li>
                        <div className="line" />
                    </ul>
                    <ul className="plinks">
                        <div className="line" />
                        <li>
                            <Link to="/lessons/python/p1" target="_blank">Hello World!</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/python/p2" target="_blank">Variables</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/python/p3" target="_blank">Operators</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/python/p4" target="_blank">Conditionals</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/python/p5" target="_blank">Loops</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/python/p6" target="_blank">Lists</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/python/p7" target="_blank">Methods</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/python/p8" target="_blank">Classes</Link>
                        </li>
                        <div className="line" />
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default PDir;