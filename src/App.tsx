import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/home/Home";
import Navbar from "./Components/Navbar";
import Modal from "./Components/modal/Modal";
import {typeModalState} from "./types";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth' ;
import {auth} from "./firebase-config";

const App: React.FC = () => {
    const [modalState, setModalState] = useState<typeModalState>({
        signUpModalState: false,
        singInModalState: false
    });

    const [currentUser, setCurrentUser] = useState<any>();

    const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password)

    return (
        <>
            <Modal modalState={modalState} changeModalState={setModalState} signUp={signUp}/>
            <Navbar changeModalState={setModalState}/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
            </Routes>
        </>
    );
}

export default App;
