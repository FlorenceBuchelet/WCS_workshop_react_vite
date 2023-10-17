import Title from "./components/Title/Title";
import Presentation from "./components/Presentation/Presentation";
import Playground from "./components/Playground/Playground";
import WelcomeMessage from "./components/WelcomeMessage/WelcomeMessage";
import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("block");

  return (
    <>
      <WelcomeMessage display={display} setDisplay={setDisplay} />
      <Title />
      <main>
        <Presentation />
        <Playground />
      </main>
    </>
  );
}

export default App;
