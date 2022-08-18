import React from "react";
import logo from '../../logo.svg';
import './Home.css'

const Home: React.FC<{ currentUser: any }> = (props) => {
    const {currentUser} = props;
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
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default Home;
