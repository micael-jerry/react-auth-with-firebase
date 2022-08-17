import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const Private: React.FC<{ currentUser: any }> = (props) => {
    const {currentUser} = props;
    return (
        <>
            {
                !currentUser ? (
                    <Navigate to={"/"}/>
                ) : (
                    <Outlet/>
                )
            }
        </>
    )
}
export default Private;
