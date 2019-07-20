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

var correctGuess = 0;

$(document).ready(function () {
    // Timer countdown kickoff
    timeControl.intID = setInterval(timeControl.updateTimer, 1000);
})

$("#quizForm").submit(function (e) {
    e.preventDefault();
});

function quizChecker() {
    // To get the value of a question use $('#q1:checked').val()
    clearInterval(timeControl.intID)
    console.log(timeControl.timer + " seconds remaining")
    for (i = 1; i < 6; i++) {
        // $('#q' + i + ':checked').push(resultsTable)
        // resultsTable.push($('#q' + i + ':checked').val())
        if ($('#q' + i + ':checked').val() === "1") {
            correctGuess++
        }
    }
    if (correctGuess === 0) {
        $('#resultsDisplay').html('Did you do this on purpose? You got them all wrong!')
    } else if (correctGuess <= 2 && correctGuess > 0) {
        $('#resultsDisplay').html('Bummer, you only got ' + correctGuess + ' correct. Better luck next time')
    } else if (correctGuess > 2 && correctGuess < 5) {
        $('#resultsDisplay').html('Congrats, you got ' + correctGuess + " questions right!")
    } else if (correctGuess === 5) {
        $('#resultsDisplay').html('Well done True Believer! You got them all right!')
    }
    $('.modal').css('display', 'block')
}


// WANT TO USE A MODAL WINDOW TO DISPLAY QUIZ RESULTS


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("test");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function () {
//     modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }