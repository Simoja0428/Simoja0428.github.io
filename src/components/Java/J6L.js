import "./J6LStyles.css";
import React from 'react';

const J6L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: indexing an array";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: FALSE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: new";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="j6lcon">
        <div className= "j6sectionHeader"> What are Arrays? </div>
        <div className="j6text">
            In Computer programming we sometimes need to store multiple values
            of data depending on what we are doing. An array is a fantastic tool 
            in Java that allows you to store multiple different values of a specific type.
            It is incredibly important to note that once the size of an array is 
            set it can not be changed without redeclaring the array!
        </div>
        <div className= "j6sectionHeader"> Declaring an Array: </div>
        <div className="j6text">
            Similar to other data types in Java programming, we need to specify that
            we are creating an array if we want to use one. The way this is done is 
            through puting a '[]' following the array name. The process of declaring an array is shown below:
        </div>
        <div className="j6code">
            <p>
                string phones[] = new string[4]; //Declares an array length 4 to fill later <br />
                string vals = &#10100;"i", "a","m","t"&#10101;; //Declares an array length 4 and fills it <br />
            </p>
        </div>
        <div className= "j6sectionHeader"> Accessing Elements in an Array: </div>
        <div className="j6text">
            In order to retrieve, fill, and manipulate individual elements within an 
            array we need to index that array. In order to do this, we can call the 
            variable name with '[INDEX]' directly to the right of it. When indexing an 
            array the first value of the array is at index 0. The process of filling an 
            array and then accessing it's values individually is shown below: 
        </div>
        <div className="j6code">
            <p>
                string phones[] = new string[4]; //Declares an array length 4 to fill later <br />
                phones[0] = "iPhone"; <br />
                phones[1] = "Android"; <br />
                phones[2] = "Motorola"; <br />
                phones[3] = "Trace"; <br />
                System.out.println("The value of the 3rd element in the array is: " + phones[2]); <br /> 
            </p>
        </div>
        <div className="j6text">
            The output of the code above is: 
        </div>
        <div className="j6out">
            <p>
                The value of the 3rd element in the array is: Motorola <br />
            </p>
        </div>
        <div className= "j6sectionHeader"> Swapping Array Elements: </div>
        <div className="j6text">
            In order to swap out the value of two elements in an array, you must create
            a temporary variable to store one of the values in order to avoid losing any data.
            Since the size of an array is static, the ability to swap elements in arrays 
            is incredibly important when there is no extra space left in the array. We
            can swap two elements in an array as shown below:
        </div>
        <div className="j6code">
            <p>
                string vals = &#10100;"i", "a","m","t"&#10101;; <br /> 
                System.out.println("The value of the 3rd element in the array is: " + vals[2]); <br /> 
                string temp = vals[1]; <br /> 
                vals[1] = vals[2]; <br /> 
                vals[2] = temp; <br /> 
                System.out.println("The value of the 3rd element in the array is: " + vals[2]); <br /> 
            </p>
        </div>
        <div className="j6text">
            The output of the code above is: 
        </div>
        <div className="j6out">
            <p>
                The value of the 3rd element in the array is: m <br />
                The value of the 3rd element in the array is: a <br />
            </p>
        </div>
        <div className= "j6sectionHeader"> Navigating an Array: </div>
        <div className="j6text">
            We can access or manipulate multiple different values in an array using
            a for() loop. When using a for() loop to navigate an array from start to
            end, we want the starting index of the loop to be 0 and the ending index
            of the loop to be one less than the array length. Below demonstrates how 
            we can set an array using a loop and then print each of the values of the array.
        </div>
        <div className="j6code">
            <p>
                int theArraySize = 4; <br />
                int numbers[theArraySize]; <br/>
                for (int i = 0; i &#8826; theArraySize; i++) <br />
                &#10100; <br />
                &emsp;&emsp; numbers[i] = i+2; <br />
                &emsp;&emsp; System.out.println("The array value at " + i + " is: " + numbers[i]); <br />
                &#10101; <br />
            </p>
        </div>
        <div className="j6text">
            The output of the code above is: 
        </div>
        <div className="j6out">
            <p>
                The array value at 0 is: 2 <br />
                The array value at 1 is: 3 <br />
                The array value at 2 is: 4 <br />
                The array value at 3 is: 5 <br />
            </p>
        </div>
        <div className= "j6sectionHeader"> Review Questions: </div>
        <div className="j6blocker">
            <p className= "j6question"> What is it called when you want to access a specific element in an array?</p>
                <p className= "j6answer" id = "a1">  </p>
                <div className="j6btnf"> <button className="j6btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j6blocker">
            <p className= "j6question"> TRUE/FALSE: We can change the size of an array after declaring it.</p>
                <p className= "j6answer" id = "a2">  </p>
                <div className="j6btnf"> <button className="j6btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j6blocker">
            <p className= "j6question"> What keyword do we need to use when declaring an array to fill later? </p>
                <p className= "j6answer" id = "a3">  </p>
                <div className="j6btnf"> <button className="j6btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default J6L;