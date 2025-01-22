const http = require('http');
const fs = require('fs');
const readline = require('readline');

// lis et analyse file CSV
function readStudentsFromFile(filePath) {
  const students = {
    CS: [],
    SWE: [],
  };

  // lis file CSV
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    const student = line.split(','); // séparer colonnes CSV virgule
    if (student.length === 2) { // veriifie ligne deux valeurs
      const name = student[0].trim();
      const specialization = student[1].trim();
      if (specialization === 'CS') {
        students.CS.push(name);
      } else if (specialization === 'SWE') {
        students.SWE.push(name);
      }
    }
  });

  return new Promise((resolve) => {
    rl.on('close', () => {
      resolve(students);
    });
  });
}

// créer serveur http
const app = http.createServer(async (req, res) => {
  const url = req.url;
  const filePath = process.argv[2]; // chemin du fichier passé en arg

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    if (!filePath) {
      res.end('No database file provided');
      return;
    }

    try {
      const students = await readStudentsFromFile(filePath);
      const csList = students.CS.join(', ');
      const sweList = students.SWE.join(', ');
      const studentCount = students.CS.length + students.SWE.length;
      
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${studentCount}\n`);
      res.write(`Number of students in CS: ${students.CS.length}. List: ${csList}\n`);
      res.write(`Number of students in SWE: ${students.SWE.length}. List: ${sweList}\n`);
      res.end();
    } catch (error) {
      res.end('Error reading database file');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

// je lance serveur sur 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// dplc l'app pour test
module.exports = app;
