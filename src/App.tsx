import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/modal/SignUp";

function App() {
    return (
        <>
            <Navbar/>
            <SignUp/>
            <Routes>
                <Route path={"/"} element={<Home/>}></Route>
            </Routes>
        </>
    );
}

export default App;
