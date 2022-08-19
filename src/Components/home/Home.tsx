import React from "react";
import './Home.css'
import {useNavigate} from "react-router-dom";

const Home: React.FC<{ currentUser: any }> = (props) => {
    const {currentUser} = props;
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <p>Authentication using <code>Firebase Auth</code> and <code>React</code></p>
                {
                    currentUser ? (
                        <p>YOU ARE LOGGED IN AS <code>{currentUser.email}</code></p>
                    ) : (
                        <p>PLEASE LOG IN OR CREATE AN ACCOUNT</p>
                    )
                }
                {
                    !currentUser ? (
                        <button className={"btn btn-outline-light btn-lg"} disabled>Private Home</button>
                    ) : (
                        <button className={"btn btn-outline-light btn-lg"} onClick={() => {
                            navigate("/private/private-home");
                        }}>Private Home</button>
                    )
                }
            </header>
        </div>
    )
}

export default Home;
