import { useEffect, useState } from "react";
import "./Home.css";
import {
  SiLeetcode,
  SiLinkedin,
  SiGithub,
  SiInstagram,
} from "@icons-pack/react-simple-icons";

function Home() {
  const [style1, setStyle1] = useState("mediumhr");
  const [style2, setStyle2] = useState("smallhr");
  const [style3, setStyle3] = useState("smallhr");
  const [blur1, SetBlur1] = useState("removeblur");
  const [blur2, SetBlur2] = useState("makeblur");
  const [blur3, SetBlur3] = useState("makeblur");

  return (
    <div className="home">
      <div className="west">
        <div>
          <h1 className="name">Riddhish Khot</h1>
          <h3 className="name">Software Developer</h3>
          <h4 className="name">
            Bringing digital dreams to life with code craftsmanship.
          </h4>
        </div>
        <div className="navigator">
          <div
            className={`navigator-child ${blur1}`}
            onMouseEnter={() => {
              setStyle1("mediumhr");
              SetBlur1("removeblur");
            }}
            onMouseLeave={() => {
              setStyle1("smallhr");
              SetBlur1("makeblur");
            }}
          >
            <hr className={style1} />
            <h4 className="name">About</h4>
          </div>
          <div
            className={`navigator-child ${blur2}`}
            onMouseEnter={() => {
              setStyle2("mediumhr");
              SetBlur2("removeblur");
            }}
            onMouseLeave={() => {
              setStyle2("smallhr");
              SetBlur2("makeblur");
            }}
          >
            <hr className={style2} />
            <h4 className="name">Experience</h4>
          </div>
          <div
            className={`navigator-child ${blur3}`}
            onMouseEnter={() => {
              setStyle3("mediumhr");
              SetBlur3("removeblur");
            }}
            onMouseLeave={() => {
              setStyle3("smallhr");
              SetBlur3("makeblur");
            }}
          >
            <hr className={style3} />
            <h4 className="name">Projects</h4>
          </div>
        </div>
        <div className="socialMedia">
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/riddhish-khot/"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <SiLinkedin size={24} color="#000000" />
            </a>
          </div>
          <div className="icons">
            <a
              href="https://github.com/ridd12"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <SiGithub size={24} color="#000000" />
            </a>
          </div>
          <div className="icons">
            <a
              href="https://leetcode.com/ridk/"
              target="_blank"
              rel="noopener noreferrer"
              className="icons"
            >
              <SiLeetcode size={24} color="#000000" />
            </a>
          </div>
          <div className="icons">
            <a
              href="https://www.instagram.com/riddhish_khot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram size={24} color="#000000" />
            </a>
          </div>
        </div>
      </div>
      <div className="east">
        <div>
          <h3>Story</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
