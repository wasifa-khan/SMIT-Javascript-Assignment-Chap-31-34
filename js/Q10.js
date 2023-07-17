const currentDate = new Date();
const referenceDate = new Date(2015, 0, 1); 
const secondsElapsed = Math.floor((currentDate - referenceDate) / 1000);
document.write("On reference date  "  + secondsElapsed + "  , seconds had passed since beginning of 2015");
