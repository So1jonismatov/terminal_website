const Window = ({
  title,
  children,
  position,
  transform,
  isDragging,
  forwardedRef,
  handleRef,
}) => {
  const style = {
    position: "absolute",
    left: position.x,
    top: position.y,
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    touchAction: "none",
    transition: isDragging ? "none" : "transform 0.2s ease",
  };

  return (
    <div
      ref={forwardedRef}
      style={style}
      className="bg-white rounded-lg shadow-lg w-80"
    >
      <div
        ref={handleRef}
        className="bg-gray-200 p-2 rounded-t-lg cursor-move flex justify-between items-center"
      >
        <span className="font-semibold text-gray-800">{title}</span>
      </div>
      {children}
    </div>
  );
};

export default Window;