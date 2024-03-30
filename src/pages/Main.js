import nextLogo from "./next.png";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="main">
      <div className="mainColoum1">
        <h1 style={{ fontSize: "5rem" }} className="fisrtname">
          Riddhish K
        </h1>
        {/* <h1 style={{ fontSize: "5rem" }}>Khot</h1> */}
      </div>
      <div className="mainColoum2">
        <h1 style={{ fontSize: "5rem" }} className="lastName">
          Portfolio
        </h1>
        <Link className="nextLogo" to="/home">
          <img src={nextLogo} alt="NextButton" />
        </Link>
      </div>
    </div>
  );
}

export default Main;
