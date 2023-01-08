import "./P7LStyles.css";
import React from 'react';

const P7L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: parameters";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: TRUE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: import";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="p7lcon">
        <div className= "p7sectionHeader"> What are Methods? </div>
        <div className="p7text">
            Methods are a way of breaking code up in Python so that we can reuse it
            later. A general rule of thumb, in Computer Science, is to reduce the
            amount of copying and pasting in your code. Methods are a fantastic way
            of allowing you to reuse code instead of copying and pasting.
        </div>
        <div className= "p7sectionHeader"> Return Types: </div>
        <div className="p7text">
            Every method in Python has something called a return type. A return
            type is the type of information you want to recieve from calling 
            the function. Most return types are also data types. If you do not
            include a return statement than the function returns void.
        </div>
        <div className= "p7sectionHeader"> Parameters: </div>
        <div className="p7text">
            Sometimes you need to access existing variables inside a method for
            future use. In order to do this, we can define the function with
            parameters and set those parameters to the variables we need. When
            defining the parameters of a function you only need to specify their names in Python.
        </div>
        <div className="p7sectionHeader"> Defining a Method: </div>
        <div className="p7text">
            In order to use a method you must first define it. When defining methods 
            it is important to make sure that the method definition is above any calls
            to the method. The process of defining a method is shown below:
        </div>
        <div className="p7code">
            <p>
                def addTwoNums(a, b): <br />
                &emsp;&emsp; sum = a + b <br />
                &emsp;&emsp; return sum <br />
            </p>
        </div>
        <div className="p7sectionHeader"> Calling a Method: </div>
        <div className="p7text">
            Once you have defined a method you can then call the method
            in other places in your code. If the method has a return type,
            then that value can be saved by creating a new variable to store the
            return information in. This process is shown below:
        </div>
        <div className="p7code">
            <p>
                def addTwoNums(a, b): <br />
                &emsp;&emsp; sum = a + b <br />
                &emsp;&emsp; return sum <br />
                <br />
                sum = addTwoNums(3, 5) <br />
                print("The sum is: " + str(sum)) <br />
            </p>
        </div>
        <div className="p7text">
            The output of the program above is: 
        </div>
        <div className="p7out">
            <p>
                The sum is: 8 <br />
            </p>
        </div>
        <div className="p7sectionHeader"> Calling a Pre-Defined Method: </div>
        <div className="p7text">
            Python comes with a multitude of different methods that are already
            ready for your use! When calling a pre-defined method, it is important
            to make sure you have imported the required Python libraries to call the method.
            The process of using a pre-defined method is shown below:
        </div>
        <div className="p7code">
            <p>
                import math<br/>

                numSqrt = math.sqrt(16) <br />
                print("The square root of 16 is: " + str(numSqrt)) <br />
            </p>
        </div>
        <div className="p7text">
            The output of the program above is: 
        </div>
        <div className="p7out">
            <p>
                The square root of 16 is: 4 <br />
            </p>
        </div>
        <div className="p7sectionHeader"> Methods with No Return Type: </div>
        <div className="p7text">
            In Python programming it is possible to have a method that does something
            but doesn't return anything. This method could be used to print something
            out or edit parameters given to the function. When defining a method that doesn't
            return anything, we simply omit the 'return' keyword at the end of the function. The
            process of defining a void function is shown below:
        </div>
        <div className="p7code">
            <p>
                def printHello(): <br />
                &emsp;&emsp; print("Hello There!") <br />
                <br />
                printHello() <br />
            </p>
        </div>
        <div className="p7text">
            The output of the program above is: 
        </div>
        <div className="p7out">
            <p>
                Hello There! <br />
            </p>
        </div>
        <div className= "p7sectionHeader"> Review Questions: </div>
        <div className="p7blocker">
            <p className= "p7question"> What portion of a method declaration determines what variables we have access to inside the method?</p>
            <p className= "p7answer" id = "a1">  </p>
            <div className="p7btnf"> <button className="p7btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p7blocker">
            <p className= "p7question"> TRUE/FALSE: We can have a method that doesn't return anything.</p>
            <p className= "p7answer" id = "a2">  </p>
            <div className="p7btnf"> <button className="p7btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p7blocker">
            <p className= "p7question"> What keyword can we use to access a pre-defined Python library?</p>
            <p className= "p7answer" id = "a3">  </p>
            <div className="p7btnf"> <button className="p7btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default P7L;