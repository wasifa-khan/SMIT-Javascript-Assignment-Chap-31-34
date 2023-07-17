let dayName = ["saturday" , "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
let date = new Date();
let day = date.getDay();
if(day == 0 || day == 1){
   document.write("It's Fun day")
}
else{
    document.write("Today is " + dayName(day+1))
}