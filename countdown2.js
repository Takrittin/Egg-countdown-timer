let minutesToCountdown = 8;
let countdownEndTime = 0;
let countdownInterval;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownEndTime - now;
    
    if (distance <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "8m 00s";
        document.getElementById("stopButton").disabled = true;
    } else {
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("countdown").innerHTML = `${minutes}m ${seconds}s`;
    }
}


function startCountdown() {
    countdownEndTime = new Date().getTime() + minutesToCountdown * 60 * 1000;
    
    countdownInterval = setInterval(updateCountdown, 1000);
    
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}


function stopCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Countdown stopped!";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}


document.getElementById("startButton").addEventListener("click", startCountdown);
document.getElementById("stopButton").addEventListener("click", stopCountdown);


updateCountdown();
