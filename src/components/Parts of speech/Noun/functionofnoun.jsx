import { Link } from "react-router-dom"
import BackButton from "../../Backbutton"
import NextButton from "../../Nextbutton"
import Tittle from "../../Tittle"

function FunctionNoun() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            {/* TITLE */}
            <Tittle text={"Functions of Nouns"} />

            {/* CONTENT CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4 space-y-6 text-gray-700 leading-relaxed">

                <p className="font-semibold text-blue-700">
                    Nouns perform several important functions in sentence construction:
                </p>

                {/* SUBJECT */}
                <div>
                    <h3 className="font-bold text-blue-600">1. Subject of a Sentence</h3>
                    <p>A noun can act as the subject that performs the action.</p>
                    <p className="mt-2 font-semibold">Example:</p>
                    <p>The teacher explained the lesson.</p>
                </div>

                {/* OBJECT */}
                <div>
                    <h3 className="font-bold text-blue-600">2. Object of a Verb</h3>
                    <p>A noun can receive the action of the verb.</p>
                    <p className="mt-2 font-semibold">Example:</p>
                    <p>The student completed the assignment.</p>
                </div>

                {/* PREPOSITION */}
                <div>
                    <h3 className="font-bold text-blue-600">3. Object of a Preposition</h3>
                    <p>A noun can follow a preposition.</p>
                    <p className="mt-2 font-semibold">Example:</p>
                    <p>The book is on the table.</p>
                </div>

                {/* COMPLEMENT */}
                <div>
                    <h3 className="font-bold text-blue-600">4. Subject Complement</h3>
                    <p>A noun can rename or identify the subject.</p>
                    <p className="mt-2 font-semibold">Example:</p>
                    <p>Daniel is a student.</p>
                </div>

                {/* POSSESSION */}
                <div>
                    <h3 className="font-bold text-blue-600">5. Possession</h3>
                    <p>A noun can show ownership.</p>
                    <p className="mt-2 font-semibold">Example:</p>
                    <p>The student’s notebook is on the desk.</p>
                </div>

                {/* IMPORTANCE */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-700">Importance of Nouns</h3>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Identify people, places, things, and ideas</li>
                        <li>Provide clarity and meaning in sentences</li>
                        <li>Serve as the foundation of sentence structure</li>
                        <li>Enable expression of thoughts and experiences</li>
                        <li>Improve spoken and written communication</li>
                    </ul>
                </div>

                {/* SUMMARY */}
                <div className="bg-gray-100 p-4 rounded-lg border">
                    <h3 className="font-bold text-gray-800">Summary</h3>
                    <p className="mt-2">
                        A noun is a naming word used to identify people, places, animals, things, ideas, qualities, feelings, and events.
                        It performs functions such as subject, object, complement, and possession in a sentence.
                        Understanding nouns is essential for mastering English grammar and communication.
                    </p>
                </div>

            </div>

            {/* NAV BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

                <Link to={"/typeofnoun"}>
                    <BackButton />
                </Link>

                <Link to={"/formation"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default FunctionNoun