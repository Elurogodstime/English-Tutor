function Footer() {
    return (
        <footer className="mt-10">

            {/* MAIN FOOTER */}
            <div className="bg-linear-to-r from-blue-700 to-blue-600 text-white px-6 py-6 shadow-lg">

                {/* Top Section */}
                <div className="text-center space-y-2">

                    <h2 className="text-lg font-bold tracking-wide">
                        English Tutor App
                    </h2>

                    <p className="text-blue-100 text-sm">
                        Learn English easily • Improve daily • Practice with quizzes
                    </p>
                </div>

                {/* Divider */}
                <div className="my-4 border-t border-blue-400/40"></div>

                {/* Quick Links */}
                <div className="flex justify-center gap-6 text-sm text-blue-100">

                    <span className="hover:text-white cursor-pointer transition">
                        Home
                    </span>

                    <span className="hover:text-white cursor-pointer transition">
                        Lessons
                    </span>

                    <span className="hover:text-white cursor-pointer transition">
                        Quiz
                    </span>

                    <span className="hover:text-white cursor-pointer transition">
                        Help
                    </span>

                </div>

                {/* Bottom */}
                <p className="text-center text-xs text-blue-200 mt-4">
                    © 2026 Designed by Tutors
                </p>
            </div>

        </footer>
    )
}

export default Footer