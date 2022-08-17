import React, {useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Modal from "./Components/modal/Modal";
import {typeModalState} from "./types";
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {auth} from "./firebase-config";
import Private from "./Components/pages/private/Private";
import PrivateHome from "./Components/pages/private/privateHome/PrivateHome";
import firebase from "firebase/compat";

const App: React.FC = () => {
    const [modalState, setModalState] = useState<typeModalState>({
        signUpModalState: false,
        singInModalState: false
    });

    const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

    const [currentUser, setCurrentUser] = useState<any>();
    const [loadingData, setLoadingData] = useState<boolean>(true);

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
                    <Modal modalState={modalState} changeModalState={setModalState} signUp={signUp}/>
                    <Navbar changeModalState={setModalState}/>
                    <Routes>
                        <Route path={"/"} element={<Home currentUser={currentUser} />}></Route>
                        <Route path={"/private"} element={<Private currentUser={currentUser}/>}>
                            <Route path={"/private/private-home"} element={<PrivateHome/>}></Route>
                        </Route>
                    </Routes>
                </>
            )}
        </>
    );
}

export default App;
