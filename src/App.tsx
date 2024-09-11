import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  // Dark Mode überprüfen
  const getInitialMode = () => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode ? "dark" : "light"; // Dark Mode verwenden, falls der Benutzer ihn bevorzugt
  };

  const [mode, setMode] = useState<string>(getInitialMode);

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    // Event Listener hinzufügen, um auf Änderungen des Farbschemas zu reagieren
    const modeChangeListener = (e: MediaQueryListEvent) => {
      setMode(e.matches ? "dark" : "light");
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", modeChangeListener);

    return () => {
      darkModeMediaQuery.removeEventListener("change", modeChangeListener);
    };
  }, []);

  // Dynamisch die Tab-Leisten-Farbe ändern
  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");

    if (mode === "dark") {
      metaThemeColor?.setAttribute("content", "#121212"); // Dark Mode Farbe
    } else {
      metaThemeColor?.setAttribute("content", "#f8f9fa"); // Light Mode Farbe
    }
  }, [mode]); // Abhängig von 'mode'

  return (
    <div
      className={`main-container ${
        mode === "dark" ? "dark-mode" : "light-mode"
      }`}
    >
      <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
      <FadeIn transitionDuration={700}>
        <Main />
        <Expertise />
        <Timeline />
        <Project />
        <Contact />
      </FadeIn>
      <Footer />
    </div>
  );
}

export default App;
