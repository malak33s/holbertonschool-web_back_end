// Fonction pour créer un tableau typé Int
export default function createInt8TypedArray(length, position, value) {
  // Crée un buffer (mémoire fixe) de la taille spécifiée
  const buffer = new ArrayBuffer(length);

  // Crée une vue pour lire/écrire sur le buffer
  const view = new DataView(buffer);

  // Vérifie si la position est hors de la plage valide
  if (position < 0 || position >= length) {
    // Si la position est invalide, lance une erreur
    throw new Error('Position outside range');
  }

  // Insère la valeur en tant qu'entier 8 bits (Int8) à la position donnée
  view.setInt8(position, value);

  // Retourne la vue DataView
  return view;
}
