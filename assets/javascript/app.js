$(document).ready(function () {
        var questions = [{
            "question": "1. What is soccer International Championship games called?",
            "answer": "World Cup",
            "choiceOne": "World Series",
            "choiceTwo": "FIFA",
            "choiceThree": "Super Bowl",
            "choiceFour": "World Cup",
            "userGuess": [],
        },
        {
            "question": "2. What is required of you to wear to play in on organized game of soccer?",
            "answer": "Shinguards",
            "choiceOne": "Helmet",
            "choiceTwo": "Shinguards",
            "choiceThree": "Shoulder Pads",
            "choiceFour": "Gloves",
            "userGuess": [],
        },
        {
            "question": "3. How is a soccer game started?",
            "answer": "Kickoff",
            "choiceOne": "Punt",
            "choiceTwo": "First Pitch",
            "choiceThree": "Throw In",
            "choiceFour": "Kickoff",
            "userGuess": [],
        },
        {
            "question": "4. What size ball is considered full size?",
            "answer": "5",
            "choiceOne": "5",
            "choiceTwo": "10",
            "choiceThree": "1",
            "choiceFour": "3",
            "userGuess": [],
        },
        {
            "question": "5. When will an improper throw-in be called?",
            "answer": "If you jump",
            "choiceOne": "If you jump",
            "choiceTwo": "If you throw the ball over you head",
            "choiceThree": "If you use both hands to throw the ball",
            "choiceFour": "If you stand on the line",
            "userGuess": [],
        }


    ]
    
    var time = 5;
    var correctAnswer;
    var wrongAnswer;
    var userSelected;
  

    
// Diplay questions to the page

    function gamePlay() {
        $("#start").on('click', function() {
            
            $("#start").hide("#start");
           

            $("#q1").append(questions[0].question + ": " +"<ul> <input type=radio name = radio1 checkstate = true> " + questions[0].choiceOne +","+"<input type=radio name = radio1 checkstate = false>" + questions[0].choiceTwo +"," +"<input type=radio name = radio1 checkstate = false>" + questions[0].choiceThree +"," + "<input type=radio name = radio1 checkstate = false>" + questions[0].choiceFour +"</ul>"+"<br>");
            $("#q2").append(questions[1].question + ": " + "<ul> <input type=radio name = radio2 checkstate = false>" + questions[1].choiceOne +"," + "<input type=radio name = radio2 checkstate = false>" +questions[1].choiceTwo +"," + "<input type=radio name = radio2 checkstate = false>" +  questions[0].choiceThree +"," + "<input type=radio name = radio2 checkstate = false>" + questions[1].choiceFour +"</ul>"+"<br>");
            $("#q3").append(questions[2].question + ": " + " <ul> <input type=radio name = radio3 checkstate = false>" + questions[2].choiceOne +","+ "<input type=radio name = radio3 checkstate = false>" + questions[2].choiceTwo +"," + "<input type=radio name = radio3 checkstate = false>" + questions[2].choiceThree +","+ "<input type=radio name = radio3 checkstate = false>" + questions[2].choiceFour + "</ul>"+ "<br>");
            $("#q4").append(questions[3].question + ": " + " <ul><input type=radio name = radio4 checkstate = false>" + questions[3].choiceOne +","+ "<input type=radio name = radio4 checkstate = false>" + questions[3].choiceTwo +","+ "<input type=radio name = radio4 checkstate = false>" + questions[3].choiceThree +","+ "<input type=radio name = radio4 checkstate = false>" + questions[3].choiceFour +"</ul>"+ "<br>");
            $("#q5").append(questions[4].question + ": " + " <ul> <input type=radio name = radio5 checkstate = false>" + questions[4].choiceOne +","+ "<input type=radio name = radio5 checkstate = false>" + questions[4].choiceTwo +","+ "<input type=radio name = radio5 checkstate = false>" + questions[4].choiceThree +","+ "<input type=radio name = radio5 checkstate = false>" + questions[4].choiceFour + "</ul>"+ "<br>");


         runTimer();
         decrement();
         stop();
        // startClock();
          
        });
    }

//          Check answer
    // ***********************************************
    function score (){
    correctAnswer = questions[i].answer;

    if (userSelected == correctAnswer){

        $("#results").text(correctAnswer);
        

    }
    }
   







    // ***************************************************
// Display Score
    function getResults(){

        $("#submit").on('click', function(){

            $("#questions").remove();
            $("#display").remove();
            $('#results').text("You scored 5 out of 5" );
        })


    }

    function runTimer() {

        var intervalId = 60;
        clearInterval(time);
        intervalId = setInterval(decrement, 1000);
        $("#display").append(time, 1000);
        console.log(time);
     
    }
    
    function decrement() {
        time--;
        $("#display").text( ":"+ time);

        //  If number gets to zero...
        if (time === 0) {
            stop(runTimer);
           
            // setTimeout(time);

            console.log(time);



        }
    
    }

    function stop(){
     setTimeout(time);

    }
  







    // startGame();
    gamePlay(); 
    getResults();
});

