//array of questions
//each question has, within, an array of possible answers
//each question has a right answer
var questionDisplay = document.getElementById("question");

// create an array that contains the choice divs so i can send the possible answers out to each box
var theChoice =[
                {choice: document.getElementById("choice1")},
                {choice: document.getElementById("choice2")},
                {choice: document.getElementById("choice3")},
                {choice: document.getElementById("choice4")}
            ]

// create an array that contains each question, its possible answers, and its right answer
var questions = [{
            question: "What is my name?",
            possibleAnswers: ["momin", "fred", "john", "jim"],
            rightAnswer: "momin",
        },
            {   
            question: "Where am I from?",
            possibleAnswers: ["philly","houston", "austin", "st. louis" ],
            rightAnswer: "philly",

        },
            {
            question: "What instrument do i play?",
            possibleAnswers: ["bass", "flute", "drums", "vocals"],
            rightAnswer: "bass",
            }
    
    ]

// this function randomly chooses a question package from the questions array and sends them out to their appropriate boxes

function setQuestion(){
    var n = Math.floor(Math.random() * 3);
    questionDisplay.innerHTML = questions[n].question;
    for (a = 0; a < 4; a++ ){
        for (x = 1; x < 5; x++) {
            // console.log(theChoice[a].choice);
            theChoice[a].choice.innerHTML = questions[n].possibleAnswers[a];
        }    
    }
}

setQuestion();

// test function shows that we can tell when the right answer string is chosen
if (questions[0].rightAnswer === questions[0].possibleAnswers[1]){
    // console.log("im smart!");
    // console.log(theChoice[0].choice.innerHTML);
}

// sets wrong or right 
if (theChoice[0].choice.innerHTML === questions[0].rightAnswer) {
    alert("you are right!");
} else {
    alert("you are wrong!");
}

console.log(theChoice[0].choice.innerHTML);
console.log(questions[0].rightAnswer);






