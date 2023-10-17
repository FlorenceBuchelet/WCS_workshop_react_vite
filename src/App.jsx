import Title from "./components/Title/Title";
import Presentation from "./components/Presentation/Presentation";
import Playground from "./components/Playground/Playground";
import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("block");

  return (
    <>
      <div
        className="welcomeClick"
        onClick={() => {
          setDisplay("none");
        }}
        style={{ display: display }}
      >
        <div className="welcomeBox">
          <p className="welcomeText">
            Bienvenue sur ce magnifique fansite dédié à React & Vite !
          </p>
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
