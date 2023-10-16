import "./like.css";
function Like() {
  return (
    <article className="like">
      <h2>Pourquoi on aime?</h2>
      <h3>React</h3>
      <ul>
        <li>Le découpage en briques façon Lego</li>
        <li>Le serveur local en hot reloading</li>
        <li>Le DOM virtuel</li>
      </ul>
      <h3>Vite</h3>
      <ul>
        <li>La rapidité de Vite</li>
        <li>L'allégement du projet</li>
      </ul>
    </article>
  );
}

export default Like;
