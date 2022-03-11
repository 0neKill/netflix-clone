import React from "react";
import {ROUTES} from "../constants/routes";
import {Home, SingIn, SingUp} from "../pages/published/modules";
import {Browse} from "../pages/protected/modules";


export interface IRoutes {
    path: ROUTES,
    Element: React.FunctionComponent
}

export const public_routes: Array<IRoutes> = [
    {
        path: ROUTES.HOME,
        Element: Home
    },
    {
        path: ROUTES.SING_IN,
        Element: SingIn
    },
    {
        path: ROUTES.SING_UP,
        Element: SingUp
    },
]

export const private_routes: Array<IRoutes> = [{
    path: ROUTES.BROWSE,
    Element: Browse,
}]