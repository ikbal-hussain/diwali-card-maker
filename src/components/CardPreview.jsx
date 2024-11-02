import React, { useRef } from "react";
import Draggable from "react-draggable";
import "../styles/CardPreview.css";
import html2canvas from "html2canvas";

function CardPreview({ template, titleText, messageText, stickers, images }) {
  const cardRef = useRef(null);

  const downloadCard = async () => {
    const cardElement = cardRef.current;
    const canvas = await html2canvas(cardElement, {
      backgroundColor: null,
      useCORS: true,
    });
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "diwali_card.png";
    link.click();
  };

  return (
    <div className="card-preview-container">
      <h2>Card Preview</h2>
      <p>You can drag and drop the components</p>
      <div className="card-preview" id="card-preview">
        {template && (
          <div
            ref={cardRef}
            className="card"
            style={{
              backgroundColor: template.color,
              backgroundImage: `url(${template.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: template.width,
              height: template.height,
              position: "relative",
              borderRadius: template.borderRadius,
            }}
          >
            <Draggable>
              <div
                className="title-text"
                style={{
                  color: titleText.color,
                  fontSize:`${titleText.fontSize}px` || `34px`,
                  fontFamily: titleText.font,
                  fontWeight: titleText.bold ? "bold" : "normal",
                  position: "absolute",
                  top: "10%",
                  left: "10%",
                  textAlign: "center",
                }}
              >
                {titleText.content}
              </div>
            </Draggable>

            <Draggable>
              <div
                className="message-text"
                style={{
                  color: messageText.color,
                  fontSize:`${messageText.fontSize}px`,
                  fontFamily: messageText.font,
                  fontWeight: messageText.bold ? "bold" : "normal",
                  position: "absolute",
                  top: "60%", // Adjust to fit your design
                  left: "10%",
                  zIndex: 1, // Ensure it is above other elements
                }}
              >
                {messageText.content}
              </div>
            </Draggable>

            {/* <div className="card-stickers">
              {stickers.map((sticker, index) => (
                <Draggable key={index}>
                  <div>
                    <span className="sticker">{sticker.element}</span>
                  </div>
                </Draggable>
              ))}
            </div> */}

            {images.map((image, index) => (
              <Draggable key={index}>
                <img src={image} alt="Uploaded" className="card-image" />
              </Draggable>
            ))}
          </div>
        )}
      </div>
      <button className="download-button" onClick={downloadCard}>
        Download Card
      </button>
    </div>
  );
}

export default CardPreview;
