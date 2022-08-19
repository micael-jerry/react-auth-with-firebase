import React from "react";
import {Navigate, Outlet} from "react-router-dom";

const Private: React.FC<{ currentUser: any }> = (props) => {
    const {currentUser} = props;
    if (!currentUser) {
        return <Navigate to={"/"}/>
    }
    return (
        <>
            <Outlet/>
        </>
    )
}
export default Private;
