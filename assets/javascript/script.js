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

var resultsTable = [];

$(document).ready(function () {
    // Timer countdown kickoff
    timeControl.intID = setInterval(timeControl.updateTimer, 1000);
})

$("#quizForm").submit(function (e) {
    e.preventDefault();
});

function quizChecker() {
    // alert('Button Clicked!')
    clearInterval(timeControl.intID)
    console.log($('#q1:checked').val())
    console.log($('#q2:checked').val())
    console.log($('#q3:checked').val())
    console.log($('#q4:checked').val())
    console.log(timeControl.timer + " seconds remaining")
}