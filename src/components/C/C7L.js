import "./C7LStyles.css";
import React from 'react';

const C7L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: i=i+1";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: for() loop";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: break";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="c7lcon">
        <div className= "c7sectionHeader"> What are Loops? </div>
        <div className="c7text">
            In Computer programming we sometimes need to repeat an action or 
            line of code multiple times. In order to do this, we can use loops 
            to repeat various blocks of code. Although there are a variety of different
            loops in C++ programming, we will predominantly focus on for() and while()
            loops here.
        </div>
        <div className= "c7sectionHeader"> Declaring a for() loop: </div>
        <div className="c7text">
            A for() loop is a loop that takes a start index, an end index, and an incremental
            condition. To declare a for() loop we need to use the keyword 'for' followed by 
            our nessecary start/end information. The process of using a for() loop is shown below:
        </div>
        <div className="c7code">
            <p>
                for (int i = 0; i &#8826; 5; i++) <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Hello There!" &lt;&lt; endl;<br />
                &#10101; <br />
            </p>
        </div>
        <div className="c7text">
            The output of the code above is: 
        </div>
        <div className="c7out">
            <p>
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
            </p>
        </div>
        <div className= "c7sectionHeader"> Incrementing a for() loop: </div>
        <div className="c7text">
            When using a for() loop we need to specify how the variable holding our index
            will change each time the loop runs. In order to do this, we can set an incremental
            condition in the loop. In the previous example, our incremental condition was i++, which
            is a shorthand for i = i + 1, however, the condition can vary based on the programmers needs.
            Below shows an example of a loop that will only print out the even numbers it comes across:
        </div>
        <div className="c7code">
            <p>
                for (int i = 0; i &#8826;= 10; i+=2) <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Number: " &lt;&lt; i &lt;&lt; endl;<br />
                &#10101; <br />
            </p>
        </div>
        <div className="c7text">
            The output of the code above is: 
        </div>
        <div className="c7out">
            <p>
                Number: 2 <br />
                Number: 4 <br />
                Number: 6 <br />
                Number: 8 <br />
                Number: 10 <br />
            </p>
        </div>
        <div className= "c7sectionHeader"> Using a for() loop to navigate an Array: </div>
        <div className="c7text">
            We can access or manipulate multiple different values in an array using
            a for() loop. When using a for() loop to navigate an array from start to
            end, we want the starting index of the loop to be 0 and the ending index
            of the loop to be one less than the array length. Below demonstrates how 
            we can set an array using a loop and then print each of the values of the array.
        </div>
        <div className="c7code">
            <p>
                int theArraySize = 4; <br />
                int numbers[theArraySize]; <br/>
                for (int i = 0; i &#8826; theArraySize; i++) <br />
                &#10100; <br />
                &emsp;&emsp; numbers[i] = i+2; <br />
                &emsp;&emsp; cout &lt;&lt; "The array value at " &lt;&lt; i &lt;&lt; " is: " &lt;&lt; numbers[i]; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c7text">
            The output of the code above is: 
        </div>
        <div className="c7out">
            <p>
                The array value at 0 is: 2 <br />
                The array value at 1 is: 3 <br />
                The array value at 2 is: 4 <br />
                The array value at 3 is: 5 <br />
            </p>
        </div>
        <div className= "c7sectionHeader"> Declaring a while() loop: </div>
        <div className="c7text">
           A while() loop is a loop that runs based off of a condition. A while() loop will
           keep running as long as the condition is fufilled so it is incredibly important
           to make sure at some point to satisfy the condition of the while() loop to avoid an
           infinite loop. Below shows a while() loop that runs until the condition within is fufilled:
        </div>
        <div className="c7code">
            <p>
                int tracker = 0; <br/>
                while ( tracker &#8826; 5) <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Hello There!" &lt;&lt; endl;<br />
                &emsp;&emsp; tracker += 1; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c7text">
            The output of the code above is: 
        </div>
        <div className="c7out">
            <p>
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
            </p>
        </div>
        <div className= "c7sectionHeader"> An Infinite while() loop: </div>
        <div className="c7text">
           Infinite loops are an incredibly common problem in Computer Science. An
           infinite loop is a loop where the ending condition is never fufilled so
           the loop keeps running. The loop will keep running until the computer 
           eventually runs out of memory and the program crashes. For this reason, it 
           is incredibly important to avoid infinite loops. Below shows an example
           of a while() loop that would be considered an infinite loop:
        </div>
        <div className="c7code">
            <p>
                bool flag = true; <br/>
                int a = 0;<br />
                while ( flag) <br />
                &#10100; <br />
                &emsp;&emsp;cout &lt;&lt; "Hello There!" &lt;&lt; endl;<br />
                &emsp;&emsp;if(a == 1) //Never fufilled so the code never runs <br />
                &emsp;&emsp;&#10100;<br />
                &emsp;&emsp;&emsp;&emsp; flag = false; <br />
                &emsp;&emsp;&#10101;<br />
                &#10101; <br />
            </p>
        </div>
        <div className= "c7sectionHeader"> Review Questions: </div>
        <div className="c7blocker">
            <p className= "c7question"> What is i++ shorthand for?</p>
            <p className= "c7answer" id = "a1">  </p>
            <div className="c7btnf"> <button className="c7btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c7blocker">
            <p className= "c7question"> Is a for() loop or while() loop better suited for navigating through the elements of an array?</p>
            <p className= "c7answer" id = "a2">  </p>
            <div className="c7btnf"> <button className="c7btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c7blocker">
            <p className= "c7question"> What keyword can be used to immedately exit a loop if a condition is satisfied? </p>
            <p className= "c7answer" id = "a3">  </p>
            <div className="c7btnf"> <button className="c7btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default C7L;