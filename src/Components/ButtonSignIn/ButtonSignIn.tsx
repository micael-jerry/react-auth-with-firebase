import React from "react";
import {FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider} from "firebase/auth";
import signInWithProvider from "../../firebase/authentification";
import {facebookProvider, githubProvider, googleProvider} from "../../firebase/providers";

const ButtonSignIn:React.FC<{disableModal: () => void,setCurrentUser:any }> = (props) => {
    const {disableModal,setCurrentUser} = props;
    const handleClick = async (provider: GoogleAuthProvider | FacebookAuthProvider | GithubAuthProvider) => {
        const res = await signInWithProvider(provider);
        await setCurrentUser(res);
        await disableModal();
    }
    return (
        <div className={"d-flex justify-content-center align-items-center"}>
            <button className={"btn btn-google m-3"} onClick={() => {
                handleClick(googleProvider);
            }}>Google
            </button>
            <button className={"btn btn-facebook m-3"} onClick={() => {
                handleClick(facebookProvider);
            }}>Facebook
            </button>
            <button className={"btn btn-github m-3"} onClick={() => {
                handleClick(githubProvider);
            }}>Github
            </button>
        </div>
    )
}
export default ButtonSignIn;
