
import React from 'react';
import '../styles/ImageUploader.css';

function ImageUploader({ setImages }) {
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...imageUrls]);
  };

  return (
    <div className="image-uploader">
      <h2>Upload Images</h2>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
    </div>
  );
}

export default ImageUploader;
