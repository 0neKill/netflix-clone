import React from "react";
import {Navigate, Outlet} from "react-router-dom";

import {ROUTES} from "../../constants/routes";

import {LayoutProtected} from "../../layouts/LayoutProtected";


interface IProps {
    isAuth: boolean,
    redirect: ROUTES,
}

export default function ProtectedRoutes({isAuth, redirect}: React.PropsWithChildren<IProps>) {

    if (!isAuth) {
        return <Navigate to={redirect}/>
    }


    return (
        <LayoutProtected>
            <Outlet/>
        </LayoutProtected>
    )
}