import { Link } from "react-router-dom"
import BackButton from "../Backbutton"
import NextButton from "../Nextbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function TypesOfFigures() {
    return (
        <>
            <Tittle text={"Types of Figures of Speech"} />

            <div className="p-5 space-y-5">

                <ol className="list-decimal pl-5">
                    <li>Simile</li>
                    <li>Metaphor</li>
                    <li>Personification</li>
                    <li>Hyperbole</li>
                    <li>Alliteration</li>
                    <li>Onomatopoeia</li>
                    <li>Irony</li>
                </ol>

                <div>
                    <Subtittle text={"1. Simile"} />
                    <p>Comparison using "like" or "as"</p>
                    <p>Example: He runs like a cheetah.</p>
                </div>

                <div>
                    <Subtittle text={"2. Metaphor"} />
                    <p>Direct comparison without "like" or "as"</p>
                    <p>Example: Time is money.</p>
                </div>

                <div>
                    <Subtittle text={"3. Personification"} />
                    <p>Giving human qualities to non-living things</p>
                    <p>Example: The wind whispered.</p>
                </div>

                <div>
                    <Subtittle text={"4. Hyperbole"} />
                    <p>Exaggeration for effect</p>
                    <p>Example: I am dying of hunger.</p>
                </div>

                <div>
                    <Subtittle text={"5. Alliteration"} />
                    <p>Repetition of initial consonant sounds</p>
                    <p>Example: Peter Piper picked peppers.</p>
                </div>

                <div>
                    <Subtittle text={"6. Onomatopoeia"} />
                    <p>Words that sound like their meaning</p>
                    <p>Example: Buzz, bang, hiss</p>
                </div>

                <div>
                    <Subtittle text={"7. Irony"} />
                    <p>When the opposite of what is expected happens</p>
                    <p>Example: A fire station burns down.</p>
                </div>

            </div>

            <div className="flex justify-center gap-5 mt-6">

                <Link to={"/figures"}>
                    <BackButton />
                </Link>

                <Link to={"/functionfigures"}>
                    <NextButton />
                </Link>

            </div>
        </>
    )
}

export default TypesOfFigures