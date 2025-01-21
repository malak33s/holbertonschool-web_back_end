const fs = require('fs'); // module fs pour syst file

function countStudents(path) {
  // Return promise
  return new Promise((resolve, reject) => {
    // Lire file asynchrone
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        // Rejeter la promesse si erreur
        reject(new Error('Cannot load the database'));
        return;
      }

      // diviser lignes
      const lines = data.split('\n');

      // enlever lignes vides
      const validLines = lines.filter((line) => line.trim() !== '');

      // supprime première ligne
      const students = validLines.slice(1);

      // affiche nmbr d'étudiants
      console.log(`Number of students: ${students.length}`);

      // objet pour stocker étudiants par domaine
      const fields = {};

      // Parcourir étudiant pr l'ajouter à domaine
      students.forEach((student) => {
        const [firstName, , , field] = student.split(','); // split sert a séparer par virgule
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName); // Ajt prénom ds bon domaine
      });

      // print nbr d'etudiant par domaine et la liste de leurs prénoms
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          const names = fields[field].join(', ');
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${names}`);
        }
      }

      // Résoudre la promesse
      resolve();
    });
  });
}

module.exports = countStudents;
