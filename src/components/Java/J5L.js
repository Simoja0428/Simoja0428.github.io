import "./J5LStyles.css";
import React from 'react';

const J5L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: i=i-1";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: while() loop";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: infinite loop";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="j5lcon">
        <div className= "j5sectionHeader"> What are Loops? </div>
        <div className="j5text">
            In Computer programming we sometimes need to repeat an action or 
            line of code multiple times. In order to do this, we can use loops 
            to repeat various blocks of code. Although there are a variety of different
            loops in Java programming, we will predominantly focus on for() and while()
            loops here.
        </div>
        <div className= "j5sectionHeader"> Declaring a for() loop: </div>
        <div className="j5text">
            A for() loop is a loop that takes a start index, an end index, and an incremental
            condition. To declare a for() loop we need to use the keyword 'for' followed by 
            our nessecary start/end information. The process of using a for() loop is shown below:
        </div>
        <div className="j5code">
            <p>
                for (int i = 0; i &#8826; 5; i++) <br />
                &#10100; <br />
                &emsp;&emsp; System.out.println("Hello There!");<br />
                &#10101; <br />
            </p>
        </div>
        <div className="j5text">
            The output of the code above is: 
        </div>
        <div className="j5out">
            <p>
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
            </p>
        </div>
        <div className= "j5sectionHeader"> Incrementing a for() loop: </div>
        <div className="j5text">
            When using a for() loop we need to specify how the variable holding our index
            will change each time the loop runs. In order to do this, we can set an incremental
            condition in the loop. In the previous example, our incremental condition was i++, which
            is a shorthand for i = i + 1, however, the condition can vary based on the programmer's needs.
            Below shows an example of a loop that will only print out the even numbers it comes across:
        </div>
        <div className="j5code">
            <p>
                for (int i = 0; i &#8826;= 10; i+=2) <br />
                &#10100; <br />
                &emsp;&emsp; System.out.println("Number: " + i);<br />
                &#10101; <br />
            </p>
        </div>
        <div className="j5text">
            The output of the code above is: 
        </div>
        <div className="j5out">
            <p>
                Number: 2 <br />
                Number: 4 <br />
                Number: 6 <br />
                Number: 8 <br />
                Number: 10 <br />
            </p>
        </div>
        <div className= "j5sectionHeader"> Using a for() loop to navigate an Array: </div>
        <div className="j5text">
            We can access or manipulate multiple different values in an array using
            a for() loop. When using a for() loop to navigate an array from start to
            end, we want the starting index of the loop to be 0 and the ending index
            of the loop to be one less than the array length. Below demonstrates how 
            we can set an array using a loop and then print each of the values of the array.
        </div>
        <div className="j5code">
            <p>
                int arraySize = 5; <br />
                int numbers[arraySize]; <br/>
                for (int i = 0; i &#8826; arraySize; i++) <br />
                &#10100; <br />
                &emsp;&emsp; numbers[i] = i+2; <br />
                &emsp;&emsp; System.out.println("The array value at "+ i + " is: " + numbers[i]); <br />
                &#10101; <br />
            </p>
        </div>
        <div className="j5text">
            The output of the code above is: 
        </div>
        <div className="j5out">
            <p>
                The array value at 0 is: 2 <br />
                The array value at 1 is: 3 <br />
                The array value at 2 is: 4 <br />
                The array value at 3 is: 5 <br />
                The array value at 4 is: 6 <br />
            </p>
        </div>
        <div className= "j5sectionHeader"> Declaring a while() loop: </div>
        <div className="j5text">
           A while() loop is a loop that runs based off of a condition. A while() loop will
           keep running as long as the condition is fufilled so it is incredibly important
           to make sure at some point to satisfy the condition of the while() loop to avoid an
           infinite loop. Below shows a while() loop that runs until the condition within is fufilled:
        </div>
        <div className="j5code">
            <p>
                int tracker = 0; <br/>
                while ( tracker &#8826; 5) <br />
                &#10100; <br />
                &emsp;&emsp; System.out.println("Hello There!");<br />
                &emsp;&emsp; tracker += 1; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="j5text">
            The output of the code above is: 
        </div>
        <div className="j5out">
            <p>
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
            </p>
        </div>
        <div className= "j5sectionHeader"> An Infinite while() loop: </div>
        <div className="j5text">
           Infinite loops are an incredibly common problem in Computer Science. An
           infinite loop is a loop where the ending condition is never fufilled so
           the loop keeps running. The loop will keep running until the computer 
           eventually runs out of memory and the program crashes. For this reason, it 
           is incredibly important to avoid infinite loops. Below shows an example
           of a while() loop that would be considered an infinite loop:
        </div>
        <div className="j5code">
            <p>
                boolean flag = true; <br/>
                int a = 0;<br />
                while ( flag) <br />
                &#10100; <br />
                &emsp;&emsp;System.out.println("Hello There!");<br />
                &emsp;&emsp;if(a == 1) //Never fufilled so the code never runs <br />
                &emsp;&emsp;&#10100;<br />
                &emsp;&emsp;&emsp;&emsp; flag = false; <br />
                &emsp;&emsp;&#10101;<br />
                &#10101; <br />
            </p>
        </div>
        <div className= "j5sectionHeader"> Review Questions: </div>
        <div className="j5blocker">
            <p className= "j5question"> What is i-- shorthand for?</p>
                <p className= "j5answer" id = "a1">  </p>
                <div className="j5btnf"> <button className="j5btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j5blocker">
            <p className= "j5question"> Which type of loop would generally be better suited for running based on a true/false conditional?</p>
                <p className= "j5answer" id = "a2">  </p>
                <div className="j5btnf"> <button className="j5btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j5blocker">
            <p className= "j5question"> What is it called when a loop never exits and just keeps running? </p>
                <p className= "j5answer" id = "a3">  </p>
                <div className="j5btnf"> <button className="j5btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default J5L;