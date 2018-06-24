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
    
    var time = 60;
    var correctAnswer;
    var wrongAnswer;
    var userSelected;
  

    // for (i =0; i , questions.length; i++ ){

    //         if(questions[i].question < 5);
    //         $("#q1").append(questions[0].question + "<q2>");
    //         $("#q2").append(questions[1].question);
    //         $("#q3").append(questions[2].question);
    //         $("#q4").append(questions[3].question);
    //         $("#q5").append(questions[4].question);
    //         $("#a1").append("<input type=radio name = radio1 checkstate = true> " + questions[0].choiceOne,  ": " +" <input type=radio name = radio1 checkstate = true> " + questions[0].choiceTwo + "<input type=radio name = radio1 checkstate = true> " + questions[0].choiceThree +  "<input type=radio name = radio1 checkstate = true> " + questions[0].choiceFour);
            
    //         $("#a2").append("<input type=radio name = radio1 checkstate = true> " + questions[1].choiceOne,  ": " +" <input type=radio name = radio1 checkstate = true> " + questions[1].choiceTwo + "<input type=radio name = radio1 checkstate = true> " + questions[1].choiceThree +  "<input type=radio name = radio1 checkstate = true> " + questions[1].choiceFour);

    //         $("#a3").append("<input type=radio name = radio1 checkstate = true> " + questions[2].choiceOne,  ": " +" <input type=radio name = radio1 checkstate = true> " + questions[2].choiceTwo + "<input type=radio name = radio1 checkstate = true> " + questions[2].choiceThree +  "<input type=radio name = radio1 checkstate = true> " + questions[2].choiceFour);

    //         $("#a4").append("<input type=radio name = radio1 checkstate = true> " + questions[3].choiceOne,  ": " +" <input type=radio name = radio1 checkstate = true> " + questions[3].choiceTwo + "<input type=radio name = radio1 checkstate = true> " + questions[3].choiceThree +  "<input type=radio name = radio1 checkstate = true> " + questions[3].choiceFour);

    //         $("#a5").append("<input type=radio name = radio1 checkstate = true> " + questions[4].choiceOne,  ": " +" <input type=radio name = radio1 checkstate = true> " + questions[4].choiceTwo + "<input type=radio name = radio1 checkstate = true> " + questions[4].choiceThree +  "<input type=radio name = radio1 checkstate = true> " + questions[4].choiceFour);



            

            // console.log(question);

            
            
            // document.write(questions[i].question);
    // }
// Diplay questions to the page

    function gamePlay() {
        $("#start").on('click', function() {
            
            $("#start").hide("#start");
           

            $("#q1").append(questions[0].question + ": " +"<ul> <input type=radio name = radio1 checkstate = true> " + questions[0].choiceOne +","+"<input type=radio name = radio1 checkstate = false>" + questions[0].choiceTwo +"," +"<input type=radio name = radio1 checkstate = false>" + questions[0].choiceThree +"," + "<input type=radio name = radio1 checkstate = false>" + questions[0].choiceFour +"</ul>"+"<br>");
            $("#q2").append(questions[1].question + ": " + "<ul> <input type=radio name = radio2 checkstate = false>" + questions[1].choiceOne +"," + "<input type=radio name = radio2 checkstate = false>" +questions[1].choiceTwo +"," + "<input type=radio name = radio2 checkstate = false>" +  questions[0].choiceThree +"," + "<input type=radio name = radio2 checkstate = false>" + questions[1].choiceFour +"</ul>"+"<br>");
            $("#q3").append(questions[2].question + ": " + " <ul> <input type=radio name = radio3 checkstate = false>" + questions[2].choiceOne +","+ "<input type=radio name = radio3 checkstate = false>" + questions[2].choiceTwo +"," + "<input type=radio name = radio3 checkstate = false>" + questions[2].choiceThree +","+ "<input type=radio name = radio3 checkstate = false>" + questions[2].choiceFour + "</ul>"+ "<br>");
            $("#q4").append(questions[3].question + ": " + " <ul><input type=radio name = radio4 checkstate = false>" + questions[3].choiceOne +","+ "<input type=radio name = radio4 checkstate = false>" + questions[3].choiceTwo +","+ "<input type=radio name = radio4 checkstate = false>" + questions[3].choiceThree +","+ "<input type=radio name = radio4 checkstate = false>" + questions[3].choiceFour +"</ul>"+ "<br>");
            $("#q5").append(questions[4].question + ": " + " <ul> <input type=radio name = radio5 checkstate = false>" + questions[4].choiceOne +","+ "<input type=radio name = radio5 checkstate = false>" + questions[4].choiceTwo +","+ "<input type=radio name = radio5 checkstate = false>" + questions[4].choiceThree +","+ "<input type=radio name = radio5 checkstate = false>" + questions[4].choiceFour + "</ul>"+ "<br>");


            startTimer();
        // startClock();
          
        });
    }

//          Check answer
    // ***********************************************
    









    // ***************************************************
// Display Score
    function getResults(){

        $("#submit").on('click', function(){

            $("#questions").remove();
            $("#display").remove();
            $('#results').text("You scored 5 out of 5" );
        })


    }

    function startTimer(){
        time = setInterval( 1000)
        console.log(startTimer);
    }

    // counter

    // var counter = {

    //     time: 60,


    //     count: function(){
    //         counter.time--;
    //         console.log(time);
    //         $("#display").text(time);
    //     }
        
    // }
    //     setInterval(function(){
    //         // console.log("=======" + time);
    //         time --;
    //     });
    // // function startClock(){
    // //   $("#display").append(time)
    // //     time--;
        
    // // }
    
   
    // function timeConverter(t) {

    //     var minutes = Math.floor(t / 60);
    //     var seconds = t - (minutes * 60);
      
    //     if (seconds < 10) {
    //       seconds = "0" + seconds;
    //     }
      
    //     if (minutes === 0) {
    //       minutes = "00";
    //     }
    //     else if (minutes < 10) {
    //       minutes = "0" + minutes;
    //     }
      
    //     return minutes + ":" + seconds;
    //   }
    //   function count() {

    //     time++;
    //     var converted = timeConverter(time);
    //     $("#display").text(converted);
      
    //   }
   
   







    // startGame();
    gamePlay(); 
    getResults();
});

