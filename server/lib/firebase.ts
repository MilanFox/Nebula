import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export const app = initializeApp({
  credential: cert({
    privateKey: process.env['FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY']?.replace(/\\n/g, '\n'),
    projectId: process.env['FIREBASE_PROJECT_ID'],
    clientEmail: process.env['FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL'],
  }),
});

export const db = getFirestore(app);

const usersRef = db.collection('users');

export const getUserInfo = async (seed: number) => {
  const userRef = usersRef.doc(seed.toString());
  const snapshot = await userRef.get();
  return snapshot?.data();
};

export const setPuzzleState = async (seed: number, id: string, isSolved: boolean) => {
  const userRef = usersRef.doc(seed.toString());
  await userRef.set({ puzzles: { [id]: isSolved } }, { merge: true });
};
