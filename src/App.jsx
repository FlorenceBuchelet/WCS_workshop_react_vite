import Title from "./components/Title/Title";
import Presentation from "./components/Presentation/Presentation";
import Playground from "./components/Playground/Playground";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [display, setDisplay] = useState("block");
  const [zIndex, setZindex] = useState(1);

  useEffect(() => {
    return setIsDivVisible(true);
  }, []);
  return (
    <>
      <div className="welcomeClick" onClick={() => setDisplay("none")} onClickCapture={() => setZindex(-1)}>
        <div className="welcomeBox" style={{ display: display, zIndex: zIndex }}>
          {isDivVisible && <p className="welcomeText">Bienvenu sur ce magnique site fan de React & Vite</p>}
        </div>
      </div>
      <Title />
      <main>
        <Presentation />
        <Playground />
      </main>
    </>
  );
}

export default App;
