import React from "react";
import Flashcard from "./Flashcard";
import "./FlashcardList.css";

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="flashcard-list">
      {flashcards.map((flashcard) => (
        <Flashcard flashcard={flashcard} key={flashcard.id} showHtml />
      ))}
    </div>
  );
};

export default FlashcardList;
