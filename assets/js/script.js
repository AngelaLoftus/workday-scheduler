//display the current time

var currentTime = document.getElementById("#currentDay")
currentDay.innerhtml=("(moment().format('MMMM Do YYYY, h:mm:ss a'))");
moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(moment);
//get any saved items from localStorage

//localStorage.getItem("9am")
//localStorage.getItem("10am");

var hourblock = document.querySelector("hourblock").value;

function checkTime() {

if (hourblock < currentTime) {
    hourblock.addClass("past");
    hourblock.removeClass("present");
    hourblock.removeClass("future");
}
else if (hourblock === currentTime) {
    hourblock.removeClass("past");
    hourblock.addClass("present");
    hourblock.removeClass("future");
}

if (hourblock > currentTime) {
    hourblock.removeClass("past");
    hourblock.removeClass("present");
    hourblock.addClass("future");

}
}
checkTime();

