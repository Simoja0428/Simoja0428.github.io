import "./Ru3LStyles.css";
import React from 'react';

const RU3L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: if";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: TRUE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: relational operators";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="ru3lcon">
        <div className= "ru3sectionHeader"> What are Conditionals? </div>
        <div className="ru3text">
            Conditionals are a way of adding a stipulation to whether our code
            runs. Depending on what we are doing, there could be a number of different
            scenarios in which the code needs to be specific to a special case. Conditionals
            are a great way of being able to control what code runs based on the scenario.
        </div>
        <div className= "ru3sectionHeader"> Basic format: </div>
        <div className="ru3text">
            When creating a conditional block, there are 3 keywords to be aware of: 'if', 
            'elsif', and 'else'. The 'elsif' and 'else' keywords are optional based on
            the scenario. The 'if' and 'elsif' keywords are normally followed by some form of 
            a condition in the parenthesis next to it. After the code block you need to specify 
            the end of the conditional by using the 'end' keyword. The process of declaring a conditional is shown below:
        </div>
        <div className="ru3code">
            <p>
                if( a == b) <br />
                &emsp;&emsp; *If a=b, Something Happens* <br />
                elsif (a == b-1) <br />
                &emsp;&emsp; *If a=b-1, Something Happens* <br />
                else <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
                end <br />
            </p>
        </div>
        <div className="ru3code">
            <p>
                if( a == b) <br />
                &emsp;&emsp; *If a=b, Something Happens* <br />
                else <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
                end <br />
            </p>
        </div>
        <div className= "ru3sectionHeader"> Usage of Operators in Conditionals: </div>
        <div className="ru3text">
           Inside of the condition of a conditional, there are a variety of different
           things that we can check prior to running the conditional block. We can use
           all of the relational operators in Ruby to compare the values of variables in a condition.
        </div>
        <div className="ru3sectionHeader"> Logical Operators: </div>
        <div className="ru3text">
            Sometimes inside of a conditional there are a number of different conditions
            we want to check for the code to run. In order to do this, we can use logical operators.
            Specifically, we can use the and '&#38;&#38;' along with the or '||' logical operators in Ruby.
            The process of using the 'and' and 'or' operators in conditionals is shown below:
        </div>
        <div className="ru3code">
            <p>
                if( a == b &#38;&#38; b != 0) <br />
                &emsp;&emsp; *If a=b and b&#8800;0, Something Happens* <br />
                elsif (a == b || b != 0) <br />
                &emsp;&emsp; *If a=b or b&#8800;0, Something Happens* <br />
                else <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
                end <br />
            </p>
        </div>
        <div className="ru3sectionHeader"> Nested Conditionals: </div>
        <div className="ru3text">
            Sometimes rather than using logical operators, it would be more beneficial
            to use nested conditionals. Specifically, this will happen if you need to
            do something in between the multiple conditionals you are checking. The process of
            nesting conditionals is shown below:
        </div>
        <div className="ru3code">
            <p>
                if( a == b) <br />
                &emsp;&emsp;if( b != 0) <br />
                &emsp;&emsp;&emsp;&emsp; *If a=b and b&#8800;0, Something Happens* <br />
                &emsp;&emsp;end <br/>
                else <br />
                &emsp;&emsp;if( b != 0) <br />
                &emsp;&emsp;&emsp;&emsp; *If a&#8800;b and b&#8800;0, Something Happens* <br />
                &emsp;&emsp;end <br/>
                end <br />
            </p>
        </div>
       
        <div className= "ru3sectionHeader"> Review Questions: </div>
        <div className="ru3blocker">
            <p className= "ru3question"> What keyword should be used if we want to have a single conditional block in our code?</p>
                <p className= "ru3answer" id = "a1">  </p>
                <div className="ru3btnf"> <button className="ru3btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru3blocker">
            <p className= "ru3question"> TRUE/FALSE: The end of all conditional blocks in Ruby needs to be specificed using 'end'.</p>
                <p className= "ru3answer" id = "a2">  </p>
                <div className="ru3btnf"> <button className="ru3btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru3blocker">
            <p className= "ru3question"> What type of operators can we use to compare two variables inside a conditional?</p>
                <p className= "ru3answer" id = "a3">  </p>
                <div className="ru3btnf"> <button className="ru3btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default RU3L;