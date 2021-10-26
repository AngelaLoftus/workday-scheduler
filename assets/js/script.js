$(document).ready(function() { 
    //display the current time    
    var currentTime = document.getElementById("currentDay")
    
    var todayDate = (moment().format('MMMM Do YYYY, h:mm:ss a'))
    currentTime.innerHTML = "Today's date is " + todayDate;
    
    //console log to check if moment is working 
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//function to compare the current hour to the hour on the calendar 
//and color code accordingly
function colorCoder () {
    //current time
    let currentHour = moment().hour();
    
    //for each hourblock, turn the id string to integer
    $(".hourblock").each(function () {
        let activityHour = parseInt($(this).attr("id"));
        console.log("blockHour", activityHour);

    //if hour is in the past, color it grey
    if (activityHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
        console.log("should show past color");
    }
    //if hour is in the present, color it red
    else if (activityHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
        console.log("present color here");
    }
    //if hour is in the future, color it green
    else if (activityHour > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log("future color appears");
    }
});
}

//call the color coder function
colorCoder(); 

 
$(".saveBtn").on('click', function()
{
    let activityDescription = $(this).siblings(".description").val();
    let activityTime = parseInt($(this).parent().attr("id"));
    console.log(activityDescription);
    console.log(activityTime);
    
    if (activityTime < 12) {
    localStorage.setItem(activityTime + "am", activityDescription);
    }
    else if (activityTime >= 12){
        localStorage.setItem(activityTime + "pm", activityDescription);
    }  
});

//load saved data
let temp = localStorage.getItem("9am");
console.log("temp 9 am test",temp);

let temp2 = localStorage.getItem("13pm")
console.log("'temp 13 pm test'", temp2);

//get all the items from local storage and display to text area on page 
 $('#9 .description').val(localStorage.getItem("9am"));
 $('#10 .description').val(localStorage.getItem("10am"));
 $('#11 .description').val(localStorage.getItem("11am"));
 $('#12 .description').val(localStorage.getItem("12pm"));
 $('#13 .description').val(localStorage.getItem("13pm"));
 $('#14 .description').val(localStorage.getItem("14pm"));
 $('#15 .description').val(localStorage.getItem("15pm"));
 $('#16 .description').val(localStorage.getItem("16pm"));
 $('#17 .description').val(localStorage.getItem("17pm"));

 //periodic timer to check the color coding and reiterate every minute 
    let timer = setInterval(colorCoder, 60000);
 
});