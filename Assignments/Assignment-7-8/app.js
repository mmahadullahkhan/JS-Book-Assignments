// Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights"
var city = prompt("In which city do you live?");
if (city ==="Karachi") {
    alert("Welcome to city of lights");
} 


// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var gender = prompt("What is your gender?");
if (gender==="Male") {
    alert("Good Morning Sir!");
}
else if (gender==="Female") {
    alert("Good Morning Ma’am!");
    }


//    Write a program to take input color of road traffic signal from the user & show the message according to this table:
// Signal color           Message
// Red                    MustStop
// Yellow               Readyto move
// Green                  Movenow
var signalColor = prompt("What color is the traffic signal?");
if (signalColor==="Red") {
    alert("Must stop");
}
else if (signalColor==="Yellow") {
    alert("Ready to move");
}
else if (signalColor==="Green") {
    alert("Move now");
    }


// Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than  25litres, show the message “Please refill the fuel in your car”
var currentFuel = prompt("What is the remaining fuel in your car? (in litres) ");
if (currentFuel<25) {
    alert("Please refill the fuel in your car");
}


// Run this script, & check whether alert message would be displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat"){
alert("car is smaller than cat");
}



// Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as per following table:

var subject1 = prompt("Enter the name of subject 1:");
var subject2 = prompt("Enter the name of subject 2:");
var subject3 = prompt("Enter the name of subject 3:");

var totalMarks = 100 * 3;

var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

var obtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade, remark;

if (percentage >= 80) {
    grade = "Grade: A-one";
    remark = "Excellent";
} else if (percentage >= 70) {
    grade = "Grade: A";
    remark = "Good";
} else if (percentage >= 60) {
    grade = "Grade: B";
    remark = "You need to improve";
} else {
    grade = "Grade: C";
    remark = "Sorry";
}

document.write("<h2>Mark Sheet</h2><br><br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write(grade + "<br>");
document.write("Remarks: " + remark);


// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

var num = 8;
var guess = parseInt(prompt("Guess the number:"));
if (guess == num) {
    alert("Bingo! Correct answer");
    } 
    else if (guess,num++) {
        alert("Close enough to the correct answer");
        }


//         Write a program to check whether the given number is divisible by 3. Show the message to the user if the number
// is divisible by 3.

var n = parseInt(prompt("Enter a number:"));
if (n % 3 == 0) {
    alert("The number is divisible by 3");
    }


    // Write a program that checks whether the given input is an even number or an odd number.

var number = parseInt(prompt("Enter a number:"));
if (number % 2 == 0) {
    alert("The number is even");
    }
    else {
        alert("The number is odd");
        }


// Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = parseInt(prompt("What's the temperature?"));
if (temp>40) {
    alert("It is too hot outside.");
}
else if (temp>30) {
    alert("The weather today is normal.");
    }
    else if (temp>20) {
        alert("Today's weather is cool.");
        }
        else if (temp>10) {
            alert("OMG! Today's weather is so cool.");
        }


//         Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
 var x = parseInt(prompt("Enter first number:"));
 var y = parseInt(prompt("Enter second number:"));
 var z = prompt("Enter operation (+, -, *, /, %)");
 if (z == "+") {
    var result = x + y;
    alert("The result is: " + result);
    }
    else if (z == "-") {
        var result = x - y;
        alert("The result is: " + result);
    }
    else if (z == "*") {
        var result = x * y;
        alert("The result is: " + result);
        }
        else if (z == "/") {
var result = x / y;
alert("The result is: " + result);
}







