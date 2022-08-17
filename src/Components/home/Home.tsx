import React from "react";
import logo from '../../logo.svg'
import './Home.css'

const Home: React.FC<{ currentUser: any }> = (props) => {
    const {currentUser} = props;
    return (
        <div className="App">
            <header className="App-header">
                {
                    currentUser ? (
                        <>
                            <p>Authentication using <code>Firebase Auth</code> and <code>React</code></p>
                            <p>VOUS ETES CONNECTEZ EN TANT QUE <code>{currentUser.email}</code></p>
                        </>
                    ) : (
                        <p>
                            Authentication using <code>Firebase Auth</code> and <code>React</code>
                            <p>VEILLEZ VOUS CONNECTEZ OU CREE UN COMPTE</p>
                        </p>
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
