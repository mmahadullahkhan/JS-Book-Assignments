// Write a program that takes a character (number or string) in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Guess a number in between 48-57,65-90 or 97-122");
if (char >= 65 && char <= 90) {
    alert("Uppercase letter");
    } 
    else if (char >= 97 && char <= 122) {
        alert("Lowercase letter");
        }
        else if (char >= 48 && char <= 57) {
            alert("Number");
        }


//  Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var num1 = prompt("Enter the first number");
var num2 = prompt("Enter the second number");
var x = parseInt(num1);
var y = parseInt(num2);
if (x > y) {
    alert("The first number is the largest");
    }
    else if (x < y) {
        alert("The second number is the largest");
    }
    else if (x == y) {
        alert("The two numbers are equal");
    }


    // Write a program that takes input a number from user & state whether the number is positive, negative or zero
var num = prompt("Enter a number");
var x = parseInt(num);
if (x > 0) {
    alert("The number is positive");
    }
    else if (x < 0) {
        alert("The number is negative");
        }
        else if (x == 0) {
            alert("The number is zero");
            }



    //  Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var string = prompt("Enter a variable");
var x = string.toLowerCase();
if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
    alert("The variable is a vowel");
}
else {
    alert("The variable is not a vowel");
}


// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise

var pass = "web";
var x = prompt("Please enter your password");
if (x == pass) {
    alert("Correct! The password you entered matches the original password");
}
else {
    alert("Incorrect password");
}


// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}


// Write a program that takes time as input from user in 24 hour clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = parseInt(prompt("What time it is in 24 hour format?"));
if (time>=0000 && time<1200) {
    alert("Good Morning!");
}
else if (time>=1200 && time<1700) {
    alert("Good Afternoon!");
} 
else if (time>=1700 && time<2100) {
    alert("Good Evening!");
    }
    else if (time>=2100 && time<=2359) {
        alert("Good Night!");
        }





