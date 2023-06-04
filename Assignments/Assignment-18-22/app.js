// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var fullName = firstName + lastName;
alert("Welcome " + fullName);


// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user
// input in your browser
var mobile = prompt("What is your favourite mobile phone model?");
var size = mobile.length;
document.write("My favourite phone is: " + mobile + "<br>" + "Length of string: " + size);
document.write("<br>");



// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
var country = "Pakistani";
var letter = country.indexOf("n");
document.write("String: " + country + "<br>");
document.write("Index of 'n' is: " + letter);
document.write("<br>");


// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser
var index = "Hello World";
var world = index.lastIndexOf("l");
document.write("String: " + index + "<br>");
document.write("Last index of 'l' is: " + world);
document.write("<br>");


// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var find = "Pakistani";
var paki = find.charAt(2);
document.write("String: " + find + "<br>");
document.write("Character at 3rd index is: " + paki);
document.write("<br>");


// Repeat Q1 using string concat() 
var str1 = prompt("What is your first name?");
var str2 = prompt("What is your last name?");
var result = str1.concat("", str2);
alert("Welcome " + result);


// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var rep = "Hyderabad";
var representing = rep.replace("Hyder", "Islam");
document.write("String: " + rep + "<br>");
document.write("String after replacing Hyder to Islam is: " + representing);
document.write("<br>");


// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g, "&");
document.write("String: " + message + "<br>");
document.write("String after replacing 'and' with '&' is: " + replace);
document.write("<br>");


// Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
var n = "472";
var num = Number(n);
document.write("Value: " + n + "<br>");
document.write("Type:String " + "<br>");
document.write("Value: " + num + "<br>");
document.write("Type:Number " + "<br>");


// Write a program that takes user input. Convert and show the input in capital letters
var angry = prompt("Had a bad day? yahan apne mann ki bharas nikal de");
var capital = angry.toUpperCase()
document.write("User input: " + angry + "<br>");
document.write("Upper case: " + capital);
document.write("<br>");


// Write a program that takes user input. Convert and show the input in title case.
var badDay = prompt("Had a bad day? Pelde mujhe");
var title = badDay.charAt(0).toUpperCase() + badDay.slice(1);
document.write("User input: " + badDay + "<br>");
document.write("Title case: " + title);
document.write("<br>");


// Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
var num = 35.36;
var n = "3536";
document.write("Number: " + num + "<br>");
document.write("Result: " + n + "<br>");


// Write a program to take user input and store username in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
var user = prompt("Enter username");

var invalidCharacters = ["@", ".", ",", "!"];
for (var i = 0; i < user.length; i++) {
    if (invalidCharacters.includes(user.charAt(i))) {
        alert("Enter a valid username");
        break;
    }
}



// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var item = prompt("Enter item to search");
var itemFound = false;
for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() == item.toLowerCase()) {
        itemFound = true;
        break;
    }
}
if (itemFound) {
    alert(item+" is available in our bakery.");
    } else {
        alert(item+" is not available in our bakery.");
    }


//     Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
var password = prompt("Enter a password:");
var isValid = true;

if (password.length < 6) {
    isValid = false;
} else if (/^\d/.test(password)) {
    isValid = false;
} else {
    var hasAlphabet = false;
    var hasNumber = false;

    for (var i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabet = true;
        } else if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }
    }

    if (!hasAlphabet || !hasNumber) {
        isValid = false;
    }
}

if (isValid) {
    alert("Password is valid!");
} else {
    alert("Please enter a valid password.");
}


// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser
var university ="University of Karachi";
var universityArray = university.split(" ");
document.write(universityArray+"<br>");


// Write a program to display the last character of a user input.
var input = prompt("Write something");
var input1 = input.charAt(input.length - 1)
document.write("User input: "+input+"<br>");
document.write("Last character of input: "+input1+"<br>");


// You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
var str =  "The quick brown fox jumps over the lazy dog";
var finds = str.toLowerCase();
var founds =finds.match(/the/g);
document.write("Text: "+str+"<br>"+"There are two occurences of the word 'the'.");

    
















































