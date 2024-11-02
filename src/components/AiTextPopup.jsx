import React, { useState, useEffect } from "react";
import "../styles/AiTextPopup.css";

function AiTextPopup({ onClose, onGenerate, defaultWordCount, defaultRecipient }) {
  const [recipient, setRecipient] = useState(defaultRecipient || "");
  const [wordCount, setWordCount] = useState(defaultWordCount);

  useEffect(() => {
    if (defaultRecipient) {
      setRecipient(defaultRecipient);
    }
  }, [defaultRecipient]);

  const handleGenerate = () => {
    onGenerate(recipient, wordCount);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Generate Text with AI</h2>
        <label>
          Who is this for?
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder="Recipient's name or relation"
          />
        </label>
        <label>
          Word Count
          <input
            type="number"
            min="1"
            max="20"
            value={wordCount}
            onChange={(e) => setWordCount(Math.max(1, parseInt(e.target.value) || 1))}
          />
        </label>
        <button onClick={handleGenerate}>Generate</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default AiTextPopup;
