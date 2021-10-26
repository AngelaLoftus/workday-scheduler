$(document).ready(function() { 
    //display the current time    
    var currentTime = document.getElementById("currentDay")
    
    var todayDate = (moment().format('MMMM Do YYYY, h:mm:ss a'))
    currentTime.innerHTML = "Today's date is " + todayDate;
    
    //console log to check if moment is working 
    console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));


function colorCoder () {
    
    let currentHour = moment().hour();
    
    
    $(".hourblock").each(function () {
        let activityHour = parseInt($(this).attr("id"));
        console.log("blockHour", activityHour);

        
    if (activityHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
        console.log("should show past color");
    }
    else if (activityHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
        console.log("present color here");
    }

    else if (activityHour > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        console.log("future color appears");
    }
});
}

colorCoder(); 

 
$(".saveBtn").on('click', function()
{
    let activityDescription = $(this).siblings(".description").val();
    let activityTime = $(this).parent().attr("id");
    console.log(activityDescription);
    console.log(activityTime);
    localStorage.setItem(activityTime + "am", activityDescription);
});

//load saved data
let temp = localStorage.getItem("9am");
console.log("temp 9 am",temp);

 $('#9 .description').val(localStorage.getItem("9am"));
 $('#10 .description').val(localStorage.getItem("10am"));
 $('#11 .description').val(localStorage.getItem("11am"));
 $('#12 .description').val(localStorage.getItem("12pm"));
 $('#13 .description').val(localStorage.getItem("1pm"));
 $('#14 .description').val(localStorage.getItem("2pm"));
 $('#15 .description').val(localStorage.getItem("3pm"));
 $('#16 .description').val(localStorage.getItem("4pm"));
 $('#17 .description').val(localStorage.getItem("5pm"));

 //set up periodic timer to color code every hour 
    let timer = setInterval(colorCoder, 60000);
 
});