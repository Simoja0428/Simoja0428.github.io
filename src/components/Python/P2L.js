import "./P2LStyles.css";
import React from 'react';

const P2L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: FALSE";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: Formatted String";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: At Runtime";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="p2lcon">
        <div className= "p2sectionHeader"> What are Variables? </div>
        <div className="p2text">
            In computer programming we often need to store data for later 
            use; we do this using variables. Variables allow us to work wih
            a variety of different types of data to manipulate and retrieve 
            information. In Python, the programmer does not need to declare the
            type of the variable, instead, the type of the variable is interpreted
            by the compiler at run time.
        </div>
        <div className= "p2sectionHeader"> Declaring Variables: </div>
        <div className="p2text">
        As previously mentioned, we can store a variety of different types of
        data in computer programming. The most common data types in computer
        programming that we can use include, but are not limited to:
        integer, double, float, character, string, pointer/reference, and boolean.
        The nice part about Python is that this information is automatically
        interpreted by the compiler at run time so you don't need to specify the type
        when declaring a variable. Below are some examples of declaring different
        types of variables in Python:
        </div>
        <div className="p2code">
            <p>
            name = "Jacob" #Declares string 'name' set to Jacob <br />
            whole_num = 59 #Declares integer 'whole_num' set to 59 <br />
            decimal_num = 3.14  #Declares double 'decimal_num' set to 3.14 <br />
            flag = True #Declares boolean 'flag' set to True <br />
            </p>
        </div>
        <div className= "p2sectionHeader"> Printing with Variables: </div>
        <div className="p2text">
        Similar to other languages, Python allows users to print variables in strings.
        This allows users to be able to print dynamic print statements based on the 
        information in the variable. One important thing to note, in Python, you can only
        print variables that are type string. This means, if you want to print a variable
        that is a number, then you need to cast that variable to a string using the str() method.
        Below are some examples of declaring and using different types of variables in print
        statements:
        </div>
        <div className="p2code">
            <p>
                name = "Jacob" <br />
                age = 22  <br />
                decimal_num = 3.14  <br />
                <br />
                print("My name is " + name) #Use the + symbol to combine <br />
                print(name + " is " + str(age) + " and his favorite number is " + str(decimal_num)) <br />
                print(name + " is " + str(age) + " and in 10 years he'll be " + str(age + 10)) <br />
            </p>
        </div>
        <div className="p2text">
            The output of the print statements above is the following:
        </div>
        <div className="p2out">
            <p>
                My name is Jacob <br />
                Jacob is 22 and his favorite number is 3.14 <br />
                Jacob is 22 and in 10 years he'll be 32 <br />
            </p>
        </div>
        <div className= "p2sectionHeader"> Shortcuts to Printing with Variables: </div>
        <div className="p2text">
        Sometimes it can be tricky to keep track of all the '+' symbols and the types
        of the variables in longer print statements. In order to combat this, Python
        has a shortcut which allows users to use a formatted string to embed variables
        within the print statement. In order to use a formatted string, you simply need
        to put an 'f' before the starting quotation of the string. Then, any subsequent
        variables within the string need to be surronded by &#10100;&#10101;. Below are the same 
        example print statements from above, but this time, using formatted strings to
        print out the variables:
        </div>
        <div className="p2code">
            <p>
            name = "Jacob" <br />
            age = 22  <br />
            decimal_num = 3.14  <br />
            <br />
            print(f"My name is &#10100;name&#10101;") <br />
            print(f"&#10100;name&#10101; is &#10100;age&#10101; and his favorite number is &#10100;decimal_num&#10101;") <br />
            print(f"&#10100;name&#10101; is &#10100;age&#10101; and in 10 years he'll be &#10100;age + 10&#10101;") <br />
            </p>
        </div>
        <div className="p2text">
            The output of the print statements above is the following:
        </div>
        <div className="p2out">
            <p>
                My name is Jacob <br />
                Jacob is 22 and his favorite number is 3.14 <br />
                Jacob is 22 and in 10 years he'll be 32 <br />
            </p>
        </div>
        <div className= "p2sectionHeader"> Declaring Multiple Variables at Once: </div>
        <div className="p2text">
        In order to make code look cleaner and easier to read, it is possible to declare
        multiple variables on one line in Python. Although this can easily be done using
        multiple lines, it is important to be able to read and declare multiple variables
        on one line in an effort to reduce already incredibly long Python files. Alot of times
        in computer programming, applications, made up of hundreds of files, can range in size
        from 1-5000+ lines of code depending on what the file is doing. Below is an 
        example of declaring mutliple variables on one line in Python:
        </div>
        <div className="p2code">
            <p>
            name, age, is_male = "Jacob", 21, True <br/>
            <br/>
            print(f"&#10100;name&#10101; is &#10100;age&#10101; years old and answered &#10100;is_male&#10101; to being a male.") <br/>
            </p>
        </div>
        <div className="p2text">
            The output of the print statements above is the following:
        </div>
        <div className="p2out">
            <p>
            Jacob is 21 years old and answered True to being a male. <br/>
            </p>
        </div>
        <div className= "p2sectionHeader"> Review Questions: </div>
        <div className="p2blocker">
            <p className= "p2question"> TRUE/FALSE: We need to declare the type of all variables in Python.</p>
                <p className= "p2answer" id = "a1">  </p>
                <div className="p2btnf"> <button className="p2btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p2blocker">
            <p className= "p2question"> What type of string can we use to embed variables in print statements?</p>
                <p className= "p2answer" id = "a2">  </p>
                <div className="p2btnf"> <button className="p2btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p2blocker">
            <p className= "p2question"> When during the development process does the compiler interpret variable types?</p>
                <p className= "p2answer" id = "a3">  </p>
                <div className="p2btnf"> <button className="p2btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default P2L;