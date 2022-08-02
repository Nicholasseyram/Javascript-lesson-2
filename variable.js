// variable declaration
// var myName = "John Doe";
// var myAge = 35;

// console.log(myName);
// console.log(myAge);

var eName = "John";
var eAge = "35 years";
let chNumber = "3 Children";
let chName = "Paul, Enerstina and Diana";

console.log(eName);
console.log(eAge);
console.log(chNumber);
console.log(chName);

// var eName = "Your name is John.";
// var eAge = "You are 35 years.";
// let cNumber = "You have 3 Children.";
// let firstChild = "Paul,";
// let secondChild = "Enerstina,";
// let thirdChild = "Diana, ";
// let isSick = "sick ";
// let condition = "you can't remember.";
// let myMessage = "Why so soon John.";

console.log(eName + eAge + 'You have 3 children. ' + 'The name of your first child is called :' + firstChild + 'The name of your second child is called :' + secondChild + 'The name of your third child is called :' + thirdChild + 'you are ' + isSick + condition + myMessage)

document.getElementById("hisName").innerHTML = eName
document.getElementById("hisAge").innerHTML = eAge 
document.getElementById("chNumber").innerHTML = chNumber


//variable initialization
// let ourName;
// // value assigned to variable
// ourName = "Nicholas";
// console.log(ourName);

// how to write your varibale name
// 1. start with a letter, underscore, or dollar sign
// 2. follow by any number of letters, numbers, or underscores
// 3. cannot start with a number
// cannot use reserved keywords

// camelCase
var myVariable;
// snake_case
var my_variable;
// PascalCase
var MyVariable;