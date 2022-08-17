import React, {useState} from "react";
import './SignUpModal.css'
import {typeInputSignUp, typeSign} from "../../../types";
import {useNavigate} from "react-router-dom";

const SignUpModal: React.FC<{ disableModal: () => void, signUp: typeSign }> = (props) => {
    const {disableModal, signUp} = props;
    const [inputValue, setValueInput] = useState<typeInputSignUp>({
        "signUpEmail": "",
        "signUpPassword": "",
        "signUpPasswordR": ""
    });

    const [validation, setValidation] = useState<String>("");

    const navigate = useNavigate();

    const inputChangeValue = (event: any): void => {
        let key = event.target.id;
        let value = event.target.value;
        if (key === "signUpEmail") {
            setValueInput((state) => {
                return {
                    ...state,
                    "signUpEmail": value
                }
            })
        } else if (key === "signUpPassword") {
            setValueInput((state) => {
                return {
                    ...state,
                    "signUpPassword": value
                }
            })
        } else if (key === "signUpPasswordR") {
            setValueInput((state) => {
                return {
                    ...state,
                    "signUpPasswordR": value
                }
            })
        }
    }

    const onSubmit = async (event: any) => {
        event.preventDefault()
        if (inputValue.signUpPassword.length < 6 || inputValue.signUpPasswordR.length < 6) {
            setValidation("5 characters min");
            return;
        } else if (inputValue.signUpPassword !== inputValue.signUpPasswordR) {
            setValidation("Passwords do not match");
            return;
        }

        try {
            const cred = await signUp(inputValue.signUpEmail, inputValue.signUpPassword);
            setValueInput({
                "signUpEmail": "",
                "signUpPassword": "",
                "signUpPasswordR": ""
            })
            setValidation("");
            navigate("/private/private-home");
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
                                        <label className={"form-label"} htmlFor={"signUpEmail"}>Email adress</label>
                                        <input name={"email"} required={true} type={"email"}
                                               className={"form-control"} id={"signUpEmail"}
                                               onChange={inputChangeValue}
                                               value={inputValue.signUpEmail}
                                        />
                                    </div>
                                    <div className={"mb-3"}>
                                        <label className={"form-label"} htmlFor={"signUpPassword"}>Password</label>
                                        <input name={"password"} required={true} type={"password"}
                                               className={"form-control"} id={"signUpPassword"}
                                               onChange={inputChangeValue}
                                               value={inputValue.signUpPassword}
                                        />
                                    </div>
                                    <div className={"mb-3"}>
                                        <label className={"form-label"} htmlFor={"signUpPasswordR"}>Repeat
                                            Password</label>
                                        <input name={"password"} required={true} type={"password"}
                                               className={"form-control"} id={"signUpPasswordR"}
                                               onChange={inputChangeValue}
                                               value={inputValue.signUpPasswordR}
                                        />
                                        <i className={"text-danger mt-1"}>{validation}</i>
                                    </div>
                                    <button className={"btn btn-primary"}>Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpModal;