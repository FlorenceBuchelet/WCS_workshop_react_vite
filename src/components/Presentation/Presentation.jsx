import "./presentation.css";
function Presentation() {
  return (
    <article className="presentation">
      <h2>Présentation</h2>
      <p>
        React est une <strong>librairie</strong> créée par Facebook.
      </p>
      <p>
        Elle permet de découper un projet en
        <strong>composants</strong> réutilisables.
      </p>
      <p>
        Les <strong>keys</strong> rendent chaque élement d'un objet unique.
      </p>
      <p>
        Le <strong>JSX</strong> est un language qui associe harmonieusement le JavaScript et le HTML.
      </p>
      <p>
        <strong>Vite</strong> permet l'installation de React.
      </p>
    </article>
  );
}

export default Presentation;
