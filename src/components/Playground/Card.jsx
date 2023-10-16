import Demo from "./Demo";
import "./Card.css";

function Card({ title, description = "", demo = "" }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <article>
        {description} {demo ? <Demo /> : ""}
      </article>
    </div>
  );
}

export default Card;
