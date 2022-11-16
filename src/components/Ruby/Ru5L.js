import "./Ru5LStyles.css";
import React from 'react';

const Ru5L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: TRUE";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: iteration loop";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: a range";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="ru5lcon">
        <div className= "ru5sectionHeader"> What are Loops? </div>
        <div className="ru5text">
            In Computer programming we sometimes need to repeat an action or 
            line of code multiple times. In order to do this, we can use loops 
            to repeat various blocks of code. Although there are a variety of different
            loops in Ruby programming, we will predominantly focus on for(), while(), and
            array iteration loops here.
        </div>
        <div className= "ru5sectionHeader"> Declaring a for() loop: </div>
        <div className="ru5text">
            A for() loop in Ruby is a bit different than the traditional format in other programming languages. A for()
            loop in Ruby only needs two inputs: a variable and a range (a range in ruby is simple an
            array of numbers). Like a conditional, you need to also specify the end of a loop block
            in Ruby using the keyword 'end'. The process of declaring a for() loop in Ruby is shown below:
        </div>
        <div className="ru5code">
            <p>
                my_range = 0..4 #Creates a range 0-4 <br />
                for x in my_range <br />
                &emsp;&emsp; puts("Hello There!")<br />
                end <br />
            </p>
        </div>
        <div className="ru5text">
            The output of the code above is: 
        </div>
        <div className="ru5out">
            <p>
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
            </p>
        </div>
        <div className= "ru5sectionHeader"> Iterating through Arrays: </div>
        <div className="ru5text">
            Rather than using a for() loop, Ruby comes built in with an iteration 
            loop that will loop through each element in a given array. This iteration
            loop is a part of the Array class in Ruby and needs to be called off an array.
            The basic format of an iteration loop can be shown below where '.each do' is the format
            to call the loop and |n| is the value of the element in the array at that time of the loop.
        </div>
        <div className="ru5code">
            <p>
                nums = [1,2,3,4,5] #Creates array of numbers <br/>
                sum = 0 <br/>
                nums.each do |n| <br/>
                &emsp;&emsp; sum = sum + n <br/>
                end <br/>
                puts("Sum: #&#10100;sum&#10101;")
            </p>
        </div>
        <div className="ru5text">
            The output of the code above is: 
        </div>
        <div className="ru5out">
            <p>
                Sum: 15 <br />
            </p>
        </div>
        <div className= "ru5sectionHeader"> Declaring a while() loop: </div>
        <div className="ru5text">
           A while() loop is a loop that runs based off of a condition. A while() loop will
           keep running as long as the condition is fufilled so it is incredibly important
           to make sure at some point to satisfy the condition of the while() loop to avoid an
           infinite loop. Below shows a while() loop that runs until the condition within is fufilled:
        </div>
        <div className="ru5code">
            <p>
                flag = true <br/>
                tracker = 0 <br />
                while flag <br />
                &emsp;&emsp; puts("Hello There!")<br />
                &emsp;&emsp; tracker += 1 <br />
                &emsp;&emsp; if tracker == 3 <br />
                &emsp;&emsp;&emsp;&emsp; flag = false<br />
                &emsp;&emsp; end <br />
                end <br />
            </p>
        </div>
        <div className="ru5text">
            The output of the code above is: 
        </div>
        <div className="ru5out">
            <p>
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
            </p>
        </div>
        <div className= "ru5sectionHeader"> Simulating a for() loop using a while() loop </div>
        <div className="ru5text">
           Another method of creating a for() loop, with out a range, in Ruby is by using a while() loop.
           While this may sound confusing, it is actually quite simple. In order to do this,
           the while() loop simply needs a numerical variable as the condition that is incremented
           each time the loop runs. The process of creating a for() loop using a while() loop is
           shown below:
        </div>
        <div className="ru5code">
            <p>
                x = 0 <br />
                while x &lt; 5 <br />
                &emsp;&emsp; puts("for in a while")<br />
                &emsp;&emsp; x += 1 <br />
                end <br />
            </p>
        </div>
        <div className="ru5text">
            The output of the code above is: 
        </div>
        <div className="ru5out">
            <p>
                for in a while <br />
                for in a while <br />
                for in a while <br />
            </p>
        </div>
        <div className= "ru5sectionHeader"> Review Questions: </div>
        <div className="ru5blocker">
            <p className= "ru5question"> TRUE/FALSE: An iteration loop is a part of the array class in Ruby.</p>
                <p className= "ru5answer" id = "a1">  </p>
                <div className="ru5btnf"> <button className="ru5btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru5blocker">
            <p className= "ru5question"> What type of loop is best suited for navigating through the elements of an array?</p>
                <p className= "ru5answer" id = "a2">  </p>
                <div className="ru5btnf"> <button className="ru5btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru5blocker">
            <p className= "ru5question"> What is an array of numbers also called in Ruby? </p>
                <p className= "ru5answer" id = "a3">  </p>
                <div className="ru5btnf"> <button className="ru5btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default Ru5L;