import "./Ru7LStyles.css";
import React from 'react';
import {Link} from "react-router-dom";

const Ru7L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: yield";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: FALSE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: Object-Oriented";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="ru7lcon">
        <div className= "ru7sectionHeader"> What are Closures? </div>
        <div className="ru7text">
            Closures are a way of being able to pass in blocks of code
            as parameters of functions. It may sound like an odd concept, however,
            it is incredibly useful when it comes to being able to reuse functions
            and minimize the lines of code you are writing.
        </div>
        <div className="ru7sectionHeader"> Defining a Method: </div>
        <div className="ru7text">
            In order to define a closure you must first understand how to define a
            method. Below is a short example of how to define a method in Ruby using
            the 'def' keyword. However, if you are not comfortable with methods then
            it is recommended you review Ruby methods here: <Link to="/lessons/ruby/ru4" color="#00000"target="_blank" className="ru7textl">Ruby Methods Lesson</Link>
        </div>
        <div className="ru7code">
            <p>
                def addTwoNums(a, b) <br />
                &emsp;&emsp; sum = a + b <br />
                &emsp;&emsp; return sum <br />
                end <br />
            </p>
        </div>
        <div className= "ru7sectionHeader"> Defining a Closure </div>
        <div className="ru7text">
            Defining a closure is similar to defining a method in Ruby. However,
            the main difference is when you want the block of code to be triggered
            in the function, rather than calling a variable name for the code block, 
            you call the keyword 'yield'. Calling this keyword will trigger the block
            of code action before returning to the flow of control in the program. Below
            is an example of defining a closure, as you can see, its almost the same as
            defining a method:
        </div>
        <div className="ru7code">
            <p>
                def printForNum(num) <br />
                &emsp;&emsp; while x &lt; num <br />
                &emsp;&emsp;&emsp;&emsp; yield <br/>
                &emsp;&emsp;&emsp;&emsp; x = x + 1 <br/>
                &emsp;&emsp; end <br/>
                end <br/>
            </p>
        </div>
        <div className= "ru7sectionHeader"> Calling a Closure: </div>
        <div className="ru7text">
            Once you have defined a method with a closure you can then call this method
            in other places in your code. The process of calling a closure method is similar
            to a regular method, with the exception being that the inputted code block
            is contained within brackets next to the function call. This process is shown below:
        </div>
        <div className="ru7code">
            <p>

                def printForNum(num) <br />
                &emsp;&emsp; while x &lt; num <br />
                &emsp;&emsp;&emsp;&emsp; yield <br/>
                &emsp;&emsp; end <br/>
                end <br />
                <br />
                printForNum(3) &#10100;puts("Hello World!")&#10101; <br />
            </p>
        </div>
        <div className="ru7text">
            The output of the program above is: 
        </div>
        <div className="ru7out">
            <p>
                Hello World! <br />
                Hello World! <br />
                Hello World! <br />
            </p>
        </div>
        <div className= "ru7sectionHeader"> The Powers of Object-Orientation: </div>
        <div className="ru7text">
            Closures are a fantastic example of a feature that is well suited
            for object-orientation. Object-orientation sets out to allow for maximum
            reusability in our code in an effort to avoid having to copy and paste. A 
            general rule of thumb in Computer Science is you want to reduce the amount
            of copying and pasting in the program. Below demonstrates how we can 
            accomplish the same problem with or without closures, but one solution 
            requires far less lines of code than the other:
        </div>
        <div className="ru7code">
            <p>
                #Solution with Closure <br />
                def printForNum(num, *sum) <br />
                &emsp;&emsp; while x &lt; num <br />
                &emsp;&emsp;&emsp;&emsp; yield <br/>
                &emsp;&emsp;&emsp;&emsp; x = x + 1 <br/>
                &emsp;&emsp; end <br/>
                end <br />
                <br />
                printForNum(3) &#10100;puts("Hello World!")&#10101; <br />
                printForNum(3,0) &#10100;sum=sum+1&#10101; <br />
                <br/>
                <br/>
                #Solution without Closure <br />
                def printForNum(num, val) <br />
                &emsp;&emsp; while x &lt; num <br />
                &emsp;&emsp;&emsp;&emsp; puts(val) <br/>
                &emsp;&emsp;&emsp;&emsp; x = x + 1 <br/>
                &emsp;&emsp; end <br/>
                def addForNum(num, sum) <br />
                &emsp;&emsp; while x &lt; num <br />
                &emsp;&emsp;&emsp;&emsp; sum = sum + 1 <br/>
                &emsp;&emsp;&emsp;&emsp; x = x + 1 < br/>
                &emsp;&emsp; end <br/>
                end <br />
                <br />
                printForNum(3,"Hello World!")<br />
                addForNum(3,0) <br />

            </p>
        </div>
        <div className= "ru7sectionHeader"> Review Questions: </div>
        <div className="ru7blocker">
            <p className= "ru7question"> What keyword do we call to trigger a code block in a closure in Ruby?</p>
                <p className= "ru7answer" id = "a1">  </p>
                <div className="ru7btnf"> <button className="ru7btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru7blocker">
            <p className= "ru7question"> TRUE/FALSE: Closure code blocks are inputted inside parenthesis when calling a method.</p>
                <p className= "ru7answer" id = "a2">  </p>
                <div className="ru7btnf"> <button className="ru7btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru7blocker">
            <p className= "ru7question"> What paradigm of Computer Science are closures commonly associated with?</p>
                <p className= "ru7answer" id = "a3">  </p>
                <div className="ru7btnf"> <button className="ru7btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default Ru7L;