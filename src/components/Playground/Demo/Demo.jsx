import { useState } from "react";

function Demo() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onMouseMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      style={{
        position: "relative",
        width: "27rem",
        height: "12.5rem",
        top: -50,
        left: -26,
        overflow: "hidden",
        cursor: 'none',
        borderRadius: "40px",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundImage: `url('/vite.svg')`,
          backgroundRepeat: "no-repeat",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -1090,
          top: -560,
          width: 50,
          height: 50,
        }}
      />
    </div>
  );
}
export default Demo;
