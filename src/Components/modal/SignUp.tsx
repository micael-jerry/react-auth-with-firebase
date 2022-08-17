import React from "react";
import './SignUp.css'

const SignUp: React.FC<{}> = (props) => {
    return (
        <>
            <div className={"position-fixed top-0 vw-100 vh-100"}>
                <div className={"w-100 vh-100 bg-dark bg-opacity-75"}>
                    <div className={"position-absolute top-50 start-50 translate-middle sign-up-modal"}>
                        <div className={"modal-dialog"}>
                            <div className={"modal-content"}>
                                <div className={"modal-header"}>
                                    <h5 className={"modal-title"}>Sign Up</h5>
                                    <button className={"btn-close"}></button>
                                </div>
                                <div className={"modal-body"}>
                                    <form className={"sign-up-form"}>
                                        <div className={"mb-3"}>
                                            <label className={"form-label"} htmlFor={"signUpEmail"}>Email adress</label>
                                            <input name={"email"} required={true} type={"email"}
                                                   className={"form-control"} id={"signUpEmail"}/>
                                        </div>
                                        <div className={"mb-3"}>
                                            <label className={"form-label"} htmlFor={"signUpPassword"}>Password</label>
                                            <input name={"password"} required={true} type={"password"}
                                                   className={"form-control"} id={"signUpPassword"}/>
                                        </div>
                                        <div className={"mb-3"}>
                                            <label className={"form-label"} htmlFor={"signUpPasswordR"}>Repeat
                                                Password</label>
                                            <input name={"password"} required={true} type={"password"}
                                                   className={"form-control"} id={"signUpPasswordR"}/>
                                        </div>
                                        <p className={"text-danger mt-1"}>Validation</p>
                                    </form>
                                    <button className={"btn btn-primary"}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
