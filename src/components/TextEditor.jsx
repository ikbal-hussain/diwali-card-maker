import React, { useState } from "react";
import "../styles/TextEditor.css";
import AiTextPopup from "./AiTextPopup";
import axios from "axios";

function TextEditor({ titleText, setTitleText, messageText, setMessageText }) {
  const [showTitlePopup, setShowTitlePopup] = useState(false);
  const [showMessagePopup, setShowMessagePopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [titleRecipient, setTitleRecipient] = useState("");

  const updateTitle = (key, value) => setTitleText({ ...titleText, [key]: value });
  const updateMessage = (key, value) => setMessageText({ ...messageText, [key]: value });

  const generateAiText = async (recipient, wordCount, type) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    setLoading(true);

    let prompt;
    if (type === "title") {
      prompt = `Write a Diwali wish title for ${recipient} in ${wordCount} words in plain text.`;
    } else if (type === "message") {
      prompt = `Write a Diwali message for the title: ${titleText.content}, for ${recipient} in ${wordCount} words in plain text. Dont add the ${titleText.content} in the message. `;
    }
    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        { contents: [{ parts: [{ text: prompt }] }] }
      );
      const generatedText = response.data.candidates[0].content.parts[0].text;

      if (type === "title") {
        setTitleText((prev) => ({ ...prev, content: generatedText }));
        setTitleRecipient(recipient);
      } else if (type === "message") {
        setMessageText((prev) => ({ ...prev, content: generatedText }));
      }
    } catch (error) {
      console.error("Error generating text:", error);
    }
    setLoading(false);
  };

  return (
    <div className="editor-wrapper">
      <h2>Customize Text</h2>

      {showTitlePopup && (
        <AiTextPopup
          onClose={() => setShowTitlePopup(false)}
          onGenerate={(recipient, wordCount) => {
            generateAiText(recipient, wordCount, "title");
            setShowTitlePopup(false);
          }}
          defaultWordCount={5}
        />
      )}

      {showMessagePopup && (
        <AiTextPopup
          onClose={() => setShowMessagePopup(false)}
          onGenerate={(recipient, wordCount) => {
            generateAiText(recipient, wordCount, "message");
            setShowMessagePopup(false);
          }}
          defaultWordCount={15}
          defaultRecipient={titleRecipient}
        />
      )}

      {loading && <p>Generating text, please wait...</p>}

      <h3>Title Text</h3>
      <button onClick={() => setShowTitlePopup(true)} className="ai-suggest-button">
        <span className="ai-icon">✨</span> Generate Title with AI
      </button>
      <textarea
        className="text-editor"
        onChange={(e) => updateTitle("content", e.target.value)}
        value={titleText.content}
        placeholder="Enter your title"
      />
      <div className="controls">
      <input
          type="color"
          className="color-picker"
          onChange={(e) => updateTitle("color", e.target.value)}
          title="Pick a title color"
          value={titleText.color}
        />
        <select
          className="font-selector"
          value={titleText.font}
          onChange={(e) => updateTitle("font", e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <input
          type="number"
          min="10"
          max="100"
          value={parseInt(titleText.fontSize)}
          onChange={(e) => updateTitle("fontSize", e.target.value)}
          className="font-size-input"
          title="Font size"
        />
        <button
          onClick={() => updateTitle("bold", !titleText.bold)}
          className={`bold-button ${titleText.bold ? "active" : ""}`}
          title="Toggle Bold"
        >
          {titleText.bold ? "Unbold" : "Bold"}
        </button>
      </div>

      <h3>Message Text</h3>
      <button onClick={() => setShowMessagePopup(true)} className="ai-suggest-button">
        <span className="ai-icon">✨</span> Generate Message with AI
      </button>
      <textarea
        className="text-editor"
        onChange={(e) => updateMessage("content", e.target.value)}
        value={messageText.content}
        placeholder="Enter your message"
      />
      <div className="controls">
      <input
          type="color"
          className="color-picker"
          onChange={(e) => updateMessage("color", e.target.value)}
          title="Pick a message color"
          value={messageText.color}
        />
        <select
          className="font-selector"
          value={messageText.font}
          onChange={(e) => updateMessage("font", e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <input
          type="number"
          min="10"
          max="100"
          value={parseInt(messageText.fontSize)}
          onChange={(e) => updateMessage("fontSize", e.target.value)}
          className="font-size-input"
          title="Font size"
        />
        <button
          onClick={() => updateMessage("bold", !messageText.bold)}
          className={`bold-button ${messageText.bold ? "active" : ""}`}
          title="Toggle Bold"
        >
          {messageText.bold ? "Unbold" : "Bold"}
        </button>
      </div>
    </div>
  );
}

export default TextEditor;
