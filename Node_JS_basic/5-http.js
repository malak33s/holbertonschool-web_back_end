const http = require('http'); // Import du module http
const fs = require('fs'); // Import du module fs pour la lecture de fichiers

// Fonction pour compter les étudiants
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '' && line.indexOf('firstname,') === -1);
      const students = [];
      const fields = {};

      // Parcours des lignes pour créer des étudiants
      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (firstname && field) {
          students.push({ firstname, field });

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname); // Ajout du prénom dans le champ correspondant
        }
      });

      const total = students.length; // Nombre total d'étudiants

      // Préparation des données par champ
      const result = {
        total,
        fields,
      };

      resolve(result);
    });
  });
}

// Création du serveur
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databaseFile = process.argv[2]; // Récupération du chemin de la base de données
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write('This is the list of our students\n');
    countStudents(databaseFile)
      .then((data) => {
        const { total, fields } = data;

        res.write(`Number of students: ${total}\n`);

        // Ajout des données par champ
        Object.keys(fields).forEach((field) => {
          const list = fields[field].join(', '); // Concaténation des prénoms
          res.write(`Number of students in ${field}: ${fields[field].length}. List: ${list}\n`);
        });

        res.end();
      })
      .catch((err) => {
        res.end(`${err.message}\n`);
      });
  }
});

// Le serveur écoute le port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Exportation de l'app
module.exports = app;
