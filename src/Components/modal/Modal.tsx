import React from "react";
import SignUpModal from "./SingUpModal/SignUpModal";
import {typeModalState} from "../../types";

const Modal: React.FC<{ modalState: typeModalState, changeModalState: (modalState: typeModalState) => any }> = (props) => {
    const {modalState, changeModalState} = props;

    const disableModal = (): void => {
        changeModalState({
            signUpModalState: false,
            singInModalState: false
        })
    }
    return (
        <>
            {modalState.signUpModalState && (
                <SignUpModal disableModal={disableModal}/>
            )}
        </>
    )
}

export default Modal;
