import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfile() {
  try {
    // Appel des deux fonctions asynchrones
    const photo = await uploadPhoto();
    const user = await createUser();

    // Combine les résultats dans un objet unique
    return {
      photo,
      user,
    };
  } catch (error) {
    // Gère les erreurs et retourne un objet avec des valeurs null
    console.error('Erreur lors du traitement du profil:', error);
    return {
      photo: null,
      user: null,
    };
  }
}
