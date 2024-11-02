import React from "react";
import "../styles/TextEditor.css";

function TextEditor({ titleText, setTitleText, messageText, setMessageText }) {
  const updateTitle = (key, value) => setTitleText({ ...titleText, [key]: value });
  const updateMessage = (key, value) => setMessageText({ ...messageText, [key]: value });

  return (
    <div className="editor-wrapper">
      <h2>Customize Text</h2>

      <h3>Title Text</h3>
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
