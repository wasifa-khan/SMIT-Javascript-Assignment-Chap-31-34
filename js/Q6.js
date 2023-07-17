const currentDate = new Date();
const millisecondsSince1970 = currentDate.getTime();
const minutesSince1970 = Math.floor(millisecondsSince1970 / (1000 * 60));
let minutesSinceMidnight;
minutesSinceMidnight = minutesSince1970;
console.log(minutesSinceMidnight);