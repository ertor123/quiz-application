const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')
let shuffleQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
         
    })

}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Where is Billie Eilish from?',
        answer: [
            { text: 'New York', correct: false },
            { text: 'Los Angeles', correct: true },
            { text: 'Miami', correct: false },
            { text: 'Chicago', correct: false }
        ]
    },
    {
        question: 'What city do The Beatles come from?',
        answer: [
            { text: 'London', correct: false },
            { text: 'Liverpool', correct: true },
            { text: 'Oxford', correct: false },
            { text: 'York', correct: false }
        ]
    },
    {
        question: 'Who invented the iconic Little Black Dress?',
        answer: [
            { text: 'Donatella Versace', correct: false },
            { text: 'Coco Chanel', correct: true },
            { text: 'Ralph Lauren', correct: false },
            { text: 'Marc Jacobs', correct: false }
        ]
    },
    {
        question: 'Who invented the World Wide Web?',
        answer: [
            { text: 'Steve Jobs', correct: false },
            { text: 'Tim Berners-Lee', correct: true },
            { text: 'Bill Gates', correct: false },
            { text: 'James Gosling', correct: false },
        ]
    },
    {
        question: 'When was the first issue of Vogue published?',
        answer: [
            { text: '2000', correct: false },
            { text: '1892', correct: true },
            { text: '1956', correct: false },
            { text: '1920', correct: false }
        ]
    }
]