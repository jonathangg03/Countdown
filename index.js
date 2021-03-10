let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let actualSeconds = 41;
let actualMinutes = 55;
let actualHours = 23;
let actualDays = 8


setInterval(() => {
    seconds.innerText = actualSeconds;
    minutes.innerText = actualMinutes;
    hours.innerText = actualHours;
    days.innerText = `0${actualDays}`;
    actualSeconds -= 1;
    if(actualSeconds < 0){
        actualSeconds = 59;
        actualMinutes -= 1;
        if(actualMinutes < 0){
            actualMinutes = 59;
            actualHours -= 1;
            if(actualHours < 0){
                actualHours = 23;
                actualDays -= 1;
                if(actualDays === 0){
                    actualDays = 0;
                }
            }
        }
    }
}, 1000)