import "./Ru4LStyles.css";
import React from 'react';

const Ru4L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: *parameter";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: TRUE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: def";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="ru4lcon">
        <div className= "ru4sectionHeader"> What are Methods? </div>
        <div className="ru4text">
            Methods are a way of breaking code up in Ruby so that we can reuse it
            later. A general rule of thumb, in Computer Science, is to reduce the
            amount of copying and pasting in your code. Methods are a fantastic way
            of allowing you to reuse code instead of copying and pasting.
        </div>
        <div className= "ru4sectionHeader"> Return Types: </div>
        <div className="ru4text">
            Every method in Ruby has something called a return type. A return
            type is the type of information you want to recieve from calling 
            the function. In Ruby the last line is automatically returned and
            determines the return type of the function, however,
            you can also specify what is returned using the 'return' keyword.
        </div>
        <div className= "ru4sectionHeader"> Parameters: </div>
        <div className="ru4text">
            Sometimes you need to access existing variables inside a method for
            future use. In order to do this, we can define the function with
            parameters and set those parameters to the variables we need. When
            defining the parameter of a function in Ruby we don't need to specify
            any types since Ruby is an interpeted language.
        </div>
        <div className="ru4sectionHeader"> Defining a Method: </div>
        <div className="ru4text">
            In order to use a method you must first define it. This can be done 
            by using the keyword 'def' and putting the keyword 'end' at the
            end of the function's code. When defining methods it is 
            important to make sure that the method definition is above where 
            you are going to call the method:
        </div>
        <div className="ru4code">
            <p>
                def addTwoNums(a, b) <br />
                &emsp;&emsp; sum = a + b <br />
                &emsp;&emsp; return sum <br />
                end <br />
            </p>
        </div>
        <div className="ru4sectionHeader"> Calling a Method: </div>
        <div className="ru4text">
            Once you have defined a method you can then call the method
            in other places in your code. If the method has a return type,
            then that value can be saved by creating a new variable to store the
            return information in. This process is shown below:
        </div>
        <div className="ru4code">
            <p>

                def addTwoNums(a, b) <br />
                &emsp;&emsp; sum = a + b <br />
                &emsp;&emsp; return sum <br />
                end <br />
                <br />
                sum = addTwoNums(3, 5) <br />
                puts("The sum is: #&#10100;sum&#10101;") <br />
            </p>
        </div>
        <div className="ru4text">
            The output of the program above is: 
        </div>
        <div className="ru4out">
            <p>
                The sum is: 8 <br />
            </p>
        </div>
        <div className="ru4sectionHeader"> Optional Parameters: </div>
        <div className="ru4text">
            In Ruby it is possible to call a method and not input all
            of the parameters in the function definition. In Ruby, as long
            as the parameters that are required are satisified, then the method
            will still run even if its missing the optional parameters. In order to
            specify optional parameters, you can put a '*' before the parameter name.
            The process of creating a function with optional parameters is shown below:
        </div>
        <div className="ru4code">
            <p>
            def addMultiNums(a, b, c*) <br />
                &emsp;&emsp; sum = a + b <br />
                &emsp;&emsp; c.each do |n| <br />
                &emsp;&emsp;&emsp;&emsp; sum = sum + n <br />
                &emsp;&emsp; end <br />
                &emsp;&emsp; return sum <br />
            end <br />
            <br />
            sum = addTwoNums(3, 5) <br />
            puts("The sum is: #&#10100;sum&#10101;") <br />
            sum = addTwoNums(3, 5, 4) <br />
            puts("The sum is: #&#10100;sum&#10101;") <br />
            </p>
        </div>
        <div className="ru4text">
            The output of the program above is: 
        </div>
        <div className="ru4out">
            <p>
                The sum is: 8 <br />
                The sum is: 12 <br />
            </p>
        </div>
        <div className="ru4sectionHeader"> Methods with No Return Type??? </div>
        <div className="ru4text">
            In Ruby programming all methods automatically return the final line of code in
            a function. Because of this, the return 'keyword' is optional when working with
            functions in Ruby. Howwever, even if the keyword is not used, the function will
            still automatically have a return type. An example of this can be seen below:
        </div>
        <div className="ru4code">
            <p>

                def addTwoNums(a, b) <br />
                &emsp;&emsp; sum = a + b #Notice absence of 'return'<br/>
                end <br />
                <br />
                sum = addTwoNums(3, 5) #Notice we still get something from func. <br/>
                puts("The sum is: #&#10100;sum&#10101;") <br />
            </p>
        </div>
        <div className="ru4text">
            The output of the program above is: 
        </div>
        <div className="ru4out">
            <p>
                The sum is: 8 <br />
            </p>
        </div>
        <div className= "ru4sectionHeader"> Review Questions: </div>
        <div className="ru4blocker">
            <p className= "ru4question"> In Ruby what is the format for declaring a parameter(s) is optional?</p>
                <p className= "ru4answer" id = "a1">  </p>
                <div className="ru4btnf"> <button className="ru4btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru4blocker">
            <p className= "ru4question"> TRUE/FALSE: The 'return' keyword is optional in Ruby programming.</p>
                <p className= "ru4answer" id = "a2">  </p>
                <div className="ru4btnf"> <button className="ru4btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru4blocker">
            <p className= "ru4question"> What keyword can we use to define the start of a function implementation? </p>
                <p className= "ru4answer" id = "a3">  </p>
                <div className="ru4btnf"> <button className="ru4btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default Ru4L;