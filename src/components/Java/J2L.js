import "./J2LStyles.css";
import React from 'react';

const J2L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: boolean";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: +";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: TRUE";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="j2lcon">
        <div className= "j2sectionHeader"> What are Variables? </div>
        <div className="j2text">
            Variables are a way of storing information in Java programming
            for reuse at a later time. The type of information that needs to be
            stored is what determines the data type of the variable. A variable
            first needs to be created before it can be filled and manipulated.
        </div>
        <div className= "j2sectionHeader"> Declaring Variables: </div>
        <div className="j2text">
            In order to create a variable in Java programming you must give 
            the variable a name and type. After this, you can set the value.
            The process of setting a variable is shown below:
        </div>
        <div className="j2code">
            <p>
            int number; //Declares variable <br />
            number = 1; //Assigns value <br />
            </p>
        </div>
        <div className="j2text">
        You can also combine the declaration of variables in Java programming into 
        one line which is shown below:
        </div>
        <div className="j2code">
            <p>
            int number = 1;
            </p>
        </div>
        <div className= "j2sectionHeader"> Integers: </div>
        <div className="j2text"> Integers are a type of variable that is meant to store whole numbers. 
        Integers do not account for decimals so you should be careful when working with them. 
        Below demonstrates an example of declaring integers in Java programming:</div>
        <div className="j2code">
            <p>
            int num1 = 1; <br />
            int negVal = -5; <br />
            int large = 102909; <br />
            </p>
        </div>
        <div className= "j2sectionHeader"> Doubles: </div>
        <div className="j2text">
        Doubles are a type of variable that is meant to store decimal numbers. 
        Doubles are much more precise than integers since they account for decimals,
        however, they also take up a much larger amount of memory storage.
        For that reason, you should only use doubles if you know that your program will require decimals.
        Below demonstrates an example of declaring doubles in Java programming:
        </div>
        <div className="j2code">
            <p>
            double decVal = 1.25; <br />
            double negDec = -5.26; <br />
            double wholeDec = 3.0; <br />
            </p>
        </div>
        <div className= "j2sectionHeader"> Booleans: </div>
        <div className="j2text">
        Booleans are a type of variable that is used to hold true or false values. 
        Booleans are often useful when we need to identify when 
        a condition has or has not been meant for our program. 
        Below demonstrates an example of declaring a boolean in Java programming:
        </div>
        <div className= "j2code">
            <p>
            boolean passed = true; <br />
            boolean failed = false; <br />
            </p>
        </div>
        <div className= "j2sectionHeader"> Characters: </div>
        <div className="j2text">
        Characters are a type of variable that is meant to store single character values. 
        Characters can only hold one letter value.  Below demonstrates an example of declaring 
        characters in Java programming:
        </div>
        <div className= "j2code">
            <p>
            char letter = 'e'; <br />
            char punct = '?'; <br />
            char letVal = 'T'; <br />
            </p>
        </div>
        <div className= "j2sectionHeader"> Strings: </div>
        <div className="j2text">
        Strings are a type of variable that is meant to store multiple character values. 
        Strings have a variety of different methods to manipulate how they are formatted.  
        Below demonstrates an example of declaring strings in Java programming:
        </div>
        <div className= "j2code">
            <p>
            String jacob = "jacob"; <br />
            String period = "."; <br />
            String blank = " "; <br />
            </p>
        </div>
        <div className= "j2sectionHeader"> Printing Variables: </div>
        <div className="j2text">
        In the previous project we learned how to print constant statements. 
        In programming we will often need to print the value of a variable to the console. 
        Below is a short program that demonstrates how we could do this:
        </div>
        <div className= "j2code">
            <p>
            public class PrintVars <br/>
            &#10100; <br/>
            &emsp;&emsp;public static void(String[] args) <br/>
            &emsp;&emsp;&#10100; <br/>
            &emsp;&emsp;&emsp;&emsp;int wholeNum = 1; <br/>
            &emsp;&emsp;&emsp;&emsp;double decimalNum = 3.25; <br/>
            &emsp;&emsp;&emsp;&emsp;boolean flag = true; <br/>
            &emsp;&emsp;&emsp;&emsp;char letter = 'a'; <br/>
            &emsp;&emsp;&emsp;&emsp;System.out.println("The whole number value is: " + wholeNum); <br />
            &emsp;&emsp;&emsp;&emsp;System.out.println("The decimal number value is: " + decimalNum); <br />
            &emsp;&emsp;&emsp;&emsp;System.out.println("The value of the flag is: " + flag); <br />
            &emsp;&emsp;&emsp;&emsp;System.out.println("The character value is: " + flag); <br />
            &emsp;&emsp;&#10101; <br/>
            &#10101; <br/>
            </p>
        </div>
        <div className="j2text">
             Output of the program above: 
        </div>
        <div className="j2out">
            <p>
            The whole number value is: 1 <br />
            The decimal number value is: 3.25 <br />
            The value of the flag is: true <br />
            The character value is: a <br />
            </p>
        </div>
        <div className= "j2sectionHeader"> Review Questions: </div>
        <div className="j2blocker">
            <p className= "j2question"> What data type is used to hold true/false values in a Java program?</p>
                <p className= "j2answer" id = "a1">  </p>
                <div className="j2btnf"> <button className="j2btnt" onClick={handleClick1} id = "q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j2blocker">
            <p className= "j2question"> What symbol would be used to concatenate a variable to a string a in a print statement?</p>
                <p className= "j2answer" id = "a2">  </p>
                <div className="j2btnf"> <button className="j2btnt" onClick={handleClick2} id = "q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j2blocker">
            <p className= "j2question"> TRUE/FALSE: You can declare and use a blank string in Java.</p>
                <p className= "j2answer" id = "a3">  </p>
                <div className="j2btnf"> <button className="j2btnt" onClick={handleClick3} id = "q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default J2L;