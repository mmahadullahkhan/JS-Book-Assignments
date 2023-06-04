// Write a program that displays current date and time in your browser.
var current = new Date();
document.write(current+"<br>");


// Write a program that alerts the current month in words. For example December.
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var current = new Date();
var month = current.getMonth();
var nameofMonth = monthNames[month];
alert("Current Month: "+nameofMonth);


// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var current = new Date();
var day = current.getDay();
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var nameofDay = dayNames[day];
alert("Today is "+nameofDay.substring(0,3));


// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var current = new Date();
var day = current.getDay();
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var nameofDay = dayNames[day];
if(nameofDay == "Saturday" || nameofDay == "Sunday"){
    alert("It's Fun Day");
    }


// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”
var current = new Date();
var day = current.getDate();
if(day < 16){
    alert("First fifteen days of the month");
    }
    else{
        alert("Last days of the month");
        }


// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.    
var current = new Date();
var min = new Date("January 1, 1970 12:00:00");
var minCurrent = current.getTime();
var minMin = min.getTime();
var minSinceMidnight = minCurrent - minMin;
alert("Minutes since midnight: "+minSinceMidnight);


// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
var current = new Date();
var hour = current.getHours();
if (hour<12) {
    alert("Its AM");
} else {
    alert("Its PM");
}


// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named
// laterDate.
var laterDate = new Date("December 31, 2020");
document.write("Later Date: "+laterDate+"<br>");


// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var current = new Date();
var nextRamadan = new Date("March 11, 2024");
var daysRemaining = Math.floor((nextRamadan - current) / (1000 * 60 * 60 * 24));
alert("Days remaining in 1st Ramadan: "+daysRemaining);
var current = new Date();
var thisRamadan = new Date("March 23, 2023")
var daysPast = Math.floor((current - thisRamadan) / (1000 * 60 * 60 * 24));
alert("Days Past since first Ramadan: "+daysPast);


// Write a program that displays in your browser the seconds that elapsed between the reference date and the
// beginning of 2015.
var reference = new Date("January 1, 2015");
var current = new Date();
var secondsElapsed = Math.floor((current - reference) / 1000);
document.write("On reference date "+ current + secondsElapsed +" seconds had passed since beginning of 2015"+"<br>");


// Create a Date object for the current date and time Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser
var current = new Date();
var hour = current.getHours();
var past = current.setHours(hour-1);
var now = new Date();
document.write("Current Date: "+now+"<br>"+"1 hour ago, it was "+current+"<br>");


// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var current = new Date();
var past = current.setFullYear(current.getFullYear()-100);
alert("Current Date: "+now+"100 years ago, it was "+current);


// Write a program to ask the user about his age. Calculate and show his birth year in your browser.
var age = prompt("How old are you?");
var current = new Date();
var birth =current.getFullYear()-age
document.write("Your age is "+age+"<br>"+"Your birth year is: "+birth);


// Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where, Net Amount Payable (within Due Date) = Number of units * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
var customerName = prompt("What is your name?");
var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var current = new Date();
var month = current.getMonth();
var nameofMonth = monthNames[month];
var units = prompt("How many units?");
var Charges = prompt("What are the charges per units?");
var latePay = 350;
var net = units*Charges;
var gross = net+latePay;
document.write("<h2>K-Electric Bill</h2>"+"<br>"+"Customer Name: "+customerName+"<br>"+"Current Month: "+nameofMonth+"<br>"+"Number of units: "+units+"<br>"+"Charges per unit: "+Charges+"<br>"+"<br>"+"Net Amount Payable (within Due Date): "+net+"<br>"+"Late payment surcharge: "+latePay+"<br>"+"Gross amount payable (after Due Date): "+gross);



