var listen, speak, read, write

function getData() {
    listen = parseFloat(document.getElementById('listening').value);
    read = parseFloat(document.getElementById('reading').value);
    write = parseFloat(document.getElementById('writing').value);
    speak = parseFloat(document.getElementById('speaking').value);

}

// function to calculte overall bands
function totalScore() {
    getData()
    /*if(formValidation())
     {
         total = ((listen+speak+write+read)/4)
         total = roundToNearest(total, 0.5)
         score.innerHTML = total
         feed()
     }*/
    total = ((listen + speak + write + read) / 4)
    total = roundToNearest(total, 0.5)
    score.innerHTML = total
    scoreInterpretation()
    colour()
    feed()


}

function scoreInterpretation(){
    if (total == 9) {
        interpret.innerHTML = "Expert user";
    }
    else if (total == 8 || total == 8.5) {
        interpret.innerHTML = "Very good user";
    }
    else if (total == 7 || total == 7.5) {
        interpret.innerHTML = "Good user";
    }
    else if (total == 6 || total == 6.5) {
        interpret.innerHTML = "Competent user";
    }
    else if (total == 5 || total == 5.5){
        interpret.innerHTML = "Modest user";
    }
    else if (total == 4 || total == 4.5) {
        interpret.innerHTML = "Limited user";
    }
    else if (total == 3 || total == 3.5) {
        interpret.innerHTML = "Extremely limited user";
    }
    else if (total == 2 || total == 2.5) {
        interpret.innerHTML = "Intermittent user";
    }
    else if (total == 1 || total == 1.5) {
        interpret.innerHTML = "Non user";
    }
    else {
        interpret.innerHTML = "Did not attempt the test";
    }
}

// function to print feedback
function feed() {
    if (total == 9) {
        feedback.innerHTML = "Has fully operational command of the language: appropriate,\
        accurate and fluent with complete understanding.";
    }
    else if (total == 8 || total == 8.5) {
        feedback.innerHTML = "Has fully operational command of the language with only occasional unsystematic\
        inaccuracies and inappropriacies. Misunderstandings may occur in unfamiliar\
        situations. Handles complex, detailed argumentation well.";
    }
    else if (total == 7 || total == 7.5) {
        feedback.innerHTML = "Has operational command of the language, although with occasional inaccuracies,\
        inappropriacies and misunderstandings in some situations. Generally handles\
        complex language well and understands detailed reasoning.";
    }
    else if (total == 6 || total == 6.5) {
        feedback.innerHTML = "Has generally effective command of the language despite some inaccuracies,\
        inappropriacies and misunderstandings. Can use and understand fairly complex\
        language, particularly in familiar situations.";
    }
    else if (total == 5 || total == 5.5) {
        feedback.innerHTML = "Has partial command of the language, coping with overall meaning in most\
        situations, though is likely to make many mistakes. Should be able to handle\
        basic communication in own field.";
    }
    else if (total == 4 || total == 4.5) {
        feedback.innerHTML = "Basic competence is limited to familiar situations. Has frequent problems\
        in understanding and expression. Is not able to use complex language.";
    }
    else if (total == 3 || total == 3.5) {
        feedback.innerHTML = "Conveys and understands only general meaning in very familiar situations.\
        Frequent breakdowns in communication occur.";
    }
    else if (total == 2 || total == 2.5) {
        feedback.innerHTML = "No real communication is possible except for the most basic information\
        using isolated words or short formulae in familiar situations and to meet immediate\
        needs. Has great difficulty understanding spoken and written English.";
    }
    else if (total == 1 || total == 1.5) {
        feedback.innerHTML = "Essentially has no ability to use the language beyond possibly a few isolated words.";
    }
    else {
        feedback.innerHTML = "No assessable information provided.";
    }
}

// function to round off to the nearest .5
function roundToNearest(numToRound, numToRoundTo) {
    numToRoundTo = 1 / (numToRoundTo);
    return Math.round(numToRound * numToRoundTo) / numToRoundTo;
}

/*
function formValidation(){
    var listeningStatus, writingStatus, speakingStatus, readingStatus;
    //Validation for listening
    if ((isNaN(listen)))
    {
        document.getElementById('listening').style.borderColor="red";
        document.getElementById('listeningValidationError').innerHTML = "Listening is required";
        listeningStatus = false;
    }
    else
    {
        document.getElementById('listening').style.borderColor="green";
        document.getElementById('listeningValidationError').innerHTML = "";
        listeningStatus = true;
    }

    //Validation for listening
    if ((isNaN(read)))
    {
        document.getElementById('reading').style.borderColor="red";
        document.getElementById('readingValidationError').innerHTML = "Reading is required";
        readingStatus = false;
    }
    else
    {
        document.getElementById('reading').style.borderColor="green";
        document.getElementById('readingValidationError').innerHTML = "";
        readingStatus = true;
    }

    //Validation for writing
    if ((isNaN(write)))
    {
        document.getElementById('writing').style.borderColor="red";
        document.getElementById('writingValidationError').innerHTML = "Writing is required";
        writingStatus = false;
    }
    else
    {
        document.getElementById('writing').style.borderColor="green";
        document.getElementById('writingValidationError').innerHTML = "";
        writingStatus = true;
    }

    //Validation for speaking
    if ((isNaN(speak)))
    {
        document.getElementById('speaking').style.borderColor="red";
        document.getElementById('speakingValidationError').innerHTML = "Speaking is required";
        speakingStatus = false;
    }
    else
    {
        document.getElementById('speaking').style.borderColor="green";
        document.getElementById('speakingValidationError').innerHTML = "";
        speakingStatus = true;
    }
    
    if (listeningStatus && readingStatus && writingStatus && speakingStatus){
        return true;
    }
    else{
        return false;
    }
}
*/

// funtion for colours of feedback interpretation
function colour() {
    if (total >= 7) {
        document.getElementById("interpret").style.color = "#00ff40"
    }
    else if (total > 4 && total < 7) {
        document.getElementById("interpret").style.color = "rgb(255, 123, 0)"
    }
    else{
        document.getElementById("interpret").style.color = "#FF0000"
    }
}

function inputChange(inputId) {

    var Score = parseFloat(document.getElementById(inputId).value);

    if ((isNaN(Score))) {
        document.getElementById(inputId).style.borderColor = "red";
        document.getElementById(inputId + 'ValidationError').innerHTML = inputId + " is required";
    }
    else {
        document.getElementById(inputId).style.borderColor = "green";
        document.getElementById(inputId + 'ValidationError').innerHTML = "";
    }

    getData();
    if (isNaN(listen) || isNaN(read) || isNaN(write) || isNaN(speak)) {
        document.getElementById("total-button").setAttribute("disabled", "disabled");
    }
    else {
        document.getElementById("total-button").removeAttribute("disabled");
    }

}