const EndDate = new Date("23 Sept, 2024 20:00:00").getTime();
const StartDate = new Date().getTime();


function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now - StartDate;
    const distancePending = EndDate - now;

    const day = distancePending/(24*60*60*1000);
    const hrs = Math.floor(distancePending%(24*60*60*1000)/(60*60*1000));
    const mins = Math.floor(distancePending%(60*60*1000)/(60*1000));
    const secs = Math.floor(distancePending%(60*1000)/1000);
}


setInterval(updateTimer,1000);