const http = require('http') // j'importe le module http pour créer le serveur
const fs = require('fs') // j'importe le module fs pour lire les fichiers
const { argv } = require('process') // je récupère les arguments passés dans la commande

// je crée une fonction pour lire le fichier csv et compter les étudiants
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

// je crée un serveur http
const app = http.createServer((req, res) => {
  const { url } = req

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('hello holberton school!')
  } else if (url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    countStudents(argv[2])
      .then((output) => {
        res.end(`this is the list of our students\n${output}`)
      })
      .catch((err) => {
        res.end(err.message)
      })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('not found')
  }
})

// j'écoute sur le port 1245
app.listen(1245)

// j'exporte le serveur
module.exports = app
