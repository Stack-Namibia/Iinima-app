import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../plugins/firebase";
import { User, UsersApi } from "../../api/accounts";
import { getApiConfig } from "./api-config";

const usersApi = new UsersApi(getApiConfig());

interface EmailSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const googleProvider = new GoogleAuthProvider();

export const signupWithEmailAndPassword = async ({
  firstName,
  lastName,
  email,
  password,
}: EmailSignUp) => {
  try {
    const reponse = await createUserWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("firebaseToken", await reponse.user.getIdToken());

    usersApi
      .getUserByEmailApiV1EmailEmailGet(email)
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

          return await usersApi.createUserApiV1Post(user, {
            headers: {
              Authorization: `Bearer ${await reponse.user.getIdToken()}`,
            },
          });
        }
        console.log(error);
      });

    return reponse.user;
  } catch (error: any) {
    if (error.code === "auth/email-already-in-use") {
      return "user-exists";
    }
    console.log(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    sessionStorage.setItem("firebaseToken", await response.user.getIdToken());
    return response.user;
  } catch (error: any) {
    if (error.code === "auth/user-not-found") {
      return "user-not-found";
    }
    if (error.code === "auth/wrong-password") {
      return "wrong-password";
    }
  }
};

export const signInWithGoogle = async () => {
  try {
    const response: any = await signInWithPopup(auth, googleProvider);
    sessionStorage.setItem("firebaseToken", await response.user.getIdToken());
    const [firstName, lastName] = response.user.displayName.split(" ");

    // Create user exists in the database
    usersApi
      .getUserByEmailApiV1EmailEmailGet(response.user.email)
      .then(async (user) => {
        return response.user;
      })
      .catch(async (error) => {
        // Create user if it does not exist
        if (error.response.status === 404) {
          console.log("Creating user");
          const user: User = {
            user_id: response.user.uid,
            firstName,
            lastName,
            email: response.user.email,
          };
          usersApi
            .createUserApiV1Post(user)
            .catch((error) => {
              console.log(error);
            });
        }
      });

    return response.user;
  } catch (error) {
    return error;
  }
};

export const signInWithFacebook = async () => {
  try {
    const response: any = await signInWithPopup(
      auth,
      new FacebookAuthProvider()
    );
    sessionStorage.setItem("firebaseToken", await response.user.getIdToken());
    const [firstName, lastName] = response.user.displayName.split(" ");

    const user: User = {
      user_id: response.user.uid,
      firstName,
      lastName,
      email: response.user.email,
    };

    const newUser = await usersApi.createUserApiV1Post(user);

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signInWithTwitter = async () => {
  try {
    const response: any = await signInWithPopup(
      auth,
      new TwitterAuthProvider()
    );
    const [firstName, lastName] = response.user.displayName.split(" ");

    const user: User = {
      user_id: response.user.uid,
      firstName,
      lastName,
      email: response.user.email,
    };

    const newUser = await usersApi.createUserApiV1Post(user);

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    sessionStorage.removeItem("firebaseToken");
  } catch (error) {
    console.log(error);
  }
};
