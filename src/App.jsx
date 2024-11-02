import React, { useState } from "react";
import TemplateSelector from "./components/TemplateSelector";
import TextEditor from "./components/TextEditor";
import StickerGallery from "./components/StickerGallery";
import AnimationEffects from "./components/AnimationEffects";
import CardPreview from "./components/CardPreview";
import ImageUploader from "./components/ImageUploader";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [template, setTemplate] = useState(null);
  const [titleText, setTitleText] = useState({
    content: "",
    color: "#000",
    fontSize: "30px",
    font: "Arial",
    bold: true,
  });
  const [messageText, setMessageText] = useState({
    content: "",
    color: "#000",
    fontSize: "20px",
    font: "Arial",
    bold: true,
  });
  const [stickers, setStickers] = useState([]);
  const [images, setImages] = useState([]);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  const handleTemplateSelect = (selectedTemplate) => {
    setTemplate(selectedTemplate);
    setTitleText({
      content: selectedTemplate.textElements[0].content,
      color: selectedTemplate.textElements[0].color,
      fontSize:  selectedTemplate.textElements[0].fontSize,
      font: selectedTemplate.textElements[0].font,
      bold: selectedTemplate.textElements[0].bold,
    });
    setMessageText({
      content: selectedTemplate.textElements[1].content,
      color: selectedTemplate.textElements[1].color,
      fontSize: selectedTemplate.textElements[1].fontSize,
      font: selectedTemplate.textElements[1].font,
      bold: selectedTemplate.textElements[1].bold,
    });
    setStickers(selectedTemplate.decorativeElements); 
    // Additional code to handle images can be added here
  };
  

  return (
    <div className="app-container">
      <Navbar />
      <main className="App">
        <div className="left">
          <h1>Customize your Card</h1>
          <TemplateSelector setTemplate={handleTemplateSelect} />
          <TextEditor titleText={titleText} setTitleText={setTitleText} messageText={messageText} setMessageText={setMessageText} />
          {/* <StickerGallery stickers={stickers} setStickers={setStickers} /> */}
          {/* <ImageUploader setImages={setImages} /> */}
          {/* <AnimationEffects setIsAnimated={setIsAnimated} setIsSoundOn={setIsSoundOn} /> */}
        </div>
        <div className="right">
          <CardPreview
            template={template}
            titleText={titleText}
            messageText={messageText}
            stickers={stickers}
            images={images}
            isAnimated={isAnimated}
            isSoundOn={isSoundOn}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
