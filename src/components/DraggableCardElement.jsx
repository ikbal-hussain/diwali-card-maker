// DraggableCardElement.js
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableCardElement = ({ id, children, onDrop, position }) => {
  const [, drag] = useDrag({
    type: 'CARD_ELEMENT',
    item: { id },
  });

  const [, drop] = useDrop({
    accept: 'CARD_ELEMENT',
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(position.left + delta.x);
      const top = Math.round(position.top + delta.y);
      onDrop(id, { left, top });
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{
        position: 'absolute',
        left: position.left,
        top: position.top,
        cursor: 'move',
      }}
    >
      {children}
    </div>
  );
};

export default DraggableCardElement;
