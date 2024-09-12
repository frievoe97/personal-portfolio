const path = require("path");
const Sitemap = require("react-router-sitemap").default;

// Hier deine statischen Routen oder Abschnitte
const paths = [
  { path: "/", priority: 1.0 },
  { path: "/#expertise", priority: 0.8 },
  { path: "/#history", priority: 0.7 },
  { path: "/#projects", priority: 0.6 },
  { path: "/#contact", priority: 0.5 },
];

function generateSitemap() {
  return new Sitemap(paths)
    .build("https://friedrichvoelkers.de")
    .save(path.resolve("./public/sitemap.xml"));
}

generateSitemap();
