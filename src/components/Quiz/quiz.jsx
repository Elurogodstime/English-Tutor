import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

function Quiz() {

  const questions = [
// ==========================
// QUESTIONS 1–10 (MIXED)
// ==========================

{
    question: "Choose the correct grammatical classification of the word 'Wisdom' in the sentence, 'Wisdom comes with experience.'",
    options: ["Concrete noun", "Collective noun", "Abstract noun", "Proper noun"],
    answer: "Abstract noun"
},

{
    question: "The expression 'Break the ice' is best understood to mean:",
    options: [
        "Destroy something completely",
        "Start a friendly conversation",
        "Win a difficult argument",
        "End a relationship"
    ],
    answer: "Start a friendly conversation"
},

{
    question: "What figure of speech is employed in the sentence, 'The classroom was a zoo'?",
    options: ["Simile", "Metaphor", "Hyperbole", "Irony"],
    answer: "Metaphor"
},

{
    question: "The word 'teacher' performs which grammatical function in the sentence, 'The teacher explained the lesson carefully'?",
    options: ["Verb", "Pronoun", "Noun", "Adverb"],
    answer: "Noun"
},

{
    question: "From the alternatives below, select the sentence that contains a proper noun.",
    options: [
        "The doctor treated the patient.",
        "The boy entered the classroom.",
        "We travelled to Abuja during the holiday.",
        "A farmer harvested his crops."
    ],
    answer: "We travelled to Abuja during the holiday."
},

{
    question: "The idiom 'Cost an arm and a leg' conveys the idea that something is:",
    options: [
        "Very dangerous",
        "Extremely expensive",
        "Painful to use",
        "Difficult to carry"
    ],
    answer: "Extremely expensive"
},

{
    question: "The sentence, 'The wind whispered through the trees,' illustrates:",
    options: [
        "Irony",
        "Hyperbole",
        "Personification",
        "Metaphor"
    ],
    answer: "Personification"
},

{
    question: "Read the sentence carefully: 'Mary forgot her assignment because she was absent.' The word 'she' functions as a:",
    options: [
        "Common noun",
        "Personal pronoun",
        "Demonstrative pronoun",
        "Adjective"
    ],
    answer: "Personal pronoun"
},

{
    question: "Which option correctly explains the idiom 'Once in a blue moon'?",
    options: [
        "Very frequently",
        "Only during festivals",
        "Very rarely",
        "At the end of every month"
    ],
    answer: "Very rarely"
},

{
    question: "Which figure of speech is demonstrated in the expression, 'Busy bees buzzed beautifully'?",
    options: [
        "Onomatopoeia",
        "Alliteration",
        "Pun",
        "Irony"
    ],
    answer: "Alliteration"
},

// ==========================
// QUESTIONS 11–20 (MIXED)
// ==========================

{
    question: "The expression 'Burn the midnight oil' suggests that a person:",
    options: [
        "Enjoys cooking at night",
        "Works or studies late into the night",
        "Wastes electricity unnecessarily",
        "Sleeps very late every day"
    ],
    answer: "Works or studies late into the night"
},

{
    question: "Consider the sentence, 'The children played happily in the field.' The word 'played' belongs to which part of speech?",
    options: ["Noun", "Verb", "Adjective", "Pronoun"],
    answer: "Verb"
},

{
    question: "Which literary device is illustrated in the sentence, 'Life is a journey'?",
    options: [
        "Simile",
        "Metaphor",
        "Hyperbole",
        "Alliteration"
    ],
    answer: "Metaphor"
},

{
    question: "Select the option in which the word functions as an adjective.",
    options: [
        "Beautiful",
        "Quickly",
        "Jump",
        "Yesterday"
    ],
    answer: "Beautiful"
},

{
    question: "If someone 'lets the cat out of the bag,' that person has:",
    options: [
        "Lost a valuable possession",
        "Revealed confidential information",
        "Become angry unexpectedly",
        "Made a careless purchase"
    ],
    answer: "Revealed confidential information"
},

{
    question: "Read the statement carefully: 'She is as gentle as a dove.' Which figure of speech has been used?",
    options: [
        "Metaphor",
        "Irony",
        "Simile",
        "Personification"
    ],
    answer: "Simile"
},

{
    question: "Which of the following words is correctly classified as a preposition?",
    options: [
        "Above",
        "Beautiful",
        "Jump",
        "Carefully"
    ],
    answer: "Above"
},

{
    question: "The expression 'I have told you a million times' is intended to emphasize a point through:",
    options: [
        "Irony",
        "Hyperbole",
        "Metaphor",
        "Onomatopoeia"
    ],
    answer: "Hyperbole"
},

{
    question: "A student says, 'This assignment is a piece of cake.' What does the expression imply?",
    options: [
        "The assignment is delicious",
        "The assignment is very easy",
        "The assignment is very difficult",
        "The assignment is incomplete"
    ],
    answer: "The assignment is very easy"
},

{
    question: "Examine the sentence, 'James studied hard because he wanted to succeed.' The word 'because' functions as a:",
    options: [
        "Preposition",
        "Conjunction",
        "Interjection",
        "Pronoun"
    ],
    answer: "Conjunction"
},

// ==========================
// QUESTIONS 21–30 (MIXED)
// ==========================

{
    question: "The statement, 'A fire station burned down,' is commonly regarded as an example of:",
    options: [
        "Irony",
        "Hyperbole",
        "Metaphor",
        "Personification"
    ],
    answer: "Irony"
},

{
    question: "What does the idiom 'Hit the nail on the head' imply?",
    options: [
        "To repair an object",
        "To describe something exactly correctly",
        "To strike with force",
        "To make a careless mistake"
    ],
    answer: "To describe something exactly correctly"
},

{
    question: "Choose the sentence in which an interjection is correctly used.",
    options: [
        "Wow! That was an outstanding performance.",
        "The students completed the assignment.",
        "She bought a new dictionary.",
        "We travelled by bus yesterday."
    ],
    answer: "Wow! That was an outstanding performance."
},

{
    question: "Which figure of speech is illustrated by the word 'buzz'?",
    options: [
        "Onomatopoeia",
        "Alliteration",
        "Hyperbole",
        "Irony"
    ],
    answer: "Onomatopoeia"
},

{
    question: "The expression 'Keep an eye on the baby' simply means:",
    options: [
        "Draw the baby's eyes",
        "Watch the baby carefully",
        "Carry the baby",
        "Ignore the baby"
    ],
    answer: "Watch the baby carefully"
},

{
    question: "Study the sentence, 'The athlete ran quickly towards the finish line.' The word 'quickly' functions as a:",
    options: [
        "Verb",
        "Adjective",
        "Adverb",
        "Conjunction"
    ],
    answer: "Adverb"
},

{
    question: "Which figure of speech is used in the sentence, 'The stars danced across the night sky'?",
    options: [
        "Personification",
        "Irony",
        "Metaphor",
        "Oxymoron"
    ],
    answer: "Personification"
},

{
    question: "A person who says, 'I am under the weather,' most likely means that he or she is:",
    options: [
        "Travelling",
        "Feeling unwell",
        "Standing outside",
        "Very excited"
    ],
    answer: "Feeling unwell"
},

{
    question: "From the options below, select the word that belongs to the class of abstract nouns.",
    options: [
        "Chair",
        "Justice",
        "Bottle",
        "Teacher"
    ],
    answer: "Justice"
},

{
    question: "Which sentence best illustrates a simile?",
    options: [
        "Her smile was sunshine.",
        "He fought like a lion.",
        "The leaves danced in the wind.",
        "I have a mountain of assignments."
    ],
    answer: "He fought like a lion."
},



  ]

    const [current, setCurrent] = useState(0)
const [score, setScore] = useState(0)
const [selected, setSelected] = useState(null)
const [showResult, setShowResult] = useState(false)

// Stores every answer selected by the user
const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
)

