import React from "react";
import SignUpModal from "./SingUpModal/SignUpModal";
import {typeModalProps} from "../../types";

const Modal: React.FC<typeModalProps> = (props) => {
    const {modalState, changeModalState, signUp} = props;

    const disableModal = (): void => {
        changeModalState({
            signUpModalState: false,
            singInModalState: false
        })
    }

    return (
        <>
            {modalState.signUpModalState && (
                <SignUpModal disableModal={disableModal} signUp={signUp}/>
            )}
        </>
    )
}

export default Modal;
