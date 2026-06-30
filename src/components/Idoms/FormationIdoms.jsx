import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import EndButton from "../EndButton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FormationIdioms() {
    return (
        <>
            <Tittle text={"Formation of Idioms"} />

            <div className="p-5 space-y-5">

                <p>
                    Unlike nouns, verbs, adjectives, and other parts of speech,
                    <span className="font-semibold"> idioms are not formed through grammatical rules
                    such as adding prefixes or suffixes.</span> Instead, idioms are
                    fixed expressions that have developed naturally over many years
                    through everyday communication, culture, history, literature,
                    and shared experiences.
                </p>

                <p>
                    The meaning of an idiom cannot usually be understood by looking
                    at the meanings of its individual words. Instead, the entire
                    expression has a special meaning that must be learned as a whole.
                </p>

                <Subtittle text={"How Idioms are Formed"} />

                <div className="space-y-4">

                    <div>
                        <span className="font-bold">1. Historical Events</span>

                        <p>
                            Many idioms originated from important historical events
                            and have been passed down from one generation to another.
                        </p>

                        <p className="italic mt-2">
                            Example: "Cross the Rubicon" means to make an irreversible decision.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">2. Cultural Expressions</span>

                        <p>
                            Some idioms develop from the customs, traditions, beliefs,
                            and lifestyles of particular societies.
                        </p>

                        <p className="italic mt-2">
                            Example: "Break the ice" originally referred to ships
                            breaking ice to create a path for others.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">3. Metaphorical Language</span>

                        <p>
                            Many idioms are formed through metaphor by comparing one
                            idea with another to express a deeper meaning.
                        </p>

                        <p className="italic mt-2">
                            Example: "Spill the beans" means to reveal a secret,
                            not literally pouring beans onto the ground.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">4. Everyday Speech</span>

                        <p>
                            Some idioms became popular simply because people used
                            them repeatedly in daily conversations until they became
                            accepted expressions.
                        </p>

                        <p className="italic mt-2">
                            Example: "Piece of cake" means something is very easy.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">5. Literature and Stories</span>

                        <p>
                            Writers, poets, playwrights, and storytellers have
                            introduced many idioms that later became part of
                            everyday English.
                        </p>
                    </div>

                    <div>
                        <span className="font-bold">6. Occupations and Sports</span>

                        <p>
                            Some idioms originated from farming, hunting, sailing,
                            business, military activities, and sports.
                        </p>

                        <p className="italic mt-2">
                            Example: "Hit the nail on the head" came from carpentry.
                        </p>
                    </div>

                </div>

                <Subtittle text={"Characteristics of Idioms"} />

                <div className="pl-5">
                    <li>They are fixed expressions.</li>
                    <li>Their meanings are different from the literal meanings of the words.</li>
                    <li>They cannot usually be translated word-for-word.</li>
                    <li>They are widely used in everyday English.</li>
                    <li>They make communication more natural and expressive.</li>
                    <li>They are learned through practice and regular use.</li>
                </div>

                <Subtittle text={"Conclusion"} />

                <p>
                    Idioms are fixed expressions that develop naturally through
                    history, culture, literature, and everyday communication.
                    Unlike other parts of speech, they are not created through
                    grammatical formation rules. Their meanings must be learned
                    as complete expressions rather than by interpreting individual
                    words. A good understanding of idioms helps learners speak,
                    write, read, and understand English more fluently and naturally.
                </p>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/functionidoms"}>
                    <BackButton />
                </Link>

                <Link to={"/home"}>
                    <EndButton />
                </Link>

            </div>
        </>
    )
}

export default FormationIdioms