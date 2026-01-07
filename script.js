let EndDate;
let StartDate;
let timer;

function startCountdown(){
    const inputValue = document.getElementById("targetinput").value;

    if(!inputValue){
        alert("Please select date & time");
        return;
    }
    EndDate = new Date(inputValue).getTime();
    StartDate = Date.now();

    // Validate that the end date is in the future
    if(EndDate <= StartDate){
        alert("Please select a future date and time");
        return;
    }

    if(timer) clearInterval(timer);

    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const now = Date.now();
    const distancePending = EndDate - now;

    if (distancePending <= 0) {
        clearInterval(timer);
        document.getElementById("Countdown").innerHTML = "EXPIRED";
        document.getElementById("Progress-bar").style.width = "100%";
        return;
    }

    const Day  = 24 * 60 * 60 * 1000;
    const Hour = 60 * 60 * 1000;
    const Min  = 60 * 1000;

    const days  = Math.floor(distancePending / Day);
    const hours = Math.floor((distancePending % Day) / Hour);
    const mins  = Math.floor((distancePending % Hour) / Min);
    const secs  = Math.floor((distancePending % Min) / 1000);

    document.getElementById("days").innerHTML = String(days).padStart(2, '0');
    document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerHTML = String(mins).padStart(2, '0');
    document.getElementById("seconds").innerHTML = String(secs).padStart(2, '0');

    const total = EndDate - StartDate;
    const covered = now - StartDate;
    const percent = Math.min((covered / total) * 100, 100);

    document.getElementById("Progress-bar").style.width = percent + "%";
}
