import "./P4LStyles.css";
import React from 'react';

const P4L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: elif";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: :";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: relational operators";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="p4lcon">
        <div className= "p4sectionHeader"> What are Conditionals? </div>
        <div className="p4text">
            Conditionals are a way of adding a stipulation to whether our code
            runs. Depending on what we are doing, there could be a number of different
            scenarios in which the code needs to be specific to a special case. Conditionals
            are a great way of being able to control what code runs based on the scenario.
        </div>
        <div className= "p4sectionHeader"> Basic Format: </div>
        <div className="p4text">
            When creating a conditional block, there are 3 keywords to be aware of: 'if', 
            'elif', and 'else'. The 'elif' and 'else' keywords are optional based on
            the scenario. The 'if' and 'elif' keywords are normally followed by some form of 
            a condition in the parenthesis next to it. The process of declaring a conditional is shown below:
        </div>
        <div className="p4code">
            <p>
                if( a == b): <br />
                &emsp;&emsp; *If a=b, Something Happens* <br />
                elif (a == b-1): <br />
                &emsp;&emsp; *If a=b-1, Something Happens* <br />
                else: <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
            </p>
        </div>
        <div className="p4code">
            <p>
                if( a == b): <br />
                &emsp;&emsp; *If a=b, Something Happens* <br />
                else: <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
            </p>
        </div>
        <div className= "p4sectionHeader"> Usage of Operators in Conditionals: </div>
        <div className="p4text">
           Inside of the condition of a conditional, there are a variety of different
           things that we can check prior to running the conditional block. We can use
           all of the relational operators in Python to compare the values of variables in a condition.
        </div>
        <div className="p4sectionHeader"> Logical Operators: </div>
        <div className="p4text">
            Sometimes inside of a conditional there are a number of different conditions
            we want to check for the code to run. In order to do this, we can use logical operators.
            Specifically, we can use the keywords 'and' along with the 'or' logical operators in Python.
            The process of using the 'and' and 'or' operators in conditionals is shown below:
        </div>
        <div className="p4code">
            <p>
                if( a == b and b != 0): <br />
                &emsp;&emsp; *If a=b and b&#8800;0, Something Happens* <br />
                elif (a == b or b != 0): <br />
                &emsp;&emsp; *If a=b or b&#8800;0, Something Happens* <br />
                else: <br />
                &emsp;&emsp; *All other cases, Something Happens* <br />
            </p>
        </div>
        <div className="p4sectionHeader"> Nested Conditionals: </div>
        <div className="p4text">
            Sometimes rather than using logical operators, it would be more beneficial
            to use nested conditionals. Specifically, this will happen if you need to
            do something in between the multiple conditionals you are checking. The process of
            nesting conditionals is shown below:
        </div>
        <div className="p4code">
            <p>
                if( a == b): <br />
                &emsp;&emsp;if( b != 0): <br />
                &emsp;&emsp;&emsp;&emsp; *If a=b and b&#8800;0, Something Happens* <br />
                else: <br />
                &emsp;&emsp;if( b != 0): <br />
                &emsp;&emsp;&emsp;&emsp; *If a&#8800;b and b&#8800;0, Something Happens* <br />
            </p>
        </div>
       
        <div className= "p4sectionHeader"> Review Questions: </div>
        <div className="p4blocker">
            <p className= "p4question"> What keyword can we use to check an else if statement in Python?</p>
                <p className= "p4answer" id = "a1">  </p>
                <div className="p4btnf"> <button className="p4btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p4blocker">
            <p className= "p4question"> What symbol needs to follow the conditional statement for a conditional block?</p>
                <p className= "p4answer" id = "a2">  </p>
                <div className="p4btnf"> <button className="p4btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p4blocker">
            <p className= "p4question"> What type of operators could be used to check whether a number is greater than 10? </p>
                <p className= "p4answer" id = "a3">  </p>
                <div className="p4btnf"> <button className="p4btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default P4L;