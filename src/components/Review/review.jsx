import { Link, useLocation, useNavigate } from "react-router-dom"

function Review() {
    const navigate = useNavigate()
    const location = useLocation()

    // data passed from quiz
    const { questions = [], userAnswers = [], score = 0 } = location.state || {}

    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* HEADER */}
            <div className="bg-white shadow rounded-xl p-4 flex justify-between items-center">
                <h2 className="font-bold text-blue-700">Quiz Review</h2>

                <button
                    onClick={() => navigate("/quiz")}
                    className="text-sm bg-blue-100 px-3 py-1 rounded-lg active:scale-95"
                >
                    Retry Quiz
                </button>
            </div>

            {/* SCORE CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4 text-center">
                <h3 className="text-lg font-semibold">Your Score</h3>
                <p className="text-3xl font-bold text-green-600 mt-2">
                    {score} / {questions.length}
                </p>
            </div>

            {/* REVIEW LIST */}
            <div className="mt-6 space-y-4">

                {questions.map((q, index) => {
                    const userAnswer = userAnswers[index]

                    const isCorrect = userAnswer === q.answer

                    return (
                        <div
                            key={index}
                            className="bg-white shadow rounded-xl p-4"
                        >

                            {/* QUESTION */}
                            <p className="font-semibold">
                                {index + 1}. {q.question}
                            </p>

                            {/* USER ANSWER */}
                            <p className={`mt-2 text-sm ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                                Your Answer: {userAnswer || "Not answered"}
                            </p>

                            {/* CORRECT ANSWER */}
                            {!isCorrect && (
                                <p className="text-sm text-green-600 mt-1">
                                    Correct Answer: {q.answer}
                                </p>
                            )}

                        </div>
                    )
                })}

            </div>

            {/* BACK HOME */}
            <div className="flex justify-center mt-8">
                <Link to="/">
                    <button className="bg-gray-800 text-white px-5 py-2 rounded-lg active:scale-95">
                        Back to Home
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Review