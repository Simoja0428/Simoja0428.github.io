import "./Ru6LStyles.css";
import React from 'react';

const Ru6L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: indexing an array";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: TRUE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: TRUE";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="ru6lcon">
        <div className= "ru6sectionHeader"> What are Arrays? </div>
        <div className="ru6text">
            In Computer programming we sometimes need to store multiple values
            of data depending on what we are doing. An array is a fantastic tool 
            in Ruby that allows you to store multiple different values of a specific type.
            Unlike arrays in other languages, you can change the size of an array after
            declaring it in Ruby.
        </div>
        <div className= "ru6sectionHeader"> Declaring an Array: </div>
        <div className="ru6text">
            In order to create an array, we need to set the variable we are creating to '[]' 
            and then within those brackets specify the elements inside of the array. The process
            of declaring an array in Ruby is shown belown:
        </div>
        <div className="ru6code">
            <p>
                years = ["2014", "2015", "2016", "2017"]; #Declares an array length 4  <br />
                puts years #We can print the contents on an array in Ruby <br/>
            </p>
        </div>
        <div className="ru6text">
            The output of calling puts() on the array above is:
        </div>
        <div className = "ru6out">
            <p>
                2014 <br/>
                2015 <br/>
                2016 <br/>
                2017 <br/>
            </p>
        </div>
        <div className= "ru6sectionHeader"> Accessing Elements in an Array: </div>
        <div className="ru6text">
            In order to retrieve, fill, and manipulate individual elements within an 
            array we need to index that array. In order to do this, we can call the 
            variable name with '[INDEX]' directly to the right of it. When indexing an 
            array the first value of the array is at index 0. The process of filling an 
            array and then accessing it's values individually is shown below: 
        </div>
        <div className="ru6code">
            <p>
                phones = Array.new(4) //Declares an array length 4 to fill later <br />
                phones[0] = "iPhone" <br />
                phones[1] = "Android" <br />
                phones[2] = "Motorola" <br />
                phones[3] = "Trace" <br />
                puts("The value of the 3rd element in the array is: #&#10100;phones[2]&#10101;) <br /> 
            </p>
        </div>
        <div className="ru6text">
            The output of the code above is:  <br />
        </div>
        <div className="ru6out">
            <p>
                The value of the 3rd element in the array is: Motorola <br />
            </p>
        </div>
        <div className= "ru6sectionHeader"> Dynanimcally adding to an Array: </div>
        <div className="ru6text">
            Alternatively, you can also dynanimcally add to an array if you don't know
            what the array's size is in Ruby. In order to do this, you need to use the
            operator '&lt;&lt;' which will add the elements to the end of the array. This 
            process is shown below:
        </div>
        <div className="ru6code">
            <p>
                nums = [] <br />
                nums &lt;&lt; 1 <br />
                nums &lt;&lt; 2 <br />
                nums &lt;&lt; 3 <br />
                puts nums <br />
            </p>
        </div>
        <div className="ru6text">
            The output of the code above is:  <br />
        </div>
        <div className="ru6out">
            <p>
                1 <br />
                2 <br />
                3 <br />
            </p>
        </div>
        <div className= "ru6sectionHeader"> Iterating through Arrays: </div>
        <div className="ru6text">
            Rather than using a for() loop, Ruby comes built in with an iteration 
            loop that will loop through each element in a given array. This iteration
            loop is a part of the Array class in Ruby and needs to be called off an array.
            The basic format of an iteration loop can be shown below where '.each do' is the format
            to call the loop and |n| is the value of the element in the array at that time of the loop.
        </div>
        <div className="ru6code">
            <p>
                nums = [1,2,3,4,5] #Creates array of numbers <br/>
                sum = 0 <br/>
                nums.each do |n| <br/>
                &emsp;&emsp; sum = sum + n <br/>
                end <br/>
                puts("Sum: #&#10100;sum&#10101;") <br />
            </p>
        </div>
        <div className="ru6text">
            The output of the code above is: 
        </div>
        <div className="ru6out">
            <p>
                Sum: 15 <br />
            </p>
        </div>
        <div className= "ru6sectionHeader"> Review Questions: </div>
        <div className="ru6blocker">
            <p className= "ru6question"> What is it called when you want to access a specific element in an array?</p>
                <p className= "ru6answer" id = "a1">  </p>
                <div className="ru6btnf"> <button className="ru6btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru6blocker">
            <p className= "ru6question"> TRUE/FALSE: We can change the size of an array after declaring it.</p>
                <p className= "ru6answer" id = "a2">  </p>
                <div className="ru6btnf"> <button className="ru6btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru6blocker">
            <p className= "ru6question"> TRUE/FALSE: We can call puts() on the entirety of the contents of an array. </p>
                <p className= "ru6answer" id = "a3">  </p>
                <div className="ru6btnf"> <button className="ru6btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default Ru6L;