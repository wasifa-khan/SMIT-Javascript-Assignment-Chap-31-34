let fullDate = new Date();
let time = fullDate.getHours();
if(time >=12){
    document.write("It's PM");
}
else if(time < 12){
   document.write("It's AM");
}