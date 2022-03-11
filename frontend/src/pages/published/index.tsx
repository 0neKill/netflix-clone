import React from "react";
import {Navigate, Outlet} from "react-router-dom";

import {ROUTES} from "../../constants/routes";

import {LayoutPublished} from "../../layouts/LayoutPublished";


interface IProps {
    isAuth: boolean,
    redirect: ROUTES,
}

export default function PublishedRoutes({isAuth, redirect}: React.PropsWithChildren<IProps>) {

    if (isAuth) {
        return <Navigate to={redirect}/>
    }

    return (
        <LayoutPublished>
            <Outlet/>
        </LayoutPublished>
    )
}