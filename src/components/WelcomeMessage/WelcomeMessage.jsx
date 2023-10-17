import PropTypes from "prop-types";

function WelcomeMessage({ display, setDisplay }) {
  return (
    <div className="welcomeClick" onClick={() => setDisplay("none")} style={{ display: display }}>
      <div className="welcomeBox">
        <p className="welcomeText">Bienvenue sur ce magnifique fansite dédié à React & Vite !</p>
      </div>
    </div>
  );
}

WelcomeMessage.propTypes = {
  display: PropTypes.string.isRequired,
  setDisplay: PropTypes.func.isRequired,
};

export default WelcomeMessage;
