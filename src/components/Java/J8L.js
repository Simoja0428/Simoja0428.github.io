import "./J8LStyles.css";
import React from 'react';

const J8L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: extends";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: TRUE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: super()";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="j8lcon">
        <div className= "j8sectionHeader"> What are Classes? </div>
        <div className="j8text">
            Classes are a fundamental concept to Java programming and, moreover,
            a fundamental concept to object-oriented programming. Classes allow
            for tons of reusability in code and cut down on the amount of copying and
            pasting you are doing in the code. A custom class consists of a number 
            of variables and methods that the user can call on when using the class in the future.
        </div>
        <div className= "j8sectionHeader"> Basic format of a Java class: </div>
        <div className="j8text">
            When declaring a class in Java, everything for the class can go into
            one singluar .java file. The name of the class must match the name of the
            .java file. Further, when declaring variables and methods in Java, you must
            specify the accessibility level for each individual variable/element.
            The basic format of declaring a class in Java is demonstrated below:
        </div>
        <div className="j8code">
            <p>
                //CustomClass.java  <br/>
                public class CustomClass <br/>
                &#10100;< br/>
                &emsp;&emsp; private String first; <br/>
                &emsp;&emsp; private String last; <br/>
                <br/>
                &emsp;&emsp;public CustomClass(f,l) <br/>
                &emsp;&emsp;&#10100;< br/>
                &emsp;&emsp;&emsp;&emsp; this.first = f; <br/>
                &emsp;&emsp;&emsp;&emsp; this.last = l; <br/>
                &emsp;&emsp;&#10101;< br/>
                &emsp;&emsp;public String getFirst()  <br/>
                &emsp;&emsp;&#10100;< br/>
                &emsp;&emsp;&emsp;&emsp; return this.first; <br/>
                &emsp;&emsp;&#10101;< br/>
                &emsp;&emsp;public String getLast()  <br/>
                &emsp;&emsp;&#10100;< br/>
                &emsp;&emsp;&emsp;&emsp; return this.last; <br/>
                &emsp;&emsp;&#10101;< br/>
                &#10101;< br/>
            </p>
        </div>
        <div className= "j8sectionHeader"> Protecting Variables in Classes: </div>
        <div className="j8text">
           When we create a variable in a class we want to protect the integrity of 
           that variable. Mainly, we want to make sure no one can access it when they 
           aren't supposed to outside of the class. In order to do this, we can declare
           the variables as 'private' in the class, we can further encapsulate the 
           variables create a number of Getter/Setter methods to access the variable
           outside of the class. This process is shown below:
        </div>
        <div className="j8code">
            <p>
            //Name.java  <br/>
            public class Name <br/>
            &#10100;< br/>
            &emsp;&emsp; private String first; <br/>
            &emsp;&emsp; private String last; <br/>
            <br/>
            &emsp;&emsp;public Name(f,l) <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.first = f; <br/>
            &emsp;&emsp;&emsp;&emsp; this.last = l; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public String getFirst()  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; return this.first; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public String getLast()  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; return this.last; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public void setFirst(String f)  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.first = f; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public void setLast(String l)  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.last = l; <br/>
            &emsp;&emsp;&#10101;< br/>
            &#10101;< br/>
            </p>
        </div>
        <div className= "j8sectionHeader"> Using Classes: </div>
        <div className="j8text">
           After we have created and defined our custom class in Java we can
           import that class into our main function for further usage. When 
           we create an instance of a class, we then have access to all of that
           object's variables and the methods in the class definition. The process
           of using a class in another method is shown below:
        </div>
        <div className="j8code">
            <p>
            //Name.java  <br/>
            public class Name <br/>
            &#10100;< br/>
            &emsp;&emsp; private String first; <br/>
            &emsp;&emsp; private String last; <br/>
            <br/>
            &emsp;&emsp;public Name(f,l) <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.first = f; <br/>
            &emsp;&emsp;&emsp;&emsp; this.last = l; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public String getFirst()  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; return this.first; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public String getLast()  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; return this.last; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public void setFirst(String f)  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.first = f; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public void setLast(String l)  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.last = l; <br/>
            &emsp;&emsp;&#10101;< br/>
            &#10101;< br/>
            <br/>
            //Driver.java <br/>
            public class Driver <br/>
            &#10100;< br/>
            &emsp;&emsp;public static void main(String[]args) <br />
            &emsp;&emsp;&#10100; <br />
            &emsp;&emsp;&emsp;&emsp; Name n = new Name("Jacob", "Simonek"); <br />
            &emsp;&emsp;&emsp;&emsp; System.out.println("First Name: " + n.getFirst()); <br />
            &emsp;&emsp;&emsp;&emsp; System.out.println("Last Name: " + n.getLast()); <br />
            &emsp;&emsp;&#10101; <br />
            &#10101; <br />

            </p>
        </div>
        <div className="j8text">
            The output of the code above is: 
        </div>
        <div className="j8out">
            <p>
                First Name: Jacob <br />
                Last Name: Simonek <br />
            </p>
        </div>
        <div className= "j8sectionHeader"> Inheritance: </div>
        <div className="j8text">
        One important aspect of Java, and object-orientation in general, is inheritance. 
        Inheritance is the idea that one class can recieve the methods and variables 
        from a parent class for reuse later. This avoids the need to copy and paste 
        methods that may be shared across multiple classes in a program. For one class 
        to inherit another in Java we simply need to use the keyword 'extends' in the class
        signature. This process is shown below:
        </div>
        <div className="j8code">
            <p>
            //Name.java  <br/>
            public class Name <br/>
            &#10100;< br/>
            &emsp;&emsp; private String first; <br/>
            &emsp;&emsp; private String last; <br/>
            <br/>
            &emsp;&emsp;public Name(f,l) <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.first = f; <br/>
            &emsp;&emsp;&emsp;&emsp; this.last = l; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public String getFirst()  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; return this.first; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public String getLast()  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; return this.last; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public void setFirst(String f)  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.first = f; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public void setLast(String l)  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.last = l; <br/>
            &emsp;&emsp;&#10101;< br/>
            &#10101;< br/>
            //FullName.java  <br/>
            public class FullName extends Name <br/>
            &#10100;< br/>
            &emsp;&emsp;private String middle; <br/>
            <br/>
            &emsp;&emsp;public FullName(f,l,m) <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; super(f,l); <br/>
            &emsp;&emsp;&emsp;&emsp; this.middle = m; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public String getMiddle()  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; return this.middle; <br/>
            &emsp;&emsp;&#10101;< br/>
            &emsp;&emsp;public void setMiddle(String m)  <br/>
            &emsp;&emsp;&#10100;< br/>
            &emsp;&emsp;&emsp;&emsp; this.middle = m; <br/>
            &emsp;&emsp;&#10101;< br/>
            &#10101;< br/>
            </p>
        </div>
        <div className= "j8sectionHeader"> Review Questions: </div>
        <div className="j8blocker">
            <p className= "j8question"> What keyword can we use to indicate one class inherits another in Java?</p>
                <p className= "j8answer" id = "a1">  </p>
                <div className="j8btnf"> <button className="j8btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j8blocker">
            <p className= "j8question"> TRUE/FALSE: The name of a custom class must match that classes' file name. </p>
                <p className= "j8answer" id = "a2">  </p>
                <div className="j8btnf"> <button className="j8btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="j8blocker">
            <p className= "j8question"> Which method calls the base class constructor in a parent-class constructor of an inherited class?  </p>
                <p className= "j8answer" id = "a3"> </p>
                <div className="j8btnf"> <button className="j8btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default J8L;