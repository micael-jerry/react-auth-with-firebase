import React, {useEffect, useState} from 'react';
import Home from "./Components/home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Modal from "./Components/modal/Modal";
import {typeModalState} from "./types";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./firebase/firebase-config";
import {Route, Routes} from "react-router-dom";
import PrivateHome from "./Components/Private/privateHome/PrivateHome";
import Private from "./Components/Private/Private";

const App: React.FC = () => {
    const [modalState, setModalState] = useState<typeModalState>({
        signUpModalState: false,
        singInModalState: false
    });

    const [currentUser, setCurrentUser] = useState<any>();
    const [loadingData, setLoadingData] = useState<boolean>(true);

    const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

    const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

    useEffect(() => {
        return onAuthStateChanged(auth, (currentUser) => {
            setCurrentUser(currentUser);
            setLoadingData(false);
        });
    }, [])

    return (
        <>
            {!loadingData && (
                <>
                    <Routes>
                        <Route path={"/"} element={<Home currentUser={currentUser}/>}></Route>
                        <Route path={"/private"} element={<Private currentUser={currentUser}/>}>
                            <Route path={"/private/private-home"} element={<PrivateHome/>}></Route>
                        </Route>
                    </Routes>
                    <Modal modalState={modalState} changeModalState={setModalState} signUp={signUp} signIn={signIn}
                           setCurrentUser={setCurrentUser}/>
                    <Navbar changeModalState={setModalState} currentUser={currentUser}/>
                </>
            )}
        </>
    );
}

export default App;
