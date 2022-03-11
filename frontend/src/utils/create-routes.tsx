import {IRoutes} from "./routes";
import {Route} from "react-router-dom";
import React from "react";

export const createRoutes = (routes: IRoutes[]) => (
    routes.map(({path, Element}) => (
        <Route key={path} path={path} element={<Element/>}/>
    ))
)



