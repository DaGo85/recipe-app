//Mock structure for firebase auth

import firebase from "firebase/app";

const AuthFirebase = {
  getLoggedInUser: () => {
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      return {
        email: currentUser.email,
        userId: currentUser.uid,
        isEmailVerified: currentUser.emailVerified,
      };
    } else {
      return undefined;
    }
  },
  isAuthenticated: () => {
    return AuthFirebase.getLoggedInUser();
  },
};
export default AuthFirebase;
