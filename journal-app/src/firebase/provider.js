import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleAuthProvider= new GoogleAuthProvider();

export const signInWithGoogle = async() =>{
  try {
    const result = await signInWithPopup(FirebaseAuth, googleAuthProvider)
    // const credentials = googleAuthProvider.credentialFromResult( result )
    const { displayName, email, photoURL, uid } = result.user
    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  } catch (error) {
    const errorMessage = error.message
    return {
      ok: false,
      errorMessage
    }
  }
}

export const registerWithEmailPassword = async({ email, password, displayName }) => {
  try {
    const result = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
    const { photoURL, uid } = result.user
    await updateProfile(FirebaseAuth.currentUser, { displayName })
    return {
      ok: true,
      displayName, email , photoURL, uid
    }
  } catch (error) {
    const errorMessage = error.message
    return {
      ok: false,
      errorMessage
    }
  }
}