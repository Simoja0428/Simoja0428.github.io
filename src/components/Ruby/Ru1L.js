import "./Ru1LStyles.css";
import React from 'react';

const Ru1L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: puts()";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: FALSE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: #";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="ru1lcon">
        <div className= "ru1sectionHeader"> What is Ruby? </div>
        <div className="ru1text">
            Ruby is a modern object-oriented language that allows users to
            create a variety of different custom classes and methods for their
            personal needs. Ruby is an interpreted language, meaning, you don't need
            to specify the type when declaring variables.
        </div>
        <div className= "ru1sectionHeader"> Getting Started in Ruby: </div>
        <div className="ru1text">
            In order to begin programming in Ruby you will need an enviroment
            to do so. Visual Studio Code, avaliable to users on all platforms,
            has extenson support for coding in Ruby. Further, you can download the nessecary
            files on Ruby's website in order to run Ruby code in the terminal on your device.
        </div>
        <div className= "ru1sectionHeader"> "Hello World!" Program: </div>
        <div className="ru1text"> The following program is a 'Hello World' program in Ruby. In Computer Science, 
            'Hello World' programs are considered the most basic program that a programmer can create. 
            The purpose of a 'Hello World' program is to give the programmer some familarity in the basic syntax of the 
            programming language they are working with. A 'Hello World!' program in Ruby is incredibly 
            simple and consists of only one line: </div>
        <div className="ru1code">
            <p>
                puts("Hello World from Ruby!")<br/>
            </p>
        </div>
        <div className="ru1text">
            The output of the program above is as follows:
        </div>
        <div className="ru1out">
            <p>
                Hello World!
            </p>
        </div>
        <div className= "ru1sectionHeader"> Printing in Ruby: </div>
        <div className="ru1text">
         In Ruby the method: puts() is used whenever we want to print out something to the console.
         The puts() method automatically moves the cursor to a new line. If you want to print
         something but not change lines, you can use the print() method. Further, one important
         thing to note is that the parenthesis are optional for Ruby methods and there are no semicolons
         at the end of lines of code!
        </div>
        <div className= "ru1code">
            <p>
            puts "Believe it or not you don't need parenthesis for methods!" <br/>
            print "print " <br/>
            print "doesn't " <br/>
            print "create " <br/>
            print "new lines" <br/>
            puts <br/>
            <br/>
            #You can comment in Ruby using the # sign  <br/>
            </p>
        </div>
        <div className="ru1text">
            The output of the program above is as follows:
        </div>
        <div className="ru1out">
            <p>
            Believe it or not you don't need parenthesis for methods!<br/>
            print doesn't create new lines <br/>
            <br/>
            </p>
        </div>
        <div className= "ru1sectionHeader"> Special Characters in Printing: </div>
        <div className="ru1text">
        Another way we can change lines is by using the statement '\n'. The usage of '\n' allows you to condense 
        multiple lines of print statements into one line of code. You may also find '\t' to be useful if you need to 
        indent the text on the console or '\\' to print a '\' in Ruby. The general rule of thumb is that  the '\'
        symbol can be used as an escape character for any letters or symbols with special values in print statements.
        </div>
        <div className= "ru1sectionHeader"> Review Questions: </div>
        <div className="ru1blocker">
            <p className= "ru1question"> What method is used to print to the console with a new line in Ruby?</p>
                <p className= "ru1answer" id = "a1">  </p>
                <div className="ru1btnf"> <button className="ru1btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru1blocker">
            <p className= "ru1question"> TRUE/FALSE: Parenthesis are required for methods in Ruby. </p>
                <p className= "ru1answer" id = "a2">  </p>
                <div className="ru1btnf"> <button className="ru1btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru1blocker">
            <p className= "ru1question"> What symbol can be used to create comments in Ruby code?</p>
                <p className= "ru1answer" id = "a3">  </p>
                <div className="ru1btnf"> <button className="ru1btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default Ru1L;