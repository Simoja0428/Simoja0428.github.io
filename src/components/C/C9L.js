import "./C9LStyles.css";
import React from 'react';

const C9L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: size()";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: TRUE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: the back";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="c9lcon">
        <div className= "c9sectionHeader"> What are Vectors? </div>
        <div className="c9text">
            Vectors are a data structure that is also called
            a dynamically sizing array. Unlike arrays, vectors can be
            resized after declaration and come with a variety of different methods to use. Vectors
            are easier to use but require much more memory than an array does.
        </div>
        <div className= "c9sectionHeader"> Declaring a Vector: </div>
        <div className="c9text">
            Similar to other objects in C++ programming, we need to specify that
            we are creating a vector if we want to use one. The way this is done is 
            through using the keyword type: 'vector' and the specifying the template type. 
            This process is shown below for a vector of ints.
        </div>
        <div className="c9code">
            <p>
                #include &lt;vector&gt;
                <br/>
                vector nums&lt;int&gt;; //Declares a vector of type integer <br />
            </p>
        </div>
        <div className= "c9sectionHeader"> Adding Elements to a Vector: </div>
        <div className="c9text">
            You can add elements to a vector by calling push_back() or insert(int index, T val).
            When calling push_back() the elements are inserted to the back of the vector.
            Where as, when calling insert(int index, T val), the index at which the element is inserted into the
            vector can be specified. Below demonstrates how we can use these two methods to add to a vector:
        </div>
        <div className="c9code">
            <p>
                #include &lt;vector&gt; <br/>
                #include &lt;iostream&gt;<br/>

                using namespace std; <br />
                <br/>
                vector nums&lt;int&gt;;  <br />
                for(int i = 0; i &lt; 5; i++) <br />
                &#10100; <br />
                &emsp;&emsp; nums.push_back(i); //Adds element to end<br />
                &#10101; <br />
                nums.insert(0,6); //Inserts number 6 at index 0 <br />
                for(int r = 0; r &lt; nums.size(); r++) <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Value: " &lt;&lt; nums[r] &lt;&lt; endl; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c9text">
            The output of the program above is: 
        </div>
        <div className="c9out">
            <p>
                Value: 6 <br />
                Value: 0 <br />
                Value: 1 <br />
                Value: 2 <br />
                Value: 3 <br />
                Value: 4 <br />
            </p>
        </div>
        <div className= "c9sectionHeader"> Deleting Elements from a Vector: </div>
        <div className="c9text">
            You can delete elements to a vector by calling pop_back(), clear() or erase(int index).
            When calling pop_back() the element is erased at the back of the vector.
            Where as, when calling erase(int index), the index at which the element is erased in the
            vector can be specified. Finally, when calling clear() all of the contents of 
            the vector are erased. Below demonstrates how we can use these three methods to erase from a vector:
        </div>
        <div className="c9code">
            <p>
                #include &lt;vector&gt;<br />
                #include &lt;iostream&gt;<br/>

                using namespace std; <br />
                <br/>
                vector nums&lt;int&gt;;  <br />
                for(int i = 0; i &lt; 5; i++) <br />
                &#10100; <br />
                &emsp;&emsp; nums.push_back(i); //Adds element to end<br />
                &#10101; <br />
                cout &lt;&lt; "Initial Elements: " &lt;&lt; endl;<br />
                for(int r = 0; r &lt; nums.size(); r++) <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Value: " &lt;&lt; nums[r] &lt;&lt; endl; <br />
                &#10101; <br />
                nums.pop_back(); <br />
                cout &lt;&lt; "After pop_back(): " &lt;&lt; endl;<br />
                for(int v = 0; v &lt; nums.size(); v++) <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Value: " &lt;&lt; nums[v] &lt;&lt; endl; <br />
                &#10101; <br />
                nums.erase(0); <br />
                cout &lt;&lt; "After erase(): " &lt;&lt; endl;<br />
                for(int t = 0; t &lt; nums.size(); t++) <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Value: " &lt;&lt; nums[t] &lt;&lt; endl; <br />
                &#10101; <br />
                nums.clear(); <br />
                cout &lt;&lt; "After clear(): " &lt;&lt; endl;<br />
                for(int u = 0; u &lt; nums.size(); u++) <br />
                &#10100; <br />
                &emsp;&emsp; cout &lt;&lt; "Value: " &lt;&lt; nums[u] &lt;&lt; endl; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c9text">
            The result of the code above is: 
        </div>
        <div className="c9out">
            <p>
                Initial Elements: <br/>
                Value: 6 <br />
                Value: 0 <br />
                Value: 1 <br />
                Value: 2 <br />
                Value: 3 <br />
                Value: 4 <br />
                After pop_back(): <br/>
                Value: 6 <br />
                Value: 0 <br />
                Value: 1 <br />
                Value: 2 <br />
                Value: 3 <br />
                After erase(): <br/>
                Value: 0 <br />
                Value: 1 <br />
                Value: 2 <br />
                Value: 3 <br />
                After clear(): <br/>
                <br />
            </p>
        </div>
        <div className= "c9sectionHeader"> Accessing Elements in a Vector: </div>
        <div className="c9text">
            In order to retrieve, fill, and manipulate individual elements within an 
            vector we need to index that vector. We can do this in a way similar to an array, mainly, by calling the 
            variable name with '[INDEX]' directly to the right of it. When indexing a 
            vector the first value of the vector is at index 0. Vectors include a method
            size() which will retrieve the length of the vector. Below demonstrates how we
            can access elements of a vector:
        </div>
        <div className="c9code">
            <p>
                #include &lt;vector&gt;<br />
                #include &lt;iostream&gt;<br/>

                using namespace std; <br />
                <br/>
                vector nums&lt;int&gt;;  <br />
                for(int i = 0; i &lt; 5; i++) <br />
                &#10100; <br />
                &emsp;&emsp; nums.push_back(i); //Adds element to end<br />
                &#10101; <br />
                
                cout &lt;&lt; "The value of the 1st element in the vector is: " &lt;&lt; nums[0]; <br /> 
                cout &lt;&lt; "The value of the last element in the vector is: " &lt;&lt; nums[nums.size()-1]; <br /> 
            </p>
        </div>
        <div className="c9text">
            The output of the code above is: 
        </div>
        <div className="c9out">
            <p>
                The value of the 1st element in the vector is: 0 <br />
                The value of the last element in the array is: 4 <br />
            </p>
        </div>
        <div className= "c9sectionHeader"> Indexing a Vector: </div>
        <div className="c9text">
            We can access or manipulate multiple different values in an vector using
            a for() loop, as we similarly could with an array. When using a for() loop to navigate a vector from start to
            end, we want the starting index of the loop to be 0 and the ending index
            of the loop to be one less than the vector length. The vector class contains a method,
            size(), which gets the length of the vector for the programmer. Below demonstrates how 
            we can set a vector using a loop and then print each of the values of the vector.
        </div>
        <div className="c9code">
            <p>
                #include &lt;vector&gt;<br />
                #include &lt;iostream&gt;<br/>

                using namespace std; <br />
                <br/>
                vector nums&lt;int&gt;;  <br />
                for(int i = 0; i &lt; 5; i++) <br />
                &#10100; <br />
                &emsp;&emsp; nums.push_back(i); //Adds element to end<br />
                &emsp;&emsp; cout &lt;&lt; "Value: " &lt;&lt; nums[i] &lt;&lt; endl; //Indexes vector like an array<br />
                &#10101; <br />
            </p>
        </div>
        <div className="c9text">
            The output of the program above is: 
        </div>
        <div className="c9out">
            <p>
                Value: 0 <br />
                Value: 1 <br />
                Value: 2 <br />
                Value: 3 <br />
                Value: 4 <br />
            </p>
        </div>
        <div className= "c9sectionHeader"> Review Questions: </div>
        <div className="c9blocker">
            <p className= "c9question"> What method can be used to access the length of a vector in C++? </p>
            <p className= "c9answer" id = "a1">  </p>
            <div className="c9btnf"> <button className="c9btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c9blocker">
            <p className= "c9question"> TRUE/FALSE: We can change the size of a vector after declaring it.</p>
            <p className= "c9answer" id = "a2">  </p>
            <div className="c9btnf"> <button className="c9btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c9blocker">
            <p className= "c9question"> Where does push_back() insert an element in a vector? </p>
            <p className= "c9answer" id = "a3">  </p>
            <div className="c9btnf"> <button className="c9btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default C9L;