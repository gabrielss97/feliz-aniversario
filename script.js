const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");

const birthday = "10 mar 2023";

function countdownBday() {
  const birthdayDate = new Date(birthday);
  const actualDate = new Date();

  const base = Math.floor((birthdayDate - actualDate) / 1000);

  const day = Math.floor(base / 3600 / 24);
  const hour = Math.floor(base / 3600) % 24;
  const minute = Math.floor(base / 60) % 60;
  const second = Math.floor(base % 60);

  console.log(day, hour, minute, second);

  daysEl.innerHTML = formatTime(day);
  hoursEl.innerHTML = formatTime(hour);
  minutesEl.innerHTML = formatTime(minute);
  secondsEl.innerHTML = formatTime(second);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdownBday();

setInterval(countdownBday, 1000);
