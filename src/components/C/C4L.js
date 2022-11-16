import "./C4LStyles.css";
import React from 'react';

const C4L = () => {

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
        document.getElementById("a3").textContent = "ANSWER: #include";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="c4lcon">
        <div className= "c4sectionHeader"> What are Methods? </div>
        <div className="c4text">
            Methods are a way of breaking code up in C++ so that we can reuse it
            later. A general rule of thumb, in Computer Science, is to reduce the
            amount of copying and pasting in your code. Methods are a fantastic way
            of allowing you to reuse code instead of copying and pasting.
        </div>
        <div className= "c4sectionHeader"> Return Types: </div>
        <div className="c4text">
            Every method in C++ has something called a return type. A return
            type is the type of information you want to recieve from calling 
            the function. Most return types are also data types. You must include
            a return type when declaring a function this includes
            returning nothing which is represented using type: void.
        </div>
        <div className= "c4sectionHeader"> Parameters: </div>
        <div className="c4text">
            Sometimes you need to access existing variables inside a method for
            future use. In order to do this, we can define the function with
            parameters and set those parameters to the variables we need. When
            defining the parameter of a function you must specify its data type.
        </div>
        <div className="c4sectionHeader"> Defining a Method: </div>
        <div className="c4text">
            In order to use a method you must first define it. When defining methods 
            it is important to make sure that the method definition is above the main
            function. The process of defining a method is shown below:
        </div>
        <div className="c4code">
            <p>
                int addTwoNums(int a, int b) <br />
                &#10100; <br />
                &emsp;&emsp; int sum = a + b; <br />
                &emsp;&emsp; return sum; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c4sectionHeader"> Calling a Method: </div>
        <div className="c4text">
            Once you have defined a method you can then call the method
            in other places in your code. If the method has a return type,
            then that value can be saved by creating a new variable to store the
            return information in. This process is shown below:
        </div>
        <div className="c4code">
            <p>
                #include &lt;iostream&gt;<br/>
                using namespace std; <br/>
                int addTwoNums(int a, int b) <br />
                &#10100; <br />
                &emsp;&emsp; int sum = a + b; <br />
                &emsp;&emsp; return sum; <br />
                &#10101; <br />

                int main(int argc, char* argv[]) <br />
                &#10100; <br />
                &emsp;&emsp; int sum = addTwoNums(3, 5); <br />
                &emsp;&emsp; cout &lt;&lt; "The sum is: " &lt;&lt; sum; <br />
                &emsp;&emsp; return 0; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c4text">
            The output of the program above is: 
        </div>
        <div className="c4out">
            <p>
                The sum is: 8 <br />
            </p>
        </div>
        <div className="c4sectionHeader"> Calling a Pre-Defined Method: </div>
        <div className="c4text">
            C++ comes with a multitude of different methods that are already
            ready for your use! When calling a pre-defined method, it is important
            to make sure you have imported the required C++ libraries to call the method.
            The process of using a pre-defined method is shown below:
        </div>
        <div className="c4code">
            <p>
                #include &lt;iostream&gt;<br/>
                #include &lt;cmath&gt;<br/>
                using namespace std; <br/>

                int main(int argc, char* argv[]) <br />
                &#10100; <br />
                &emsp;&emsp; int numSqrt = sqrt(16); <br />
                &emsp;&emsp; cout &lt;&lt; "The square root of 16 is: " &lt;&lt; numSqrt; <br />
                &emsp;&emsp; return 0; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c4text">
            The output of the program above is: 
        </div>
        <div className="c4out">
            <p>
                The square root of 16 is: 4 <br />
            </p>
        </div>
        <div className="c4sectionHeader"> Methods with No Return Type: </div>
        <div className="c4text">
            In C++ programming it is possible to have a method that does something
            but doesn't return anything. This method could be used to print something
            out or edit paramters given to the function. When defining a method that returns
            nothing we define the method as 'void'. The process of using a 'void' method is shown below:
        </div>
        <div className="c4code">
            <p>
                #include &lt;iostream&gt;<br/>
                using namespace std; <br/>

                void printHello() <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Hello There! \n" <br />
                &#10101; <br />

                int main(int argc, char* argv[]) <br />
                &#10100; <br />
                &emsp;&emsp; printHello(); <br />
                &emsp;&emsp; return 0; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c4text">
            The output of the program above is: 
        </div>
        <div className="c4out">
            <p>
                Hello There! <br />
            </p>
        </div>
        <div className= "c4sectionHeader"> Review Questions: </div>
        <div className="c4blocker">
            <p className= "c4question"> What portion of a method declaration determines what variables we have access to inside the method?</p>
            <p className= "c4answer" id = "a1">  </p>
            <div className="c4btnf"> <button className="c4btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c4blocker">
            <p className= "c4question"> TRUE/FALSE: We can have a method that doesn't return anything.</p>
            <p className= "c4answer" id = "a2">  </p>
            <div className="c4btnf"> <button className="c4btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c4blocker">
            <p className= "c4question"> What keyword can we use to access a pre-defined C++ library?</p>
            <p className= "c4answer" id = "a3">  </p>
            <div className="c4btnf"> <button className="c4btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default C4L;