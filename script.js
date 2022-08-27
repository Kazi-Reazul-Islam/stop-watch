let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let sec = 00;
let millisec = 00;
let timeInterval = 0;

const timer = () => {
  millisec++;
  if (millisec < 9) {
    milliseconds.innerHTML = "0" + millisec;
  }
  if (millisec > 9) {
    milliseconds.innerHTML = millisec;
  }
  if (millisec > 99) {
    sec++;
    seconds.innerHTML = "0" + sec;
    millisec = 0;
  }
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
};

//start
start.addEventListener("click", () => {
  timeInterval = setInterval(timer, 10);
});

//stop
stop.addEventListener("click", () => {
  clearInterval(timeInterval);
});

// reset
reset.addEventListener("click", () => {
  clearInterval(timeInterval);
  millisec = "00";
  sec = "00";
  milliseconds.innerHTML = millisec;
  seconds.innerHTML = sec;
});
