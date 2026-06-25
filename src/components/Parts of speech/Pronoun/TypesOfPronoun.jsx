import { Link } from "react-router-dom"
import NextButton from "../../Nextbutton"
import BackButton from "../../Backbutton"
import Tittle from "../../Tittle"
import Subtittle from "../../Subtittle"

function TypePronoun() {
    return (
        <div className="min-h-screen bg-gray-50 p-4">

            <Tittle text={"Types of Pronouns"} />

            {/* LIST CARD */}
            <div className="bg-white shadow rounded-xl p-5 mt-4">

                <h2 className="font-bold text-blue-700 mb-3">Pronoun Categories</h2>

                <ol className="list-decimal pl-5 space-y-1 text-gray-700">
                    <li>Personal Pronouns</li>
                    <li>Possessive Pronouns</li>
                    <li>Reflexive Pronouns</li>
                    <li>Demonstrative Pronouns</li>
                    <li>Interrogative Pronouns</li>
                    <li>Relative Pronouns</li>
                    <li>Indefinite Pronouns</li>
                    <li>Reciprocal Pronouns</li>
                    <li>Intensive (Emphatic) Pronouns</li>
                    <li>Distributive Pronouns</li>
                </ol>
            </div>

            {/* CONTENT SECTION */}
            <div className="space-y-6 mt-6 text-gray-700 leading-relaxed">

                {/* 1 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"1. Personal Pronouns"} />
                    <p>
                        Personal pronouns refer to specific persons or things and can act as subject or object.
                    </p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>I, you, he, she, it, we, they / me, him, her, us, them</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>She is reading a novel.</p>
                    <p>The teacher praised him.</p>
                </div>

                {/* 2 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"2. Possessive Pronouns"} />

                    <p>Show ownership or possession.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>mine, yours, his, hers, ours, theirs</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>This bag is mine.</p>
                    <p>The victory was theirs.</p>
                </div>

                {/* 3 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"3. Reflexive Pronouns"} />

                    <p>Subject and object refer to the same person.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>She taught herself how to play piano.</p>
                    <p>I prepared the report myself.</p>
                </div>

                {/* 4 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"4. Demonstrative Pronouns"} />
                    <p>Point to specific things.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>this, that, these, those</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>This is my assignment.</p>
                    <p>Those belong to final-year students.</p>
                </div>

                {/* 5 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"5. Interrogative Pronouns"} />
                    <p>Used to ask questions.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>who, whom, whose, which, what</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>Who won the election?</p>
                    <p>What is your favourite subject?</p>
                </div>

                {/* 6 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"6. Relative Pronouns"} />
                    <p>Connect clauses to nouns.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>who, whom, whose, which, that</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>The student who came first received a scholarship.</p>
                </div>

                {/* 7 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"7. Indefinite Pronouns"} />
                    <p>Refer to general or unknown people/things.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>someone, anyone, everyone, nobody, many, few</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>Everyone attended the seminar.</p>
                </div>

                {/* 8 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"8. Reciprocal Pronouns"} />
                    <p>Show mutual action.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>each other, one another</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>The friends supported each other.</p>
                </div>

                {/* 9 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"9. Intensive Pronouns"} />
                    <p>Used for emphasis.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>myself, himself, herself, themselves</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>The Vice-Chancellor himself attended.</p>
                </div>

                {/* 10 */}
                <div className="bg-white shadow rounded-xl p-5">
                    <Subtittle text={"10. Distributive Pronouns"} />
                    <p>Refer to members individually.</p>

                    <p className="font-semibold mt-2">Examples:</p>
                    <p>each, either, neither</p>

                    <p className="font-semibold mt-2">Usage:</p>
                    <p>Each was given an ID card.</p>
                </div>

            </div>

            {/* NAVIGATION */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">

                <Link to={"/pronoun"}>
                    <BackButton />
                </Link>

                <Link to={"/functionofpronoun"}>
                    <NextButton />
                </Link>

            </div>

        </div>
    )
}

export default TypePronoun