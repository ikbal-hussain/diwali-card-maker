import React from 'react';
import '../styles/TemplateSelector.css';

function TemplateSelector({ setTemplate }) {
  const templates = [
    { id: 1, color: 'lightyellow' },
    { id: 2, color: 'lightblue' },
    { id: 3, color: 'lavender' },
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
            Template {template.id}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;
