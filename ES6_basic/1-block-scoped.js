export default function taskBlock(trueOrFalse) {
  const task = false; // Variable déclarée avec const, portée limitée à la fonction
  const task2 = true; // Idem ici

  if (trueOrFalse) {
    const task = true; // Nouvelle variable, portée limitée au bloc 'if'
    const task2 = false; // Nouvelle variable, portée limitée au bloc 'if'
  }

  return [task, task2]; // Retourne les variables définies en dehors du bloc 'if'
}
