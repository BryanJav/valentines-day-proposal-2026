import React, { useState } from "react";
import "./App.css";
import Success from "./components/Success";
import Asking from "./components/Asking";
import myMelody from "./teasing-cute.gif";
import cryingMyMelody from "./crying-my-melody-crying.gif";

/**
 * Main App component managing the Valentine's Day proposal.
 *
 * @returns {JSX.Element} JSX element representing the App component.
 */
const App = () => {
  // State to track acceptance and rejection
  const [accepted, setAccepted] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [noButtonText, setNoButtonText] = useState("No");
  const [lastRejectedIndex, setLastRejectedIndex] = useState(-1);

  // Handler for accepting the proposal
  const handleAccept = () => {
    setAccepted(true);
    
    // Change the draft id for the specific draft to be sent
    // const draftId = "r1057493151881980166";
    // const baseUrlLocal = "http://localhost:8080/drafts/send";
    const baseUrlDeployed = "https://valentines-day-api-2026.onrender.com/drafts/send"

    fetch(baseUrlDeployed, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  // Handler for rejecting the proposal
  const handleReject = () => {
    setRejected(true);
    // Array of rejection messages
    const rejectionTexts = [
      "Sure ka ba?",
      "Pag-isipan mo ulit!",
      "Sige na pleaseee!",
      "Pagbigyan mo na ako! :(",
    ];
    // Randomly select a rejection message
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * rejectionTexts.length);
    } while (randomIndex === lastRejectedIndex);

    setLastRejectedIndex(randomIndex);
    setNoButtonText(rejectionTexts[randomIndex]);
  };

  return (
    <div className="App">
      <div className="App-body">
        {/* Asking to be my Valentine */}
        {!accepted && (
          <Asking
            gif={rejected ? cryingMyMelody : myMelody}
            altText={rejected ? "Rejected Bear" : "I love you Bear"}
            handleAccept={handleAccept}
            handleReject={handleReject}
            noButtonText={noButtonText}
          />
        )}

        {/* She said YES! */}
        {accepted && <Success />}
      </div>
    </div>
  );
};

export default App;
