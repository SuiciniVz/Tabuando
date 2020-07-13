
const NUM_MIN = 2;
const NUM_MAX = 10; // NUM_MAX = NUM_MAX - 1

function start() {
    screenTable = getNumbers_For_Multi_tables();
    console.log("Function Numbers_For_Multi_Tables successful");

    Draw_Multi_Problem(screenTable);

    Draw_Multiplication_Tables()
}

function getNumbers_For_Multi_tables() {
    num1 = Math.floor(Math.random() * (NUM_MAX - NUM_MIN) + NUM_MIN);
    num2 = Math.floor(Math.random() * (NUM_MAX - NUM_MIN) + NUM_MIN);

    return [num1, num2, num1*num2]
}

function Draw_Multi_Problem(multiTable) {
    var table = document.getElementById("Multi-Problem");

    table.innerHTML = `${multiTable[0]} x ${multiTable[1]}`;
    console.log("Function Draw_Multi_Problem successful");
}

function setAnswer(id) {
    userResponse = Number(document.getElementById(id).textContent)
    console.log(userResponse)
    check_Answer(userResponse, screenTable)
}

function check_Answer(userResponse, screenTable) {

    divMain = document.getElementById("main")
    divMain.style.animationName = "none";

    if (userResponse == screenTable[2]) {
        setTimeout(() => divMain.style.animationName = "betweenResponsesCorrect",5)
        // alert("correct answer")
        console.log("correct answer")
    }
    else {
        setTimeout(() => divMain.style.animationName = "betweenResponsesWrong",5)
        // alert("wrong answer")
        console.log("wrong answer")
    }
    start();
}

function Draw_Multiplication_Tables() {
    let answerTable = document.getElementsByClassName("possible-Answer");
    let possibleAnswer =  [];
    let correctAnswer = Math.floor(Math.random() * answerTable.length)

    for (let i=0; i < answerTable.length; i++) {
        possibleAnswer[i] = getNumbers_For_Multi_tables()[2]
    }
    possibleAnswer[correctAnswer] = screenTable[2];
    
    for (let i=0; i < answerTable.length; i++) {
        if (possibleAnswer.indexOf(possibleAnswer[i]) != i)
            possibleAnswer[i] = getNumbers_For_Multi_tables()[2]

        answerTable[i].setAttribute("id", `${i}`)
        answerTable[i].innerHTML = `${possibleAnswer[i]}`
    }
}

function addEventsInDrawMultiTables() {
    var answerTable = document.getElementsByClassName("possible-Answer");
    for (let i=0; i < answerTable.length; i++) {
        answerTable[i].addEventListener("click", function () {
            setAnswer(this.id)
        })
    }
    console.log("function addEventsInDrawMultiTables successful")
}

start()
addEventsInDrawMultiTables()
