// Write a custom function power ( a, b ), to calculate the value of a raised to b.

function powerRaised(a, b) {
  return Math.pow(a, b);
}
powerRaised(5, 10);

// Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
function leapYear() {
  var userInput = parseInt(
    prompt("Enter a year to find out whether the year is a leap year or not")
  );
  var year = 4;
  for (var i = 0; i < userInput; i++) {
    if (userInput % 4 == 0) {
      alert("Its a leap year ");
      break;
    } else {
      alert("Its not a leap year ");
    }
  }
}
leapYear();

// If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions
function areaOfTriangle() {
  var a = parseInt(prompt("Enter the length of side a"));
  var b = parseInt(prompt("Enter the length of side b"));
  var c = parseInt(prompt("Enter the length of side c"));
  var s = (a + b + c) / 2;
  var area = Math.pow(s * (s - a) * (s - b) * (s - c), 0.5);
  alert("The area of the triangle is " + area);
}
areaOfTriangle();

// Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
function mainFunction() {
  subject1 = parseInt(prompt("Enter marks of first subject"));
  subject2 = parseInt(prompt("Enter marks of second subject"));
  subject3 = parseInt(prompt("Enter marks of third subject"));
}
function average() {
  var average = (subject1 + subject2 + subject3) / 3;
  return average;
}
function percentage() {
  var percentage = (average() / 100) * 100;
  return percentage;
}
mainFunction();
alert(
  "Average marks is " + average() + " and percentage is " + percentage() + "%"
);

//   You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now
function customIndexOf(str, char) {
  var index = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == char) {
      index = i;
      break;
    }
  }
  return index;
}
alert(customIndexOf("Hello", "l"));

// Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
function deleteVowels(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] != "a" &&
      str[i] != "e" &&
      str[i] != "i" &&
      str[i] != "o" &&
      str[i] != "u" &&
      str[i] != "A" &&
      str[i] != "E" &&
      str[i] != "I" &&
      str[i] != "O" &&
      str[i] != "U"
    ) {
      newStr += str[i];
    }
  }
  return newStr;
}
alert(deleteVowels("Hello World"));


// Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui.
function countSuccessiveVowels(text) {
  var count = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < text.length - 1; i++) {
    var currentChar = text[i].toLowerCase();
    var nextChar = text[i + 1].toLowerCase();

    if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
      switch (currentChar + nextChar) {
        case "ea":
        case "ae":
        case "ei":
        case "ie":
        case "io":
        case "oi":
        case "ou":
        case "uo":
        case "ai":
        case "ia":
        case "au":
        case "ua":
          count++;
          break;
        default:
          break;
      }
    }
  }

  return count;
}

var sentence = "Pleases read this application and give me gratuity";
var occurrenceCount = countSuccessiveVowels(sentence);
alert("Number of occurrences of two vowels in succession: " + occurrenceCount);


// The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
  function kmToMeter(km) {
    var meter = km * 1000;
    return meter;
  }
  
  var distanceInKilometers = parseInt(prompt("Enter a distance in kilometers:"));
  var distanceInMeters = kmToMeter(distanceInKilometers);
  alert("Distance in meters: " + distanceInMeters);
  
  function kmToFeet(km) {
    var feet = km * 3280.84;
    return feet;
  }
  
  var distanceInFeet = kmToFeet(distanceInKilometers);
  alert("Distance in feet: " + distanceInFeet);
  
  function kmToInches(km) {
    var inches = km * 39370.08;
    return inches;
  }
  
  var distanceInInches = kmToInches(distanceInKilometers);
  alert("Distance in inches: " + distanceInInches);
  
  function kmToCentimeters(km) {
    var centimeters = km * 100000;
    return centimeters;
  }
  
  var distanceInCentimeters = kmToCentimeters(distanceInKilometers);
  alert("Distance in centimeters: " + distanceInCentimeters);


  // Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
function overtime(params) {
  var hours = parseInt(prompt("Enter the number of hours worked:"));
  var overtime = hours - 40;
  var overtimePay = overtime * 12;
  return overtimePay;
}
alert(overtime());


// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer.
function currencyNotes(params) {
  var amount = parseInt(prompt("Enter the amount to be withdrawn:"));
  var hundreds = amount / 100;
  var fifties = amount % 100 / 50;
  var tens = amount % 100 % 50 / 10;
  return hundreds + " hundreds, " + fifties + " fifties and " + tens + " tens";
}
alert(currencyNotes());














  



