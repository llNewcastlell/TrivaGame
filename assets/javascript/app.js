
// Create a list of questions
var myQuestions = [{
        question: "1. What is soccer International Championship games called?",
        answers: {
            a: 'World Series',
            b: 'FIFA',
            c: 'Super Bowl',
            d: 'World Cup'
        },
        correctAnswer: 'd'
    },

    {
        question: "2. what is required of you to wear to play in on organized game of soccer?",
        answers: {
            a: 'Helmet',
            b: 'Shinguards',
            c: 'Shoulder Pads',
            d: 'Gloves'
        },
        correctAnswer: 'b'
    },

    {
        question: "3. How is a soccer game started?",
        answers: {
            a: 'Punt',
            b: 'First Pitch',
            c: 'Throw In',
            d: 'Kickoff'
        },
        correctAnswer: 'd'
    },

    {
        question: "4. What size ball is considered full size?",
        answers: {
            a: '5',
            b: '10',
            c: '1',
            d: '3'
        },
        correctAnswer: '5'
    },

    {
        question: "5. When will an improper throw-in be called?",
        answers: {
            a: 'If you jump',
            b: 'If you throw the ball over your head',
            c: 'If you use both hands to throw the ball',
            d: 'If you stand on the line'
        },
        correctAnswer: 'a'
    }
];

$(document).ready(function () {

 // Click Start button to display the questions
function startGame(){

    $("#start").on("click", function(){
                       
        for(i = 0; i < myQuestions.length; i++);

        $("#questions").append('<div>'+ myQuestions[0].question +'</div>');
        $("#questions").append('<div>'+ myQuestions[1].question +'</div>');
        $("#questions").append('<div>'+ myQuestions[2].question +'</div>');
        $("#questions").append('<div>'+ myQuestions[3].question +'</div>');
        $("#questions").append('<div>'+ myQuestions[4].question +'</div>');



        
        
        // console.log("-----" + myQuestions[0].question);

    });
}
 

// $("#questions").append('<p> </p>'+ myQuestions[0].question);






















startGame();

});



