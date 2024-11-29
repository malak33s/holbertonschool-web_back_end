import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // deux fonctions arguments appropriés
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // pour gérer les deux promesses
  return Promise.allSettled([signUpPromise, uploadPhotoPromise])
    .then((results) => results.map((result) => (result.status === 'fulfilled' 
          ? { status: 'fulfilled', value: result.value } 
          : { status: 'rejected', reason: result.reason })
      )
    );
}
