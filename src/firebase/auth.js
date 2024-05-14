import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const auth = getAuth();
export const doSignInWithGoogle = async () => {
    const provider = new  GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // result.user;
    return result;
}


export const doSignOut = () => {
    return auth.signOut();
}

