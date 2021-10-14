import colors from './colors';
import refs from './refs';

const { body, startBtn, stopBtn } = refs;


startBtn.addEventListener('click', startColorSwitch)
stopBtn.addEventListener('click', stopColorSwitch)

let intervalId = null;

function startColorSwitch(e) {
    e.target.disabled = true;
    intervalId = setInterval(() => {
        body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);

}
function stopColorSwitch() {
    clearInterval(intervalId);
    startBtn.disabled = false;
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};








