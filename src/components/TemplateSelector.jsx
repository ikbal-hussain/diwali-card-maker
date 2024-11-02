import React from "react";
import "../styles/TemplateSelector.css";

function TemplateSelector({ setTemplate }) {
  const templates = [
    {
      id: 1,
      color: "yellow",
      width: "300px",
      height: "400px",
      borderRadius: "10px",
      backgroundImage: "/diwali-template-bg-img-1.jpg",
      textElements: [
        {
          content: "Happy Diwali to you!",
          color: "#FFFFFF",
          fontSize: "36px",
          font: "Georgia",
          bold: true,
        },
        {
          content: "May this Diwali bring you joy!",
          color: "#FFFFFF",
          fontSize: "24px",
          font: "Courier New",
          bold: true,
        },
      ],
      decorativeElements: [
        {
          elementType: "diyaIcon",
          element: "🪔",
          glow: true,
        },
      ],
    },
    {
      id: 2,
      color: "purple",
      width: "300px",
      height: "400px",
      borderRadius: "15px",
      backgroundImage: "/diwali-template-bg-img-2.avif",
      textElements: [
        {
          content: "Wishing You a Bright Diwali!",
          color: "#000000",
          fontSize: "36px",
          font: "Times New Roman",
          bold: true,
        },
        {
          content: "May prosperity light your way.",
          color: "#FF0000",
          fontSize: "22px",
          font: "Arial",
          bold: false,
        },
      ],
      decorativeElements: [
        {
          elementType: "diyaIcon",
          element: "🪔",
          glow: true,
        },
        {
          elementType: "sparkleIcon",
          element: "✨",
          glow: false,
        },
      ],
    },
    {
      id: 3,
      color: "orange",
      width: "300px",
      height: "400px",
      borderRadius: "20px",
      backgroundImage: "/diwali-template-bg-img-3.avif",
      textElements: [
        {
          content: "Diwali Greetings!",
          color: "#FFFFFF",
          fontSize: "38px",
          font: "Verdana",
          bold: true,
        },
        {
          content: "Peace, love, and light to you and yours.",
          color: "#FFFFFF",
          fontSize: "20px",
          font: "Tahoma",
          bold: false,
        },
      ],
      decorativeElements: [
        {
          elementType: "firecrackerIcon",
          element: "🎇",
          glow: true,
        },
        {
          elementType: "diyaIcon",
          element: "🪔",
          glow: false,
        },
      ],
    },
    {
      id: 4,
      color: "red",
      width: "300px",
      height: "400px",
      borderRadius: "25px",
      backgroundImage: "/diwali-template-bg-img-4.jpg",
      textElements: [
        {
          content: "Joyful Diwali!",
          color: "#FFFFFF",
          fontSize: "42px",
          font: "Brush Script MT",
          bold: true,
        },
        {
          content: "Shine bright this festive season!",
          color: "#FFFFFF",
          fontSize: "24px",
          font: "Comic Sans MS",
          bold: false,
        },
      ],
      decorativeElements: [
        {
          elementType: "diyaIcon",
          element: "🪔",
          glow: true,
        },
        {
          elementType: "starIcon",
          element: "🌟",
          glow: false,
        },
      ],
    },
  ];
  

  return (
    <div className="template-wrapper">
      <h2>Select a Template</h2>
      <div className="template-buttons">
        {templates.map((template) => (
          <button
            key={template.id}
            className="template-button"
            style={{ backgroundColor: template.color }}
            onClick={() => setTemplate(template)}
          >
            {template.backgroundImage && <img
              src={template.backgroundImage}
              // alt="Background preview"
              className="template-preview-image"
            />}
            <p
              style={{
                color: template.textElements[0].color,
                fontFamily: template.textElements[0].font,
                fontWeight: template.textElements[0].bold ? "bold" : "normal",
              }}
            >
              {template.textElements[0].content}
            </p>
            <p
              style={{
                color: template.textElements[1].color,
                fontFamily: template.textElements[1].font,
                fontWeight: template.textElements[1].bold ? "bold" : "normal",
              }}
            >
              {template.textElements[1].content}
            </p>
            Template {template.id}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;
