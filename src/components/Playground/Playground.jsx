import Card from "./Card";
import "./Playground.css";

function Playground() {
  const cardContent = [
    {
      title: "Props",
      description: "Un props est une valeur transmise d'un parent à un enfant.",
      code: `{cardContent.map((e) => (
        <Card
          key={e.title}
          title={e.title}
          description={e.description}
          demo={e.demo}
          code={e.code}
        />
      ))}`,
    },
    {
      title: "Prop-types",
      description: "Donne une information sur le type attendu d'un props.",
      code: `Card.propTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        demo: PropTypes.bool,
        code: PropTypes.string,
      }`,
    },
    {
      title: "State",
      description:
        "Le state permet de mettre à jour l'informations d'un composant en une seule manipulation.",
      code: `const [position, setPosition] = useState({
        x: 0,
        y: 0,
      });`,
    },
    { title: "Demo", demo: true },
  ];
  return (
    <div className="playground">
      <h2>🎊 Playground 🎊</h2>
      {cardContent.map((e) => (
        <Card
          key={e.title}
          title={e.title}
          description={e.description}
          demo={e.demo}
          code={e.code}
        />
      ))}
    </div>
  );
}

export default Playground;
