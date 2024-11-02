import React, { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";
import { FaWhatsapp, FaFacebook, FaTwitter, FaMagic } from "react-icons/fa"; // Import icons
import "../styles/CardPreview.css";

function CardPreview({ template, titleText, messageText, stickers, images }) {
  const cardRef = useRef(null);
  const [shareableURL, setShareableURL] = useState("");

  // Generate shareable URL when template changes
  useEffect(() => {
    if (template) {
      generateShareableURL();
    }
  }, [template, titleText, messageText, stickers, images]);

  const generateShareableURL = async () => {
    const cardElement = cardRef.current;
    const canvas = await html2canvas(cardElement, {
      backgroundColor: null,
      useCORS: true,
    });

    // Convert canvas to Blob and generate URL
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setShareableURL(url);
    });
  };

  const downloadCard = () => {
    const link = document.createElement("a");
    link.href = shareableURL;
    link.download = "diwali_card.png";
    link.click();
  };

  const shareOnWhatsApp = () => {
    const message = encodeURIComponent("Check out my Diwali greeting card!");
    const whatsappURL = `https://wa.me/?text=${message} ${shareableURL}`;
    window.open(whatsappURL, "_blank");
  };

  const shareOnFacebook = () => {
    const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${shareableURL}`;
    window.open(facebookURL, "_blank");
  };

  const shareOnTwitter = () => {
    const twitterURL = `https://twitter.com/share?url=${shareableURL}&text=Check out my Diwali greeting card!`;
    window.open(twitterURL, "_blank");
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
                  fontSize: `${titleText.fontSize}px` || `34px`,
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
                  fontSize: `${messageText.fontSize}px`,
                  fontFamily: messageText.font,
                  fontWeight: messageText.bold ? "bold" : "normal",
                  position: "absolute",
                  top: "60%",
                  left: "10%",
                  zIndex: 1,
                }}
              >
                {messageText.content}
              </div>
            </Draggable>

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

      {shareableURL && (
        <div className="share-buttons">
          <button onClick={shareOnWhatsApp}>
            <FaWhatsapp  size={24}/> Share on WhatsApp
          </button>
          <button onClick={shareOnFacebook}>
            <FaFacebook  size={24}/> Share on Facebook
          </button>
          <button onClick={shareOnTwitter}>
            <FaTwitter   size={24} /> Share on Twitter
          </button>
        </div>
      )}
    </div>
  );
}

export default CardPreview;
