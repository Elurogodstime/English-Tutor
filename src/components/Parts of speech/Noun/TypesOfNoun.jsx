import { Link } from "react-router-dom"
import Tittle from "../../Tittle"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"

function TypeOfNoun() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text="Types Of Noun" />

            {/* LIST OF TYPES */}
            <div className="bg-white shadow rounded-xl p-5 mt-4">

                <h2 className="font-bold text-blue-700 mb-3">Noun Categories</h2>

                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                    <li>Proper Noun</li>
                    <li>Common Noun</li>
                    <li>Concrete Noun</li>
                    <li>Abstract Noun</li>
                    <li>Collective Noun</li>
                    <li>Countable Noun</li>
                    <li>Uncountable Noun</li>
                    <li>Compound Noun</li>
                </ol>
            </div>

            {/* SECTION CARDS */}
            <div className="space-y-5 mt-6">

                {/* PROPER NOUN */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="font-bold text-blue-700">1. Proper Noun</h3>
                    <p className="text-gray-700 mt-2">
                        A proper noun refers to the specific name of a person, place, organization or entity.
                        It always starts with a capital letter.
                    </p>

                    <p className="mt-2 font-semibold">Examples:</p>
                    <p>Jayden, Nigeria, Delta State University, Lagos</p>

                    <p className="mt-2 font-semibold">Usage:</p>
                    <p>Jayden is a student. Nigeria is in West Africa.</p>
                </div>

                {/* COMMON NOUN */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="font-bold text-blue-700">2. Common Noun</h3>
                    <p className="text-gray-700 mt-2">
                        A general name for people, places or things.
                    </p>

                    <p className="mt-2 font-semibold">Examples:</p>
                    <p>student, teacher, city, school</p>

                    <p className="mt-2 font-semibold">Usage:</p>
                    <p>The student attended the lecture.</p>
                </div>

                {/* CONCRETE NOUN */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="font-bold text-blue-700">3. Concrete Noun</h3>
                    <p className="text-gray-700 mt-2">
                        Something that can be seen, touched, heard, smelled or tasted.
                    </p>

                    <p className="mt-2 font-semibold">Examples:</p>
                    <p>chair, apple, dog, bell</p>

                    <p className="mt-2 font-semibold">Usage:</p>
                    <p>The dog barked loudly.</p>
                </div>

                {/* ABSTRACT NOUN */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="font-bold text-blue-700">4. Abstract Noun</h3>
                    <p className="text-gray-700 mt-2">
                        Ideas, emotions or qualities that cannot be seen or touched.
                    </p>

                    <p className="mt-2 font-semibold">Examples:</p>
                    <p>love, honesty, courage, wisdom</p>

                    <p className="mt-2 font-semibold">Usage:</p>
                    <p>Honesty is important in life.</p>
                </div>

                {/* COLLECTIVE NOUN */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="font-bold text-blue-700">5. Collective Noun</h3>
                    <p className="text-gray-700 mt-2">
                        A group of people or things considered as one unit.
                    </p>

                    <p className="mt-2 font-semibold">Examples:</p>
                    <p>team, family, committee, audience</p>

                    <p className="mt-2 font-semibold">Usage:</p>
                    <p>The team won the match.</p>
                </div>

                {/* COUNTABLE */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="font-bold text-blue-700">6. Countable Noun</h3>
                    <p className="text-gray-700 mt-2">
                        Things that can be counted individually.
                    </p>

                    <p className="mt-2 font-semibold">Examples:</p>
                    <p>book/books, student/students, car/cars</p>

                    <p className="mt-2 font-semibold">Usage:</p>
                    <p>She bought three books.</p>
                </div>

                {/* UNCOUNTABLE */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="font-bold text-blue-700">7. Uncountable Noun</h3>
                    <p className="text-gray-700 mt-2">
                        Things that cannot be counted individually.
                    </p>

                    <p className="mt-2 font-semibold">Examples:</p>
                    <p>water, rice, information, advice</p>

                    <p className="mt-2 font-semibold">Usage:</p>
                    <p>Please give me some water.</p>
                </div>

                {/* COMPOUND */}
                <div className="bg-white shadow rounded-xl p-5">
                    <h3 className="font-bold text-blue-700">8. Compound Noun</h3>
                    <p className="text-gray-700 mt-2">
                        Two or more words combined to form a noun.
                    </p>

                    <p className="mt-2 font-semibold">Examples:</p>
                    <p>classroom, football, bus stop, toothpaste</p>

                    <p className="mt-2 font-semibold">Usage:</p>
                    <p>The bus stop was crowded.</p>
                </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

                <Link to={"/noun"}>
                    <BackButton />
                </Link>

                <Link to={"/functionnoun"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default TypeOfNoun