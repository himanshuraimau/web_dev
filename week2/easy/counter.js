let seconds = 60;

function startTimer() {
  if (seconds > 0) {
    console.log(seconds + " seconds remaining");
    seconds--;
    setTimeout(startTimer, 1000); // Call the function again after 1 second (1000 milliseconds)
  } else {
    console.log("Timer expired!");
  }
}

// Start the timer
startTimer();




/*
// with set interval function 
let seconds = 60;

function updateTimer() {
  if (seconds > 0) {
    console.log(seconds + " seconds remaining");
    seconds--;
  } else {
    clearInterval(timerInterval);
    console.log("Timer expired!");
  }
}

// Start the timer with setInterval
const timerInterval = setInterval(updateTimer, 1000);
*/



/* Major difference btw the set timeout and set interval is they both call a function 
at a specified time but in set timeout the action is called once where as in the
set interval it gets called repedetaly .


setTimeout(function() {
  console.log("Hello!");  // Say "Hello!" after 2 seconds
}, 2000);



function takeStepForward() {
  console.log("Step forward!");  // Take a step forward
}

const intervalId = setInterval(takeStepForward, 1000);  // Take a step every 1 second

// To stop the robot after 5 seconds
setTimeout(function() {
  clearInterval(intervalId);  // Stop taking steps after 5 seconds
}, 5000);


*/