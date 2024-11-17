export default function taskBlock(trueOrFalse) {
  const task = false; // Utilisation de const car cette valeur ne change pas
  const task2 = true; // Idem ici

  if (trueOrFalse) {
    const task = true; // Variable distincte avec une portée limitée au bloc
    const task2 = false; // Variable distincte avec une portée limitée au bloc
  }

  return [task, task2]; // Les valeurs globales (false, true) sont retournées
}
