import "./J7LStyles.css";
import React from 'react';

const J7L = () => {

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
    <div className="j7lcon">
        <div className= "j7sectionHeader"> What are Methods? </div>
        <div className="j7text">
            Methods are a way of breaking code up in Java so that we can reuse it
            later. A general rule of thumb, in Computer Science, is to reduce the
            amount of copying and pasting in your code. Methods are a fantastic way
            of allowing you to reuse code instead of copying and pasting.
        </div>
        <div className= "j7sectionHeader"> Return Types: </div>
        <div className="j7text">
            Every method in Java has something called a return type. A return
            type is the type of information you want to recieve from calling 
            the function. Most return types are also data types. You must include
            a return type when declaring a function this includes
            returning nothing which is represented using type: 'void'.
        </div>
        <div className= "j7sectionHeader"> Parameters: </div>
        <div className="j7text">
            Sometimes you need to access existing variables inside a method for
            future use. In order to do this, we can define the function with
            parameters and set those parameters to the variables we need. When
            defining the parameter of a function you must specify its data type.
        </div>
        <div className="j7sectionHeader"> Defining a Method: </div>
        <div className="j7text">
            In order to use a method you must first define it. When defining methods 
            it is important to make sure that the method definition is above the main
            function. The process of defining a method is shown below:
        </div>
        <div className="j7code">
            <p>
                public int addTwoNums(int a, int b) <br />
                &#10100; <br />
                &emsp;&emsp; int sum = a + b; <br />
                &emsp;&emsp; return sum; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="j7sectionHeader"> Calling a Method: </div>
        <div className="j7text">
            Once you have defined a method you can then call the method
            in other places in your code. If the method has a return type,
            then that value can be saved by creating a new variable to store the
            return information in. This process is shown below:
        </div>
        <div className="j7code">
            <p>
                public class AddTwo <br/>
                &#10100; <br />
                &emsp;&emsp;public int addTwoNums(int a, int b) <br />
                &emsp;&emsp;&#10100; <br />
                &emsp;&emsp;&emsp;&emsp; int sum = a + b; <br />
                &emsp;&emsp; &emsp;&emsp;return sum; <br />
                &emsp;&emsp;&#10101; <br />

                &emsp;&emsp;public static void main(String[]args) <br />
                &emsp;&emsp;&#10100; <br />
                &emsp;&emsp;&emsp;&emsp; int sum = addTwoNums(3, 5); <br />
                &emsp;&emsp;&emsp;&emsp; System.out.println("The sum is: " + sum); <br />
                &emsp;&emsp; &#10101; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="j7text">
            The output of the program above is: 
        </div>
        <div className="j7out">
            <p>
                The sum is: 8 <br />
            </p>
        </div>
        <div className="j7sectionHeader"> Calling a Pre-Defined Method: </div>
        <div className="j7text">
            Java comes with a multitude of different methods that are already
            ready for your use! When calling a pre-defined method, it is important
            to make sure you have imported the required Java libraries to call the method.
            The process of using a pre-defined method is shown below:
        </div>
        <div className="j7code">
            <p>
                import java.util.*;<br/>
                public class addTwo<br/>
                &#10100; <br />
                &emsp;&emsp; public static void main(String[]args) <br />
                &emsp;&emsp;&#10100; <br />
                &emsp;&emsp;&emsp;&emsp; Scanner n = new Scanner(System.in); <br />
                &emsp;&emsp;&emsp;&emsp; int num = n.nextInt(); <br />
                &emsp;&emsp;&emsp;&emsp; System.out.println("The number you entered is: " + num); <br />
                &emsp;&emsp;&#10101; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="j7text">
            The output of the program above is: 
        </div>
        <div className="j7out">
            <p>
                GIVEN INPUT IS 1: The number you entered is: 1 <br />
            </p>
        </div>
        <div className="j7sectionHeader"> Methods with No Return Type: </div>
        <div className="j7text">
            In Java programming it is possible to have a method that does something
            but doesn't return anything. This method could be used to print something
            out or edit paramters given to the function. When defining a method that returns
            nothing we define the method as 'void'. The process of using a 'void' method is shown below:
        </div>
        <div className="j7code">
            <p>

                public class AddTwo<br/>
                &#10100; <br />
                &emsp;&emsp;void printHello() <br />
                &emsp;&emsp;&#10100; <br />
                &emsp;&emsp;&emsp;&emsp; System.out.println("Hello There!"); <br />
                &emsp;&emsp;&#10101; <br />
                &emsp;&emsp;public static void main(String[]args) <br />
                &emsp;&emsp;&#10100; <br />
                &emsp;&emsp;&emsp;&emsp; printHello(); <br />
                &emsp;&emsp;&#10101; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="j7text">
            The output of the program above is: 
        </div>
        <div className="j7out">
            <p>
                Hello There! <br />
            </p>
        </div>
        <div className= "j7sectionHeader"> Review Questions: </div>
        <div className="j7blocker">
            <p className= "j7question"> What portion of a method declaration determines what variables we have access to inside the method?</p>
                <p className= "j7answer" id = "a1">  </p>
                <div className="j7btnf"> <button className="j7btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j7blocker">
            <p className= "j7question"> TRUE/FALSE: We can restrict access to methods in Java from other files.</p>
                <p className= "j7answer" id = "a2">  </p>
                <div className="j7btnf"> <button className="j7btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j7blocker">
            <p className= "j7question"> What keyword can we use to access a pre-defined Java library?</p>
                <p className= "j7answer" id = "a3">  </p>
                <div className="j7btnf"> <button className="j7btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default J7L;