const formatTimeUnit = (unit) =>
  String(unit).length === 1 ? `0${unit}` : unit;

const renderClock = (hours, minutes, seconds) => {
  const clockHTML = document.querySelector(".clock");

  clockHTML.innerHTML = `
  <span>${formatTimeUnit(hours)}</span>:
  <span>${formatTimeUnit(minutes)}</span>:
  <span>${formatTimeUnit(seconds)}</span> `;
};

const getTime = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  renderClock(hours, minutes, seconds);
};

setInterval(getTime, 1000);
