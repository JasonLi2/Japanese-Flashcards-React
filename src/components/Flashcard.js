import React, { useState } from "react";

const Flashcard = ({ flashcard }) =>  {
    //set state for flip variable
    //card not flipped at first
    const [flip, setFlip] = useState(false);

    //helper function for flipping card
    const cardIsFlipped = () => {
        if (flip === false) {
            return (
                <div className="front">
                    <h1>{flashcard.question}</h1>
                </div>
            );
        }
        else {
            return (
                <div className="back">
                    <h2>{flashcard.answer}</h2>
                    <h3>{flashcard.romanji}</h3>
                    <h3>{flashcard.english}</h3>
                </div>
            );
        }
    }

    return (
        <div 
            className="card"
            onClick={() => setFlip(!flip)}
        >
            {cardIsFlipped()}
        </div>
    );
}

export default Flashcard;

//{flip ? flashcard.answer : flashcard.question}