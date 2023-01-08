import "./P1LStyles.css";
import React from 'react';

const P1L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: print()";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: 3";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: \\n";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="p1lcon">
        <div className= "p1sectionHeader"> What is Python? </div>
        <div className="p1text">
            Python is a modern interpreted language that has a wide
            variety of uses. From scripting, to data science, to back-end
            development; Python is used by millions of people for a wide
            variety of reasons because of its wide range of packages and ease of use. 
        </div>
        <div className= "p1sectionHeader"> Getting Started in Python: </div>
        <div className="p1text">
            In order to run Python programs on your laptop, you need to have
            Python installed. You can download the latest version of Python
            on <a href="https://www.python.org/downloads/" className="p1link">Python's Website</a>.
            In addition, you will need an enviroment to write code in. Using Visual Studio Code,
            available to users on all platforms, you can download the extensions for Python
            to have the code in the editor format as Python.
            <br />
            <br /> 
            <text className="bp1xo"> For Beginners Only: </text> If you are only doing smaller projects in Python, you can alternatively
            use repl.it to write your code. Repl.it is an online platform that allows users to create 
            and run Python files as long as they have a connection to the internet and a free account.
        </div>
        <div className= "p1sectionHeader"> "Hello World!" Program: </div>
        <div className="p1text"> The following program is a 'Hello World' program in Python. In Computer Science, 
            'Hello World' programs are considered the most basic program that a programmer can create. 
            The purpose of a 'Hello World' program is to give the programmer some familarity in the basic syntax of the 
            programming language they are working with. A Hello World program in Python is one line.
            Take a look at the general structure of the program. </div>
        <div className="p1code">
            <p>
                print("Hello World!") <br/>
            </p>
        </div>
        <div className="p1text">
            The output of the program above is as follows:
        </div>
        <div className="p1out">
            <p>
                Hello World!
            </p>
        </div>
        <div className= "p1sectionHeader"> Printing in Python: </div>
        <div className="p1text">
         In Python the method: 'print("content")' is used whenever we want to print out something to the console.
         Further, in order to change lines, we can make a multiline print statement by using print("""content""") instead 
         in order to specify that we want the computer to change lines. 
        </div>
        <div className="p1code">
            <p>
                print("This is a regular print!") #Comments in Python are done using a number sign <br/>
                <br/>
                print(""" <br/>
                Notice: <br/>
                <br/>
                This formats how it is placed in the string! <br/>
                &emsp;This includes tabs! <br/>
                """) <br/>
            </p>
        </div>
        <div className="p1text">
            The output of the program above is as follows:
        </div>
        <div className="p1out">
            <p>
            This is a regular print! <br/>
            <br/>
            Notice: <br/>
            <br/>
            This formats how it is placed in the string! <br/>
            &emsp;This includes tabs! 
            </p>
        </div>
        <div className= "p1sectionHeader"> Special Characters in Printing: </div>
        <div className="p1text">
        Another way we can change lines is by using the statement '\n'. The usage of '\n' allows you to condense 
        multiple lines of print statements into one line of code. You may also find '\t' to be useful if you need to 
        indent the text on the console or '\\' to print a '\' in Python. The general rule of thumb is that  the '\'
        symbol can be used as an escape character for any letters or symbols with special values in print statements.
        </div>
        <div className="p1code">
            <p>
            print("Wow! \n The newline escape key works!") <br/>
            print("Wow! \t The tab escape key works too!") <br/>
            </p>
        </div>
        <div className="p1text">
            The output of the program above is as follows:
        </div>
        <div className="p1out">
            <p>
            Wow! <br/>
            The newline escape key works! <br/>
            Wow!&emsp;&emsp;The tab escape key works too! <br/>
            </p>
        </div>
        <div className= "p1sectionHeader"> Review Questions: </div>
        <div className="p1blocker">
            <p className= "p1question"> What is the Python method we can use to display text to the console?</p>
                <p className= "p1answer" id = "a1">  </p>
                <div className="p1btnf"> <button className="p1btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p1blocker">
            <p className= "p1question"> How many quotation marks are needed to start a multiline print string?</p>
                <p className= "p1answer" id = "a2">  </p>
                <div className="p1btnf"> <button className="p1btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p1blocker">
            <p className= "p1question"> What escape symbol can be used to create a newline in Python?</p>
            <p className= "p1answer" id = "a3">  </p>
            <div className="p1btnf"> <button className="p1btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default P1L;