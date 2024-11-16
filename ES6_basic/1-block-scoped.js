export default function taskBlock(trueOrFalse) {
  let task = false; // Use let to ensure block scope
  let task2 = true; // Use let to ensure block scope

  if (trueOrFalse) {
    let task = true; // This variable is scoped to the block
    let task2 = false; // This variable is scoped to the block
  }

  return [task, task2]; // Returns the outer scope variables
}
