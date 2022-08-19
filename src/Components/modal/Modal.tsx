import React from "react";
import SignUpModal from "./SingUpModal/SignUpModal";
import {typeModalProps} from "../../types";
import SignInModal from "./SignInModal/SignInModal";

const Modal: React.FC<typeModalProps> = (props) => {
    const {modalState, changeModalState, signUp, signIn, setCurrentUser} = props;

    const disableModal = (): void => {
        changeModalState({
            signUpModalState: false,
            singInModalState: false
        })
    }

    return (
        <>
            {modalState.signUpModalState && (
                <SignUpModal disableModal={disableModal} signUp={signUp} setCurrentUser={setCurrentUser}/>
            )}
            {
                modalState.singInModalState && (
                    <SignInModal disableModal={disableModal} signIn={signIn} setCurrentUser={setCurrentUser} />
                )
            }
        </>
    )
}

export default Modal;
