import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import NextButton from "../Nextbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FunctionFigures() {
    return (
        <>
            <Tittle text={"Functions of Figures of Speech"} />

            <div className="p-5 space-y-5">

                <p>
                    Figures of speech perform several important functions in both
                    spoken and written English. They make communication more
                    effective by adding beauty, emphasis, imagination, and emotion
                    to language. Writers, poets, public speakers, journalists,
                    advertisers, and storytellers use figures of speech to capture
                    attention and communicate ideas more clearly.
                </p>

                <Subtittle text={"Functions of Figures of Speech"} />

                <div className="pl-5 space-y-3">

                    <div>
                        <span className="font-semibold">1. They make writing and speech more interesting.</span>
                        <p>
                            Figures of speech prevent language from becoming dull or
                            monotonous by making expressions lively and enjoyable.
                        </p>

                        <p className="mt-2">
                            <span className="font-semibold">Example:</span><br />
                            * She shines like the morning sun.
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">2. They create vivid mental images.</span>
                        <p>
                            They help readers and listeners imagine what is being
                            described, making ideas easier to understand and remember.
                        </p>

                        <p className="mt-2">
                            <span className="font-semibold">Example:</span><br />
                            * The stars danced across the sky.
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">3. They express ideas more creatively.</span>
                        <p>
                            Instead of using ordinary words, figures of speech allow
                            speakers and writers to communicate in imaginative and
                            artistic ways.
                        </p>

                        <p className="mt-2">
                            <span className="font-semibold">Example:</span><br />
                            * Knowledge is a key that opens many doors.
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">4. They emphasize important ideas.</span>
                        <p>
                            Certain figures of speech, such as hyperbole and metaphor,
                            draw attention to important points and make messages more
                            memorable.
                        </p>

                        <p className="mt-2">
                            <span className="font-semibold">Example:</span><br />
                            * I've told you a thousand times.
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">5. They make language more emotional and expressive.</span>
                        <p>
                            Figures of speech help convey emotions such as happiness,
                            sadness, excitement, fear, love, and anger more effectively
                            than literal language.
                        </p>

                        <p className="mt-2">
                            <span className="font-semibold">Example:</span><br />
                            * My heart is overflowing with joy.
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">6. They make communication more persuasive.</span>
                        <p>
                            Advertisements, motivational speeches, and public speaking
                            often use figures of speech to convince and influence their
                            audience.
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">7. They enrich literature.</span>
                        <p>
                            Poems, novels, dramas, songs, and short stories rely heavily
                            on figures of speech to create beauty, rhythm, symbolism,
                            and deeper meanings.
                        </p>
                    </div>

                </div>

                <Subtittle text={"Importance of Learning Figures of Speech"} />

                <div className="pl-5">
                    <li>Improves speaking and writing skills.</li>
                    <li>Develops creativity in communication.</li>
                    <li>Makes reading comprehension easier.</li>
                    <li>Helps learners appreciate poems and literary works.</li>
                    <li>Improves vocabulary and language fluency.</li>
                    <li>Makes presentations and speeches more engaging.</li>
                </div>

                <div>
                    <Subtittle text={"Summary"} />

                    <p>
                        Figures of speech are powerful language tools that make
                        communication clearer, richer, and more engaging. They help
                        speakers and writers describe ideas creatively, express emotions,
                        create vivid mental images, and emphasize important messages.
                        A good understanding of figures of speech improves communication,
                        strengthens writing skills, and enables learners to appreciate
                        literature and everyday expressions more effectively.
                    </p>
                </div>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/typesoffigures"}>
                    <BackButton />
                </Link>

                <Link to={"/formationfigures"}>
                    <NextButton />
                </Link>

            </div>
        </>
    )
}

export default FunctionFigures