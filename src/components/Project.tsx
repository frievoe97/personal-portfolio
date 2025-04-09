import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa"; // Icons für die Buttons
import mock11 from "../assets/images/mock11.png";
import mock12 from "../assets/images/mock12.png";
import mock13 from "../assets/images/mock13.png";
import mock14 from "../assets/images/mock14.png";
import mock15 from "../assets/images/mock15.png";
import mock16 from "../assets/images/Whatsapp-Dashboard.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {/* Algorithmus Visualizer */}
        <div className="project">
          <h2>Whatsapp Dashboard</h2>
          <img src={mock16} className="zoom" alt="thumbnail" width="100%" />
          <p className="project-description">
            The WhatsApp Dashboard is an interactive tool that allows you to
            analyze and visualize your WhatsApp chat data in a user-friendly
            way. With various charts and insights, you can explore message
            trends, emoji usage, sentiment analysis, and more. The entire
            analysis runs locally in your browser, ensuring privacy and
            security. Simply upload your exported WhatsApp chat file and gain
            deep insights into your messaging behavior.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/frievoe97/whatsapp-dashboard"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </a>
            <a
              href="https://chat-visualizer.de/"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <FaGlobe style={{ marginRight: "8px" }} /> Live Demo
            </a>
          </div>
        </div>

        {/* Chat App */}
        <div className="project">
          <h2>Chat App</h2>
          <img src={mock11} className="zoom" alt="thumbnail" width="100%" />
          <p className="project-description">
            This is a full-stack chat app using FastAPI, React, and PostgreSQL.
            It supports user registration, login, real-time messaging, and
            typing notifications via WebSocket. The backend handles
            authentication and messaging, while Docker ensures easy setup.
            Future updates include message encryption, online status, and media
            sharing.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/frievoe97/react-chat-app"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </a>
          </div>
        </div>

        {/* Mastermind */}
        <div className="project">
          <h2>Mastermind</h2>
          <img src={mock12} className="zoom" alt="thumbnail" width="100%" />
          <p className="project-description">
            Mastermind is a Pygame-based digital version of the classic board
            game. It offers four modes, including various player and computer
            interactions, and a Supersuper Mode with 8 colors. Play locally or
            over a network, and use the build script to create a MacOS
            executable.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/frievoe97/pygame-mastermind"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </a>
          </div>
        </div>

        {/* Find Mr. X */}
        <div className="project">
          <h2>Find Mr. X</h2>
          <img src={mock14} className="zoom" alt="thumbnail" width="100%" />
          <p className="project-description">
            Find Mr. X is an Android app inspired by Scotland Yard, allowing
            players to hunt Mr. X in real life using real-time tracking and
            clues. Players work in teams to capture Mr. X by navigating through
            a live map. Every few minutes, Mr. X's position is updated, making
            it a dynamic and exciting game.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/frievoe97/find-mr-x"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </a>
          </div>
        </div>

        {/* Algorithmus Visualizer */}
        <div className="project">
          <h2>Algorithmus Visualizer</h2>
          <img src={mock13} className="zoom" alt="thumbnail" width="100%" />
          <p className="project-description">
            The Algorithm Visualizer is a web-based project that helps users
            visualize sorting and pathfinding algorithms. It supports a variety
            of algorithms like Bubble Sort, Quick Sort, Dijkstra, and A* Search,
            providing interactive animations and step-by-step explanations.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/frievoe97/algorithm-visualizer"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </a>
            <a
              href="https://algo-viz.friedrichvoelkers.de/"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <FaGlobe style={{ marginRight: "8px" }} /> Live Demo
            </a>
          </div>
        </div>

        {/* Dumb Calculator */}
        <div className="project">
          <h2>Dumb Calculator</h2>
          <img src={mock15} className="zoom" alt="thumbnail" width="100%" />
          <p className="project-description">
            Dumb Calculator is an iOS app that works as a basic calculator, but
            with a twist: after every input, the buttons are shuffled randomly,
            making it more challenging and fun to use. It’s a playful take on a
            daily utility app.
          </p>
          <div className="project-buttons">
            <a
              href="https://github.com/frievoe97/dumb-calculator-ios"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              <FaGithub style={{ marginRight: "8px" }} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
