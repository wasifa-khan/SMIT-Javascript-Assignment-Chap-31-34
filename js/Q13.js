let fullDate = new Date();
let year = fullDate.getFullYear();
let age = +prompt("Enter your age");
document.write("Your birth year is: " + (year - age));