import Title from "./components/Title/Title";
import Presentation from "./components/Presentation/Presentation";
import Playground from "./components/Playground/Playground";
import "./App.css";

function App() {
  return (
    <>
      <Title />
      <main>
        <Presentation />
        <Playground />
      </main>
    </>
  );
}

export default App;
