import React from "react";
import mock11 from "../assets/images/mock11.png";
import mock12 from "../assets/images/mock12.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/frievoe97/react-chat-app"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock11} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/frievoe97/react-chat-app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Chat App</h2>
          </a>
          <p>
            This is a full-stack chat app using FastAPI, React, and PostgreSQL.
            It supports user registration, login, real-time messaging, and
            typing notifications via WebSocket. The backend handles
            authentication and messaging, while Docker ensures easy setup.
            Future updates include message encryption, online status, and media
            sharing.
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/frievoe97/pygame-mastermind"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock12} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/frievoe97/pygame-mastermind"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Mastermind</h2>
          </a>
          <p>
            Mastermind is a Pygame-based digital version of the classic board
            game. It offers four modes, including various player and computer
            interactions, and a Supersuper Mode with 8 colors. Play locally or
            over a network, and use the build script to create a MacOS
            executable.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
