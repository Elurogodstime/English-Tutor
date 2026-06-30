import { Link } from "react-router-dom"
import NextButton from "../Nextbutton"
import BackButton from "../Backbutton"
import Tittle from "../Tittle"
import Subtittle from "../Subtittle"

function FiguresSpeech() {
    return (
        <>
            <Tittle text={"Meaning of Figures of Speech"} />

            <div className="p-5 space-y-5">

                <p>
                    A <span className="font-bold">figure of speech</span> is a word, phrase,
                    or expression that is used in a non-literal or imaginative way to
                    communicate ideas more effectively. Rather than expressing meaning in
                    the ordinary sense, figures of speech add beauty, emphasis, emotion,
                    and creativity to both spoken and written language.
                </p>

                <p>
                    Figures of speech are widely used in literature, speeches,
                    songs, poetry, advertisements, storytelling, and everyday
                    conversations. They help readers and listeners visualize ideas,
                    create stronger emotions, and make communication more memorable.
                </p>

                <p>
                    Instead of stating facts plainly, figures of speech compare,
                    exaggerate, substitute, or describe ideas in unique ways that
                    capture attention and improve understanding.
                </p>

                <div>
                    <Subtittle text={"Example:"} />

                    <p>
                        <span className="font-semibold">He is as brave as a lion.</span>
                    </p>

                    <p>
                        This statement does not mean the person is actually a lion.
                        It simply compares his courage to that of a lion, suggesting
                        that he is extremely brave.
                    </p>
                </div>

                <div>
                    <Subtittle text={"More Examples:"} />

                    <p>• The classroom was a zoo.</p>
                    <p className="italic">
                        (The classroom was very noisy and disorderly.)
                    </p>

                    <br />

                    <p>• Time flies.</p>
                    <p className="italic">
                        (Time seems to pass very quickly.)
                    </p>

                    <br />

                    <p>• The wind whispered through the trees.</p>
                    <p className="italic">
                        (The wind is described as if it could whisper like a human being.)
                    </p>
                </div>

                <div>
                    <Subtittle text={"Importance of Figures of Speech"} />

                    <p>
                        Figures of speech are important because they:
                    </p>

                    <div className="pl-5 mt-2">
                        <li>Make communication more interesting and engaging.</li>
                        <li>Help readers and listeners visualize ideas more clearly.</li>
                        <li>Express emotions more effectively.</li>
                        <li>Improve creativity in speaking and writing.</li>
                        <li>Make stories, poems, and speeches more memorable.</li>
                        <li>Capture the attention of the audience.</li>
                    </div>
                </div>

                <div>
                    <Subtittle text={"Summary"} />

                    <p>
                        A figure of speech is a creative use of language in which words
                        are not always used in their ordinary or literal meaning.
                        Instead, they are used to create emphasis, beauty, comparison,
                        emotion, or vivid description. Understanding figures of speech
                        helps learners appreciate literature, communicate effectively,
                        and write with greater creativity and confidence.
                    </p>
                </div>

            </div>

            <div className="flex justify-center mt-6">
                <Link to={"/home"}>
                    <BackButton />
                </Link>
            </div>

            <div className="flex justify-center mt-6">
                <Link to={"/typesoffigures"}>
                    <NextButton />
                </Link>
            </div>
        </>
    )
}

export default FiguresSpeech