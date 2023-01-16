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
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    sessionStorage.setItem("firebaseToken", await response.user.getIdToken());

    const user: User = {
      user_id: response.user.uid,
      firstName,
      lastName,
      email,
    };

    const createdUser = await usersApi.createUserApiV1Post(user, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`,
      },
    });

    return createdUser;
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      return "user-exists";
    }
    return error;
  }
};

export const emailAuth = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const googleAuth = async () => {
  try {
    const response: any = await signInWithPopup(auth, googleProvider);
    sessionStorage.setItem("firebaseToken", await response.user.getIdToken());
    const [firstName, lastName] = response.user.displayName.split(" ");

    const user: User = {
      user_id: response.user.uid,
      firstName,
      lastName,
      email: response.user.email,
    };
    await usersApi.createUserApiV1Post(user, {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("firebaseToken")}`,
      },
    });

    return user;
  } catch (error) {
    return error;
  }
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
