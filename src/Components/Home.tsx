import React from "react";
import logo from '../logo.svg'
import '../App.css'

const Home: React.FC<{}> = (props) => {
    return (
        // <div className={"container p-5"}>
        //     <h1 className={"display-2"}>Sign up or Sign in</h1>
        // </div>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Authentication using <code>Firebase Auth</code> and <code>React</code>
                </p>
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
