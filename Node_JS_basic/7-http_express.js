const express = require('express'); // j'importe express
const fs = require('fs'); // j'importe fs pour lire les fichiers csv
const { argv } = require('process'); // je récupère les arguments de la commande

// fonction pour lire le fichier csv et compter les étudiants
function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== ''); // je filtre les lignes vides
      const students = lines.slice(1); // je retire la première ligne (en-tête)
      const studentCount = students.length;

      const fields = {};
      students.forEach((student) => {
        const [name, , field] = student.split(','); // je récupère les données des colonnes
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(name);
      });

      let response = `Number of students: ${studentCount}`;
      for (const [field, names] of Object.entries(fields)) {
        response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }
      resolve(response);
    });
  });
}

// je crée une instance express
const app = express();

// route pour /
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain'); // je précise que la réponse est en texte brut
  res.send('Hello Holberton School!');
});

// route pour /students
app.get('/students', (req, res) => 
