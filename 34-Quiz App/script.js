const questions = [
    {
        question: "Which is the larger animal in the world",
        answers: [
            { text: "Shark", correct:false },
            { text: "Blue Whale", correct:true },
            { text: "Elephant", correct:false },
            { text: "Giraffe", correct:false },

        ]
    },

    {
        question: "Which is the smallest continent in the world",
        answers: [
            { text: "Asia", correct:false },
            { text: "Australia", correct:true },
            { text: "Arctic", correct:false },
            { text: "Africa", correct:false },

        ]
    },

    {
        question: "Which is the largest dessert in the world",
        answers: [
            { text: "Kalahari", correct:false },
            { text: "Gobi", correct:false },
            { text: "Sahara", correct:false },
            { text: "Antartica", correct:true },

        ]
    },
]

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")
