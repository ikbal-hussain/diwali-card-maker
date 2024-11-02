import React from 'react';
import '../styles/StickerGallery.css';

function StickerGallery({ stickers, setStickers }) {
  const stickersList = ['🪔', '🎆', '✨', '💥'];
  // const stickersList = [
  //   {
  //     type: "diyaIcon",
  //     element: '🪔',
  //     glow: true,
  //   },
  //   {
  //     type: "sparkleIcon",
  //     element: "✨",
  //     glow: false,
  //   },
  //   {
  //     type: "firecrackerIcon",
  //     element: "🎇",
  //     glow: true,
  //   },
  //   {
  //     type: "sparkleIcon",
  //     element: "✨",
  //     glow: false,
  //   },
  //   {
  //     type: "fireIcon",
  //     element: "🔥",
  //     glow: false,
  //   },
  // ]
  const addSticker = (sticker) => setStickers([...stickers, sticker]);

  return (
    <div className="gallery-wrapper">
      <h2>Choose Stickers</h2>
      <div className="sticker-buttons">
        {stickersList.map((sticker, index) => (
          <button key={index} className="sticker-button" onClick={() => addSticker(sticker)}>
            {sticker}
          </button>
        ))}
      </div>
    </div>
  );
}

export default StickerGallery;
