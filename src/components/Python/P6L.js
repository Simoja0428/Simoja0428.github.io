import "./P6LStyles.css";
import React from 'react';

const P6L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: indexing an array";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: append()";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: for() loop";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="p6lcon">
        <div className= "p6sectionHeader"> What are Lists? </div>
        <div className="p6text">
            In Computer programming we sometimes need to store multiple values
            of data depending on what we are doing. A list, more commonly known as
            an array in other programming languages, is a fantastic tool 
            in Python that allows you to store multiple different values of a specific type.
            Lists in Python can be dynamically changed after declaration.
        </div>
        <div className= "p6sectionHeader"> Declaring a List: </div>
        <div className="p6text">
            Similar to other programming languages, in Python programming, we need to specify that
            we are creating a list if we want to use one. The way this is done is 
            through puting a '[]' surronding the values we are declaring within the list. 
            The process of declaring an list is shown below:
        </div>
        <div className="p6code">
            <p>
                vals = ["i", "a","m","t"] #Declares an array length 4 and fills it <br />
            </p>
        </div>
        <div className= "p6sectionHeader"> Accessing Elements in a List: </div>
        <div className="p6text">
            In order to retrieve, fill, and manipulate individual elements within an 
            array we need to index that list. In order to do this, we can call the 
            variable name with '[INDEX]' directly to the right of it. When indexing an 
            array the first value of the list is at index 0. The process of filling a 
            list and then accessing it's values individually is shown below: 
        </div>
        <div className="p6code">
            <p>
                phones = [] <br />
                phones.append("iPhone") <br />
                phones.append("Samsung") <br />
                phones.append("Motorola") <br />
                phones.append("Trace") <br />
                print("The value of the 3rd element in the array is: " + phones[2]) <br />
            </p>
        </div>
        <div className="p6text">
            The output of the code above is: 
        </div>
        <div className="p6out">
            <p>
                The value of the 3rd element in the array is: Motorola <br />
            </p>
        </div>
        <div className= "p6sectionHeader"> Swapping List Elements: </div>
        <div className="p6text">
            In order to swap out the value of two elements in a list, you must create
            a temporary variable to store one of the values in order to avoid losing any data.
            We can swap two elements in an array as shown below:
        </div>
        <div className="p6code">
            <p>
                vals = ["i", "a","m","t"] <br /> 
                print("The value of the 3rd element in the array is: " + vals[2]) <br /> 
                temp = vals[1] <br /> 
                vals[1] = vals[2] <br /> 
                vals[2] = temp <br /> 
                print("The value of the 3rd element in the array is: " + vals[2]) <br /> 
            </p>
        </div>
        <div className="p6text">
            The output of the code above is: 
        </div>
        <div className="p6out">
            <p>
                The value of the 3rd element in the array is: m <br />
                The value of the 3rd element in the array is: a <br />
            </p>
        </div>
        <div className= "p6sectionHeader"> Navigating a List: </div>
        <div className="p6text">
            In order to iterate through a list in Python we can use a for() loop. Recall
            that a range is simply a list of numbers. So this means we can similarly iterate
            through lists of other types while storing the current iteration value in the 
            loop variable. This concept extends to allowing us to iterate through strings, since, 
            a string is simply a list of characters. Below are two examples of iterating through
            a list of strings and then iterating through a singular string in Python:
        </div>
        <div className="p6code">
            <p>
                i = 0 <br />
                numbers = [0,0,0,0] <br/>
                for x in numbers <br />
                &emsp;&emsp; numbers[i] = i+2 <br />
                &emsp;&emsp; print("The array value at " + i + " is: " + str(numbers[i])) <br />
                &emsp;&emsp; i = i + 1 <br />
            </p>
        </div>
        <div className="p6text">
            The output of the code above is: 
        </div>
        <div className="p6out">
            <p>
                The array value at 0 is: 2 <br />
                The array value at 1 is: 3 <br />
                The array value at 2 is: 4 <br />
                The array value at 3 is: 5 <br />
            </p>
        </div>
        <div className= "p6sectionHeader"> Review Questions: </div>
        <div className="p6blocker">
            <p className= "p6question"> What is it called when you want to access a specific element in an array?</p>
            <p className= "p6answer" id = "a1">  </p>
            <div className="p6btnf"> <button className="p6btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p6blocker">
            <p className= "p6question"> What method is used to add to the back of a Python List?</p>
            <p className= "p6answer" id = "a2">  </p>
            <div className="p6btnf"> <button className="p6btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p6blocker">
            <p className= "p6question"> What type of loop structure is commonly used to index and navigate arrays? </p>
            <p className= "p6answer" id = "a3">  </p>
            <div className="p6btnf"> <button className="p6btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default P6L;