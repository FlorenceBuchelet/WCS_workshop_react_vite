import Demo from "./Demo";
import "./Card.css";
import PropTypes from "prop-types";

function Card({ title, description, demo, code }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <article>
        {description} {demo ? <Demo /> : ""}
      </article>
      {code ? (
        <p>
          <code>{code}</code>
        </p>
      ) : null}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  demo: PropTypes.bool,
  code: PropTypes.string,
};

export default Card;
