const readline = require('readline'); // readline est un module pour lire la sortie

// interface readline pour lire depuis stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// message nom
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // affiche le nom l'user
  console.log(`Your name is: ${name}`);

  // message de fin
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  // Fermer readline
  rl.close();
});
