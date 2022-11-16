import "./Ru2LStyles.css";
import React from 'react';

const Ru2L = () => {

    const handleClick1 = (e) =>{  
        e.preventDefault();
        document.getElementById("a1").textContent = "ANSWER: modulus";
        document.getElementById("q1").hidden = true;
     }
     const handleClick2 = (e) =>{  
        e.preventDefault();
        document.getElementById("a2").textContent = "ANSWER: FALSE";
        document.getElementById("q2").hidden = true;
     }
     const handleClick3 = (e) =>{  
        e.preventDefault();
        document.getElementById("a3").textContent = "ANSWER: !=";
        document.getElementById("q3").hidden = true;
     }
      
  return (
    <div className="ru2lcon">
        <div className= "ru2sectionHeader"> What are Operators? </div>
        <div className="ru2text">
            Operators are a way of manipulating and comparing variables in Ruby programming
            for reuse at a later time. There are 4 main kinds of operators in Ruby programming:
            arthimetic, logical, relational, and bitwise. We will focus on the relational and arthimetic operators here.
        </div>
        <div className= "ru2sectionHeader"> Arthimetic Operators: </div>
        <div className="ru2text">
        Arthimetic operators are simply operations that we can perform on number
        based data types (Integers, Doubles, Floats, etc.)
        The chances are you have previously worked with all of these 
        major operations. The 5 major arthimetic operators used in 
        Computer Science are comprised of addition, subtraction, multiplication, division and modulus.
        </div>
        <div className= "ru2sectionHeader"> Addition: </div>
        <div className="ru2text">
        The addition operator is used when we want to add the values of two or more 
        numbers together. When adding numbers together, we will want to make sure that 
        we have this summed value stored in a seperate variable for later usage. 
        Further, it is important to be concious of the types of all variables used in the operation. Remember, 
        integers do not account for decimal values and forgetting this could lead to bugs in your future programs. 
        Below are some examples of using the addition operator in Ruby.
        </div>
        <div className="ru2code">
            <p>
                sum = 1 + 2 <br />
                dSum = 1.5 + 3.2 + 1.0 <br />
                wSum = 1.5 + 3 <br />
            </p>
        </div>
        <div className="ru2text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="ru2out">
            <p>
                Value of sum: 3 <br />
                Value of dSum: 5.7 <br />
                Value of wSum: 4 <br />
            </p>
        </div>
        <div className= "ru2sectionHeader"> Subtraction: </div>
        <div className="ru2text">
        The subtracion operator is used when we want to subract one or more numbers from a value. 
        When subracting numbers, we will want to make sure that we have this new value stored in a seperate variable for later usage. 
        Further, it is important to be concious of the types of all variables used in the operation. Remember, integers do not account 
        for decimal values and forgetting this could lead to bugs in your future programs. 
        Below are some examples of using the subtraction operator in Ruby.
        </div>
        <div className="ru2code">
            <p>
                val = 5 - 2 <br />
                dVal = 3.2 - 4.0 <br />
                wVal = 4.5 - 3 <br />
            </p>
        </div>
        <div className="ru2text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="ru2out">
            <p>
                Value of val: 3 <br />
                Value of dVal: -0.8 <br />
                Value of wVal: 1 <br />
            </p>
        </div>
        <div className= "ru2sectionHeader"> Multiplication: </div>
        <div className="ru2text">
            The multiplication operator is used when we want to multiply two or more values 
            together. When multiplying numbers, we will want to make sure that we have this 
            new value stored in a seperate variable for later usage. Further, it is important
            to be concious of the types of all variables used in the operation. Remember, 
            integers do not account for decimal values and forgetting this could lead to 
            bugs in your future programs.Below are some examples of using the multiplication operator in Ruby.
        </div>
        <div className="ru2code">
            <p>
                mul = 4 * 3 <br />
                dMul = 1.5 * 2.0 <br />
                wMul = 4.5 * 3 <br />
            </p>
        </div>
        <div className="ru2text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="ru2out">
            <p>
                Value of mul: 12 <br />
                Value of dMul: 6.0 <br />
                Value of wMul: 12 <br />
            </p>
        </div>
        <div className= "ru2sectionHeader"> Division: </div>
        <div className="ru2text">
        The division operator is used when we want to divide one or more numbers from a value. 
        When dividing numbers, we will want to make sure that we have this new value stored in a seperate 
        variable for later usage. Further, it is important to be concious of the types of all 
        variables used in the operation. Remember, integers do not account for decimal values and forgetting 
        this could lead to bugs in your future programs. Below are some examples of using the division operator in Ruby.
        </div>
        <div className="ru2code">
            <p>
                div = 4 / 2 <br />
                dDiv = 4.5 / 3 <br />
                wDiv = 4.5 / 3 <br />
            </p>
        </div>
        <div className="ru2text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="ru2out">
            <p>
            Value of div: 2 <br />
            Value of dDiv: 1.5 <br />
            Value of wDiv: 1 <br />
            </p>
        </div>
        <div className= "ru2sectionHeader"> Modulus: </div>
        <div className="ru2text">
        The modulus operator is used when we want to find the remainder given by 
        dividing two numbers. When using modulus, we will want to make sure that 
        we have this new value stored in a seperate variable for later usage. 
        The modulus operator is more complex than the other arithmetic operators 
        and is not avaliable in lower-level assembly programming languages. 
        Below are some examples of using the modulus operator in Ruby.
        </div>
        <div className="ru2code">
            <p>
                mod = 4 % 2 <br />
                mod2 = 7 % 3 <br />
                mod3 = 4 % 0 <br />
            </p>
        </div>
        <div className="ru2text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="ru2out">
            <p>
                Value of mod: 0 <br />
                Value of mod2: 1 <br />
                Value of mod3: 4 <br />
            </p>
        </div>
        <div className="ru2sectionHeader"> Relational Operators: </div>
        <div className="ru2text">
        Relational operators are simply operations that we can use on number based data 
        types (Integers, Doubles, Floats, etc.) to compare them. The chances are you 
        have previously worked with all of these major operators. They include: 
        Greater Than, Less Than, Greater Than or Equal To, Less Than or Equal To, Equal To, and Not Equal To.
        </div>
        <div className="ru2sectionHeader"> Greater Than, Greater Than or Equal To, Less Than, Less Than or Equal To: </div>
        <div className="ru2text">
        The operators: Greater Than, Less Than, Greater Than or Equal To and Less Than 
        or Equal To are fairly simple to use. They are used in the same way you would use 
        them mathematically in order to compare a series of numerical values. 
        Below are some examples of using theses operators in Ruby, remember they are used for comparison.
        </div>
        <div className="ru2code">
            <p>
            if ( 5  &#8827; 2 ) <br />
            &emsp;&emsp;puts("5 is greater than 2.") <br />
            end <br />
            if ( 4 &#8826;= 1 ) <br />
            &emsp;&emsp;puts("This should not run.") <br />
            end <br />
            if ( 4 &#8826; 10 ) <br />
            &emsp;&emsp;puts("4 is less than 10.") <br />
            end <br />
            </p>
        </div>
        <div className="ru2text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="ru2out">
            <p>
                5 is greater than 2. <br />
                4 is less than 10. <br />
            </p>
        </div>
        <div className="ru2sectionHeader"> Equal To or Not Equal To: </div>
        <div className="ru2text">
        The operators used for Equal To and Not Equal To are a bit different 
        from the other relational operators; mainly, the Equal To and Not Equal 
        To operators can also be used on other data types including strings and 
        pointers. The Equal To and Not Equal To operators are incredibly common 
        and used for comparison. Below are some examples of using theses operators in Ruby.
        </div>
        <div className="ru2code">
            <p>
                if ( 10.0 == 10 ) <br />
                &emsp;&emsp;puts("10.0 is equal to 10.") <br />
                end <br />
                if ( 'a' != 'a' ) <br />
                &emsp;&emsp;puts("This should not run.") endl; <br />
                end <br />
                if ( "jacob" != "john" ) <br />
                &emsp;&emsp;puts("The name jacob is not equal to john.")<br />
                end <br />
            </p>
        </div>
        <div className="ru2text">
            The values of the variables in the code above are as follows:
        </div>
        <div className="ru2out">
            <p>
                10.0 is equal to 10. <br />
                The name jacob is not equal to john. <br />
            </p>
        </div>
        <div className= "ru2sectionHeader"> Review Questions: </div>
        <div className="ru2blocker">
            <p className= "ru2question"> What operator can we use if we want to check the divisibility of two numbers?</p>
                <p className= "ru2answer" id = "a1">  </p>
                <div className="ru2btnf"> <button className="ru2btnt" onClick={handleClick1} id="q1"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru2blocker">
            <p className= "ru2question"> TRUE/FALSE: In Ruby you need to declare the type of the variable when setting the variable.</p>
                <p className= "ru2answer" id = "a2">  </p>
                <div className="ru2btnf"> <button className="ru2btnt" onClick={handleClick2} id="q2"> <p> Reveal Answer </p> </button> </div>
        </div>
        <div className="ru2blocker">
            <p className= "ru2question"> What operator in Ruby is used to check if two things are not equal?</p>
                <p className= "ru2answer" id = "a3">  </p>
                <div className="ru2btnf"> <button className="ru2btnt" onClick={handleClick3} id="q3"> <p> Reveal Answer </p> </button> </div>
        </div>
    </div>
  );
}

export default Ru2L;