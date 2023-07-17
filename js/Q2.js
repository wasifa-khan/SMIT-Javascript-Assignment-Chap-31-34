let month_names = ["january" , "fenruary" , "mnarch" , "april" , "may" , "june" , "july" , "august" , "september" , "octber" , "november" , "december"]

let date = new Date();
let month = date.getMonth();
document.write("current month is: "+ month_names[month]);