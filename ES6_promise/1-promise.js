// Retourne une promesse qui dépend du paramètre 'success'
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // Si success est vrai, on résout avec un objet succès
      resolve({
        status: 200, // Code HTTP qui signifie OK
        body: 'Success', // Message de réussite
      });
    } else {
      // Sinon, on rejette avec une erreur
      reject(new Error('The fake API is not working currently')); // Message d'erreur
    }
  });
}
