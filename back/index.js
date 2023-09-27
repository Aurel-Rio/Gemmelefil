const express = require("express");
const ReactDOMServer = require("react-dom/server");
const App = require("./App");
const apiRoutes = require("./apiRoutes"); // Import des nouvelles routes

const app = express();

// Utilisation des nouvelles routes pour l'API
app.use("/", apiRoutes);

// Route pour la page d'accueil
app.get("/", (req, res) => {
  const html = ReactDOMServer.renderToString(<App />);
  res.send(html);
});

// Route pour la page "forfaits"
app.get("/forfaits", (req, res) => {
  const html = ReactDOMServer.renderToString(<Forfaits />);
  res.send(html);
});

// Route pour la page "catalog"
app.get("/catalog", (req, res) => {
  const html = ReactDOMServer.renderToString(<Catalog />);
  res.send(html);
});

// Route pour la page "contact"
app.get("/contact", (req, res) => {
  const html = ReactDOMServer.renderToString(<Contact />);
  res.send(html);
});

// Lancement de l'API
app.listen(3000, () => console.log("API is running on port 3000"));