// Total quiz timer (10 minutes)
const QUIZ_TIME = 600
const [time, setTime] = useState(QUIZ_TIME)

const navigate = useNavigate()

// Timer
useEffect(() => {
    if (showResult) return

    if (time <= 0) {
        finishQuiz()
        return
    }

    const timer = setTimeout(() => {
        setTime(prev => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)

}, [time, showResult])

// Record Answer
const handleAnswer = (option) => {

    if (selected !== null) return

    setSelected(option)

    const updatedAnswers = [...userAnswers]
    updatedAnswers[current] = option

    setUserAnswers(updatedAnswers)

}

// Next Question
const handleNext = () => {

    if (selected === null) return

    if (current < questions.length - 1) {

        setCurrent(prev => prev + 1)
        setSelected(null)

    } else {

        finishQuiz()

    }
}


const calculateScore = () => {

    let total = 0

    userAnswers.forEach((answer, index) => {

        if (answer === questions[index].answer) {
            total++
        }

    })

    return total

}


// Finish Quiz
const finishQuiz = () => {

    const history =
        JSON.parse(localStorage.getItem("quizHistory")) || []

        const finalScore = calculateScore()

    const percentage = Math.round(
    (finalScore / questions.length) * 100
)

    const attempt = history.length + 1

    const timeUsed = QUIZ_TIME - time

    const minutes = Math.floor(timeUsed / 60)
    const seconds = timeUsed % 60

    const attemptData = {

        id: Date.now(),

        attempt,

        score: finalScore,

        total: questions.length,

        percentage,

        userAnswers,

        questions,

        completedAt: new Date().toLocaleString(),

        timeUsed: `${minutes}m ${seconds}s`

    }

    history.push(attemptData)

    localStorage.setItem(
        "quizHistory",
        JSON.stringify(history)
    )

    setScore(finalScore)

navigate("/review", {
    state: attemptData
})

   
}

// Restart Quiz
const restartQuiz = () => {

    setCurrent(0)

    setScore(0)

    setSelected(null)

    setShowResult(false)

    setUserAnswers(
        Array(questions.length).fill(null)
    )

    setTime(QUIZ_TIME)
}

// Format Timer
const formatTime = (seconds) => {

    const mins = Math.floor(seconds / 60)

    const secs = seconds % 60

    return `${mins}:${secs.toString().padStart(2, "0")}`

}


   // 🎯 RESULT SCREEN
if (showResult) {

    const percentage = Math.round(
        (score / questions.length) * 100
    )

    const history =
        JSON.parse(localStorage.getItem("quizHistory")) || []

    const highest =
        history.length > 0
            ? Math.max(...history.map(item => item.score))
            : score

    const average =
        history.length > 0
            ? (
                history.reduce(
                    (sum, item) => sum + item.score,
                    0
                ) / history.length
            ).toFixed(1)
            : score

    const latestAttempt =
        history.length > 0
            ? history[history.length - 1].attempt
            : 1

    return (

        <div className="min-h-screen flex justify-center items-center bg-gray-100 p-5">

            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

                <h1 className="text-3xl font-bold text-blue-700 text-center">
                    🎉 Quiz Completed
                </h1>

                <div className="mt-6 space-y-4">

                    <div className="flex justify-between">
                        <span className="font-medium">
                            Attempt
                        </span>

                        <span className="font-bold">
                            #{latestAttempt}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">
                            Score
                        </span>

                        <span className="font-bold text-green-600">
                            {score} / {questions.length}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">
                            Percentage
                        </span>

                        <span className="font-bold">
                            {percentage}%
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">
                            Highest Score
                        </span>

                        <span className="font-bold text-blue-600">
                            {highest} / {questions.length}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">
                            Average Score
                        </span>

                        <span className="font-bold text-purple-600">
                            {average} / {questions.length}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="font-medium">
                            Time Used
                        </span>

                        <span className="font-bold">
                            {`${Math.floor((QUIZ_TIME - time) / 60)}m ${(QUIZ_TIME - time) % 60}s`}
                        </span>
                    </div>

                </div>

                <button
                    onClick={restartQuiz}
                    className="w-full mt-8 bg-blue-600 text-white py-3 rounded-lg active:scale-95"
                >
                    Retry Quiz
                </button>

                <button
                    onClick={() => navigate("/review")}
                    className="w-full mt-3 bg-green-600 text-white py-3 rounded-lg active:scale-95"
                >
                    View Performance
                </button>

                <Link to="/">
                    <button className="w-full mt-3 border border-gray-400 py-3 rounded-lg">
                        Back to Home
                    </button>
                </Link>

            </div>

        </div>

    )
}
   // 🎯 QUIZ UI
return (
    <div className="min-h-screen bg-gray-50 p-4">

        {/* HEADER */}
         <Link to={"/home"}>
         <div className="mb-2" >
                <button className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-3 rounded-lg shadow active:scale-95 transition">
                    <FaArrowLeft size={"10px"}/>
                </button>
            </div>
         </Link>
        <div className="bg-white shadow rounded-xl p-4">

           

            <div className="flex justify-between items-center">

                <h2 className="font-bold text-blue-700 text-xl">
                    Quiz Time
                </h2>

                <div className="text-red-600 font-bold text-lg">
                    ⏱ {formatTime(time)}
                </div>

            </div>

            {/* Progress */}
            <div className="mt-4">

                <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>
                        Question {current + 1} of {questions.length}
                    </span>

                    <span>
                        {Math.round(((current + 1) / questions.length) * 100)}%
                    </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">

                    <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{
                            width: `${((current + 1) / questions.length) * 100}%`
                        }}
                    />

                </div>

            </div>

        </div>

        {/* QUESTION CARD */}

        <div className="bg-white shadow rounded-xl p-6 mt-5">

            <h3 className="text-lg font-semibold leading-8">

                {current + 1}. {questions[current].question}

            </h3>

            <div className="space-y-3 mt-6">

                {questions[current].options.map((option, index) => (

                    <button

                        key={index}

                        onClick={() => handleAnswer(option)}

                        disabled={selected !== null}

                        className={`w-full text-left p-4 rounded-lg border transition

                        ${
                            selected === option

                            ? option === questions[current].answer

                                ? "bg-green-100 border-green-600"

                                : "bg-red-100 border-red-600"

                            : "bg-gray-100 hover:bg-blue-50"
                        }

                        ${
                            selected !== null
                            ? "cursor-default"
                            : "cursor-pointer"
                        }
                        `}

                    >

                        <span className="font-medium mr-2">

                            {String.fromCharCode(65 + index)}.

                        </span>

                        {option}

                    </button>

                ))}

            </div>

            {/* Explanation */}

            {selected && (

                <div className="mt-5 p-4 rounded-lg bg-blue-50 border border-blue-200">

                    {selected === questions[current].answer ? (

                        <p className="text-green-700 font-semibold">

                            ✅ Correct!

                        </p>

                    ) : (

                        <>

                            <p className="text-red-700 font-semibold">

                                ❌ Incorrect

                            </p>

                            <p className="mt-2">

                                Correct Answer:

                                <span className="font-bold text-green-700">

                                    {" "}
                                    {questions[current].answer}

                                </span>

                            </p>

                        </>

                    )}

                </div>

            )}

            {/* Buttons */}

            <div className="flex gap-3 mt-8">

                <button

                    disabled={current === 0}

                    onClick={() => {

                        if (current > 0) {

                            setCurrent(current - 1)

                            setSelected(userAnswers[current - 1])

                        }

                    }}

                    className={`flex-1 py-3 rounded-lg

                    ${
                        current === 0

                        ? "bg-gray-300 text-gray-500"

                        : "bg-gray-700 text-white"
                    }
                    `}

                >

                    Previous

                </button>

                <button

                    onClick={handleNext}

                    disabled={selected === null}

                    className={`flex-1 py-3 rounded-lg

                    ${
                        selected === null

                        ? "bg-gray-400 text-white cursor-not-allowed"

                        : "bg-blue-600 text-white active:scale-95"
                    }
                    `}

                >

                    {current === questions.length - 1

                        ? "Finish Quiz"

                        : "Next"}

                </button>

            </div>

        </div>

    </div>
)

}

export default Quiz