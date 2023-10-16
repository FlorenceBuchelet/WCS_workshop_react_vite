import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import "./Title.css";

function Title() {
  return (
    <header className="titleLogo">
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1 className="title">React + Vite</h1>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
    </header>
  );
}

export default Title;
