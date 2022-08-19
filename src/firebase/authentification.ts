import {auth} from "./firebase-config";
import {signInWithPopup} from 'firebase/auth';
import {FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';

const signInWithProvider = (provider: FacebookAuthProvider | GoogleAuthProvider | GithubAuthProvider) => {
    return signInWithPopup(auth, provider)
        .then((res) => {
            return res.user;
        })
        .catch((err) => {
            alert("ERROR signInWithPopup");
            return err;
        })
}

export default signInWithProvider;
