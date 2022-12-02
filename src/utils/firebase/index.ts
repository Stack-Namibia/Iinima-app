import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../plugins/firebase";
import { User, UsersApi } from "../../api/accounts";
import { createUser } from "../../services/api/accounts-api";

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
    // const usersApi = new UsersApi();


    sessionStorage.setItem('firebaseToken', await reponse.user.getIdToken());

    const user: User = {
      user_id: reponse.user.uid,
      firstName,
      lastName,
      email,
    };

    const newUser = await createUser(user);

    // const newUser = await usersApi.createUserApiV1Post(user, {
    //   headers: {
    //     Authorization: `Bearer ${await reponse.user.getIdToken()}`,
    //   },
    // });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signInWithGoogle = async () => {
  try {
    const response: any = await signInWithPopup(auth, googleProvider);
    const usersApi = new UsersApi();

    const [firstName, lastName] = response.user.displayName.split(" ");

    const user: User = {
      user_id: response.user.uid,
      firstName,
      lastName,
      email: response.user.email,
    };

    const newUser = await usersApi.createUserApiV1Post(user, {
      headers: {
        Authorization: `Bearer ${await response.user.getIdToken()}`,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const signInWithFacebook = async () => {
  try {
    const response: any = await signInWithPopup(
      auth,
      new FacebookAuthProvider()
    );
    const usersApi = new UsersApi();

    const [firstName, lastName] = response.user.displayName.split(" ");

    const user: User = {
      user_id: response.user.uid,
      firstName,
      lastName,
      email: response.user.email,
    };

    const newUser = await usersApi.createUserApiV1Post(user, {
      headers: {
        Authorization: `Bearer ${await response.user.getIdToken()}`,
      },
    });

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
    const usersApi = new UsersApi();

    const [firstName, lastName] = response.user.displayName.split(" ");

    const user: User = {
      user_id: response.user.uid,
      firstName,
      lastName,
      email: response.user.email,
    };

    const newUser = await usersApi.createUserApiV1Post(user, {
      headers: {
        Authorization: `Bearer ${await response.user.getIdToken()}`,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};
