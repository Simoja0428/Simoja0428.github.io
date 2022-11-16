import "./C1LStyles.css";
import React from 'react';

const C1L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: integer";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: cout";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: \\n";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="c1lcon">
        <div className= "c1sectionHeader"> What is C++? </div>
        <div className="c1text">
            C++ is the successor of the C programming language. Although containing
            many syntactical differences, the most apparent difference between C and C++ is
            that C++ includes support to create your own custom classes, while C only
            includes support for creating your own structs.
        </div>
        <div className= "c1sectionHeader"> Getting Started in C++: </div>
        <div className="c1text">
            In order to begin programming in C++ you will need an enviroment
            to do so. Although not recommended, MacOS users can use XCode to
            program in C++. Visual Studio Code, avaliable to users on all platforms,
            also has extension support for C++.
        </div>
        <div className= "c1sectionHeader"> "Hello World!" Program: </div>
        <div className="c1text"> The following program is a 'Hello World' program in C++. In Computer Science, 
            'Hello World' programs are considered the most basic program that a programmer can create. 
            The purpose of a 'Hello World' program is to give the programmer some familarity in the basic syntax of the 
            programming language they are working with. There are several things of interest to note here. 
            Take a look at the general structure of the program. What do you notice about it?</div>
        <div className="c1code">
            <p>
                #include &lt;iostream&gt;<br/>

                using namespace std; <br />

                int main(int argc, char* argv[]) <br />
                &#10100; <br />
                &emsp;&emsp;cout &lt;&lt; "Hello World!"; <br />
                &emsp;&emsp;return 0; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c1text">
            The output of the program above is as follows:
        </div>
        <div className="c1out">
            <p>
                Hello World!
            </p>
        </div>
        <div className= "c1sectionHeader"> Printing in C++: </div>
        <div className="c1text">
         In C++ the statement: 'cout' is used whenever we want to print out something to the console.
         We then seperate what we want to print with two less than symbols '&lt;&lt;'. Further, in order 
         to change lines, we need to make sure that we specify this to the computer.  
         We can use the keyword 'endl' in order to specify that we want the computer to change lines. 
        </div>
        <div className= "c1code">
            <p>
            #include &lt;iostream&gt;<br/>

            using namespace std; <br/>

            int main(int argc, char* argv[]) <br/>
            &#10100; <br/>
            &emsp;&emsp;cout &lt;&lt; "Hello World! "; <br/>
            &emsp;&emsp;cout &lt;&lt; "Notice this is on the same line." &lt;&lt; endl; <br/>
            &emsp;&emsp;cout &lt;&lt; "This statement is on a different line though. \n"; <br/>
            &emsp;&emsp;cout &lt;&lt; "This line is on a different line also."; <br/>
            &emsp;&emsp;cout &lt;&lt; endl; <br/>
            &emsp;&emsp;cout &lt;&lt; "\tThis statement is indented."; <br/>
            &emsp;&emsp;return 0; <br/>
            &#10101; <br/>
            </p>
        </div>
        <div className="c1text">
            The output of the program above is as follows:
        </div>
        <div className="c1out">
            <p>
            Hello World! Notice this is on the same line.<br/>
            This statement is on a different line though. <br/>
            This line is on a different line also. <br/>
            &emsp;&emsp;This statement is indented. <br/>
            </p>
        </div>
        <div className= "c1sectionHeader"> Special Characters in Printing: </div>
        <div className="c1text">
        Another way we can change lines is by using the statement '\n'. The usage of '\n' allows you to condense 
        multiple lines of print statements into one line of code. You may also find '\t' to be useful if you need to 
        indent the text on the console or '\\' to print a '\' in C++. The general rule of thumb is that  the '\'
        symbol can be used as an escape character for any letters or symbols with special values in print statements.
        </div>
        <div className= "c1sectionHeader"> Review Questions: </div>
        <div className="c1blocker">
            <p className= "c1question"> What is the return type of the main function in all C++ programs?</p>
                <p className= "c1answer" id = "a1">  </p>
                <div className="c1btnf"> <button className="c1btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c1blocker">
            <p className= "c1question"> What keyword is used when a user wants to print something to the console in C++?</p>
                <p className= "c1answer" id = "a2">  </p>
                <div className="c1btnf"> <button className="c1btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c1blocker">
            <p className= "c1question"> What escape symbol can  be used to create a new line in C++?</p>
                <p className= "c1answer" id = "a3">  </p>
                <div className="c1btnf"> <button className="c1btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default C1L;