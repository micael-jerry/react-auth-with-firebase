import React, {useState} from "react";
import './SignInModal.css';
import {typeInputSignIn, typeSign} from "../../../types";
import ButtonSignIn from "../../ButtonSignIn/ButtonSignIn";

const SignInModal: React.FC<{ disableModal: () => void, signIn: typeSign,setCurrentUser:any }> = (props) => {
    const {disableModal, signIn, setCurrentUser} = props;
    const [inputValue, setValueInput] = useState<typeInputSignIn>({
        "signInEmail": "",
        "signInPassword": ""
    });

    const [validation, setValidation] = useState<String>("");

    const inputChangeValue = (event: any): void => {
        let key = event.target.id;
        let value = event.target.value;
        if (key === "signInEmail") {
            setValueInput((state) => {
                return {
                    ...state,
                    "signInEmail": value
                }
            })
        } else if (key === "signInPassword") {
            setValueInput((state) => {
                return {
                    ...state,
                    "signInPassword": value
                }
            })
        }
    }

    const onSubmit = async (event: any) => {
        event.preventDefault()

        try {
            await signIn(inputValue.signInEmail, inputValue.signInPassword);
            setValueInput({
                "signInEmail": "",
                "signInPassword": ""
            })
            disableModal();
        } catch (err: any) {
            setValidation(err.code);
        }
    }

    return (
        <>
            <div className={"position-fixed top-0 vw-100 vh-100"}>
                <div
                    onClick={() => {
                        disableModal()
                    }}
                    className={"w-100 vh-100 bg-dark bg-opacity-75"}>
                </div>
                <div className={"position-absolute top-50 start-50 translate-middle sign-up-modal"}>
                    <div className={"modal-dialog"}>
                        <div className={"modal-content"}>
                            <div className={"modal-header"}>
                                <h5 className={"modal-title"}>Sign Up</h5>
                                <button
                                    onClick={() => {
                                        disableModal()
                                    }}
                                    className={"btn-close"}></button>
                            </div>
                            <div className={"modal-body"}>
                                <form
                                    onSubmit={onSubmit}
                                    className={"sign-up-form"}>
                                    <div className={"mb-3"}>
                                        <label className={"form-label"} htmlFor={"signInEmail"}>Email adress</label>
                                        <input name={"email"} required={true} type={"email"}
                                               className={"form-control"} id={"signInEmail"}
                                               onChange={inputChangeValue}
                                               value={inputValue.signInEmail}
                                        />
                                    </div>
                                    <div className={"mb-3"}>
                                        <label className={"form-label"} htmlFor={"signInPassword"}>Password</label>
                                        <input name={"password"} required={true} type={"password"}
                                               className={"form-control"} id={"signInPassword"}
                                               onChange={inputChangeValue}
                                               value={inputValue.signInPassword}
                                        />
                                        <i className={"text-danger mt-1"}>{validation}</i>
                                    </div>
                                    <div className={"d-flex justify-content-center align-items-center mb-2 mt-2"}>
                                        <button className={"btn btn-primary"}>Sign In with email and password</button>
                                    </div>
                                </form>
                                <div className={"text-md-center mt-4"}>
                                    <p className={"mb-0"}>Or Sing In with</p>
                                    <ButtonSignIn disableModal={disableModal} setCurrentUser={setCurrentUser}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignInModal;
