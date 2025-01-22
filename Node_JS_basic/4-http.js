const http = require('http'); // je ramène le module http

// je crée le serveur
const app = http.createServer((req, res) => {
  res.statusCode = 200; // code succès HTTP
  res.setHeader('Content-Type', 'text/plain'); // définit le type de contenu en texte brut
  res.end('Hello Holberton School!'); // envoie la réponse
});

// serveur écoute sur le port 1245
app.listen(1245);

// exporte l'application pour respecter les requirements
module.exports = app;
