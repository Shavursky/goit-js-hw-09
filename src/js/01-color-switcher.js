
const butStart = document.querySelector('button[data-start]');
const butStop = document.querySelector('button[data-stop]');

let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

butStart.addEventListener("click", () => {    
    if (!timerId) {
        timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        }, 1000)
    }
});

butStop.addEventListener("click", function() {
    clearInterval(timerId);
    timerId = null;
});

