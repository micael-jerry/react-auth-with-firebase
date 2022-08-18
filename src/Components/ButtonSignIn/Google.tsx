import React from "react";
import {GoogleAuthProvider} from 'firebase/auth';
import {googleProvider} from "../../firebase/method";
import socialMediaAuth from "../../firebase/authentification";

const Google: React.FC<{ setCurrentUser: any, disableModal: any }> = (props) => {
    const {setCurrentUser, disableModal} = props;
    const handleClick = (provider: GoogleAuthProvider) => {
        const res = socialMediaAuth(provider);
        console.log(res);
    }
    return (
        <>
            <button className={"btn btn-primary"} onClick={() => {
                handleClick(googleProvider);
            }}>Google
            </button>
        </>
    )
}
export default Google;
