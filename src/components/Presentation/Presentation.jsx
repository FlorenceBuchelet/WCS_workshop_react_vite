import "./presentation.css";
function Presentation() {
  return (
    <article className="presentation">
      <h2>⚡ Présentation ⚡</h2>
      <p>
        React est une <strong>librairie</strong> Javascript créée par Facebook.
      </p>
      <p>
        Elle permet de découper un projet en <strong>composants</strong> duplicables et réutilisables.
      </p>
      <p>
        Les <strong>keys</strong> rendent chaque élement d'un objet unique.
      </p>
      <p>
        Le <strong>JSX</strong> est un language qui associe harmonieusement le JavaScript et le HTML.
      </p>
      <p>
        <strong>Vite</strong> permet une installation rapide et légère de React.
      </p>
      <h3>Pourquoi on aime</h3>
      <h4>React</h4>
      <ul>
        <li>Le découpage en briques façon Lego</li>
        <li>Le serveur local en hot reloading</li>
        <li>Le DOM virtuel</li>
      </ul>
      <h4>Vite</h4>
      <ul>
        <li>La rapidité de Vite</li>
        <li>L'allégement du projet</li>
      </ul>
    </article>
  );
}

export default Presentation;
