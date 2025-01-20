const fs = require('fs'); // Module fs pour lire les fichiers

function countStudents(path) {
  try {
    // Lire le fichier de manière synchrone
    const data = fs.readFileSync(path, 'utf-8');

    // Diviser les lignes par retour à la ligne
    const lines = data.split('\n');

    // Enlever les lignes vides
    const validLines = lines.filter((line) => line.trim() !== '');

    // Supprimer la première ligne (en-tête)
    const students = validLines.slice(1);

    // Afficher le nombre total d'étudiants
    console.log(`Number of students: ${students.length}`);

    // Créer un objet pour stocker les étudiants par domaine
    const fields = {};

    // Parcourir chaque étudiant pour l'ajouter à son domaine
    students.forEach((student) => {
      const [firstName, , , field] = student.split(','); // Séparer par virgule
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName); // Ajouter le prénom dans le bon domaine
    });

    // Afficher le nombre d'étudiants par domaine et la liste de leurs prénoms
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) { // Vérifier la propriété
        const names = fields[field].join(', '); // Créer une liste de prénoms séparés par des virgules
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${names}`);
      }
    }
  } catch (err) {
    // Si le fichier n'existe pas, afficher une erreur
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
