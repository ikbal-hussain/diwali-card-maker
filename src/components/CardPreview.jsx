import React, { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import { FaWhatsapp, FaFacebook, FaTwitter, FaDownload } from "react-icons/fa";
import "../styles/CardPreview.css";

function CardPreview({ template, titleText, messageText, stickers, images }) {
  const cardRef = useRef(null);
  const [shareableURL, setShareableURL] = useState("");
  const [draggingData, setDraggingData] = useState(null);

  // Initialize positions state to keep track of each draggable element
  const [positions, setPositions] = useState({
    title: { left: 50, top: 50 },
    message: { left: 50, top: 200 },
  });

  useEffect(() => {
    if (template) generateShareableURL();
  }, [template, titleText, messageText, stickers, images]);

  // Custom drag event handlers
  const handleMouseDown = (e, element) => {
    setDraggingData({
      element,
      startX: e.clientX,
      startY: e.clientY,
      initLeft: positions[element].left,
      initTop: positions[element].top,
    });
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (draggingData) {
      const deltaX = e.clientX - draggingData.startX;
      const deltaY = e.clientY - draggingData.startY;
      const newLeft = draggingData.initLeft + deltaX;
      const newTop = draggingData.initTop + deltaY;
      setPositions((prevPositions) => ({
        ...prevPositions,
        [draggingData.element]: { left: newLeft, top: newTop },
      }));
    }
  };

  const handleMouseUp = () => {
    setDraggingData(null);
  };

  const generateShareableURL = async () => {
    const canvas = await html2canvas(cardRef.current, { backgroundColor: null });
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
    window.open(`https://wa.me/?text=${message} ${shareableURL}`, "_blank");
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareableURL}`, "_blank");
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/share?url=${shareableURL}&text=Check out my Diwali greeting card!`, "_blank");
  };

  return (
    <div
      className="card-preview-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <h2>Card Preview</h2>
      <div className="card-preview" ref={cardRef} id="card-preview">
        {template && (
          <div
            className="card"
            style={{
              backgroundColor: template.color,
              backgroundImage: `url(${template.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: template.width,
              height: template.height,
              borderRadius: template.borderRadius,
              position: "relative",
            }}
          >
            <div
              className="title-text"
              style={{
                color: titleText.color,
                fontSize: `${titleText.fontSize}px`,
                fontFamily: titleText.font,
                fontWeight: titleText.bold ? "bold" : "normal",
                position: "absolute",
                top: positions.title.top,
                left: positions.title.left,
                cursor: "move",
              }}
              onMouseDown={(e) => handleMouseDown(e, "title")}
            >
              {titleText.content}
            </div>

            <div
              className="message-text"
              style={{
                color: messageText.color,
                fontSize: `${messageText.fontSize}px`,
                fontFamily: messageText.font,
                fontWeight: messageText.bold ? "bold" : "normal",
                position: "absolute",
                top: positions.message.top,
                left: positions.message.left,
                cursor: "move",
              }}
              onMouseDown={(e) => handleMouseDown(e, "message")}
            >
              {messageText.content}
            </div>
          </div>
        )}
      </div>

      <button className="download-button" onClick={downloadCard}>
        <FaDownload size={20} /> Download Card
      </button>

      {shareableURL && (
        <div className="share-buttons">
          <button onClick={shareOnWhatsApp}><FaWhatsapp size={24} /> Share on WhatsApp</button>
          <button onClick={shareOnFacebook}><FaFacebook size={24} /> Share on Facebook</button>
          <button onClick={shareOnTwitter}><FaTwitter size={24} /> Share on Twitter</button>
        </div>
      )}
    </div>
  );
}

export default CardPreview;
