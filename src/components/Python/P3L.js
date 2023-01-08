import "./P3LStyles.css";
import React from 'react';

const P3L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: modulus";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: TRUE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: a==b";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="p3lcon">
        <div className= "p3sectionHeader"> What are Operators? </div>
        <div className="p3text">
            Operators are a way of manipulating and comparing variables in Python programming
            for reuse at a later time. There are 4 main kinds of operators in Python programming:
            arthimetic, logical, relational, and bitwise. We will focus on the relational and arthimetic operators here.
        </div>
        <div className= "p3sectionHeader"> Arthimetic Operators: </div>
        <div className="p3text">
        Arthimetic operators are simply operations that we can perform on number
        based data types (Integers, Doubles, Floats, etc.)
        The chances are you have previously worked with all of these 
        major operations. The 5 major arthimetic operators used in 
        Computer Science are comprised of addition, subtraction, multiplication, division and modulus.
        </div>
        <div className= "p3sectionHeader"> Addition: </div>
        <div className="p3text">
        The addition operator is used when we want to add the values of two or more 
        numbers together. When adding numbers together, we will want to make sure that 
        we have this summed value stored in a seperate variable for later usage. 
        Further, it is important to be concious of the types of all variables used in the operation.
        Below are some examples of using the addition operator in Python:
        </div>
        <div className="p3code">
            <p>
                sum = 1 + 2 <br />
                dSum = 1.5 + 3.2 + 1.0 <br />
                wSum = 1.5 + 3 <br />
            </p>
        </div>
        <div className="p3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="p3out">
            <p>
                Value of sum: 3 <br />
                Value of dSum: 5.7 <br />
                Value of wSum: 4.5 <br />
            </p>
        </div>
        <div className= "p3sectionHeader"> Subtraction: </div>
        <div className="p3text">
        The subtracion operator is used when we want to subract one or more numbers from a value. 
        When subracting numbers, we will want to make sure that we have this new value stored in a seperate variable for later usage. 
        Further, it is important to be concious of the types of all variables used in the operation. 
        Below are some examples of using the subtraction operator in Python:
        </div>
        <div className="p3code">
            <p>
                val = 5 - 2 <br />
                dVal = 3.2 - 4.0 <br />
                wVal = 4.5 - 3 <br />
            </p>
        </div>
        <div className="p3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="p3out">
            <p>
                Value of val: 3 <br />
                Value of dVal: -0.8 <br />
                Value of wVal: 1.5 <br />
            </p>
        </div>
        <div className= "p3sectionHeader"> Multiplication: </div>
        <div className="p3text">
            The multiplication operator is used when we want to multiply two or more values 
            together. When multiplying numbers, we will want to make sure that we have this 
            new value stored in a seperate variable for later usage. Further, it is important
            to be concious of the types of all variables used in the operation. Remember, 
            integers do not account for decimal values and forgetting this could lead to 
            bugs in your future programs. Below are some examples of using the multiplication operator in Python:
        </div>
        <div className="p3code">
            <p>
                mul = 4 * 3 <br />
                dMul = 1.5 * 2.0 <br />
                wMul = 4.5 * 3 <br />
            </p>
        </div>
        <div className="p3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="p3out">
            <p>
                Value of mul: 12 <br />
                Value of dMul: 3.0 <br />
                Value of wMul: 13.5 <br />
            </p>
        </div>
        <div className= "p3sectionHeader"> Division: </div>
        <div className="p3text">
        The division operator is used when we want to divide one or more numbers from a value. 
        When dividing numbers, we will want to make sure that we have this new value stored in a seperate 
        variable for later usage. Further, it is important to be concious of the types of all 
        variables used in the operation. Remember, integers do not account for decimal values and forgetting 
        this could lead to bugs in your future programs. Below are some examples of using the division operator in Python:
        </div>
        <div className="p3code">
            <p>
                div = 4 / 2 <br />
                dDiv = 4.5 / 3.0 <br />
                wDiv = 30 / 3 <br />
            </p>
        </div>
        <div className="p3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="p3out">
            <p>
            Value of div: 2 <br />
            Value of dDiv: 1.5 <br />
            Value of wDiv: 10 <br />
            </p>
        </div>
        <div className= "p3sectionHeader"> Modulus: </div>
        <div className="p3text">
        The modulus operator is used when we want to find the remainder given by 
        dividing two numbers. When using modulus, we will want to make sure that 
        we have this new value stored in a seperate variable for later usage. 
        The modulus operator is more complex than the other arithmetic operators 
        and is not avaliable in lower-level assembly programming languages. 
        Below are some examples of using the modulus operator in Python:
        </div>
        <div className="p3code">
            <p>
                mod = 4 % 2 <br />
                mod2 = 7 % 3 <br />
                mod3 = 4 % 0 <br />
            </p>
        </div>
        <div className="p3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="p3out">
            <p>
                Value of mod: 0 <br />
                Value of mod2: 1 <br />
                Value of mod3: 4 <br />
            </p>
        </div>
        <div className="p3sectionHeader"> Relational Operators: </div>
        <div className="p3text">
        Relational operators are simply operations that we can use on number based data 
        types (Integers, Doubles, Floats, etc.) to compare them. The chances are you 
        have previously worked with all of these major operators. They include: 
        Greater Than, Less Than, Greater Than or Equal To, Less Than or Equal To, Equal To, and Not Equal To.
        </div>
        <div className="p3sectionHeader"> Greater Than, Greater Than or Equal To, Less Than, Less Than or Equal To: </div>
        <div className="p3text">
        The operators: Greater Than, Less Than, Greater Than or Equal To and Less Than 
        or Equal To are fairly simple to use. They are used in the same way you would use 
        them mathematically in order to compare a series of numerical values. 
        Below are some examples of using theses operators in Python, remember they are used for comparison:
        </div>
        <div className="p3code">
            <p>
            if ( 5  &#8827; 2 ): <br />
                &emsp;&emsp;print("5 is greater than 2.") <br />
            if ( 4 &#8826;= 1 ): <br />
                &emsp;&emsp;print("This should not run.") <br />
            if ( 4 &#8826; 10 ): <br />
                &emsp;&emsp;print("4 is less than 10.") <br />
            </p>
        </div>
        <div className="p3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="p3out">
            <p>
                5 is greater than 2. <br />
                4 is less than 10. <br />
            </p>
        </div>
        <div className="p3sectionHeader"> Equal To or Not Equal To: </div>
        <div className="p3text">
        The operators used for Equal To and Not Equal To are a bit different 
        from the other relational operators; mainly, the Equal To and Not Equal 
        To operators can also be used on other data types including strings and 
        characters. The Equal To and Not Equal To operators are incredibly common 
        and used for comparison. Below are some examples of using theses operators in Python:
        </div>
        <div className="p3code">
            <p>
                if ( 10.0 == 10 ): <br />
                    &emsp;&emsp;print("10.0 is equal to 10.") <br />
                if ( "a" != "a" ): <br />
                    &emsp;&emsp;print("This should not run.") <br />
                if ( "jacob" != "john" ): <br />
                    &emsp;&emsp;print("The name jacob is not equal to john.") <br />
            </p>
        </div>
        <div className="p3text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="p3out">
            <p>
                10.0 is equal to 10. <br />
                The name jacob is not equal to john. <br />
            </p>
        </div>
        <div className= "p3sectionHeader"> Review Questions: </div>
        <div className="p3blocker">
            <p className= "p3question"> What operator can we use if we want to check the divisibility of two numbers?</p>
                <p className= "p3answer" id = "a1">  </p>
                <div className="p3btnf"> <button className="p3btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p3blocker">
            <p className= "p3question"> TRUE/FALSE: We don't need to worry about whether we are working with decimals in Python.</p>
                <p className= "p3answer" id = "a2">  </p>
                <div className="p3btnf"> <button className="p3btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="p3blocker">
            <p className= "p3question"> What is the syntax for the relational statement: number a is equal to number b?</p>
                <p className= "p3answer" id = "a3">  </p>
                <div className="p3btnf"> <button className="p3btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default P3L;