import { useDraggable, DragDropProvider } from "@dnd-kit/react";
import { useState, useCallback } from "react";
import Window from "./Window";

const DraggableContent = ({ position, title, children }) => {
  const { ref, handleRef, transform, isDragging } = useDraggable({
    id: "draggable",
  });

  return (
    <Window
      title={title}
      position={position}
      transform={transform}
      isDragging={isDragging}
      forwardedRef={ref}
      handleRef={handleRef}
    >
      {children}
    </Window>
  );
};

const Draggable = ({ title, children }) => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const onDragEnd = useCallback(({ operation }) => {
    if (operation) {
      setPosition((pos) => ({
        x: pos.x + operation.transform.x,
        y: pos.y + operation.transform.y,
      }));
    }
  }, []);

  return (
    <DragDropProvider onDragEnd={onDragEnd}>
      <DraggableContent position={position} title={title}>
        {children}
      </DraggableContent>
    </DragDropProvider>
  );
};

export default Draggable;
