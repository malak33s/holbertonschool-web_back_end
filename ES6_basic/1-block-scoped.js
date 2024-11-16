export default function taskBlock(trueOrFalse) {
  let task = false; // j'utilise let pour que task soit limitée à la fonction
  let task2 = true; // encore let pour que task2 soit limitée à la fonction

  if (trueOrFalse) {
    task = true; // Pas besoin de var ici, juste une affectation
    task2 = false; // pareil ici
  }

  return [task, task2];
}
