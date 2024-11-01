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
  const [template, setTemplate] = useState({ id: 3, color: 'lavender' });
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
    <div className="app-container ">
      <Navbar />
      <main className="App">
 <div className="left">
        <h1>Customize your Card</h1>
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
      </main>
     
    </div>
  );
}

export default App;
