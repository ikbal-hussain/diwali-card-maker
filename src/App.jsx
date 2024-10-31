import React, { useState } from "react";
import TemplateSelector from "./components/TemplateSelector";
import TextEditor from "./components/TextEditor";
import StickerGallery from "./components/StickerGallery";
import AnimationEffects from "./components/AnimationEffects";
import CardPreview from "./components/CardPreview";
import ImageUploader from "./components/ImageUploader";
import "./App.css";

function App() {
  const [template, setTemplate] = useState(null);
  const [text, setText] = useState({
    content: "",
    color: "#000",
    fontSize: "20px",
    font: "Arial",
    bold: false,
  });
  const [stickers, setStickers] = useState([]);
  const [images, setImages] = useState([]);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);

  return (
    <div className="App">
      <div className="left">
        <h1>Diwali Card Maker</h1>
        <TemplateSelector setTemplate={setTemplate} />
        <TextEditor text={text} setText={setText} />
        <StickerGallery stickers={stickers} setStickers={setStickers} />
        {/* <ImageUploader setImages={setImages} /> */}
        {/* <AnimationEffects setIsAnimated={setIsAnimated} setIsSoundOn={setIsSoundOn} /> */}
      </div>
      <div className="right">
        <CardPreview
          template={template}
          text={text}
          stickers={stickers}
          images={images}
          isAnimated={isAnimated}
          isSoundOn={isSoundOn}
        />
      </div>
    </div>
  );
}

export default App;
