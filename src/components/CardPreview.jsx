// src/components/CardPreview.js
import Draggable from 'react-draggable';
import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import '../styles/CardPreview.css';

function CardPreview({ template, text, stickers, images }) {
  const cardRef = useRef();

  const downloadCard = async () => {
    const canvas = await html2canvas(cardRef.current);
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'Diwali_Card.png';
    link.click();
  };

  return (
    <div className="preview-wrapper">
      <h2>Card Preview</h2>
      <p>You can drag your components wherever you want</p>
      <div className="card" ref={cardRef} style={{ backgroundColor: template?.color }}>
        <Draggable>
          <div
            className="card-text"
            style={{
              color: text.color,
              fontSize: `${text.fontSize}px`,
              fontFamily: text.font,
              fontWeight: text.bold ? 'bold' : 'normal',
            }}
          >
            {text.content}
          </div>
        </Draggable>
        <div className="card-stickers">
          {stickers.map((sticker, index) => (
            <Draggable key={index}>
              <span className="sticker">{sticker}</span>
            </Draggable>
          ))}
        </div>
        <div className="card-images">
          {images.map((img, index) => (
            <Draggable key={index}>
              <img src={img} alt="Uploaded" className="card-image" />
            </Draggable>
          ))}
        </div>
      </div>
      <button className="download-button" onClick={downloadCard}>Download Card</button>
    </div>
  );
}

export default CardPreview;
