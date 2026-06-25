import { FaStop } from "react-icons/fa"

function EndButton() {
    return (
        <div className="flex justify-center my-6">

            <button className="flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg shadow-md active:scale-95 transition">
                <FaStop />
                End
            </button>

        </div>
    )
}

export default EndButton