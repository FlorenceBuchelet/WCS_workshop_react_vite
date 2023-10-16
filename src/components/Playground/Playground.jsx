import Card from "./Card";
import "./Playground.css";

function Playground() {
  const cardContent = [
    { title: "Props", description: "Un props est une valeur transmis d'un parent à un enfant." },
    { title: "Prop-types", description: "Donne une information sur le type attendu d'un props." },
    {
      title: "State",
      description: "Le state permet de mettre à jour l'informations d'un composant en une seule manipulation.",
    },
    { title: "Demo", demo: true },
  ];
  return (
    <div className="playground">
      <h2>Playground</h2>
      {cardContent.map((e) => (
        <Card key={e.title} title={e.title} description={e.description} demo={e.demo} />
      ))}
    </div>
  );
}

export default Playground;
