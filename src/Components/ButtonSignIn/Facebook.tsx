import React from "react";
import {FacebookAuthProvider} from 'firebase/auth';
import {facebookProvider} from "../../firebase/method";
import socialMediaAuth from "../../firebase/authentification";

const Facebook: React.FC<{ setCurrentUser: any,disableModal:any }> = (props) => {
    const {setCurrentUser,disableModal} = props;
    const handleClick = (provider: FacebookAuthProvider) => {
        const res = socialMediaAuth(provider);
        console.log(res);
    }
    return (
        <>
            <button className={"btn btn-primary"} onClick={() => {
                handleClick(facebookProvider);
            }}>Facebook
            </button>
        </>
    )
}
export default Facebook;
