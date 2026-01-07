const EndDate = new Date("23 Sept, 2024 20:00:00").getTime();
const StartDate = new Date().getTime();


function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - StartDate;
    const distancePending = EndDate - now;

    const DayInMiliSec = (24*60*60*1000);
    const HourInMiliSec = (60*60*1000);
    const SecInMiliSec = (60*1000);

    const day = distancePending/(DayInMiliSec);
    const hrs = Math.floor(distancePending%(DayInMiliSec)/(HourInMiliSec));
    const mins = Math.floor(distancePending%(HourInMiliSec)/(DayInMiliSec));
    const secs = Math.floor(distancePending%(DayInMiliSec)/1000);

    //changes in UI
    document.getElementById("days").innerHTML = day;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("secs").innerHTML = secs;
}


setInterval(updateTimer,1000);