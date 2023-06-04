// Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var positive = prompt("Enter a positive integer");
var num = positive;
var round =Math.round(positive);
var floor =Math.floor(positive);
var ceil =Math.ceil(positive);
document.write("Number: "+num+"<br>"+"Round off value: "+round+"<br>"+"Floor value: "+floor+"<br>"+"Ceil value: "+ceil+"<br>"+"<br>");


// Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var negative = prompt("Enter a negative integer");
var number = negative;
var round1 =Math.round(positive);
var floor1 =Math.floor(positive);
var ceil1 =Math.ceil(positive);
document.write("Number: "+number+"<br>"+"Round off value: "+round1+"<br>"+"Floor value: "+floor1+"<br>"+"Ceil value: "+ceil1+"<br>");


// Write a program that displays the absolute value of a number.E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser
var dice = Math.random();
var improvedNum = (dice * 6) + 1;
var final = Math.floor(improvedNum);
document.write("random dice value:"+final+"<br>");


// Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your  browser
var coin = Math.random();
var toss = (coin * 6) + 1;
var final1 = Math.floor(toss);
if (final1 %2==0) {
    document.write(final1+"<br>"+"random coin value: "+"Tails"+"<br>");
}
 else {
 document.write(final1+"<br>"+"random coin value: "+"Heads"+"<br>");
}


// Write a program that shows a random number between 1 and 100 in your browser.
var random = Math.random();
var valid = (random*100) + 1;
var rounded = Math.round(valid);
document.write("Random number between 1-100: "+rounded+"<br>");


// Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weight = prompt("Enter your weight in kilograms");
var weight1 = weight.toLowerCase();
var weight2 = weight1.replace(/[^0-9.]/g, '');
var weight3 = parseFloat(weight2);
document.write("Your weight in kilograms is : "+weight3+" kilograms"+"<br>");


// Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
// Otherwise, ask the user to input another number. Repeat this until the user enters the correct number.

var secret = 5;
var show = parseInt(prompt("Enter a number from 1-10"));
if (show===secret) {
    alert("Congratulations, You did it");
} else {
    alert("Try Again");
}




















    

