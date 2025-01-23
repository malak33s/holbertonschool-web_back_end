const express = require('express');

// je crée une application express
const app = express();

// je définis l'endpoint `/` qui renvoie "hello holberton school!"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// je configure le serveur pour qu'il écoute sur le port 1245
app.listen(1245, () => {
  console.log('server running on port 1245');
});

// j'exporte l'application pour les tests ou d'autres utilisations
module.exports = app;
