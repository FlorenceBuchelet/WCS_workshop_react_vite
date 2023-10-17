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
        width: "24rem",
        height: "8rem",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundImage: `url('/vite.svg')`,
          backgroundRepeat: "no-repeat",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -1080,
          top: -570,
          width: 50,
          height: 50,
        }}
      />
    </div>
  );
}
export default Demo;
