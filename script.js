
function letsPlay() {
    var start = confirm("Are you ready?");
    var quiz = prompt("What call for help, when written in capital letters, is the same forwards, backwards and upside down?");
    if (quiz == "SOS") {
        alert("Well done, " +quiz+ " is the correct answer");
    }
    else {
        var inCorrect = prompt("The "+ quiz + " answer is incorrect. SOS, you may need some help. Try again! \n \nWhat call for help, when written in capital letters, is the same forwards, backwards and upside down?");
    if (inCorrect == "SOS") {
        alert("Well done, " +inCorrect+ " is the correct answer");
    }
    else {
        alert("Sorry, the " +inCorrect+ " answer is wrong. The correct answer is SOS.");
    }
    }
}

function noGame() {
    alert("Maybe next time!");
}