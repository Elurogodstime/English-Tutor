import { Link, useLocation, useNavigate } from "react-router-dom"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts"

function Review() {
    const navigate = useNavigate()
    const location = useLocation()

    // data passed from quiz
    const history =
    JSON.parse(localStorage.getItem("quizHistory")) || []

const latestAttempt =
    history.length > 0
        ? history[history.length - 1]
        : null

const questions = latestAttempt?.questions || []

const userAnswers = latestAttempt?.userAnswers || []

const score = latestAttempt?.score || 0


const totalAttempts = history.length

const highestScore =
    history.length > 0
        ? Math.max(...history.map(item => item.score))
        : 0

const lowestScore =
    history.length > 0
        ? Math.min(...history.map(item => item.score))
        : 0

const averageScore =
    history.length > 0
        ? (
            history.reduce(
                (sum, item) => sum + item.score,
                0
            ) / history.length
        ).toFixed(1)
        : 0

        const chartData = history.map((attempt, index) => ({
    attempt: index + 1,
    score: attempt.score
}))

        let performanceMessage = ""

if (history.length === 0) {

    performanceMessage = "No quiz attempt yet."

}
else if (history.length === 1) {

    performanceMessage = "This is your first attempt."

}
else {

    const previous = history[history.length - 2].score

    if (score > previous) {

        performanceMessage = "📈 Great! Your performance improved."

    } else if (score < previous) {

        performanceMessage = "📉 Your score dropped compared to your previous attempt."

    } else {

        performanceMessage = "➖ Your score remained unchanged."

    }

}

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





       {/* PROGRESS CHART */}
<div className="bg-white shadow rounded-xl p-5 mt-6">

    <h3 className="text-xl font-bold text-blue-700 mb-4">
        Performance Trend
    </h3>

    {history.length <= 1 ? (

        <p className="text-center text-gray-500">
            Complete at least two quiz attempts to view your progress chart.
        </p>

    ) : (

        <ResponsiveContainer
            width="100%"
            height={300}
        >

            <LineChart data={chartData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                    dataKey="attempt"
                    label={{
                        value: "Attempts",
                        position: "insideBottom",
                        offset: -5
                    }}
                />

                <YAxis
                    label={{
                        value: "Score",
                        angle: -90,
                        position: "insideLeft"
                    }}
                />

                <Tooltip />

                <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#2563eb"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    activeDot={{ r: 8 }}
                />

            </LineChart>

        </ResponsiveContainer>

    )}

</div>


            {/* SCORE CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4">

    <h2 className="text-xl font-bold text-center text-blue-700">

        Performance Summary

    </h2>

    <div className="grid grid-cols-2 gap-4 mt-6">

        <div className="bg-blue-50 rounded-lg p-4 text-center">

            <p className="text-gray-500">
                Attempts
            </p>

            <h3 className="text-2xl font-bold">

                {totalAttempts}

            </h3>

        </div>

        <div className="bg-green-50 rounded-lg p-4 text-center">

            <p className="text-gray-500">

                Latest Score

            </p>

            <h3 className="text-2xl font-bold text-green-600">

                {score}/{questions.length}

            </h3>

        </div>

        <div className="bg-yellow-50 rounded-lg p-4 text-center">

            <p className="text-gray-500">

                Highest

            </p>

            <h3 className="text-2xl font-bold">

                {highestScore}

            </h3>

        </div>

        <div className="bg-purple-50 rounded-lg p-4 text-center">

            <p className="text-gray-500">

                Average

            </p>

            <h3 className="text-2xl font-bold">

                {averageScore}

            </h3>

        </div>

    </div>

    <div className="mt-6 bg-blue-100 rounded-lg p-4">

        <p className="text-blue-900 font-semibold">

            {performanceMessage}

        </p>

    </div>

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