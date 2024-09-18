import React from "react";
import "../assets/styles/AboutMe.scss";

function AboutMe() {
  return (
    <div className="about-container" id="about">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
          Hi! I'm Friedrich Völkers, a passionate software developer with a
          strong focus on web development, backend systems, and decentralized
          technologies. With a background in Computer Science and hands-on
          experience in various projects, I love creating robust, scalable, and
          user-centric applications.
        </p>
        <p>
          I specialize in modern web frameworks like React and Vue.js, and
          backend technologies such as FastAPI and Flask. I'm particularly
          interested in blockchain, IoT, and real-time communication. In my
          spare time, I work on side projects and contribute to open source
          software.
        </p>
        <p>Let's build something amazing together!</p>
      </div>
    </div>
  );
}

export default AboutMe;
