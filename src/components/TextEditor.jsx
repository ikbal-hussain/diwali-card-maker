// src/components/TextEditor.js
import React from "react";
import "../styles/TextEditor.css";

function TextEditor({ text, setText }) {
  const handleTextChange = (e) => setText({ ...text, content: e.target.value });
  const handleColorChange = (e) => setText({ ...text, color: e.target.value });
  const handleFontChange = (e) => setText({ ...text, font: e.target.value });
  const handleFontSizeChange = (e) =>
    setText({ ...text, fontSize: e.target.value });
  const toggleBold = () => setText({ ...text, bold: !text.bold });

  return (
    <div className="editor-wrapper">
      <h2>Customize Text</h2>
      <textarea
        className="text-editor"
        onChange={handleTextChange}
        value={text.content}
        placeholder="Enter your message"
      />
      <div className="controls">
        <input
          type="color"
          className="color-picker"
          onChange={handleColorChange}
          title="Pick a text color"
        />

        <select className="font-selector" onChange={handleFontChange}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>

        <input
          type="number"
          min="10"
          max="100"
          value={parseInt(text.fontSize)}
          onChange={handleFontSizeChange}
          className="font-size-input"
          title="Font size"
        />

        <button
          onClick={toggleBold}
          className={`bold-button ${text.bold ? "active" : ""}`}
          title="Toggle Bold"
        >
          {text.bold ? "Unbold" : "Bold"}
        </button>
      </div>
    </div>
  );
}

export default TextEditor;
