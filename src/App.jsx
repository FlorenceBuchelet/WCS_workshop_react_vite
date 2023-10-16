import Title from "./components/Title/Title";
import Presentation from "./components/Presentation/Presentation";
import Like from "./components/Like/Like";
import Install from "./components/Install/Install";
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
