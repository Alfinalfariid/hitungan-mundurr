var targetDate = new Date("November 9, 2024 00:00:00").getTime();

function updateCountdown() {
    var now = new Date().getTime();
    var timeLeft = targetDate - now;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = padNumber(days);
    document.getElementById("hours").textContent = padNumber(hours);
    document.getElementById("minutes").textContent = padNumber(minutes);
    document.getElementById("seconds").textContent = padNumber(seconds);

    if (timeLeft <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "Waktu Habis!";
        document.getElementById("link").style.display = "inline-block";
    }
}

function padNumber(number) {
    return number < 10 ? "0" + number : number;
}

var countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to avoid delay