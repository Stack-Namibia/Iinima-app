import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { firebaseConfig } from "../../settings/firebase";
import { User, UsersApi } from "../../api/accounts";


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const usersApi = new UsersApi();

export const createUserByEmail = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    try {
      const reponse = await createUserWithEmailAndPassword(auth, email, password);
      sessionStorage.removeItem("firebaseToken");
      sessionStorage.setItem("firebaseToken", await reponse.user.getIdToken());
  
      usersApi
        .getUserByEmailApiV1EmailEmailGet(email, { headers: { Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`} })
        .then(async (user) => {
          if (user) {
            return "user-exists";
          }
        })
        .catch(async (error) => {
          if (error.response.status === 404) {
            sessionStorage.setItem(
              "firebaseToken",
              await reponse.user.getIdToken()
            );
  
            const user: User = {
              user_id: reponse.user.uid,
              firstName,
              lastName,
              email,
            };
  
            return await usersApi.createUserApiV1Post(user, { headers: { Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`} });
          }
        });
  
      return reponse.user;
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        return "user-exists";
      }
      console.log(error);
    }
  };

export const emailAuth = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const googleAuth = async () => {
  return await signInWithPopup(auth, googleProvider);
};

export const resetPassword = async (email: string) => {
  return await sendPasswordResetEmail(auth, email);
};

export const logOut = async () => {
  if (!auth.currentUser) {
    return;
  }
  return await auth.signOut();
};
