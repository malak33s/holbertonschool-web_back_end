const fs = require('fs');

function countStudents(path) {
  try {
    // Lire fichier synchrone
    const data = fs.readFileSync(path, 'utf-8');

    // Diviser lignes en un tableau.
    const lines = data.split('\n');

    const validLines = lines.filter(line => line.trim() !== '');

    // Enlever première ligne)
    const students = validLines.slice(1);

    // Nombre total d'étudiants
    console.log(`Number of students: ${students.length}`);

    // Créer un objet pour compter les étudiants par domaine
    const fields = {};

    // Boucle à travers les étudiants et classer par domaine
    students.forEach(student => {
      const [firstName, lastName, age, field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstName); // Ajouter le prénom dans le tableau du domaine
    });

    // Afficher le nombre d'étudiants par domaine et leur liste
    for (const field in fields) {
      const names = fields[field].join(', '); // Créer une liste de prénoms séparée par des virgules
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${names}`);
    }

  } catch (err) {
    // afficher le message d'erreur
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
