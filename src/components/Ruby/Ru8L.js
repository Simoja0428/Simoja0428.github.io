import "./Ru8LStyles.css";
import React from 'react';

const Ru8L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: attr_accessor()";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: super()";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: <";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="ru8lcon">
        <div className= "ru8sectionHeader"> What are Classes? </div>
        <div className="ru8text">
            Classes, which are fundamental to object-oriented languages,
            are a way of creating custom objects in Ruby with user-defined
            variables and parameters. Since Ruby is an object-oriented language,
            it is very well suited and easy to create custom classes.
        </div>
        <div className="ru8sectionHeader"> Defining a Class: </div>
        <div className="ru8text">
            When defining a class there are a couple of things to keep in mind. First
            classes must be named uppercase; classes should start with the 'class' keyword 
            and end with the 'end' keyword. Further, in order to initialize a class you need to
            call the initialize() method in Ruby. In addition, rather than having to encapsulate
            your data by hand and create a bunch getter/setter methods, you can call attr_accessor()
            on a variable which does it for you. Below demonstrates the creation of a basic
            class in Ruby:
        </div>
        <div className="ru8code">
            <p>
                class Name #Use the class keyword to create a class in Ruby <br/>
                    &emsp;&emsp;def initialize(f, l) #Class constructors in Ruby are named intialize() <br/>
                    &emsp;&emsp;&emsp;&emsp;self.first = f  <br/>
                    &emsp;&emsp;&emsp;&emsp;self.last = l <br/>
                    &emsp;&emsp;end <br/>
                    <br/>
                    &emsp;&emsp;attr_accessor(:first) #Creates Getter and Setter methods for first <br/>
                    &emsp;&emsp;attr_accessor(:last) #Creates Getter and Setter methods for last <br/>
                    <br/>
                    &emsp;&emsp;def to_s #Overriding the to string method that all Ruby objects have <br/>
                    &emsp;&emsp;&emsp;&emsp;return "Name: #&#10100;first&#10101; #&#10100;last&#10101;" <br/>
                    &emsp;&emsp;end <br/>
                end #end keyword used at the end of declaring the class <br/>
            </p>
        </div>
        <div className= "ru8sectionHeader"> Inheritance </div>
        <div className="ru8text">
            One important aspect of Ruby, and object-orientation in general, is 
            inheritance. Inheritance is the idea that one class can recieve the 
            methods and variables from a parent class for reuse later. This avoids
            the need to copy and paste methods that may be shared across multiple classes
            in a program. For one class to inherit another in Ruby, we need to import
            the base class by calling 'require_relative' and then use the '&lt;' symbol in the
            class signature. This process is shown below:
        </div>
        <div className="ru8code">
            <p>
                #Name.rb <br/>
                class Name <br/>
                    &emsp;&emsp;def initialize(f, l) <br/>
                    &emsp;&emsp;&emsp;&emsp;self.first = f  <br/>
                    &emsp;&emsp;&emsp;&emsp;self.last = l <br/>
                    &emsp;&emsp;end <br/>
                    <br/>
                    &emsp;&emsp;attr_accessor(:first)<br/>
                    &emsp;&emsp;attr_accessor(:last) <br/>
                    <br/>
                    &emsp;&emsp;def to_s  <br/>
                    &emsp;&emsp;&emsp;&emsp;return "Name: #&#10100;first&#10101; #&#10100;last&#10101;" <br/>
                    &emsp;&emsp;end <br/>
                end <br/>
                <br/>
                <br/>
                #FullName.rb <br/>
                require_relative 'Name' <br/>
                class FullName &lt;  Name  <br/>
                    &emsp;&emsp;attr_accessor :middle <br/>
                    <br/>
                    &emsp;&emsp;def initialize(f,l,m) <br/>
                        &emsp;&emsp;&emsp;&emsp;super(f,l) #Calls the Name (base) class constructor <br/>
                        &emsp;&emsp;&emsp;&emsp;self.middle = m <br/>
                    &emsp;&emsp;end <br/>
                    <br/>
                    &emsp;&emsp;def to_s <br/>
                    &emsp;&emsp;&emsp;&emsp;"Full Name: " + self.first +  ", " + self.middle + " " + self.last <br/>
                    &emsp;&emsp;end <br/>
                end <br/>
            </p>
        </div>
        <div className= "ru8sectionHeader"> Calling a Class: </div>
        <div className="ru8text">
            Once you have defined your class you can then begin to use the
            class and create some objects. It is recommmended you use a main
            file to keep your class definitions seperate from the actual commputer
            program. Then, inside your main file you can create an instance of the class
            and call whatever methods you desire off of it. The process of creating 
            an instance of a class is shown below:
        </div>
        <div className="ru8code">
            <p>
            #Name.rb <br/>
                class Name <br/>
                    &emsp;&emsp;def initialize(f, l) <br/>
                    &emsp;&emsp;&emsp;&emsp;self.first = f  <br/>
                    &emsp;&emsp;&emsp;&emsp;self.last = l <br/>
                    &emsp;&emsp;end <br/>
                    <br/>
                    &emsp;&emsp;attr_accessor(:first)<br/>
                    &emsp;&emsp;attr_accessor(:last) <br/>
                    <br/>
                    &emsp;&emsp;def to_s  <br/>
                    &emsp;&emsp;&emsp;&emsp;return "Name: #&#10100;first&#10101; #&#10100;last&#10101;" <br/>
                    &emsp;&emsp;end <br/>
                end <br/>
                <br/>
                <br/>
            #Main.rb <br/>
            require_relative 'Name' <br/>
            <br/>
            n1 = Name.new("Jacob", "Simonek") <br/>
            n1.first = "Mr. Jacob" <br/>
            n1.last = "Simonek 2022'" <br/>
            puts(n1) <br/>
            </p>
        </div>
        <div className="ru8text">
            The output of the program above is: 
        </div>
        <div className="ru8out">
            <p>
                Name: Mr. Jacob Simonek 2022' <br />
            </p>
        </div>
        <div className= "ru8sectionHeader"> Review Questions: </div>
        <div className="ru8blocker">
            <p className= "ru8question"> What method can be used as a short cut for encapsulating a variable?</p>
                <p className= "ru8answer" id = "a1">  </p>
                <div className="ru8btnf"> <button className="ru8btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru8blocker">
            <p className= "ru8question"> What method is used to call the base class constructor in a parent class constructor?</p>
                <p className= "ru8answer" id = "a2">  </p>
                <div className="ru8btnf"> <button className="ru8btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru8blocker">
            <p className= "ru8question"> What symbol is used to signify that one class inherits another class in its function signature?</p>
                <p className= "ru8answer" id = "a3">  </p>
                <div className="ru8btnf"> <button className="ru8btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default Ru8L;