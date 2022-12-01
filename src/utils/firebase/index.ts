import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../plugins/firebase";
import { User, UsersApi } from "../../api/accounts";

interface EmailSignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signupWithEmailAndPassword = async ({
  firstName,
  lastName,
  email,
  password,
}: EmailSignUp) => {
  try {
    const reponse = await createUserWithEmailAndPassword(auth, email, password);
    const usersApi = new UsersApi();

    const user: User = {
      user_id: reponse.user.uid,
      firstName,
      lastName,
      email,
    };

    const newUser = await usersApi.createUserApiV1Post(user, {
      headers: {
        Authorization: `Bearer ${await reponse.user.getIdToken()}`,
      },
    });

    return newUser;
  } catch (error) {
    console.log(error);
    return error;
  }
};
