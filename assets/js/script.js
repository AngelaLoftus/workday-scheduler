//display the current time

var currentTime = document.getElementById("currentDay")
var todayDate = (moment().format('MMMM Do YYYY, h:mm:ss a'))
currentTime.innerHTML = "Today's date is " + todayDate;
// moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//get any saved items from localStorage

document.addEventListener("svBtn");

svBtn.onClick.localStorage.setItem("hourblock");

localStorage.getItem("9");
localStorage.getItem("10");
localStorage.getItem("11");
localStorage.getItem("12");
localStorage.getItem("13");
localStorage.getItem("14");
localStorage.getItem("15");
localStorage.getItem("16");
localStorage.getItem("17");

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
 