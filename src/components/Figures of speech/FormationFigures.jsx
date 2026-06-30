import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import EndButton from "../EndButton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FormationFigures() {
    return (
        <>
            <Tittle text={"Formation of Figures of Speech"} />

            <div className="p-5 space-y-5">

                <p>
                    Unlike nouns, verbs, adjectives, or other parts of speech,
                    <span className="font-semibold"> figures of speech are not formed by adding prefixes,
                    suffixes, or changing word forms.</span> Instead, they are created
                    through the imaginative and creative use of language.
                </p>

                <p>
                    A figure of speech is formed whenever words are arranged,
                    compared, exaggerated, or expressed in a way that goes beyond
                    their ordinary or literal meaning. This creative use of language
                    makes communication more interesting, expressive, and memorable.
                </p>

                <Subtittle text={"Figures of Speech are Formed Through:"} />

                <div className="space-y-4">

                    <div>
                        <span className="font-semibold">1. Comparison</span>

                        <p>
                            Some figures of speech are formed by comparing one
                            thing with another to highlight similarities or qualities.
                        </p>

                        <p className="mt-2">
                            <span className="font-semibold">Examples:</span><br />
                            • Simile<br />
                            • Metaphor
                        </p>

                        <p className="italic mt-2">
                            Example: "She is as gentle as a lamb."
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">2. Sound Repetition</span>

                        <p>
                            Some figures of speech are formed by repeating sounds
                            or using words that imitate natural sounds.
                        </p>

                        <p className="mt-2">
                            <span className="font-semibold">Examples:</span><br />
                            • Alliteration<br />
                            • Onomatopoeia
                        </p>

                        <p className="italic mt-2">
                            Example: "Busy bees buzzed beautifully."
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">3. Exaggeration</span>

                        <p>
                            Hyperbole is formed by deliberately overstating an idea
                            to create emphasis or dramatic effect.
                        </p>

                        <p className="italic mt-2">
                            Example: "I have waited forever."
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">4. Human Attribution</span>

                        <p>
                            Personification is formed by giving human qualities,
                            emotions, or actions to animals, objects, or abstract ideas.
                        </p>

                        <p className="italic mt-2">
                            Example: "The moon smiled at us."
                        </p>
                    </div>

                    <div>
                        <span className="font-semibold">5. Opposite or Unexpected Meaning</span>

                        <p>
                            Irony is formed when the actual meaning differs from
                            what is expected or what is literally said.
                        </p>

                        <p className="italic mt-2">
                            Example: A fire station catches fire.
                        </p>
                    </div>

                </div>

                <Subtittle text={"Important Note"} />

                <p>
                    Figures of speech do not follow strict grammatical formation
                    rules. Instead, they depend on imagination, context, and the
                    writer's or speaker's creativity. This is why the same figure
                    of speech can appear in many different forms while still
                    conveying the intended meaning.
                </p>

                <Subtittle text={"Conclusion"} />

                <p>
                    Figures of speech are creative language devices used to enrich
                    communication. Rather than being formed through grammatical
                    processes, they are created by comparing ideas, repeating
                    sounds, exaggerating situations, assigning human qualities,
                    or expressing meanings indirectly. Learning how figures of
                    speech are formed helps students understand literature,
                    communicate more effectively, and appreciate the beauty of
                    the English language.
                </p>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/functionfigures"}>
                    <BackButton />
                </Link>

                <Link to={"/home"}>
                    <EndButton />
                </Link>

            </div>
        </>
    )
}

export default FormationFigures