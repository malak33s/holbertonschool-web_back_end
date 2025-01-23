const express = require('express'); // j'importe express
const countStudents = require('./3-read_file_async'); // j'importe la fonction countStudents de 3-read_file_async.js
const { argv } = require('process'); // je récupère les arguments de la commande

// je crée une instance express
const app = express();

// route pour /
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain'); // je précise que la réponse est en texte brut
  res.send('Hello Holberton School!');
});

// route pour /students
app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain'); // je précise que la réponse est en texte brut
  countStudents(argv[2])
    .then(() => {
      res.send(`This is the list of our students`);
    })
    .catch((err) => {
      res.send(err.message); // si erreur, message d'erreur
    });
});

// le serveur écoute sur le port 1245
app.listen(1245);

// j'exporte l'application
module.exports = app;
