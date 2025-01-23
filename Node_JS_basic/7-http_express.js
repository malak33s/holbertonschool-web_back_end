const express = require('express') // j'importe express pour créer le serveur
const fs = require('fs') // j'importe fs pour lire les fichiers csv
const { argv } = require('process') // je récupère les arguments passés dans la commande

// je crée une fonction pour lire le fichier csv et récupérer les données des étudiants
function countStudents(database) {
  return new Promise((resolve, reject) => {
    fs.readFile(database, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('cannot load the database'))
        return
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '') // je supprime les lignes vides
      const students = lines.slice(1) // je supprime la première ligne (en-tête)
      const studentCount = students.length

      const fields = {}
      students.forEach((student) => {
        const [name, , field] = student.split(',')
        if (!fields[field]) {
          fields[field] = []
        }
        fields[field].push(name)
      })

      let response = `number of students: ${studentCount}\n`
      for (const [field, names] of Object.entries(fields)) {
        response += `number of students in ${field}: ${names.length}. list: ${names.join(', ')}\n`
      }
      resolve(response.trim())
    })
  })
}

// je crée une instance express
const app = express()

// je définis la route pour /
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain')
  res.send('hello holberton school!')
})

// je définis la route pour /students
app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain')
  countStudents(argv[2])
    .then((output) => {
      res.send(`this is the list of our students\n${output}`)
    })
    .catch((err) => {
      res.send(err.message)
    })
})

// j'écoute sur le port 1245
app.listen(1245, () => {
  console.log('server running on port 1245')
})

// j'exporte l'application
module.exports = app
