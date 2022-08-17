import React from "react";
import {Link} from "react-router-dom";

const Navbar: React.FC<{}> = (props) => {
    return (
        <nav className={"navbar navbar-dark bg-dark px-4"}>
            <Link to={"/"} className={"navbar-brand"}>Navbar</Link>
            <div>
                <button className={"btn btn-secondary"}>Sign Up</button>
                <button className={"btn btn-secondary ms-3"}>Sign In</button>
                <button className={"btn btn-secondary ms-3"}>Log Out</button>
            </div>
        </nav>
    )

}

export default Navbar;
