import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function Quiz() {

    // 🧠 QUESTIONS (you can add more later)
    const questions = [
    // Noun (1–8)
    {
        question: "A noun is a word that names what?",
        options: ["Action", "Person, place or thing", "Description", "Time"],
        answer: "Person, place or thing"
    },
    {
        question: "Which of these is a noun?",
        options: ["Run", "Teacher", "Quickly", "Beautiful"],
        answer: "Teacher"
    },
    {
        question: "Honesty belongs to which type of noun?",
        options: ["Concrete noun", "Abstract noun", "Proper noun", "Collective noun"],
        answer: "Abstract noun"
    },
    {
        question: "Which is a proper noun?",
        options: ["city", "boy", "Lagos", "car"],
        answer: "Lagos"
    },
    {
        question: "A group of soldiers is called a:",
        options: ["Collective noun", "Proper noun", "Abstract noun", "Pronoun"],
        answer: "Collective noun"
    },
    {
        question: "Which is a concrete noun?",
        options: ["Love", "Freedom", "Chair", "Anger"],
        answer: "Chair"
    },
    {
        question: "Which noun can be counted?",
        options: ["Water", "Sugar", "Book", "Rice"],
        answer: "Book"
    },
    {
        question: "Uncountable noun example is:",
        options: ["Book", "Chair", "Water", "Car"],
        answer: "Water"
    },

    // Pronoun (9–16)
    {
        question: "A pronoun is used to:",
        options: ["Name things", "Replace nouns", "Describe actions", "Join sentences"],
        answer: "Replace nouns"
    },
    {
        question: "Which is a pronoun?",
        options: ["He", "Boy", "School", "Run"],
        answer: "He"
    },
    {
        question: "She, he, they are examples of:",
        options: ["Verbs", "Pronouns", "Adverbs", "Nouns"],
        answer: "Pronouns"
    },
    {
        question: "Myself is an example of:",
        options: ["Reflexive pronoun", "Possessive noun", "Verb", "Adjective"],
        answer: "Reflexive pronoun"
    },
    {
        question: "Which is a possessive pronoun?",
        options: ["mine", "run", "quick", "they"],
        answer: "mine"
    },
    {
        question: "Who is an example of:",
        options: ["Interrogative pronoun", "Verb", "Noun", "Adverb"],
        answer: "Interrogative pronoun"
    },
    {
        question: "This, that, those are:",
        options: ["Relative pronouns", "Demonstrative pronouns", "Verbs", "Adjectives"],
        answer: "Demonstrative pronouns"
    },
    {
        question: "Each other is a:",
        options: ["Reciprocal pronoun", "Verb", "Noun", "Adverb"],
        answer: "Reciprocal pronoun"
    },

    // Mixed Grammar (17–20)
    {
        question: "Which word is NOT a noun?",
        options: ["School", "Love", "Run", "Chair"],
        answer: "Run"
    },
    {
        question: "The boy is reading. 'Boy' is a:",
        options: ["Verb", "Noun", "Pronoun", "Adjective"],
        answer: "Noun"
    },
    {
        question: "They went home. 'They' is a:",
        options: ["Noun", "Pronoun", "Verb", "Adjective"],
        answer: "Pronoun"
    },
    {
        question: "A word used instead of repeating a noun is:",
        options: ["Adverb", "Pronoun", "Verb", "Preposition"],
        answer: "Pronoun"
    }
]

    const [current, setCurrent] = useState(0)
    const [score, setScore] = useState(0)
    const [selected, setSelected] = useState(null)
    const [showResult, setShowResult] = useState(false)

    // ⏱ TIMER (30 seconds per question)
    const [time, setTime] = useState(30)

    useEffect(() => {
        if (showResult) return

        if (time === 0) {
            handleNext()
            return
        }

        const timer = setTimeout(() => {
            setTime(time - 1)
        }, 1000)

        return () => clearTimeout(timer)

    }, [time, showResult])

    const handleAnswer = (option) => {
        setSelected(option)

        if (option === questions[current].answer) {
            setScore(score + 1)
        }
    }

    const handleNext = () => {
        setSelected(null)
        setTime(30)

        if (current + 1 < questions.length) {
            setCurrent(current + 1)
        } else {
            setShowResult(true)
        }
    }

    const restartQuiz = () => {
        setCurrent(0)
        setScore(0)
        setSelected(null)
        setShowResult(false)
        setTime(30)
    }

    // 🎯 RESULT SCREEN
    if (showResult) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-5">

                <div className="bg-white shadow-lg rounded-xl p-8 text-center">
                    <h1 className="text-2xl font-bold text-blue-700 mb-3">
                        Quiz Completed 🎉
                    </h1>

                    <p className="text-lg">
                        Your Score:
                    </p>

                    <p className="text-3xl font-bold text-green-600">
                        {score} / {questions.length}
                    </p>

                    <button
                        onClick={restartQuiz}
                        className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg active:scale-95 transition"
                    >
                        Retry Quiz
                    </button>

                    <div className="mt-4">
                        <Link to="/">
                            <button className="text-blue-600 underline">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        )
    }

    // 🎯 QUIZ UI
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* HEADER */}
            <div className="flex justify-between items-center bg-white shadow p-4 rounded-xl">
                <h2 className="font-bold text-blue-700">
                    Quiz Time
                </h2>

                <div className="text-red-500 font-bold">
                    ⏱ {time}s
                </div>
            </div>

            {/* QUESTION */}
            <div className="bg-white shadow rounded-xl p-5 mt-5">

                <h3 className="font-semibold text-lg mb-4">
                    {current + 1}. {questions[current].question}
                </h3>

                <div className="space-y-3">

                    {questions[current].options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(option)}
                            className={`w-full p-3 rounded-lg border transition active:scale-95
                            ${selected === option
                                    ? option === questions[current].answer
                                        ? "bg-green-200 border-green-500"
                                        : "bg-red-200 border-red-500"
                                    : "bg-gray-100 hover:bg-blue-50"
                                }`}
                        >
                            {option}
                        </button>
                    ))}

                </div>

                {/* NEXT BUTTON */}
                <button
                    onClick={handleNext}
                    className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg active:scale-95 transition"
                >
                    {current + 1 === questions.length ? "Finish Quiz" : "Next"}
                </button>

            </div>

        </div>
    )
}

export default Quiz