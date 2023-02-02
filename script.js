const daysE1 = document.querySelector("#days");
const hoursE1 = document.querySelector("#hours");
const minutsE1 = document.querySelector("#minutes");
const secondsE1 = document.querySelector("#seconds");

const year = new Date().getFullYear() + 1;
const newYears = "1 Jan" + year;

function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()
    
    const totalSecond = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSecond / (3600 * 24));
    const hours = Math.floor(totalSecond / 3600) % 24;
    const minuts = Math.floor(totalSecond / 60) % 60;
    const seconds = Math.floor(totalSecond) % 60;

    daysE1.innerHTML = days ;
    hoursE1.innerHTML = formatTime(hours);
    minutsE1.innerHTML = formatTime(minuts);
    secondsE1.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time<10 ? (`0${time}`):time;
}

countDown();
setInterval(countDown, 1000);
