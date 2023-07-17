let startingDateOfRamadan = new Date(2015, 5, 18); 
let currentDate = new Date();
let millisecondsPassed = currentDate - startingDateOfRamadan;
let daysPassed = Math.floor(millisecondsPassed / (1000 * 60 * 60 * 24));
alert(daysPassed + " days have passed since 1st Ramadan, 2015" );
