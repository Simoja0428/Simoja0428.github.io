import "./C2LStyles.css";
import React from 'react';

const C2L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: integer";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: TRUE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: int num = 10;";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="c2lcon">
        <script>
            document.getElementById("q1").
        </script>
        <div className= "c2sectionHeader"> What are variables? </div>
        <div className="c2text">
            Variables are a way of storing information in C++ programming
            for reuse at a later time. The type of information that needs to be
            stored is what determines the data type of the variable. A variable
            first needs to be created before it can be filled and manipulated
        </div>
        <div className= "c2sectionHeader"> Declaring Variables: </div>
        <div className="c2text">
            In order to create a variable in C++ programming you must give 
            the variable a name and type. After this, you can set the value.
            The process of setting a variable is shown below:
        </div>
        <div className="c2code">
            <p>
            int number; //Declares variable <br />
            number = 1; //Assigns value <br />
            </p>
        </div>
        <div className="c2text">
        You can also combine the declaration of variables in C++ programming into 
        one line which is shown below:
        </div>
        <div className="c2code">
            <p>
            int number = 1;
            </p>
        </div>
        <div className= "c2sectionHeader"> Integers: </div>
        <div className="c2text"> Integers are a type of variable that is meant to store whole numbers. 
        Integers do not account for decimals so you should be careful when working with them. 
        Below demonstrates an example of declaring integers in C++ programming:</div>
        <div className="c2code">
            <p>
            int num1 = 1; <br />
            int negVal = -5; <br />
            int large = 102909; <br />
            </p>
        </div>
        <div className= "c2sectionHeader"> Doubles: </div>
        <div className="c2text">
        Doubles are a type of variable that is meant to store decimal numbers. 
        Doubles are much more precise than integers since they account for decimals,
        however, they also take up a much larger amount of memory storage.
        For that reason, you should only use doubles if you know that your program will require decimals.
        Below demonstrates an example of declaring doubles in C++ programming:
        </div>
        <div className="c2code">
            <p>
            double decVal = 1.25; <br />
            double negDec = -5.26; <br />
            double wholeDec = 3.0; <br />
            </p>
        </div>
        <div className= "c2sectionHeader"> Booleans: </div>
        <div className="c2text">
        Booleans are a type of variable that is used to hold true or false values. 
        Booleans are often useful when we need to identify when 
        a condition has or has not been meant for our program. 
        Below demonstrates an example of declaring a boolean in C++ programming:
        </div>
        <div className= "c2code">
            <p>
            bool passed = true; <br />
            bool failed = false; <br />
            </p>
        </div>
        <div className= "c2sectionHeader"> Characters: </div>
        <div className="c2text">
        Characters are a type of variable that is meant to store single character values. 
        Characters can only hold one letter value.  Below demonstrates an example of declaring 
        characters in C++ programming:
        </div>
        <div className= "c2code">
            <p>
            char letter = 'e'; <br />
            char punct = '?'; <br />
            char letVal = 'T'; <br />
            </p>
        </div>
        <div className= "c2sectionHeader"> Strings: </div>
        <div className="c2text">
        Strings are a type of variable that is meant to store multiple character values. 
        Strings have a variety of different methods to manipulate how they are formatted.  
        Below demonstrates an example of declaring strings in C++ programming:
        </div>
        <div className= "c2code">
            <p>
            string jacob = "jacob"; <br />
            string period = "."; <br />
            string blank = " "; <br />
            </p>
        </div>
        <div className= "c2sectionHeader"> Printing Variables: </div>
        <div className="c2text">
        In the previous project we learned how to print constant statements. 
        In programming we will often need to print the value of a variable to the console. 
        Below is a short program that demonstrates how we could do this:
        </div>
        <div className= "c2code">
            <p>
            #include &lt;iostream&gt;<br/>

            using namespace std; <br/>

            int main(int argc, char* argv[]) <br/>
            &#10100; <br/>
            &emsp;&emsp;int wholeNum = 1; <br/>
            &emsp;&emsp;double decimalNum = 3.25; <br/>
            &emsp;&emsp;bool flag = true; <br/>
            &emsp;&emsp;char letter = 'a'; <br/>
            &emsp;&emsp;cout &lt;&lt; "The whole number value is: " &lt;&lt; wholeNum &lt;&lt; endl; <br />
            &emsp;&emsp;cout &lt;&lt; "The decimal number value is: " &lt;&lt; decimalNum &lt;&lt; endl; <br />
            &emsp;&emsp;cout &lt;&lt; "The value of the flag is: " &lt;&lt; flag &lt;&lt; endl; <br />
            &emsp;&emsp;cout &lt;&lt; "The character value is: " &lt;&lt; letter &lt;&lt; endl; <br />
            &emsp;&emsp;return 0; <br/>
            &#10101; <br/>
            </p>
        </div>
        <div className="c2text">
             Output of the program above: 
        </div>
        <div className="c2out">
            <p>
            The whole number value is: 1 <br />
            The decimal number value is: 3.25 <br />
            The value of the flag is: true <br />
            The character value is: a <br />
            </p>
        </div>
        <div className= "c2sectionHeader"> Review Questions: </div>
        <div className="c2blocker">
            <p className= "c2question"> What data type is used to hold whole value numbers in a C++ program?</p>
                <p className= "c2answer" id = "a1">  </p>
                <div className="c2btnf"> <button className="c2btnt" onClick={handleClick1} id = "q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c2blocker">
            <p className= "c2question"> True/False: You can store a single character in a string?</p>
                <p className= "c2answer" id = "a2">  </p>
                <div className="c2btnf"> <button className="c2btnt" onClick={handleClick2} id = "q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c2blocker">
            <p className= "c2question"> How could you declare a int named 'num', set to 10, in a C++ program?</p>
                <p className= "c2answer" id = "a3">  </p>
                <div className="c2btnf"> <button className="btnt" onClick={handleClick3} id = "q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default C2L;