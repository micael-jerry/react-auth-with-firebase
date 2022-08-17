import firebase from "firebase/compat";
import UserCredential = firebase.auth.UserCredential;

export type typeModalState = {
    signUpModalState: boolean,
    singInModalState: boolean
}

export type typeInputSignUp = {
    "signUpEmail": string,
    "signUpPassword": string,
    "signUpPasswordR": string
}

export type typeInputSignIn = {
    "signInEmail": string,
    "signInPassword": string
}

export type typeModalProps = {
    modalState: typeModalState,
    changeModalState: (modalState: typeModalState) => any,
    signUp: typeSign,
    signIn: typeSign
}

export type  typeSign = (email: string, password: string) => any
