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

                <Subtittle text={"Common Types of Figures of Speech"} />

                <p>
                    There are many figures of speech in the English language.
                    Each one serves a unique purpose by making communication
                    more expressive, vivid, and interesting. Below are some of
                    the most common figures of speech every learner should know.
                </p>

                <ol className="list-decimal pl-8 space-y-1">
    <li>Simile</li>
    <li>Metaphor</li>
    <li>Personification</li>
    <li>Hyperbole</li>
    <li>Alliteration</li>
    <li>Onomatopoeia</li>
    <li>Irony</li>
    <li>Oxymoron</li>
    <li>Pun</li>
    <li>Euphemism</li>
    <li>Litotes</li>
    <li>Apostrophe</li>
    <li>Assonance</li>
    <li>Consonance</li>
    <li>Antithesis</li>
    <li>Climax</li>
    <li>Anti-climax</li>
    <li>Synecdoche</li>
    <li>Metonymy</li>
    <li>Rhetorical Question</li>
</ol>

                <div>
                    <Subtittle text={"1. Simile"} />

                    <p>
                        A <span className="font-semibold">simile</span> is a figure
                        of speech that compares two different things by using the
                        words <span className="font-semibold">"like"</span> or
                        <span className="font-semibold"> "as"</span>. It helps readers
                        understand a person or object by comparing it with something
                        familiar.
                    </p>

                    <br />

                    <span className="font-semibold">Examples:</span>

                    <p>• He runs like a cheetah.</p>
                    <p>• She is as gentle as a dove.</p>
                    <p>• The baby slept like a log.</p>
                </div>

                <div>
                    <Subtittle text={"2. Metaphor"} />

                    <p>
                        A <span className="font-semibold">metaphor</span> is a direct
                        comparison between two different things without using
                        "like" or "as." It states that one thing is another in
                        order to emphasize a particular quality.
                    </p>

                    <br />

                    <span className="font-semibold">Examples:</span>

                    <p>• Time is money.</p>
                    <p>• The classroom was a zoo.</p>
                    <p>• She is the sunshine of my life.</p>
                </div>

                <div>
                    <Subtittle text={"3. Personification"} />

                    <p>
                        <span className="font-semibold">Personification</span>
                        is the act of giving human qualities, emotions, or actions
                        to animals, objects, or ideas that are not human.
                    </p>

                    <br />

                    <span className="font-semibold">Examples:</span>

                    <p>• The wind whispered through the trees.</p>
                    <p>• The sun smiled upon us.</p>
                    <p>• Opportunity knocked at the door.</p>
                </div>

                <div>
                    <Subtittle text={"4. Hyperbole"} />

                    <p>
                        <span className="font-semibold">Hyperbole</span> is the
                        deliberate use of exaggeration to create emphasis,
                        excitement, or humour. It is not intended to be taken
                        literally.
                    </p>

                    <br />

                    <span className="font-semibold">Examples:</span>

                    <p>• I am dying of hunger.</p>
                    <p>• I've told you a million times.</p>
                    <p>• This bag weighs a ton.</p>
                </div>

                <div>
                    <Subtittle text={"5. Alliteration"} />

                    <p>
                        <span className="font-semibold">Alliteration</span>
                        is the repetition of the same consonant sound at the
                        beginning of nearby words. It is commonly used in poetry,
                        songs, speeches, and advertising slogans.
                    </p>

                    <br />

                    <span className="font-semibold">Examples:</span>

                    <p>• Peter Piper picked a peck of pickled peppers.</p>
                    <p>• She sells seashells by the seashore.</p>
                    <p>• Busy bees buzzed beautifully.</p>
                </div>

                <div>
                    <Subtittle text={"6. Onomatopoeia"} />

                    <p>
                        <span className="font-semibold">Onomatopoeia</span>
                        refers to words whose sounds imitate the actual sounds
                        they describe.
                    </p>

                    <br />

                    <span className="font-semibold">Examples:</span>

                    <p>• Buzz</p>
                    <p>• Bang</p>
                    <p>• Splash</p>
                    <p>• Hiss</p>
                    <p>• Tick-tock</p>
                </div>

                <div>
                    <Subtittle text={"7. Irony"} />

                    <p>
                        <span className="font-semibold">Irony</span> occurs when
                        the opposite of what is expected actually happens, often
                        producing humour, surprise, or deeper meaning.
                    </p>

                    <br />

                    <span className="font-semibold">Examples:</span>

                    <p>• A fire station burns down.</p>
                    <p>• A traffic officer gets a speeding ticket.</p>
                    <p>• A lifeguard forgets how to swim.</p>
                </div>


                <div>
    <Subtittle text={"8. Oxymoron"} />

    <p>
        An <span className="font-semibold">oxymoron</span> combines two opposite
        words to create a meaningful expression.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• Deafening silence</p>
    <p>• Bitter sweet</p>
    <p>• Living dead</p>
