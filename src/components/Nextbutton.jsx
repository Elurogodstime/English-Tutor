import { FaArrowRight } from "react-icons/fa"

function NextButton() {
    return (
        <div className="flex justify-center my-6">

            <button className="flex items-center gap-2 bg-linear-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg shadow-md active:scale-95 transition">
                Next
                <FaArrowRight />
            </button>

        </div>
    )
}

export default NextButton