import { FaArrowLeft } from "react-icons/fa"

function BackButton() {
    return (
        <div className="flex justify-center my-6">

            <button className="flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-lg shadow active:scale-95 transition">
                <FaArrowLeft />
                Back
            </button>

        </div>
    )
}

export default BackButton