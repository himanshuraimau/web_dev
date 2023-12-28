function sessione(){var today = new Date();
var day = today.getDay(); //returns values from 0-6.

var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

console.log('Today is:'+ daylist[day]+".");

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();

var dete = (hour>=12)? "PM":"AM";

hour = (hour>=12)? hour-12:hour;

if(hour===0 && dete==="PM")
{
    if(minute==0 && seconds==0)
    {
        hour =12;
        minute = "Noon";

    }
    else{
        hour=12;
        minute="PM"
    }
}
if(hour===0 && dete==="AM")
{
    if(minute==0 && seconds==0)
    {
        hour =12;
        minute = "Midnight";

    }
    else{
        hour=12;
        minute="AM"
    }
}

console.log("Current Time:"+ hour + dete+":"+ minute +":"+ second);
}

const timerInterval = setInterval(sessione, 1000);