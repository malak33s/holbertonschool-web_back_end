export default function taskBlock(trueOrFalse) {
    let task = false;  // la j'utilise de let pour que task soit limitée à la fonction
    let task2 = true;   // ensuite encore let task2 soit limitée à la fonction
  
    if (trueOrFalse) {
      task = true;      // Pas besoin de var ici, juste affectation
      task2 = false;    // la meme chose
    }
  
    return [task, task2];
  }
  