import "./P8LStyles.css";
import React from 'react';

const P8L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: encapsulation";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: super()";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: PARENT(BASE)";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="p8lcon">
        <div className= "p8sectionHeader"> What are Classes? </div>
        <div className="p8text">
            Classes, which are fundamental to object-oriented languages,
            are a way of creating custom objects in Python with user-defined
            variables and parameters. Since Python can be used as an object-oriented language,
            it is very well suited and easy to create custom classes.
        </div>
        <div className="p8sectionHeader"> Defining a Class: </div>
        <div className="p8text">
            When defining a class there are a couple of things to keep in mind. First,
            classes must be named uppercase; classes should start with the 'class' keyword 
            and be properly tabbed throughout. Further, in order to initialize a class you need to
            call the __init__() method in Python. Further, when declaring variables in a class you
            can use the 'self' keyword in the constructor to set the variables. Below demonstrates the creation of a basic
            class in Python:
        </div>
        <div className="p8code">
            <p>
                class Name: #Use the class keyword to create a class in Python <br/>
                    &emsp;&emsp;def __init__(self, f, l): #Class constructors in Python are named __init__() <br/>
                    &emsp;&emsp;&emsp;&emsp;self.first = f  <br/>
                    &emsp;&emsp;&emsp;&emsp;self.last = l <br/>
                    <br/>
                    &emsp;&emsp;def get_first(self): <br/>
                    &emsp;&emsp;&emsp;&emsp; return self.first <br/>
                    <br/>
                    &emsp;&emsp;def set_first(self, f_name): <br/>
                    &emsp;&emsp;&emsp;&emsp; self.first = f_name <br/>
                    <br/>
                    &emsp;&emsp;def get_last(self): <br/>
                    &emsp;&emsp;&emsp;&emsp; return self.last <br/>
                    <br/>
                    &emsp;&emsp;def set_last(self, l_name): <br/>
                    &emsp;&emsp;&emsp;&emsp; self.last = l_name <br/>
                    <br/>
                    &emsp;&emsp;def to_s(self): #Common to string method that most Python objects have <br/>
                    &emsp;&emsp;&emsp;&emsp;format = "Name: " + self.first + " " +  self.last <br/>
                    &emsp;&emsp;&emsp;&emsp;return format
            </p>
        </div>
        <div className= "p8sectionHeader"> Inheritance: </div>
        <div className="p8text">
            One important aspect of Python, and object-orientation in general, is 
            inheritance. Inheritance is the idea that one class can recieve the 
            methods and variables from a parent class for reuse later. This avoids
            the need to copy and paste methods that may be shared across multiple classes
            in a program. For one class to inherit another in Python, you simply need to
            specify this in the class declaration statement at the top of the class.
            This process is shown below:
        </div>
        <div className="p8code">
            <p>
                class Name: <br/>
                &emsp;&emsp;def __init__(self, f, l): <br/>
                &emsp;&emsp;&emsp;&emsp;self.first = f  <br/>
                &emsp;&emsp;&emsp;&emsp;self.last = l <br/>
                <br/>
                &emsp;&emsp;def get_first(self): <br/>
                &emsp;&emsp;&emsp;&emsp; return self.first <br/>
                <br/>
                &emsp;&emsp;def set_first(self, f_name): <br/>
                &emsp;&emsp;&emsp;&emsp; self.first = f_name <br/>
                <br/>
                &emsp;&emsp;def get_last(self): <br/>
                &emsp;&emsp;&emsp;&emsp; return self.last <br/>
                <br/>
                &emsp;&emsp;def set_last(self, l_name): <br/>
                &emsp;&emsp;&emsp;&emsp; self.last = l_name <br/>
                <br/>
                &emsp;&emsp;def to_s(self):  <br/>
                &emsp;&emsp;&emsp;&emsp;format = "Name: " + self.first + " " +  self.last <br/>
                &emsp;&emsp;&emsp;&emsp;return format
                <br/>
                <br/>
                class FullName(Name):  <br/>
                &emsp;&emsp;def __init__(self, f, l, m): <br/>
                &emsp;&emsp;&emsp;&emsp;super.__init__(f,l) #Calls the Name (base) class constructor <br/>
                &emsp;&emsp;&emsp;&emsp;self.middle = m <br/>
                <br/>
                &emsp;&emsp;def get_middle(self): <br/>
                &emsp;&emsp;&emsp;&emsp; return self.middle <br/>
                <br/>
                &emsp;&emsp;def set_middle(self, m_name): <br/>
                &emsp;&emsp;&emsp;&emsp; self.middle = m_name <br/>
                <br/>
                &emsp;&emsp;def to_s(self): <br/>
                &emsp;&emsp;&emsp;&emsp;format = "Full Name: " + self.first +  ", " + self.middle + " " + self.last <br/>
                &emsp;&emsp;&emsp;&emsp;return format
            </p>
        </div>
        <div className= "p8sectionHeader"> Calling a Class: </div>
        <div className="p8text">
            Once you have defined your class you can then begin to use the
            class and create some objects. It is recommmended you use a main
            file to keep your class definitions seperate from the actual commputer
            program. Then, inside your main file you can create an instance of the class
            and call whatever methods you desire off of it. The process of creating 
            an instance of a class is shown below:
        </div>
        <div className="p8code">
            <p>
                class Name: <br/>
                &emsp;&emsp;def __init__(self, f, l): <br/>
                &emsp;&emsp;&emsp;&emsp;self.first = f  <br/>
                &emsp;&emsp;&emsp;&emsp;self.last = l <br/>
                <br/>
                &emsp;&emsp;def get_first(self): <br/>
                &emsp;&emsp;&emsp;&emsp; return self.first <br/>
                <br/>
                &emsp;&emsp;def set_first(self, f_name): <br/>
                &emsp;&emsp;&emsp;&emsp; self.first = f_name <br/>
                <br/>
                &emsp;&emsp;def get_last(self): <br/>
                &emsp;&emsp;&emsp;&emsp; return self.last <br/>
                <br/>
                &emsp;&emsp;def set_last(self, l_name): <br/>
                &emsp;&emsp;&emsp;&emsp; self.last = l_name <br/>
                <br/>
                &emsp;&emsp;def to_s(self):  <br/>
                &emsp;&emsp;&emsp;&emsp;format = "Name: " + self.first + " " +  self.last <br/>
                &emsp;&emsp;&emsp;&emsp;return format
                <br/>
                <br/>
            n1 = Name("Jacob", "Simonek") <br/>
            n1.set_first("Mr. Jacob") <br/>
            n1.set_last("Simonek 2022'") <br/>
            print(n1.to_s()) <br/>
            </p>
        </div>
        <div className="p8text">
            The output of the program above is: 
        </div>
        <div className="p8out">
            <p>
                Name: Mr. Jacob Simonek 2022' <br />
            </p>
        </div>
        <div className= "p8sectionHeader"> Review Questions: </div>
        <div className="p8blocker">
            <p className= "p8question"> What is it called when we protect a variable using getter/setter methods?</p>
                <p className= "p8answer" id = "a1">  </p>
                <div className="p8btnf"> <button className="p8btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p8blocker">
            <p className= "p8question"> What method is used to call the base class constructor in a parent class constructor?</p>
                <p className= "p8answer" id = "a2">  </p>
                <div className="p8btnf"> <button className="p8btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p8blocker">
            <p className= "p8question"> What syntax is used to signify that one class inherits another class in its function signature?</p>
                <p className= "p8answer" id = "a3">  </p>
                <div className="p8btnf"> <button className="p8btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default P8L;