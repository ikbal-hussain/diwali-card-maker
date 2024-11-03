// src/components/TemplatesPage.js
import React from 'react';
import '../styles/TemplatesPage.css'; // Import CSS for styling if needed
import { useNavigate } from 'react-router-dom';

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
    {
      id: 5,
      color: "blue",
      width: "300px",
      height: "400px",
      borderRadius: "10px",
      backgroundImage: "/diwali-template-bg-img-5.jpg",
      textElements: [
        {
          content: "Light Up Your Diwali!",
          color: "#FFFFFF",
          fontSize: "34px",
          font: "Impact",
          bold: true,
        },
        {
          content: "Celebrate with joy and laughter!",
          color: "#FFFFFF",
          fontSize: "22px",
          font: "Arial Black",
          bold: true,
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
      id: 6,
      color: "green",
      width: "300px",
      height: "400px",
      borderRadius: "15px",
      backgroundImage: "/diwali-template-bg-img-6.jpg",
      textElements: [
        {
          content: "Wishing You a Bright Diwali!",
          color: "#FFFFFF",
          fontSize: "36px",
          font: "Palatino",
          bold: true,
        },
        {
          content: "Hope it brings light to your life.",
          color: "#FFFFFF",
          fontSize: "24px",
          font: "Trebuchet MS",
          bold: true,
        },
      ],
      decorativeElements: [
        {
          elementType: "diyaIcon",
          element: "🪔",
          glow: true,
        },
        {
          elementType: "firecrackerIcon",
          element: "🎇",
          glow: false,
        },
      ],
    },
    {
      id: 7,
      color: "teal",
      width: "300px",
      height: "400px",
      borderRadius: "20px",
      backgroundImage: "/diwali-template-bg-img-7.jpg",
      textElements: [
        {
          content: "Diwali Wishes!",
          color: "#FFFFFF",
          fontSize: "38px",
          font: "Lucida Console",
          bold: true,
        },
        {
          content: "Joy, peace, and prosperity to you.",
          color: "#FFFFFF",
          fontSize: "22px",
          font: "Garamond",
          bold: true,
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
    {
      id: 8,
      color: "pink",
      width: "300px",
      height: "400px",
      borderRadius: "25px",
      backgroundImage: "/diwali-template-bg-img-8.jpg",
      textElements: [
        {
          content: "Festive Diwali Greetings!",
          color: "#FFFFFF",
          fontSize: "40px",
          font: "Bookman Old Style",
          bold: true,
        },
        {
          content: "May your Diwali be filled with light.",
          color: "#FFFFFF",
          fontSize: "24px",
          font: "Copperplate",
          bold: true,
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
      id: 9,
      color: "pink",
      width: "300px",
      height: "400px",
      borderRadius: "10px",
      backgroundImage: "/diwali-template-bg-img-9.gif",
      textElements: [
        {
          content: "Festive Diwali Greetings!",
          color: "#FFFFFF",
          fontSize: "40px",
          font: "Bookman Old Style",
          bold: true,
        },
        {
          content: "May your Diwali be filled with light.",
          color: "#FFFFFF",
          fontSize: "24px",
          font: "Copperplate",
          bold: true,
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
    
    
  ];


function TemplatesPage({setTemplate}) {
    const navigate = useNavigate();
    const handleTemplateClick = (template) =>{
        setTemplate(template);
        navigate('/')
     }
  return (
    <div>
      <h1>Select a Template</h1>
      <div className="templates-container">
        {templates.map(template => (
          <div
            key={template.id}
            className="template-card"
            onClick={() => handleTemplateClick(template)}
            style={{
              backgroundColor: template.color,
            //   width: template.width,
            //   height: template.height,
              borderRadius: template.borderRadius,
              backgroundImage: `url(${template.backgroundImage})`,
              backgroundSize: 'cover',
              position: 'relative',
              padding: '20px',
              margin: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {template.textElements.map((text, index) => (
              <h2
                key={index}
                style={{
                  fontSize: text.fontSize,
                  fontFamily: text.font,
                  fontWeight: text.bold ? 'bold' : 'normal',
                  color: text.color,
                  textAlign: 'center',
                  margin: '5px 0',
                }}
              >
                {text.content}
              </h2>
            ))}
            <div className="decorative-elements">
              {template.decorativeElements.map((decorative, index) => (
                <span key={index} style={{ fontSize: '30px', margin: '5px' }}>
                  {decorative.element}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplatesPage;
