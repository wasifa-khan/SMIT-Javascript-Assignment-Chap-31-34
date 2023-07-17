let curr_date  = new Date();
document.write(curr_date);
let year = curr_date.getFullYear();
let prev_date = new Date(curr_date.setFullYear(year-100))
document.write(prev_date);