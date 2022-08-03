//operators
let a = 10 ;
let b = 3 ;
let add = a + b;
let multiply = a * b
let division = a / b
let subtraction = a - b
let exponential = a ** b;
let modulus = a % b

// addition
document.getElementById('hAddition').innerHTML = "Addition"
document.getElementById('vAddition').innerHTML = "The values are " + a + " + " + b;
document.getElementById('rAddition').innerHTML = "The result is " + add;
document.getElementById('rAddition').style.display='none';
document.getElementById('rAddition').style.color ='green';


// subtraction
document.getElementById('hSubtraction').innerHTML = "Subtraction"
document.getElementById('vSubtraction').innerHTML = "The values are " + a + " - " + b;
document.getElementById('rSubtraction').innerHTML = "The result is " + subtraction;
document.getElementById('rSubtraction').style.display='none';
document.getElementById('rSubtraction').style.color ='green';

//multiplication

document.getElementById('hMultiplication').innerHTML = "Multiplication"
document.getElementById('vMultiplication').innerHTML = "The values are " + a + " * " + b;
document.getElementById('rMultiplication').innerHTML = "The result is " + multiply;
document.getElementById('rMultiplication').style.display='none';
document.getElementById('rMultiplication').style.color ='green';

// division
document.getElementById('hDivision').innerHTML = "Division"
document.getElementById('vDivision').innerHTML = "The values are " + a + " / " + b;
document.getElementById('rDivision').innerHTML = "The result is " + division;
document.getElementById('rDivision').style.display='none';
document.getElementById('rDivision').style.color = 'green';

// exponentiation
document.getElementById('hExponential').innerHTML = "Exponential"
document.getElementById('vExponential').innerHTML = "The values are " + a + " ** " + b;
document.getElementById('rExponential').innerHTML = "The result is " + exponential;
document.getElementById('rExponential').style.display='none';
document.getElementById('rExponential').style.color = 'green';

// Modulus
document.getElementById('hModulus').innerHTML = "Modulus"
document.getElementById('vModulus').innerHTML = "The values are " + a + " % " + b;
document.getElementById('rModulus').innerHTML = "The result is " + modulus;
document.getElementById('rModulus').style.display='none';
document.getElementById('rModulus').style.color = 'green';

// assignment


x = 20;
x -= 10
y = 5
y -= 3

// y += 10
document.write(x)
document.write("<br>") 
// comparison
// logical

// increment ++
document.write("<br>")
let z = 1;
z++;
document.write(z);

document.write("<br>")

// decrement --
let d = 5;
d--;
document.write("d is: " + d);

// single quote ''
// double quote ""
// backtick  ``
