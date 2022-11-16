import "./C5LStyles.css";
import React from 'react';

const C5L = () => {

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
        document.getElementById("a3").textContent = "ANSWER: logical operators";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="c5lcon">
        <div className= "c5sectionHeader"> What are Conditionals? </div>
        <div className="c5text">
            Conditionals are a way of adding a stipulation to whether our code
            runs. Depending on what we are doing, there could be a number of different
            scenarios in which the code needs to be specific to a special case. Conditionals
            are a great way of being able to control what code runs based on the scenario.
        </div>
        <div className= "c5sectionHeader"> Basic format: </div>
        <div className="c5text">
            When creating a conditional block, there are 3 keywords to be aware of: 'if', 
            'else if', and 'else'. The 'else if' and 'else' keywords are optional based on
            the scenario. The 'if' and 'elseif' keywords are normally followed by some form of 
            a condition in the parenthesis next to it. The process of declaring a conditional is shown below:
        </div>
        <div className="c5code">
            <p>
                if( a == b) <br />
                &#10100; <br />
                &emsp;&emsp; *If a=b, Something Happens* <br />
                &#10101; <br />
                elseif (a == b-1) <br />
                &#10100; <br />
                &emsp;&emsp; *If a=b-1, Something Happens* <br />
                &#10101; <br />
                else <br />
                &#10100; <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c5code">
            <p>
                if( a == b) <br />
                &#10100; <br />
                &emsp;&emsp; *If a=b, Something Happens* <br />
                &#10101; <br />
                else <br />
                &#10100; <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
                &#10101; <br />
            </p>
        </div>
        <div className= "c5sectionHeader"> Usage of Operators in Conditionals: </div>
        <div className="c5text">
           Inside of the condition of a conditional, there are a variety of different
           things that we can check prior to running the conditional block. We can use
           all of the relational operators in C++ to compare the values of variables in a condition.
        </div>
        <div className="c5sectionHeader"> Logical Operators: </div>
        <div className="c5text">
            Sometimes inside of a conditional there are a number of different conditions
            we want to check for the code to run. In order to do this, we can use logical operators.
            Specifically, we can use the and '&#38;&#38;' along with the or '||' logical operators in C++.
            The process of using the 'and' and 'or' operators in conditionals is shown below:
        </div>
        <div className="c5code">
            <p>
                if( a == b &#38;&#38; b != 0) <br />
                &#10100; <br />
                &emsp;&emsp; *If a=b and b&#8800;0, Something Happens* <br />
                &#10101; <br />
                elseif (a == b || b != 0) <br />
                &#10100; <br />
                &emsp;&emsp; *If a=b or b&#8800;0, Something Happens* <br />
                &#10101; <br />
                else <br />
                &#10100; <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c5sectionHeader"> Nested Conditionals: </div>
        <div className="c5text">
            Sometimes rather than using logical operators, it would be more beneficial
            to use nested conditionals. Specifically, this will happen if you need to
            do something in between the multiple conditionals you are checking. The process of
            nesting conditionals is shown below:
        </div>
        <div className="c5code">
            <p>
                if( a == b) <br />
                &#10100; <br />
                &emsp;&emsp;if( b != 0) <br />
                &emsp;&emsp;&#10100; <br />
                &emsp;&emsp;&emsp;&emsp; *If a=b and b&#8800;0, Something Happens* <br />
                &emsp;&emsp;&#10101; <br />
                &#10101; <br />
                else <br />
                &#10100; <br />
                &emsp;&emsp;if( b != 0) <br />
                &emsp;&emsp;&#10100; <br />
                &emsp;&emsp;&emsp;&emsp; *If a&#8800;b and b&#8800;0, Something Happens* <br />
                &emsp;&emsp;&#10101; <br />
                &#10101; <br />
            </p>
        </div>
       
        <div className= "c5sectionHeader"> Review Questions: </div>
        <div className="c5blocker">
            <p className= "c5question"> What keyword should be used if we want to have a single conditional block in our code?</p>
            <p className= "c5answer" id = "a1">  </p>
            <div className="c5btnf"> <button className="c5btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c5blocker">
            <p className= "c5question"> TRUE/FALSE: We can put multiple different conditionals inside of eachother.</p>
            <p className= "c5answer" id = "a2">  </p>
            <div className="c5btnf"> <button className="c5btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c5blocker">
            <p className= "c5question"> What type of operators can we use if we want to compare multiple conditions in a conditional?</p>
            <p className= "c5answer" id = "a3">  </p>
            <div className="c5btnf"> <button className="c5btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default C5L;