import "./C8LStyles.css";
import React from 'react';

const C8L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: private";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: FALSE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: #pragma once";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="c8lcon">
        <div className= "c8sectionHeader"> What are Classes? </div>
        <div className="c8text">
            Commonly considered to be the most well known difference between C and C++,
            we have the ability to create our own custom objects using classes in C++ 
            programming. A custom class consists of a number of variables and methods
            that the user can call on when using the class in the future.
        </div>
        <div className= "c8sectionHeader"> Basic format of a C++ class: </div>
        <div className="c8text">
            When declaring a C++, the class is comprised of two files: a header file and
            a .cpp file. The header file (.h or .hpp depending on the platform) consists of
            the class definition while the .cpp file contains the actual implementation of
            the class constructor and methods. Below demonstrates what the formatting of a 
            class in C++ should look like:
        </div>
        <div className="c8code">
            <p>
                //.h file < br/>
                #pragma once //This needs to be at the top of every class definition < br/>
                #include &#8826;iostream&#8827; < br/>
                
                using namespace std; < br/>
                
                class className < br/>
                &#10100;< br/>
                &emsp;&emsp;public: //Where the methods go< br/>
                &emsp;&emsp;&emsp;&emsp;className(); < br/>
                &emsp;&emsp;&emsp;&emsp;int getId();< br/>
                &emsp;&emsp;private: //Where the variables go< br/>
                &emsp;&emsp;&emsp;&emsp;int id;< br/>
                &#10101;; //Semicolon at the end of the class declaration< br/>
                < br/>
                < br/>
                //.cpp file < br/>
                #include "className.h" < br/>
                #include &#8826;cstdlib&#8827; <br />
                #include &#8826;time.h&#8827; <br />
                className::className()<br />
                &#10100;< br/>
                &emsp;&emsp;srand(time(0)); < br/>
                &emsp;&emsp;id = rand(); < br/>
                &#10101;< br/>
                int className :: getId() <br/>
                &#10100;< br/>
                &emsp;&emsp;return id; < br/>
                &#10101;< br/>
            </p>
        </div>
        <div className= "c8sectionHeader"> Protecting Variables in Classes: </div>
        <div className="c8text">
           When we create a variable in a class we want to protect the integrity of 
           that variable. Mainly, we want to make sure no one can access it when they 
           aren't supposed to outside of the class. In order to do this, we can declare
           the variables as 'private' in the class, we can further encapsulate the 
           variables create a number of Getter/Setter methods to access the variable
           outside of the class. This process is shown below:
        </div>
        <div className="c8code">
            <p>
                //.h file < br/>
                #pragma once < br/>
                #include &#8826;iostream&#8827; < br/>
                
                using namespace std; < br/>
                
                class className < br/>
                &#10100;< br/>
                &emsp;&emsp;public: < br/>
                &emsp;&emsp;&emsp;&emsp;className(); < br/>
                &emsp;&emsp;&emsp;&emsp;int getId();< br/>
                &emsp;&emsp;&emsp;&emsp;void setId(int num);< br/>
                &emsp;&emsp;private: < br/>
                &emsp;&emsp;&emsp;&emsp;int id;< br/>
                &#10101;;< br/>
                < br/>
                < br/>
                //.cpp file < br/>
                #include "className.h" < br/>
                #include &#8826;cstdlib&#8827; <br />
                #include &#8826;time.h&#8827; <br />
                className::className()<br />
                &#10100;< br/>
                &emsp;&emsp;srand(time(0)); < br/>
                &emsp;&emsp;id = rand(); < br/>
                &#10101;< br/>
                int className :: getId() <br/>
                &#10100;< br/>
                &emsp;&emsp;return id; < br/>
                &#10101;< br/>
                void className :: setId(int num) <br/>
                &#10100;< br/>
                &emsp;&emsp;id = num; < br/>
                &#10101;< br/>
            </p>
        </div>
        <div className= "c8sectionHeader"> Using Classes: </div>
        <div className="c8text">
           After we have created and defined our custom class in C++ we can
           import that class into our main function for further usage. When 
           we create an instance of a class, we then have access to all of that
           object's variables and the methods in the class definition. The process
           of using a class in another method is shown below:
        </div>
        <div className="c8code">
            <p>
                //.h file < br/>
                #pragma once < br/>
                #include &#8826;iostream&#8827; < br/>
                
                using namespace std; < br/>
                
                class className < br/>
                &#10100;< br/>
                &emsp;&emsp;public: < br/>
                &emsp;&emsp;&emsp;&emsp;className(); < br/>
                &emsp;&emsp;&emsp;&emsp;int getId();< br/>
                &emsp;&emsp;&emsp;&emsp;void setId(int num);< br/>
                &emsp;&emsp;private: < br/>
                &emsp;&emsp;&emsp;&emsp;int id;< br/>
                &#10101;;< br/>
                < br/>
                < br/>
                //.cpp file < br/>
                #include "className.h" < br/>
                #include &#8826;cstdlib&#8827; <br />
                #include &#8826;time.h&#8827; <br />
                className::className()<br />
                &#10100;< br/>
                &emsp;&emsp;srand(time(0)); < br/>
                &emsp;&emsp;id = rand(); < br/>
                &#10101;< br/>
                int className :: getId() <br/>
                &#10100;< br/>
                &emsp;&emsp;return id; < br/>
                &#10101;< br/>
                void className :: setId(int num) <br/>
                &#10100;< br/>
                &emsp;&emsp;id = num; < br/>
                &#10101;< br/>
                <br/>
                <br/>
                // main file < br/>
                #include &lt;iostream&gt;<br/>
                #include "className.h" <br />
                using namespace std; <br />
                int main(int argc, char* argv[]) <br />
                &#10100; <br />
                &emsp;&emsp; className c1 = new className(); <br />
                &emsp;&emsp; cout &lt;&lt; "id: " &lt;&lt; c1.getId() &lt;&lt; endl;<br />
                &emsp;&emsp; c1.setId(200); <br />
                &emsp;&emsp; cout &lt;&lt; "id: " &lt;&lt; c1.getId() &lt;&lt; endl;<br />
                &emsp;&emsp; return 0; <br />
                &#10101; <br />
            </p>
        </div>
        <div className="c8text">
            The output of the code above is: 
        </div>
        <div className="c8out">
            <p>
                id: *Some random number* <br />
                id: 200 <br />
            </p>
        </div>
        <div className= "c8sectionHeader"> Review Questions: </div>
        <div className="c8blocker">
            <p className= "c8question"> What should we declare our variables as in order to avoid unwanted outside access to them outside a class?</p>
            <p className= "c8answer" id = "a1">  </p>
            <div className="c8btnf"> <button className="c8btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c8blocker">
            <p className= "c8question"> TRUE/FALSE You can create a custom class in both C and C++. </p>
            <p className= "c8answer" id = "a2">  </p>
            <div className="c8btnf"> <button className="c8btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="c8blocker">
            <p className= "c8question"> What tag is required at the top of any custom C++ class header files? </p>
            <p className= "c8answer" id = "a3">  </p>
            <div className="c8btnf"> <button className="c8btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default C8L;