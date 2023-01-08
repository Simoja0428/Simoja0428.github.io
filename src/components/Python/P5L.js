import "./P5LStyles.css";
import React from 'react';

const P5L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: TRUE";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: for() loop";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: a range";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="p5lcon">
        <div className= "p5sectionHeader"> What are Loops? </div>
        <div className="p5text">
            In Computer programming we sometimes need to repeat an action or 
            line of code multiple times. In order to do this, we can use loops 
            to repeat various blocks of code. Although there are a variety of different
            loops in Python programming, we will predominantly focus on for(), while(), and
            array iteration loops here.
        </div>
        <div className= "p5sectionHeader"> Declaring a for() loop: </div>
        <div className="p5text">
            A for() loop in Python is a bit different than the traditional format in other programming languages. A for()
            loop in Python only needs two inputs: a variable and a range (a range in Python is simply an
            array of numbers). Make sure to include a ':' to start the tabbed contents of the loop
            similar to how you would with a conditional statement. The process of declaring a 
            for() loop in Python is shown below:
        </div>
        <div className="p5code">
            <p>
                my_range = range(0, 5) #Creates a range 0-4 <br />
                for x in my_range: <br />
                &emsp;&emsp;print("Hello There!") <br />
            </p>
        </div>
        <div className="p5text">
            The output of the code above is: 
        </div>
        <div className="p5out">
            <p>
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
            </p>
        </div>
        <div className= "p5sectionHeader"> Iterating through Arrays and Strings: </div>
        <div className="p5text">
            In order to iterate through an array in Python we can use a for() loop. Recall
            that a range is simply an array of numbers. So this means we can similarly iterate
            through arrays of other types while storing the current iteration value in the 
            loop variable. This concept extends to allowing us to iterate through strings, since, 
            a string is simply an array of characters. Below are two examples of iterating through
            an array of strings and then iterating through a singular string in Python:
        </div>
        <div className="p5code">
            <p>
            attendance = ["Jacob", "Liv", "Benito"] <br />
            <br />
            for names in attendance: <br />
            &emsp;&emsp;print(names) <br />
            <br />
            name = "Jacob" <br />
            <br />
            for letter in name: <br />
            &emsp;&emsp;print(letter) <br />
            </p>
        </div>
        <div className="ru5text">
            The output of the code above is: 
        </div>
        <div className="p5out">
            <p>
            Jacob <br />
            Liv <br />
            Benito <br />
            J <br />
            a <br />
            c <br />
            o <br />
            b <br />
            </p>
        </div>
        <div className= "p5sectionHeader"> Declaring a while() loop: </div>
        <div className="p5text">
           A while() loop is a loop that runs based off of a condition. A while() loop will
           keep running as long as the condition is fufilled so it is incredibly important
           to make sure at some point to satisfy the condition of the while() loop to avoid an
           infinite loop. Below shows a while() loop that runs until the condition within is fufilled:
        </div>
        <div className="p5code">
            <p>
                flag = True <br/>
                tracker = 0 <br />
                while (flag == True): <br />
                &emsp;&emsp; print("Hello There!")<br />
                &emsp;&emsp; tracker += 1 <br />
                &emsp;&emsp; if (tracker == 3): <br />
                &emsp;&emsp;&emsp;&emsp; flag = False<br />
            </p>
        </div>
        <div className="p5text">
            The output of the code above is: 
        </div>
        <div className="p5out">
            <p>
                Hello There! <br />
                Hello There! <br />
                Hello There! <br />
            </p>
        </div>
        <div className= "p5sectionHeader"> Simulating a for() loop using a while() loop </div>
        <div className="p5text">
           Another method of creating a for() loop, with out a range, in Python is by using a while() loop.
           While this may sound confusing, it is actually quite simple. In order to do this,
           the while() loop simply needs a numerical variable as the condition that is incremented
           each time the loop runs. The process of creating a for() loop using a while() loop is
           shown below:
        </div>
        <div className="p5code">
            <p>
                x = 0 <br />
                while (x &lt; 5): <br />
                &emsp;&emsp; print("for in a while")<br />
                &emsp;&emsp; x += 1 <br />
            </p>
        </div>
        <div className="p5text">
            The output of the code above is: 
        </div>
        <div className="p5out">
            <p>
                for in a while <br />
                for in a while <br />
                for in a while <br />
            </p>
        </div>
        <div className= "p5sectionHeader"> Review Questions: </div>
        <div className="p5blocker">
            <p className= "p5question"> TRUE/FALSE: We can iterate through strings just like arrays in Python.</p>
                <p className= "p5answer" id = "a1">  </p>
                <div className="p5btnf"> <button className="p5btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p5blocker">
            <p className= "p5question"> What type of loop is best suited for navigating through the elements of an array?</p>
                <p className= "p5answer" id = "a2">  </p>
                <div className="p5btnf"> <button className="p5btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p5blocker">
            <p className= "p5question"> What is an array of numbers also called in Python? </p>
                <p className= "p5answer" id = "a3">  </p>
                <div className="p5btnf"> <button className="p5btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default P5L;