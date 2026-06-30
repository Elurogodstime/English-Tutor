import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {

    const navigate = useNavigate()

    const [name, setName] = useState("")

    useEffect(() => {
        const student = localStorage.getItem("student")

        if (student) {
            navigate("/")
        }
    }, [])

    const handleRegister = () => {

        if (!name.trim()) {
            alert("Please enter your name.")
            return
        }

        localStorage.setItem(
            "student",
            JSON.stringify({
                name: name.trim()
            })
        )

        navigate("/welcome")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">

            <div className="bg-white shadow-xl rounded-xl p-6 w-full max-w-sm">

                <h1 className="text-2xl font-bold text-center text-blue-700">
                    Welcome to English Tutor
                </h1>

                <p className="text-gray-600 text-center mt-2">
                    Enter your name to continue.
                </p>

                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border rounded-lg p-3 mt-6 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={handleRegister}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg mt-5 active:scale-95"
                >
                    Continue
                </button>

            </div>

        </div>
    )
}

export default Register