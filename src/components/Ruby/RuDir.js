import "./RuDirStyles.css";
import React from "react";
import {Link} from "react-router-dom";

const RuDir = () => {
    return (
      <div className="rudircon">
        <div className = "rutitle">
            <h2> Ruby Lessons </h2>
            <div className="titleLine" />
            <div className ="rucont">
                <div className="ruheaderInfo">
                    <p> Lesson Number: </p>
                    <p> Lesson: </p>
                </div>
                <div className="rucons">
                    <ul className="nums">
                        <div className="line" />
                        <li> 1) Learn what Ruby is and how to work with it on your device! </li>
                        <div className="line" />
                        <li> 2) Learn how to manipulate and compare variables in Ruby using operators! </li>
                        <div className="line" />
                        <li> 3) Discover how to set conditions for code in Ruby! </li>
                        <div className="line" />
                        <li> 4) Focuses on breaking code up and make it more usable using methods in Ruby! </li>
                        <div className="line" />
                        <li> 5)  Discover how to repeat lines of code multiple times using Ruby loops! </li>
                        <div className="line" />
                        <li> 6) Learn how to store multiple values in one variable using arrays in Ruby! </li>
                        <div className="line" />
                        <li> 7) Learn how to pass in blocks of code like parameters to a function in Ruby! </li>
                        <div className="line" />
                        <li> 8) Create objects of your own design and more using Ruby classes!  </li>
                        <div className="line" />
                    </ul>
                    <ul className="rulinks">
                        <div className="line" />
                        <li>
                            <Link to="/lessons/ruby/ru1" target="_blank">Hello World!</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/ruby/ru2" target="_blank">Operators</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/ruby/ru3" target="_blank">Conditionals</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/ruby/ru4" target="_blank">Methods</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/ruby/ru5" target="_blank">Loops</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/ruby/ru6" target="_blank"> Arrays </Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/ruby/ru7" target="_blank">Closures</Link>
                        </li>
                        <div className="line" />
                        <li>
                            <Link to="/lessons/ruby/ru8" target="_blank">Classes</Link>
                        </li>
                        <div className="line" />
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default RuDir;