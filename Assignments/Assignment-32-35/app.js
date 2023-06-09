// Write a function that displays current date & time in your browser.
function tellDateandTime(params) {
  var current = new Date();
  document.write(current + "<br>");
}
tellDateandTime();


// Write a function that takes first & last name and then it greets the user using his full name.
function greetUser(firstName, lastName) {
  var firstName = prompt("What is your First name?");
  var lastName = prompt("What is your last name?");
  alert("Welcome, " + firstName + " " + lastName);
}
greetUser();


// Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function sum(a, b) {
  var sum1 = parseInt(prompt("Enter a number"));
  var sum2 = parseInt(prompt("Enter another number"));
  var sum = sum1 + sum2;
  alert("The sum of two numbers is " + sum);
}
sum();


// Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and
// show the desired result in your browser.
function Calculator() {
  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));
  var operator = prompt("Enter the operator (+, -, *, /):");

  var result;

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = num1 * num2;
  } else if (operator === '/') {
    result = num1 / num2;
  } else {
    alert("Invalid operator");
    return;
  }

  alert("Result: " + result);
  return result;
}
Calculator();


//   Write a function that squares its argument.
function squares() {
  var num10 = parseFloat(prompt("Enter a number to get its squared value"));
  var result = num10 * num10;
  alert("The squared value of " + num10 + " is " + result);
}
squares();


// Write a function that computes factorial of a number.
function factorial() {
  var num11 = parseFloat(prompt("Enter a number to get its factorial"));
  var result = 1;
  for (var i = 1; i <= num11; i++) {
    result = result * i;
  }
  alert("The factorial of " + num11 + " is " + result);
}
factorial();


// Write a function that take start and end number as inputs & display counting in your browser.
function display() {
  var input = parseFloat(prompt("Enter the starting number of counting"));
  var end = parseFloat(prompt("Enter the ending number of counting"));
  for (var i = input; i <= end; i++) {
    document.write(i);
    document.write("<br>");
  }
}
display();


// Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2 .
function hypotenuse() {
  var base = parseFloat(prompt("Enter the base of the right angle triangle"));
  var perpendicular = parseFloat(prompt("Enter the perpendicular of the right angle triangle"));
  var hypotenuse = Math.sqrt(base * base + perpendicular * perpendicular);
  alert("The hypotenuse of the right angle triangle is " + hypotenuse);
}
hypotenuse();


//   Write a function that calculates the area of a rectangle. A = width * height Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
function area() {
  var userInput = parseFloat(prompt("Enter the width of a triangle"));
  var userInput2 = parseFloat(prompt("Enter the height of a triangle"));
  var area = userInput * userInput2;
  alert("The area of the triangle is " + area);
}
area();


// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.
function palindrome() {
  var userInput = prompt("Enter a word to check whether it is a palindrome or not");
  var reverse = "";
  for (var i = userInput.length - 1; i >= 0; i--) {
    reverse += userInput[i];
  }
  if (reverse === userInput) {
    alert("The word is a palindrome");
  } else {
    alert("The word is not a palindrome");
  }
}
palindrome();


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function upperCase() {
  var userInput = prompt("Enter a string to convert the first letter of each word to upper case");

  var upperCase = userInput.charAt(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).toUpperCase() + userInput.slice(1)
  alert(upperCase);
}
upperCase();


// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
function longestWord() {
  var userInput = prompt("Enter a string to find the longest word");
  var words = userInput.split(" ");
  var longestWord = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  alert(longestWord);
}
longestWord();


// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
// occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'
function countLetter() {
  var userInput = prompt("Enter a string to count the number of occurrences of a letter");
  var letter = prompt("Enter a letter to count the number of occurrences of the letter");
  var count = 0;
  for (var i = 0; i < userInput.length; i++) {
  if (userInput[i] === letter) {
count++;
}
}
alert(count);
}
countLetter();


// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN"
function calcCircumference(radius=18) {
  var circle = 2*3.14159265359*radius;
  document.write("The circumference is " + circle+"<br>");
}
calcCircumference();
function calcArea(radius=18) {
  var circle = 3.14159265359*radius*radius;
  document.write("The area is " + circle);
  }
  calcArea();









