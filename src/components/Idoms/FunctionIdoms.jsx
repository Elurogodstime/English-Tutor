import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import NextButton from "../Nextbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FunctionIdioms() {
    return (
        <>
            <Tittle text={"Functions of Idioms"} />

            <div className="p-5 space-y-5">

                <p>
                    Idioms perform several important functions in both spoken and
                    written English. They help speakers and writers communicate
                    ideas more naturally, vividly, and effectively. Mastering
                    idioms enables learners to understand native English speakers
                    and express themselves more fluently.
                </p>

                <Subtittle text={"Functions of Idioms"} />

                <div className="space-y-4">

                    <div>
                        <span className="font-bold">1. They make communication more natural.</span>
                        <p>
                            Native English speakers frequently use idioms in everyday
                            conversations, making speech sound smooth and authentic.
                        </p>

                        <p className="italic mt-2">
                            Example: "Let's call it a day."
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">2. They express ideas creatively.</span>
                        <p>
                            Idioms provide colorful and imaginative ways of expressing
                            thoughts instead of using plain, direct language.
                        </p>

                        <p className="italic mt-2">
                            Example: "He hit the nail on the head."
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">3. They improve fluency in English.</span>
                        <p>
                            Learners who understand and correctly use idioms tend to
                            speak and write English more confidently and fluently.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">4. They make conversations more interesting.</span>
                        <p>
                            Idioms add variety and make communication lively,
                            engaging, and memorable.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">5. They enrich vocabulary.</span>
                        <p>
                            Learning idioms exposes learners to many useful
                            expressions beyond ordinary vocabulary.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">6. They help learners understand native speakers.</span>
                        <p>
                            Since idioms are common in movies, books, songs,
                            newspapers, and daily conversations, understanding
                            them improves listening and reading comprehension.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">7. They reflect culture.</span>
                        <p>
                            Many idioms originate from history, traditions, sports,
                            occupations, and everyday experiences, giving learners
                            insight into English-speaking cultures.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">8. They make writing more expressive.</span>
                        <p>
                            Writers often use idioms to capture readers' attention
                            and make their work more enjoyable.
                        </p>
                    </div>

                </div>

                <Subtittle text={"Importance of Learning Idioms"} />

                <div className="pl-5">
                    <li>Improves speaking confidence.</li>
                    <li>Enhances writing skills.</li>
                    <li>Develops better listening comprehension.</li>
                    <li>Improves reading comprehension.</li>
                    <li>Expands English vocabulary.</li>
                    <li>Helps learners communicate like native speakers.</li>
                    <li>Makes communication more effective and enjoyable.</li>
                </div>

                <div>
                    <Subtittle text={"Summary"} />

                    <p>
                        Idioms are an important part of the English language because
                        they make communication more natural, expressive, and
                        interesting. They enrich vocabulary, improve fluency, and
                        help learners understand spoken and written English more
                        effectively. A good knowledge of idioms enables students to
                        communicate with greater confidence and accuracy.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/typeofidoms"}>
                    <BackButton />
                </Link>

                <Link to={"/formationidoms"}>
                    <NextButton />
                </Link>

            </div>
        </>
    )
}

export default FunctionIdioms