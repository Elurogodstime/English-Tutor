import { Link } from "react-router-dom";
import {FaGraduationCap, FaBookOpen} from "react-icons/fa"

function Welcome() {

const student =
    JSON.parse(localStorage.getItem("student")) || null
  


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Logo or App Name */}
          <p className="text-blue-500 font-light font-serif">Hello {student.name}! </p>
          <h1 className="text-5xl md:text-6xl font-bold text-blue-700 mb-6">
            Welcome to English Tutor
            
          </h1>

        

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-8">
            Learn at your own pace, take quizzes, track your progress,
            and improve your knowledge every day.
          </p>

        

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                📚 Interactive Lessons
              </h3>
              <p className="text-gray-600">
                Learn through engaging lessons designed to help you succeed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                📝 Quizzes
              </h3>
              <p className="text-gray-600">
                Test your understanding and strengthen your knowledge.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                📈 Track Progress
              </h3>
              <p className="text-gray-600">
                Monitor your learning journey and celebrate milestones.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/home"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
            >
              Start Learning
            </Link>

            <Link
              to="/types"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition"
            >
              Explore Lessons
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;