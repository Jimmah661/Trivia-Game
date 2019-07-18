var timeControl = {
    timer: 99,
    intID: "",
    updateTimer: function () {
        timeControl.timer--;

        if (timeControl.timer <= 9) {
            $('#timer').text("0" + timeControl.timer);
        }
        else {
            $('#timer').text(timeControl.timer);
        };
        if (timeControl.timer === 0) { timeControl.timesUp() };
    },
    timesUp: function () {
        clearInterval(timeControl.intID)
        alert('Times Up!')
    }
}

$(document).ready(function () {
    // Timer countdown code
    timeControl.intID = setInterval(timeControl.updateTimer, 1000);
})

function quizChecker() {
    alert('Button Clicked!')
}