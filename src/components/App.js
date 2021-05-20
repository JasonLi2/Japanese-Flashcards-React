import React, { useState, useEffect } from "react";
import FlashcardList from "./FlashcardList";
import Header from "./Header";
import "../App.css"

//manually created flashcard sets for testing
const HIRAGANA_FLASHCARDS = [
    {
        id: 1,
        question: "ゆ",
        answer: "yu"
    },
    {
        id: 2,
        question: "せ",
        answer: "se"
    },
    {
        id: 3,
        question: "つ",
        answer: "tsu"
    },
    {
        id: 4,
        question: "わ",
        answer: "wa"
    },
    {
        id: 5,
        question: "み",
        answer: "mi"
    },
    {
        id: 6,
        question: "ち",
        answer: "chi"
    },
    {
        id: 7,
        question: "め",
        answer: "me"
    },
    {
        id: 8,
        question: "ほ",
        answer: "ho"
    },
    {
        id: 9,
        question: "ぬ",
        answer: "nu"
    },
    {
        id: 10,
        question: "て",
        answer: "te"
    },
]

const KATAKANA_FLASHCARDS = [
    {
        id: 1,
        question: "シ",
        answer: "shi"
    },
    {
        id: 2,
        question: "マ",
        answer: "ma"
    },
    {
        id: 3,
        question: "ミ",
        answer: "mi"
    },
    {
        id: 4,
        question: "ヌ",
        answer: "nu"
    },
    {
        id: 5,
        question: "ツ",
        answer: "tsu"
    },
    {
        id: 6,
        question: "セ",
        answer: "se"
    },
    {
        id: 7,
        question: "ホ",
        answer: "ho"
    },
    {
        id: 8,
        question: "ケ",
        answer: "ke"
    },
    {
        id: 9,
        question: "メ",
        answer: "me"
    },
    {
        id: 10,
        question: "サ",
        answer: "sa"
    },
]

const KANJI_FLASHCARDS = [
    {
        id: 1,
        question: "電話番号",
        answer: "でんわばんご",
        romanji: "denwa bangou",
        english: "phone number"
    },
    {
        id: 2,
        question: "先週",
        answer: "せんしゅう",
        romanji: "senshuu",
        english: "last week"
    },
    {
        id: 3,
        question: "毎日",
        answer: "まいにち",
        romanji: "mainichi",
        english: "every day"
    }
]


const CATEGORIES = ["hiragana", "katakana", "kanji"];

const App = () => {
    //setting flashcards state
    const [flashcards, setFlashcards] = useState(HIRAGANA_FLASHCARDS);
    const [category, setCategory] = useState(CATEGORIES[0]);

    useEffect(() => {
        if (category === "hiragana") {
            setFlashcards(HIRAGANA_FLASHCARDS);
        }
        else if (category === "katakana") {
            setFlashcards(KATAKANA_FLASHCARDS);
        }
        else {
            setFlashcards(KANJI_FLASHCARDS);
        }
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    const printCategory = () => {
        if (category === "hiragana") {
            return <h1>Hiragana Flashcards</h1>;
        }
        else if (category === "katakana") {
            return <h1>Katakana Flashcards</h1>;
        }
        else {
            return <h1>Kanji Flashcards</h1>;
        }
    }

    return (
        <>
            <Header onChange={handleChange} />;
            <div className="container">
                {printCategory()}
                <FlashcardList flashcards={flashcards} />
            </div>

        </>
    );
}

export default App;