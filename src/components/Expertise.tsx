import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

import TextField from "@mui/material/TextField";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "Vue.js",
  "HTML5",
  "CSS3",
  "Tailwind",
  "Flask",
  "FastAPI",
  "Java",
  "Python",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "PostgreSQL",
  "SQL",
  "WebSockets",
  "Grafana",
];

const labelsThird = ["ESP32", "Raspberry Pi", "IoT", "Networks"];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have extensive experience building web applications from scratch
              using modern technologies such as React and Flask. I am proficient
              in both frontend and backend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Backend & DevOps</h3>
            <p>
              Security and reliable backend systems are essential. I use Docker,
              SQL, and automation tools like GitHub Actions to develop robust
              and scalable solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} size="3x" />
            <h3>IoT & Networks</h3>
            <p>
              With my experience in networks and IoT devices like ESP32 and
              Raspberry Pi, I am capable of developing and monitoring complex
              systems.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
