import {auth} from "./firebase-config";
import {signInWithPopup} from 'firebase/auth';
import {FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';

const socialMediaAuth = (provider: FacebookAuthProvider | GoogleAuthProvider | GithubAuthProvider) => {
    return signInWithPopup(auth, provider)
        .then((res) => {
            return res.user;
        })
        .catch((err) => {
            return err;
        })
}

export default socialMediaAuth;
