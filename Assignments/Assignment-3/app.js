// Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 18;
alert(age);


// Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitCount = localStorage.getItem("visitCount");
    if (visitCount) {
      visitCount = parseInt(visitCount) + 1;
    } else {
      visitCount = 1;
    }

    localStorage.setItem("visitCount", visitCount);
    alert("You have visited this site " + visitCount + " times.");


// Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:My birth year is 2005 Data type of my declared variable is number
var birthYear = 2005;
    document.write("My birth year is " + birthYear + "<br>");
    document.write("Data type of my declared variable is " + typeof birthYear);


//     A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
var VisitorsName = " John Doe ";
var ProductTitle = "ordered 5 T-Shirts ";
var storeName = "on XYZ Clothing store";
document.write (VisitorsName+ProductTitle+storeName);









