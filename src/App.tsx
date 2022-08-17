import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/home/Home";
import Navbar from "./Components/Navbar";
import Modal from "./Components/modal/Modal";
import {typeModalState} from "./types";

const App: React.FC = () => {
    const [modalState, setModalState] = useState<typeModalState>({
        signUpModalState: false,
        singInModalState: false
    });
    return (
        <>
            <Modal modalState={modalState} changeModalState={setModalState}/>
            <Navbar changeModalState={setModalState}/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
            </Routes>
        </>
    );
}

export default App;
