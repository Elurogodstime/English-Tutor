import { FaArrowLeft, FaArrowRight, FaStop } from "react-icons/fa"

function NavControls({ onNext, onBack, onEnd }) {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-2xl border-t border-blue-100">

            <div className="flex justify-between items-center px-6 py-3">

                {/* Back */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full active:scale-95 transition shadow"
                >
                    <FaArrowLeft />
                    Back
                </button>

                {/* End */}
                <button
                    onClick={onEnd}
                    className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full active:scale-95 transition shadow-lg"
                >
                    <FaStop />
                    End
                </button>

                {/* Next */}
                <button
                    onClick={onNext}
                    className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full active:scale-95 transition shadow-lg"
                >
                    Next
                    <FaArrowRight />
                </button>

            </div>
        </div>
    )
}

export default NavControls