let dayName = ["saturday" , "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
let date = new Date();
let day = date.getDay();
document.write("Today is: "+ dayName[day]);