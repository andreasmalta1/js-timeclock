var clock  = document.getElementById('clock');
var date  = document.getElementById('date');
var clockButton  = document.getElementById('clockButton');
// date.textContent = 'Replace'
// date.innerHtml = textContent

function updateTime(){
    var today = new Date();
    var time = (today.getHours() < 10 ? '0' : '') + today.getHours() + ":" +  
                (today.getMinutes() < 10 ? '0' : '') + today.getMinutes() + ":" + 
                (today.getSeconds() < 10 ? '0' : '') + today.getSeconds() ;
    clock.textContent = time;
    console.log(time);
    updateDate();
    setTimeout(updateTime, 1000)
}

function updateDate(){
    var today = new Date();
    var time = (today.getDate() < 10 ? '0' : '') + today.getDate() + "/" + 
    (today.getMonth() < 10 ? '0' : '') + today.getMonth() + "/" + 
    today.getFullYear() ;
    date.textContent = time;
    console.log(time)
}


function showTime(){
    clock.style.visibility = "visible";
    clockButton.textContent = "Hide Time";
}

function hideTime(){
    clock.style.visibility = "hidden";
    clockButton.textContent = "Show Time";
}



function checkTime(){
    if (window.getComputedStyle(clock).visibility === "hidden") {
        showTime();
    } else if (window.getComputedStyle(clock).visibility === "visible"){
        hideTime();
    }
}


updateTime()


// getFullYear() – Get current year like 2020.
// getMonth() – Get current month values 0-11. Where 0 for Jan and 11 for Dec. So added +1 to get result.
// getDate() 