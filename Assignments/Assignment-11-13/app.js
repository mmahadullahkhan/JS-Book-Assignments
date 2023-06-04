// Declare an empty array using JS literal notation to store student names in future.
var studentNames = [];


// Declare an empty array using JS object notation to store student names in future.
var studentData = {
    studentNames: []
  };

  
//   Declare and initialize a strings array.  
var string =["I am a string"];


// Declare and initialize a number array.
var number = [1,2,3,4,5];


// Declare and initialize a boolean array.
var boolean = [true, false, true, false, true];


// Declare and initialize a mixed array.
var mixed = [true, "I am a string", 1, 2, 3, 4, 5];

// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:
var degrees = [];
degrees[0] ="SSC"+"<br>";
degrees[1] ="HSC"+"<br>";
degrees[2] ="BCS"+"<br>";
degrees[3] ="BS"+"<br>";
degrees[4] ="BCOM"+"<br>";
degrees[5] ="MS"+"<br>";
degrees[6] ="M. Phil."+"<br>";
degrees[7] ="PhD"+"<br>";
document.write("<h2>Degrees</h2>"+"<br>"+degrees.join(""));


// Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
var names = [];
names[0] = "Ahsan";
names[1] = "Ahmed";
names[2] = "Mahad";


var totalMarks =500;

var scores = [];
scores[0] = 250;
scores[1] = 300;
scores[2] = 350;

var percentages = [];
percentages[0] = (scores[0]/totalMarks)*100;
percentages[1] = (scores[1]/totalMarks)*100;
percentages[2] = (scores[2]/totalMarks)*100;
document.write("<h2>Scores</h2>"+"<br>");
document.write("Score of "+names[0]+" is "+scores[0]+". Percentage: "+percentages[0]+"%"+"<br>");
document.write("Score of "+names[1]+" is "+scores[1]+". Percentage: "+percentages[1]+"%"+"<br>");
document.write("Score of "+names[2]+" is "+scores[2]+". Percentage: "+percentages[2]+"%"+"<br>");


// Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.


// Initialize an array with color names.
var colors = ["Red", "Green", "Blue"];
document.write("<h2>Colors</h2>"+"<br>");
// Display the array elements in your browser.
document.write( colors + "<br>");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colors.unshift(colorToAddBeginning);

// Display the updated array in your browser.
document.write( colors + "<br>");

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colors.push(colorToAddEnd);

// Display the updated array in your browser.
document.write(  colors + "<br>");

// c. Add two more color to the beginning of the array.
colors.unshift("Yellow", "Orange");

// Display the updated array in your browser.
document.write( colors + "<br>");

// d. Delete the first color in the array.
colors.shift();

// Display the updated array in your browser.
document.write( colors + "<br>");

// e. Delete the last color in the array.
colors.pop();

// Display the updated array in your browser.
document.write( colors + "<br>");

// f. Ask the user at which index he/she wants to add a color & color name. 
var indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
var colorToAdd = prompt("Enter the color to add at the specified index:");

// Then add the color to desired position/index.
colors.splice(indexToAdd, 0, colorToAdd);

// Display the updated array in your browser.
document.write( colors + "<br>");

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
var indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
var numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));

// Then remove the same number of color(s) from user-defined position/index. 
colors.splice(indexToDelete, numberOfColorsToDelete);

// Display the updated array in your browser.
document.write( colors + "<br>");


// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
var scores = [40,47,89,49,78,68,79];
scores.sort();
document.write( "<h2>Sorting</h2>" +"<br>"+scores + "<br>");



// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities
// array

var cities =["Islamabad","Karachi","Mumbai","Delhi","Newyork"];
var selectedCities =["Islamabad","Karachi","Mumbai"];
document.write("<h2>Cities</h2>"+"<br>"+"Cities List:"+"<br>"+cities+"<br>"+"Selected Cities List:"+"<br>"+selectedCities.toString()+"<br>");


// Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ["This "," is "," my "," cat"];
var joined = arr.join("");
document.write("<h2>Join</h2>"+"<br>"+"Joined Array:"+"<br>"+joined+"<br>");


// Create a new array. Store values one by one in such a way that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var array = [];
array.push(1,2,3,4,5);
array.push(6,7,8,9,10);
array.push(11,12,13,14,15);
document.write(array.shift());
document.write(array.shift());
document.write(array.shift());


// Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out)
var lifo = [];
lifo.push("Apple","Mango","Banana");
lifo.push("Guava","Strawberry","Pomegrenate");
lifo.push("Kiwi","Pineapple","Sugarcane");
document.write(lifo.pop());
document.write(lifo.pop());
document.write(lifo.pop());

// Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your browser using document.write() method:
var manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<h2>Phone Manufacturers</h2>"+"<br>"+manufacturers);

























