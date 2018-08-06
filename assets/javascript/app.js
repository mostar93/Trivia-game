//array of questions
//each question has, within, an array of possible answers
//each question has a right answer

//setting all my variables, specifically making sure to set the choices and the questions (with answers and right answers) as objects in order to call them up more easily
var questionDisplay = document.getElementById("question");
var n;
var number = 15;
var intervalId;
var correct = 0;
var wrong = 0;
var finish = 0;


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
            possibleAnswers: ["houston", "austin","philly", "st. louis" ],
            rightAnswer: "philly",

        },
            {
            question: "What instrument do i play?",
            possibleAnswers: ["bass", "flute", "drums", "vocals"],
            rightAnswer: "bass",
            }
]

// when documen loads, make sure everything but the "start" button is hidden.
$(document).ready(function (){
    $("#mainBox").hide();
    $("#rightAnswer").hide();
    $("#wrongAnswer").hide();
    $("#totalRight").hide();
    $("#totalWrong").hide();
    $("#timesUp").hide();
    $("#startGame").show();
    $("#restartGame").hide();
// as soon as start button is clicked, the appropriate divs are shown and the game begins
    $("#startGame").on('click',function(){
        $("#startDiv").css("margin-top", "0")
        $("#startGame").hide();
        $("#mainBox").show();
        setQuestion();
        run();
    })
    // once the game ends you can start it over and all the counters reset.
    $("#restartGame").on('click',function(){
        $("#startDiv").css("margin-top", "0")
        $("#restartGame").hide();
        $("#mainBox").show();
        finish = 0;
        correct = 0;
        wrong = 0;
        reset();
        setQuestion();
        run();
    })
})



    var questionCounter = 0;

function reset(){
    number = 15;
    $("#countDown").html("<h2>" + number + "</h2>");   
    $("#mainBox").show();
    $("#rightAnswer").hide();
    $("#wrongAnswer").hide();
    $("#timesUp").hide();
    $("#totalRight").hide();
    $("#totalWrong").hide();
}

function setQuestion(){
    // not sure how to remove the question that gets set from the array. I only have 3 questions at the moment and sometimes I get the same one
    n = Math.floor(Math.random() * 3);
    questionDisplay.innerHTML = questions[n].question;
    for (a = 0; a < 4; a++ ){
        for (x = 1; x < 5; x++) {
            // console.log(theChoice[a].choice);
            theChoice[a].choice.innerHTML = questions[n].possibleAnswers[a];
        }    
    }

}

function run() {

    intervalId = setInterval(decrement, 1000);
    function decrement() {

        number--;
    
        $("#countDown").html("<h2>" + number + "</h2>");
    
        if (number === 0) {
            
            $("#timesUp").show(); 
            $("#mainBox").hide();
            $("#wrongAnswersSpan").text(questions[n].rightAnswer);
            stop();
            finish++;
            wrong++;
            setTimeout (function(){
                $("#timesUp").hide();
                $("#totalRight").hide();
                $("#totalWrong").hide();

            }, 2000)
            setTimeout(function(){              

            // in order to show the total right and totla wrong, I think I need to nest 2 setTimout function inside of the if else statement. One set at 2 seconds that displays my correct right and wrong answer, and the another that activates another 2-3 seconds later that gives me the restart option.

                if (finish === questions.length) {
                    $("#timesUp").hide();
                    $("#mainBox").hide();
                    $("#restartGame").show();
                    $("#rightAnswer").hide();
                    $("#totalRight").show();
                    $("#totalWrong").show();
                    $("#totalRightSpan").text(correct)
                    $("#totalWrongSpan").text(wrong);
                    // alert("right answers: " + correct);
                    // alert("wrong anwers: " + wrong);
                    stop();
                } else {
                    reset();
                    setQuestion();
                    run();
                    }
            }, 3000)
        } 
    }
}

  function stop (){
    clearInterval(intervalId);
}

$(".text").on("click", function(){
    myChoice = $(this).text();
        if (myChoice === questions[n].rightAnswer) {
            $("#rightAnswer").show();
            $("#mainBox").hide();
            correct++;
            stop();
            setTimeout(function(){
                reset();
                setQuestion();
                run();
            }, 3000)
            
        } else {
            $("#wrongAnswer").show();
            $("#mainBox").hide();
            $("#rightAnswersSpan").text(questions[n].rightAnswer);
            wrong++;
            stop();
            setTimeout(function(){
                reset();
                setQuestion();
                run();
            }, 3000)
    }
        console.log(myChoice);
        finish++;
        if (finish === questions.length) {
            setTimeout(function(){              

                // in order to show the total right and totla wrong, I think I need to nest 2 setTimout function inside of the if else statement. One set at 2 seconds that displays my correct right and wrong answer, and the another that activates another 2-3 seconds later that gives me the restart option.
    
                    if (finish === questions.length) {
                        $("#timesUp").hide();
                        $("#mainBox").hide();
                        $("#restartGame").show();
                        $("#rightAnswer").hide();
                        $("#wrongAnswer").hide();
                        $("#totalRight").show();
                        $("#totalWrong").show();
                        $("#totalRightSpan").text(correct)
                        $("#totalWrongSpan").text(wrong);
                        // alert("right answers: " + correct);
                        // alert("wrong anwers: " + wrong);
                        stop();
                    } else {
                        reset();
                        setQuestion();
                        run();
                        }
                }, 3000)
        }
})