</div>

<div>
    <Subtittle text={"9. Pun"} />

    <p>
        A <span className="font-semibold">pun</span> is a play on words that
        exploits words with different meanings or similar sounds for humour.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• I used to be a banker but I lost interest.</p>
    <p>• Time flies like an arrow.</p>
</div>

<div>
    <Subtittle text={"10. Euphemism"} />

    <p>
        A <span className="font-semibold">euphemism</span> is a mild or polite
        expression used instead of a harsh or unpleasant one.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• Passed away (instead of died)</p>
    <p>• Senior citizen (instead of old person)</p>
</div>

<div>
    <Subtittle text={"11. Litotes"} />

    <p>
        <span className="font-semibold">Litotes</span> expresses an idea by
        using a negative to emphasize the opposite.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• Not bad.</p>
    <p>• He is not a fool.</p>
</div>

<div>
    <Subtittle text={"12. Apostrophe"} />

    <p>
        <span className="font-semibold">Apostrophe</span> is when a speaker
        addresses someone absent, dead, or a non-living object.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• O Death, where is thy sting?</p>
    <p>• O Sun, shine brightly.</p>
</div>

<div>
    <Subtittle text={"13. Assonance"} />

    <p>
        <span className="font-semibold">Assonance</span> is the repetition of
        vowel sounds in nearby words.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• Try to light the fire.</p>
    <p>• The rain in Spain.</p>
</div>

<div>
    <Subtittle text={"14. Consonance"} />

    <p>
        <span className="font-semibold">Consonance</span> is the repetition of
        consonant sounds within or at the end of words.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• Pitter patter</p>
    <p>• Blank and think</p>
</div>

<div>
    <Subtittle text={"15. Antithesis"} />

    <p>
        <span className="font-semibold">Antithesis</span> places opposite ideas
        together for emphasis.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• Speech is silver, silence is golden.</p>
    <p>• Many are called, few are chosen.</p>
</div>

<div>
    <Subtittle text={"16. Climax"} />

    <p>
        <span className="font-semibold">Climax</span> arranges ideas in order
        of increasing importance.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• He whispered, spoke, shouted, and screamed.</p>
</div>

<div>
    <Subtittle text={"17. Anti-climax"} />

    <p>
        <span className="font-semibold">Anti-climax</span> arranges ideas from
        the most important to the least important, often creating humour.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• He lost his house, his car, and his pen.</p>
</div>

<div>
    <Subtittle text={"18. Synecdoche"} />

    <p>
        <span className="font-semibold">Synecdoche</span> uses a part to
        represent the whole or the whole to represent a part.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• All hands on deck.</p>
    <p>• Nigeria won the match.</p>
</div>

<div>
    <Subtittle text={"19. Metonymy"} />

    <p>
        <span className="font-semibold">Metonymy</span> substitutes the name of
        one thing with something closely associated with it.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• The White House announced...</p>
    <p>• The Crown approved the law.</p>
</div>

<div>
    <Subtittle text={"20. Rhetorical Question"} />

    <p>
        A <span className="font-semibold">rhetorical question</span> is asked
        for effect rather than to obtain an answer.
    </p>

    <br />

    <span className="font-semibold">Examples:</span>

    <p>• Who doesn't want success?</p>
    <p>• Isn't education important?</p>
</div>

                <div>
                    <Subtittle text={"Summary"} />

                    <p>
                        Figures of speech make language richer, more colourful,
                        and more engaging. Understanding the different types
                        helps learners communicate more effectively, appreciate
                        literature, and express ideas with greater creativity.
                        Mastering these figures also improves reading, writing,
                        speaking, and comprehension skills.
                    </p>
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