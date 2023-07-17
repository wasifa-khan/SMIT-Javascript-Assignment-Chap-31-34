let curr_date  = new Date();
document.write(curr_date);
let hours = curr_date.getHours();
let prev_date = new Date(curr_date.setHours(hours-1))
document.write(prev_date);