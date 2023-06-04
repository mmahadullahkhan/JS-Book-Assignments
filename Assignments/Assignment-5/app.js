// Write a program that take two numbers & add them in a new variable. Show the result in your browser.
var numbers = 10 + 8;
document.write(numbers.toString() + "<br>");


// Repeat task1 for subtraction, multiplication, division & modulus
var numberMinus = 10 - 8;
document.write(numberMinus.toString() + "<br>");
var numberMultiplication = 10 * 8;
document.write(numberMultiplication.toString() + "<br>");
var numberDivision = 10 / 8;
document.write(numberDivision.toString() + "<br>");
var numberModulous = 10 % 8;
document.write(numberModulous.toString() + "<br>");


// Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s valueby 3.
// l. Output : “The remainder is : 0”.

var num = "Value after variable declaration is undefined <br>"
document.write(num);
var string = "Initial value:";
var number = 5;
var result = string + number;
document.write(result.toString() + "<br>");
var newNum = ++number;
var increment = "Value after increment is:"
document.write(increment + newNum.toString() + "<br>");
var show = "Value after addition is:"
var add = 7;
var addNum = newNum + add;
document.write(show + addNum.toString() + "<br>");
var subtract = "Value after decrement is:";
var subtractNum = --addNum;
document.write(subtract + subtractNum.toString() + "<br>");
var divide = "The remainder is :";
var divideNum = subtractNum / 3;
document.write(divide + divideNum.toString() + "<br>")


// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var cost = "Total cost to buy 5 tickets to a movie is "
var ticketPrice = 600;
var tickets = 5;
var total = ticketPrice * tickets;
var store = " PKR "
document.write("<h2> Ticket Cost </h2>" + cost + total + store)


// Write a script to display multiplication table of any number in your browser.
var number1 = 5;
document.write("<h2>Multiplication Table of " + number1 + "</h2>");
var tableTemplate1 = "5x1=";
var multiply1 = number1 * 1;
document.write(tableTemplate1 + multiply1.toString() + "<br>");
var tableTemplate2 = "5x2=";
var multiply2 = number1 * 2;
document.write(tableTemplate2 + multiply2.toString() + "<br>");
var tableTemplate3 = "5x3=";
var multiply3 = number1 * 3;
document.write(tableTemplate3 + multiply3.toString() + "<br>");
var tableTemplate4 = "5x4=";
var multiply4 = number1 * 4;
document.write(tableTemplate4 + multiply4.toString() + "<br>");
var tableTemplate5 = "5x5=";
var multiply5 = number1 * 5;
document.write(tableTemplate5 + multiply5.toString() + "<br>");
var tableTemplate6 = "5x6=";
var multiply6 = number1 * 6;
document.write(tableTemplate6 + multiply6.toString() + "<br>");
var tableTemplate7 = "5x7=";
var multiply7 = number1 * 7;
document.write(tableTemplate7 + multiply7.toString() + "<br>");
var tableTemplate8 = "5x8=";
var multiply8 = number1 * 8;
document.write(tableTemplate8 + multiply8.toString() + "<br>");
var tableTemplate9 = "5x9=";
var multiply9 = number1 * 9;
document.write(tableTemplate9 + multiply9.toString() + "<br>");
var tableTemplate10 = "5x10=";
var multiply10 = number1 * 10;
document.write(tableTemplate10 + multiply10.toString() + "<br>");


// The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var celsius = 30;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
var fahrenheit2 = 86;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C<br>");


// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var price1 = "Price of item 1 is ";
var amount1 = 180;
var quantity1 = "Ordered quantity of item 1 is 3";
var price2 = "Price of item 2 is ";
var amount2 = 120;
var quantity2 = "Ordered quantity of item 2 is 5";
var shipping = "Shipping charges is ";
var shippingCost = 50;
var totalCost = "Total cost of your order is ";
var total = (amount1 + amount2 + shippingCost);

document.write("<h2>Shopping Cart</h2>" + price1 + amount1.toString() + "<br>" + quantity1 + "<br>" + price2 + amount2.toString() + "<br>" + quantity2 + "<br>" + shipping + shippingCost.toString() + "<br>" + totalCost + total + "<br>");


// Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in
// your browser.
var totalMarks = "Total Marks:";
var total = 750;
var marksObtained = "Marks Obtained:";
var marks = 600;
var me = "Percentage: "
var percentage = (marks / total) * 100;
document.write("<h2>Mark Sheet</h2>" + totalMarks + total.toString() + "<br>" + marksObtained + marks.toString() + "<br>" + me + percentage.toString() + "%");


// Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
var usDollars = 10;
var saudiRiyals = 25;
var exchangeRateUSD = 104.80;
var exchangeRateSAR = 28;

var totalRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

document.write("<h2>Currency in PKR</h2>" + "Total Currency in Pakistani Rupees: " + totalRupees + " PKR");


// . Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var no = 18;
var add = 5;
var mul = 10;
var div = 2;
var resultShow = "The result is ";
var result = (no + add) * mul / div;
document.write("<h2>Calculation</h2>" +resultShow + result);


// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

var current = 2023;
var birth = 2005;
var age = current - birth;
var age1 = age-1;
document.write("<h2>Age Calculator</h2>"+"They are either "+ age + " or " + age1);


// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius = 5;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("<h2>The Geometrizer</h2>"+"The radius is "+radius.toString() + "<br>"+"The circumference is " + circumference.toString() + "<br>"+ " The area is " + area);


// The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
//  Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
var snack = "fries";
var age = 18;
var max = 65;
var estimated = 50;
var lifetime = estimated * (max - age);
document.write("<h2>The Lifetime Supply Calculator</h2>"+"You will need " + lifetime.toString() + " to last you until the ripe old age of " + max.toString());







