import React from "react";
import {typeModalState} from "../../types";
import {auth} from "../../firebase/firebase-config";
import {signOut} from 'firebase/auth';
import {Link} from "react-router-dom";

const Navbar: React.FC<{ changeModalState: (param: typeModalState) => any, currentUser: any }> = (props) => {
    const {changeModalState,currentUser} = props;

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            alert(err);
        }
    }
    const changeModal = (modal: string): void => {
        switch (modal) {
            case 'singIn' : {
                changeModalState({
                    signUpModalState: false,
                    singInModalState: true
                })
                break;
            }
            case 'singUp' : {
                changeModalState({
                    signUpModalState: true,
                    singInModalState: false
                })
                break;
            }
            default : {
                changeModalState({
                    signUpModalState: false,
                    singInModalState: false
                })
                break;
            }
        }
    }

    return (
        <nav className={"navbar position-fixed top-0 vw-100 navbar-dark bg-dark px-4"}>
            <Link to={"/"} className={"navbar-brand"}>FirebaseAuth</Link>
            <div>
                {
                    !currentUser ? (
                        <>
                            <button className={"btn btn-outline-light"} onClick={() => {
                                changeModal("singUp")
                            }}>Sign Up
                            </button>
                            <button className={"btn btn-outline-light ms-3"} onClick={() => {
                                changeModal("singIn")
                            }}>Sign In
                            </button>
                        </>
                    ) : (
                        <>
                            <button className={"btn btn-outline-danger ms-3"} onClick={() => {
                                logOut()
                            }}>Log Out
                            </button>
                        </>
                    )
                }
            </div>
        </nav>
    )

}

export default Navbar;
