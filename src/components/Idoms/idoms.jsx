import { Link } from "react-router-dom"
import NextButton from "../Nextbutton"
import BackButton from "../Backbutton"
import Tittle from "../Tittle"

function Idioms() {
    return (
        <>
            <Tittle text={"Meaning of Idioms"} />

            <div className="p-5 space-y-5">

                <p>
                    An <span className="font-bold">idiom</span> is a group of words or an expression
                    whose meaning is different from the literal meaning of the
                    individual words that make it up. In other words, the actual
                    meaning of an idiom cannot usually be understood simply by
                    interpreting each word separately.
                </p>

                <p>
                    Idioms are commonly used in everyday conversations, books,
                    speeches, newspapers, songs, and other forms of communication.
                    They make language more colorful, natural, expressive, and
                    interesting. Native speakers often use idioms to communicate
                    ideas in a more engaging and memorable way.
                </p>

                <p>
                    Because idioms have special meanings, learners of English must
                    understand them as complete expressions rather than translating
                    each word individually.
                </p>

                <div>
                    <span className="font-bold">Example:</span>

                    <p className="mt-2">
                        <span className="font-semibold">"Break the ice"</span>
                    </p>

                    <p>
                        Literal meaning: To break a piece of ice.
                    </p>

                    <p>
                        Idiomatic meaning: To start a conversation or make people
                        feel comfortable in a new or awkward social situation.
                    </p>
                </div>

                <div>
                    <span className="font-bold">More Examples:</span>

                    <div className="mt-2 space-y-2">

                        <div>
                            <span className="font-semibold">• Once in a blue moon</span>
                            <p>Meaning: Something that happens very rarely.</p>
                        </div>

                        <div>
                            <span className="font-semibold">• Hit the nail on the head</span>
                            <p>Meaning: To say or do exactly the right thing.</p>
                        </div>

                        <div>
                            <span className="font-semibold">• Piece of cake</span>
                            <p>Meaning: Something that is very easy to do.</p>
                        </div>

                    </div>
                </div>

                <div>
                    <span className="font-bold">Importance of Idioms</span>

                    <div className="pl-5 mt-2">
                        <li>They make communication more natural.</li>
                        <li>They improve speaking and writing skills.</li>
                        <li>They enrich vocabulary.</li>
                        <li>They make conversations more interesting.</li>
                        <li>They help learners understand native English speakers better.</li>
                        <li>They improve reading comprehension and listening skills.</li>
                    </div>
                </div>

                <div>
                    <span className="font-bold">Summary</span>

                    <p>
                        Idioms are fixed expressions whose meanings are different
                        from the literal meanings of the individual words. They are
                        widely used in everyday English to express ideas in a more
                        creative, vivid, and natural manner. Learning idioms helps
                        learners communicate more fluently and understand spoken
                        and written English more effectively.
                    </p>
                </div>

            </div>

            <div className="flex justify-center mt-6">
                <Link to={"/home"}>
                    <BackButton />
                </Link>
            </div>

            <div className="flex justify-center mt-6">
                <Link to={"/typeofidoms"}>
                    <NextButton />
                </Link>
            </div>
        </>
    )
}

export default Idioms