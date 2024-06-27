// src/components/Flashcard.js

import React, { useState } from "react";
import "./Flashcard.css";

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <>
      <div
        className={`flashcard ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        <div
          className="front"
          dangerouslySetInnerHTML={{
            __html: flashcard.question,
          }}
        />
        <div
          className="back"
          dangerouslySetInnerHTML={{
            __html: flashcard.answer,
          }}
        />
      </div>
    </>
  );
};

export default Flashcard;
