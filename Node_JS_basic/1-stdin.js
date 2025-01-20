const readline = require('readline'); // readline module pour lire l'input

// interface readline pour lire depuis stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// message demandant le nom
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // affiche le nom de l'utilisateur
  console.log(`Your name is: ${name}`);

  // message de fermeture
  console.log('This important software is now closing');

  // Fermer readline
  rl.close();
});
