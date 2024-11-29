export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction(); // Execute the math function
    queue.push(result); // If no error, push the result
  } catch (error) {
    queue.push(error.message); // If an error is thrown, push the error message
  } finally {
    queue.push('Guardrail was processed'); // Always push this message
  }
  return queue;
}
