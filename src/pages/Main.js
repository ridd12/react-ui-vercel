import nextLogo from "./next.png";
import "./App.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="home">
      <div className="mainColoum1">
        <h1 style={{ fontSize: "5rem" }} className="name">
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

// const fetchUser = async () => {
//   fetch("http://localhost:8080/get/users")
//     .then((res) => res.json())
//     .then((data) => {
//       data.map((user) => {
//         console.log("User " + JSON.stringify(user));
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
