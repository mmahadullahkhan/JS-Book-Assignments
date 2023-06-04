// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var value = 10;
var newValue = ++value;
var newValue1 = value++;
var newValue2 = --value;
var newValue3 = value--;
document.write("<h2>Result:</h2>" + "<br>" + "The value of a is: " + value.toString() + "<br>" + "..........................................." + "<br>"
    + "The value of ++a is: " + newValue.toString() + "<br>" + "Now the value of a is: " + newValue.toString() + "<br>" + "<br>" + "The value of a++ is: " + newValue1.toString() + "<br>" + "Now the value of a is: " + newValue1.toString() + "<br>" + "<br>" + "The value of --a is: " + newValue2.toString() + "<br>" + "Now the value of a is: " + newValue2.toString() + "<br>" + "<br>" + "The value of a-- is: " + newValue3.toString() + "<br>" + "Now the value of a is: " + newValue3.toString());


//     What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a = 2;
var b = 1;
var aDecrement = --a
var abDecrement = --a - --b;
var abIncrement = --a - --b + ++b;
var abDecrementIncrement = --a - --b + ++b + b--;
document.write("<h2>Explanation:</h2>" + "<br>" + "a is " + a.toString() + "<br>" + "b is " + b.toString() + "<br>" + "--a is " + aDecrement.toString() + "<br>" + "--a - --b is " + abDecrement.toString() + "<br>" + "--a - --b + ++b is " + abIncrement.toString() + "<br>" + "The final result is " + abDecrementIncrement.toString());


// Write a program that takes input a name from user greet the user.
var userName = prompt("Enter your name: ");
document.write("<h2>Greeting Card:</h2>"+"<h2>Welcome, " + userName + "</h2>");


// Write a program to take input a number from user & display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5 should be displayed by default.
var number = prompt("Enter a number:");
var tableNumber = parseInt(number) || 5; 
// Use 5 as default if no valid number is entered
var table = tableNumber + " x 1 = " + tableNumber + "<br>";
table += tableNumber + " x 2 = " + (tableNumber * 2) + "<br>";
table += tableNumber + " x 3 = " + (tableNumber * 3) + "<br>";
table += tableNumber + " x 4 = " + (tableNumber * 4) + "<br>";
table += tableNumber + " x 5 = " + (tableNumber * 5) + "<br>";
table += tableNumber + " x 6 = " + (tableNumber * 6) + "<br>";
table += tableNumber + " x 7 = " + (tableNumber * 7) + "<br>";
table += tableNumber + " x 8 = " + (tableNumber * 8) + "<br>";
table += tableNumber + " x 9 = " + (tableNumber * 9) + "<br>";
table += tableNumber + " x 10 = " + (tableNumber * 10) + "<br>";

document.write("<h2>Table:</h2>"+table);


// Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

var totalMarks = 100;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
document.write("<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>");
document.write("</table>");
