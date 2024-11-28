import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // deux fonctions arguments appropriés
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // pour gérer les deux promesses
  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => {
      return results.map((result) => {
        if (result.status === 'fulfilled') {
          return { status: 'fulfilled', value: result.value };
        }
        return { status: 'rejected', reason: result.reason };
      });
    });
}
