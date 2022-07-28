function getTime() {
    let time = new Date();
    let sec = time.getSeconds() / 60;
    let min = (sec + time.getMinutes()) / 60;
    let hr = (min + time.getHours()) / 12;
    let secHandle = document.querySelector("#seconds-handle").style.transform = `rotate(${sec*360}deg)`;
    let minHandle = document.querySelector("#minutes-handle").style.transform = `rotate(${min*360}deg)`;
    let hrHandle = document.querySelector("#hours-handle").style.transform = `rotate(${hr*360}deg)`;
    setTimeout(getTime, 1000);
}

function getDate() {
    let now = new Date();
    let day = now.getUTCDate();
    let month = now.getUTCMonth() + 1;
    let year = now.getUTCFullYear();
    let currentDate = document.querySelector("#current-date").innerText = `${day}.${month}.${year}.`;
}

getDate();

window.onload = getTime;