const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;
const INTERVAL_DELAY = 1000;
btnStart.disabled = false;
btnStop.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function updateBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
}

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick() {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(updateBackgroundColor, INTERVAL_DELAY);

  console.log('Interval was started!');
}

btnStop.addEventListener('click', onBtnStopClick);

function onBtnStopClick() {
  btnStart.disabled = false;
  btnStop.disabled = true;

  clearInterval(timerId);
  console.log('Interval has stopped...');
}
