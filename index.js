//jshint esversion:6
const countdown = () => {
    const endDate = new Date('20 july, 2022 00:00:00').getTime();
    const now = new Date().getTime();

    const difference = endDate - now;
    

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const timeDays = Math.round(difference / days);
    const timeHours = Math.round((difference % days) / hours);
    const timeMinutes = Math.round((difference % hours) / minutes);
    const timeSeconds = Math.round((difference % minutes) / seconds);


    const daysEl = document.getElementById("days")
    const hoursEl = document.getElementById("hours")
    const minsEl = document.getElementById("mins")
    const secondsEl = document.getElementById("seconds")

    daysEl.innerHTML = formatTime(timeDays);
    hoursEl.innerHTML = formatTime(timeHours);
    minsEl.innerHTML = formatTime(timeMinutes);
    secondsEl.innerHTML = formatTime(timeSeconds);

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000)
