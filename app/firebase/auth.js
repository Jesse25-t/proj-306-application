import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";


export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};
export const doSignInWithEmailAndPassword = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    
    return result;
};
// export const doPasswordReset = (email) => {
//     return sendPasswordResetEmail(auth, email); 
// };
// export  const doPassWordChange = (password) => {
//     return updatePassword(auth.currentUser, password);
// };
// export const doSendEmailVerification = () => {
//     return sendEmailVerificationEmail(auth.currentUser, {
//         url: `${window.location.origin}/home`
//     });
// };