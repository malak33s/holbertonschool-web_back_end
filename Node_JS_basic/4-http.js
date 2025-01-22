const http = require('http'); // je ramene le module http

// je crée le serveur
const app = http.createServer((req,res) => {
// rep avec txt
res.statusCode = 200; // code succès http
res.setHeader('Content-Type', 'text/plain'); // txt
res.end('Hello Holberton School!'); // rep

});

// serveur ecoute port
app.listen(1245,()=> {
    console.log('Server is listening on port 1245');
});

// deplcmt de l'app
module.exports = app;

