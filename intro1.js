var eName = "John";
var eAge = "35 years";
let chNumber = "3 Children";
let chName = " Paul, Enerstina and Diana";


console.log(eName);
console.log(eAge);
console.log(chNumber);
console.log(chName);

document.getElementById("hisName").innerHTML = eName
document.getElementById("hisAge").innerHTML = eAge 
document.getElementById("chNumber").innerHTML = chNumber
document.getElementById("chName").innerHTML = chName

document.getElementById("hisName").style.backgroundColor="blue";
document.getElementById("hisName").style.color="white";
document.getElementById("hisAge").style.backgroundColor="red";
document.getElementById("hisAge").style.color="white";
document.getElementById("chNumber").style.backgroundColor="green";
document.getElementById("chNumber").style.color="white";
document.getElementById("chName").style.background ="black";
document.getElementById("chName").style.color="white";
document.getElementById("hisName").style.fontSize = "70px"; 

document.getElementById("hisName").style.display = "none";
document.getElementById("hisAge").style.display = "none";
document.getElementById("chNumber").style.display = "none";
document.getElementById("chName").style.display = "none";
