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

export type typeModalProps = {
    modalState: typeModalState,
    changeModalState: (modalState: typeModalState) => any,
    signUp: typeSignUp
}

export type  typeSignUp = (email: string, password: string) =>  any
