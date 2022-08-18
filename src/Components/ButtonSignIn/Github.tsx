import React from "react";
import {GithubAuthProvider} from 'firebase/auth';
import {githubProvider} from "../../firebase/method";
import socialMediaAuth from "../../firebase/authentification";

const Github: React.FC<{ setCurrentUser: any,disableModal:any }> = (props) => {
    const {setCurrentUser,disableModal} = props;
    const handleClick = async (provider: GithubAuthProvider) => {
        const res = await socialMediaAuth(provider);
        await setCurrentUser(res);
        await disableModal();
    }
    return (
        <>
            <button className={"btn btn-primary"} onClick={() => {
                handleClick(githubProvider);
            }}>Github
            </button>
        </>
    )
}
export default Github;
