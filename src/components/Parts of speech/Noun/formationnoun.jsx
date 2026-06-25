import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import EndButton from "../../EndButton"
import Tittle from "../../Tittle"

function Formation() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* TITLE */}
            <Tittle text={"Formation Of Nouns"} />

            <div className="space-y-8 mt-4">

                {/* SECTION 1 */}
                <div className="bg-white shadow rounded-xl p-5">

                    <h2 className="font-bold text-blue-700 mb-3">
                        Formation of Nouns from Verbs
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 text-sm">
                            <thead>
                                <tr className="bg-blue-50">
                                    <th className="border px-3 py-2 text-left">Verb</th>
                                    <th className="border px-3 py-2 text-left">Noun</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">Educate</td>
                                    <td className="border px-3 py-2">Education</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Investigate</td>
                                    <td className="border px-3 py-2">Investigation</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Develop</td>
                                    <td className="border px-3 py-2">Development</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-gray-700">
                        <p className="font-semibold">Examples:</p>
                        <p>• The investigation revealed several irregularities</p>
                        <p>• Economic development improves living standards</p>
                    </div>
                </div>

                {/* SECTION 2 */}
                <div className="bg-white shadow rounded-xl p-5">

                    <h2 className="font-bold text-blue-700 mb-3">
                        Formation of Nouns from Adjectives
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 text-sm">
                            <thead>
                                <tr className="bg-blue-50">
                                    <th className="border px-3 py-2 text-left">Adjective</th>
                                    <th className="border px-3 py-2 text-left">Noun</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">Honest</td>
                                    <td className="border px-3 py-2">Honesty</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Wise</td>
                                    <td className="border px-3 py-2">Wisdom</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Kind</td>
                                    <td className="border px-3 py-2">Kindness</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-gray-700">
                        <p className="font-semibold">Examples:</p>
                        <p>• Honesty is highly valued in society</p>
                        <p>• Wisdom comes with experience</p>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className="bg-white shadow rounded-xl p-5">

                    <h2 className="font-bold text-blue-700 mb-3">
                        Formation of Nouns from Other Nouns
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full border border-gray-200 text-sm">
                            <thead>
                                <tr className="bg-blue-50">
                                    <th className="border px-3 py-2 text-left">Noun</th>
                                    <th className="border px-3 py-2 text-left">Derived Noun</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">Leader</td>
                                    <td className="border px-3 py-2">Leadership</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Child</td>
                                    <td className="border px-3 py-2">Childhood</td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">Citizen</td>
                                    <td className="border px-3 py-2">Citizenship</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 text-gray-700">
                        <p className="font-semibold">Examples:</p>
                        <p>• Their friendship has lasted for many years</p>
                        <p>• Leadership requires responsibility</p>
                    </div>
                </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/functionnoun"}>
                    <BackButton />
                </Link>

                <Link to={"/"}>
                    <EndButton />
                </Link>

            </div>

        </div>
    )
}

export default Formation