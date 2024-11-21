import handleProfile from './handleProfile';
import { uploadPhoto, createUser } from './utils';

// Mock les fonctions importées
jest.mock('./utils', () => ({
  uploadPhoto: jest.fn(),
  createUser: jest.fn(),
}));

test('handleProfile combine les résultats correctement', async () => {
  // Simule les réponses des fonctions mockées
  uploadPhoto.mockResolvedValue({ status: 200, body: 'photo-profile-1' });
  createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  // Appelle la fonction handleProfile
  const result = await handleProfile();

  // Vérifie que les résultats sont corrects
  expect(result.photo).toEqual({ status: 200, body: 'photo-profile-1' });
  expect(result.user).toEqual({ firstName: 'Guillaume', lastName: 'Salva' });
});

test('handleProfile retourne des valeurs null en cas d\'erreur', async () => {
  // Simule une erreur pour uploadPhoto
  uploadPhoto.mockRejectedValue(new Error('Erreur réseau'));
  createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  // Appelle la fonction handleProfile
  const result = await handleProfile();

  // Vérifie que les valeurs null sont retournées
  expect(result.photo).toBeNull();
  expect(result.user).toBeNull();
});
