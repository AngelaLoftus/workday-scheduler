//display the current time

var currentTime = document.getElementById("currentDay")
var todayDate = (moment().format('MMMM Do YYYY, h:mm:ss a'))

//QUESTION: How do i get this to count seconds? is it easy? instead of static time
currentTime.innerHTML = "Today's date is " + todayDate;

//console log to check if moment is working 
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//area of code where we set and retrieve items from local storage

 // document.addEventListener("svBtn");

$(".svBtn").on('click', function()
    {
    localStorage.setItem("hourblock")
    });
    
    //get any saved items from localStorage

    // localStorage.getItem("9");
    // localStorage.getItem("10");
    // localStorage.getItem("11");
    // localStorage.getItem("12");
    // localStorage.getItem("13");
    // localStorage.getItem("14");
    // localStorage.getItem("15");
    // localStorage.getItem("16");
    // localStorage.getItem("17");


function checkTime() {
    
var hourblock = document.querySelector("hourblock") ;

let currentHour = moment().hour();
console.log(currentHour);

//this statement returns null--how do I link the hourblocks in the HTML to here?
console.log(hourblock);

if (hourblock < currentHour) {
    $("hourblock").addClass("past");
    $("hourblock").removeClass("present");
    $("hourblock").removeClass("future");
}
else if (hourblock === currentHour) {
    $("hourblock").removeClass("past");
    $("hourblock").addClass("present");
    $("hourblock").removeClass("future");
}

else if (hourblock > currentHour) {
    $("hourblock").removeClass("past");
    $("hourblock").removeClass("present");
    $("hourblock").addClass("future");

}
}

checkTime();
 