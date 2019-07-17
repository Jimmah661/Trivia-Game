var timeControl = {
    timer: 99,
    intID: "",
    updateTimer: function () {
        timeControl.timer--;
        $('#timer').text("Time Remaining: " + timeControl.timer);
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