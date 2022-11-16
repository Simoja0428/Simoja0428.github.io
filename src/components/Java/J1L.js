import "./J1LStyles.css";
import React from 'react';

const J1L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: String[]";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: System.out.println()";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: \\t";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="j1lcon">
        <div className= "j1sectionHeader"> What is Java? </div>
        <div className="j1text">
            Java is a modern object-oriented language that remains one of
            the most updated languages in history. Java code makes use of a
            special device call the Java Virtual Machine (JVM) which allows
            code written in Java to be compatiable across all platforms.
        </div>
        <div className= "j1sectionHeader"> Getting Started in Java: </div>
        <div className="j1text">
            Visual Studio Code, avaliable to users on all platforms, allows users
            to build and compile full Java projects using extensions that can be downloaded
            for free. Further, for beginners, I highly recommend checking out 'Dr. Java' which 
            is an easy to use IDE to write and run Java code.
        </div>
        <div className= "j1sectionHeader"> "Hello World!" Program: </div>
        <div className="j1text"> The following program is a 'Hello World' program in Java. In Computer Science, 
            'Hello World' programs are considered the most basic program that a programmer can create. 
            The purpose of a 'Hello World' program is to give the programmer some familarity in the basic syntax of the 
            programming language they are working with. There are several things of interest to note here. 
            Take a look at the general structure of the program. </div>
        <div className="j1code">
            <p>
                public class HelloWorld <br/>
                &#10100; <br/>
                &emsp;&emsp;public static void main(String[] args) <br/>
                &emsp;&emsp;&#10100; <br/>
                &emsp;&emsp;&emsp;&emsp; System.out.print("Hello World!"); <br/>
                &emsp;&emsp;&#10101; <br/>
                &#10101; <br/> 
            </p>
        </div>
        <div className="j1text">
            The output of the program above is as follows:
        </div>
        <div className="j1out">
            <p>
                Hello World!
            </p>
        </div>
        <div className= "j1sectionHeader"> Printing in Java: </div>
        <div className="j1text">
         In Java the statement: 'System.out.print()' is used whenever we want to print out something to the console.
         Further, in order to change lines, we need to make sure that we specify this to the computer.  
         We can instead use the method: 'System.out.println()' in order to specify that we want the computer to change lines. 
        </div>
        <div className="j1code">
            <p>
                public class HelloWorld <br/>
                &#10100; <br/>
                &emsp;&emsp;public static void main(String[] args) <br/>
                &emsp;&emsp;&#10100; <br/>
                &emsp;&emsp;&emsp;&emsp; System.out.print("This uses regular print"); <br/>
                &emsp;&emsp;&emsp;&emsp; System.out.print("So this is on the same line"); <br/>
                &emsp;&emsp;&emsp;&emsp; System.out.println(); <br/>
                &emsp;&emsp;&emsp;&emsp; System.out.println("Single line print!"); <br/>
                &emsp;&emsp;&#10101; <br/>
                &#10101; <br/> 
            </p>
        </div>
        <div className="j1text">
            The output of the program above is as follows:
        </div>
        <div className="j1out">
            <p>
            This uses regular print So this is on the same line <br/>
            Single line print! <br/>
            </p>
        </div>
        <div className= "j1sectionHeader"> Special Characters in Printing: </div>
        <div className="j1text">
        Another way we can change lines is by using the statement '\n'. The usage of '\n' allows you to condense 
        multiple lines of print statements into one line of code. You may also find '\t' to be useful if you need to 
        indent the text on the console or '\\' to print a '\' in Java. The general rule of thumb is that  the '\'
        symbol can be used as an escape character for any letters or symbols with special values in print statements.
        </div>
        <div className= "j1sectionHeader"> Review Questions: </div>
        <div className="j1blocker">
            <p className= "j1question"> What type is the only parameter of a Java main function?</p>
                <p className= "j1answer" id = "a1">  </p>
                <div className="j1btnf"> <button className="j1btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j1blocker">
            <p className= "j1question"> What keyword is used when a user wants to print to the console in Java with a newline?</p>
                <p className= "j1answer" id = "a2">  </p>
                <div className="j1btnf"> <button className="j1btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j1blocker">
            <p className= "j1question"> What escape symbol can be used to create a tab on the line in Java?</p>
            <p className= "j1answer" id = "a3">  </p>
            <div className="j1btnf"> <button className="j1btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default J1L;