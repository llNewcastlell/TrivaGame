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



$("#start").click(function () {
    $("p").append("<h2>1. what is required of you to wear to play in on organized game of soccer?</h2>",
        "<p><ul><li>sentence</li></ul></p>");
});