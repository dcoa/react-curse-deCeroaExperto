import { signInWithGoogle, registerWithEmailPassword } from "../../firebase/provider"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password ) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() )
  }
}

export const startGoogleSingIn = ( ) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() )
    const result = await signInWithGoogle()
    if(!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}

export const startSignUp = ({ email, password, displayName }) => {
  return async ( dispatch ) => {
    dispatch( checkingCredentials() )
    const result = await registerWithEmailPassword({ email, password, displayName })
    console.log(result)
    if(!result.ok) return dispatch(logout(result.errorMessage))

    dispatch(login(result))
  }
}