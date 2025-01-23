const http = require('http');
const fs = require('fs');

const countStudents = (path) => {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');
  const students = lines.slice(1).map((line) => line.split(',')); // Ignorer l'en-tête
  const fields = {};

  students.forEach((student) => {
    const field = student[3]; // Champ "field"
    const firstName = student[0]; // Prénom
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstName);
  });

  const totalStudents = students.length;
  let output = `Number of students: ${totalStudents}\n`;

  Object.keys(fields).forEach((field) => {
    const names = fields[field].join(', ');
    output += `Number of students in ${field}: ${fields[field].length}. List: ${names}\n`;
  });

  return output.trim();
};

const app = http.createServer((req, res) => {
  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const path = process.argv[2];
      const output = countStudents(path);
      res.write(`${output}\n`);
    } catch (error) {
      res.write(`${error.message}\n`);
    }
    res.end();
  } else {
    res.end('Hello World!');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
