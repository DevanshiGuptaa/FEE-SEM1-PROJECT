const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
const main = document.querySelector(".main");
const continueBtn = document.querySelector(".continue-btn");
const quizSection = document.querySelector(".quiz-section");
const quizBox = document.querySelector(".quiz-box");
const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');
const resultBox = document.querySelector('.result-box');
const restartQuizBtn = document.querySelector('.restart-quiz-btn');
const submitBtn = document.querySelector('.submit-btn');
const resultPopup = document.querySelector('.result-popup');
const closePopupBtn = document.querySelector('.close-popup-btn');
const popupScore = document.querySelector('.popup-score');
const scoreElement = document.getElementById('score');

let questionCount = 0;
let questionNumb = 1;
let score = 0;

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active')
    main.classList.remove('active');
}

continueBtn.onclick = () => {
    quizSection.classList.add("active");
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');

    showQuestions(0);
    questionCounter(1);
}

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);

        questionNumb++;
        questionCounter(questionNumb);
        resetOptions();
    } else {
        console.log('Questions Completed');
    }
}
submitBtn.onclick = () => {
    showResult();
    showResultPopup();
};

function showResultPopup() {
    resultPopup.classList.add('active');
    popupScore.textContent = `Your Score: ${score} / ${questions.length}`;
}

closePopupBtn.onclick = () => {
    resultPopup.classList.remove('active');
};

function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;

    let optionTag = '';
    for (let i = 0; i < questions[index].options.length; i++) {
        optionTag += `<div class="option"><span>${questions[index].options[i]}</span></div>`;
    }

    optionList.innerHTML = optionTag;
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function resetOptions() {
    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].classList.remove('correct', 'incorrect', 'disabled');
    }
}
function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function optionSelected(answer) {
    if (!answer.classList.contains('disabled')) {
        const userAnswer = answer.textContent;
        const correctAnswer = questions[questionCount].answer;

        if (userAnswer == correctAnswer) {
            answer.classList.add('correct');
            score++;
        } else {
            answer.classList.add('incorrect');
        }

        const alloptions = optionList.children.length;
        for (let i = 0; i < alloptions; i++) {
            optionList.children[i].classList.add('disabled');
        }

        updateScore(); // Update the score after selecting an answer
    }
}


function showResult() {
    resultBox.classList.add('active');
    resultBox.innerHTML = `
        <h2>Your Score: ${score} / ${questions.length}</h2>
        <button class="restart-quiz-btn" onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    questionCount = 0;
    questionNumb = 1;
    score = 0;
    resultBox.classList.remove('active');
    showQuestions(questionCount);
    questionCounter(questionNumb);
    resetOptions();
    updateScore();// Reset score to 0 when restartings
    resultBox.style.display = 'none';
    console.log(resultBox);


    scoreElement.textContent = 'Score: 0';
    scoreElement.style.display = 'block';

    
}


function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${index} of ${questions.length} Questions`;
}


// Sample questions array
let questions = [
    {
        numb:1,
        question:"What does the abbreviation HTML stand for?",
        answer:"(A) HyperText Markup Language.",
        options:["(A) HyperText Markup Language.",
        "(B) HighText Markup language.",
        "(C) HyperText Markdown Language.",
         "(D) None of the above."
        ]
    },
    {
        numb:2,
        question:"Who is the father of HTML?",
        answer:"(B) Tim Berners-Lee",
        options:["(A) Rasmus Lerdorf",
            "(B) Tim Berners-Lee",
            "(C) Brendan Eich",
           "(D) Sergey Brin"

        ]
    },
    {
        numb:3,
        question:"In which part of the HTML metadata is contained?",
        answer:"(A) head tag",
        options:["(A) head tag",
            "(B) title tag",
            "(C) html tag",
           "(D) body tag"
            

        ]
    },
    {
        numb:4,
        question:"What is DOM in HTML?",
        answer:"(D) Convention for representing and interacting with objects in html documents",
        options:[
           "(A) Language dependent application programming",
            "(B) Hierarchy of objects in ASP.NET",
            "(C) Application programming interface",
            "(D) Convention for representing and interacting with objects in html documents"
        ]
    },
    {
        numb:5,
        question:"Which element is used for or styling HTML5 layout?",
        answer:"(A) CSS",
        options:[
            "(A) CSS",
            "(B) jQuery",
           "(C) JavaScript",
            "(D) PHP"
        ]
    },
    {
        numb:6,
        question:"The doctype declaration for the html is..?",
        answer:"(b) case insensitive",
        options:[
            "(A) case sensitive",
           "(B) case insensitive",
          "(C) case impsensitive",
           "(D) None of the above "
        ]
    },
    {
        numb:7,
        question:"Which address is include the entire pathname?",
        answer:"(C) Absolute",
        options:[
            "(A) Relative",
            "(B) Mixed",
            "(C) Absolute",
            "(D) None of the above "
        ]
    },
    {
        numb:8,
        question:" Which attribute can be useed to position the image ?",
        answer:"(B) align attribute",
        options:[
           "(A) position attribute", 
            "(B) align attribute",
            "(C) margin attribute",
            "(D)None of the above "
        ]
    },
    {
        numb:9,
        question:"HTML provides a functionality to connect one or more pages in web-pages or resources?",
        answer:"(A) link",
        options:[
            "(A) link",
            "(B) src",
            "(C) node",
            "(D) tree"
        ]
    },
    {
        numb:10,
        question:"What is the use of <hr/> tag in HTML?",
        answer:"(D)) To create horizontal rule between sections",
        options:[
            "(A) For making content appearance italics",
           "(B) To create vertical rule between sections",
            "(C) To create a line break",
            "(D) To create horizontal rule between sections"
        ]
    }
]