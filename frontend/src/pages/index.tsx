import React from "react";
import {BrowserRouter, Route, Routes,} from "react-router-dom";

import {private_routes, public_routes} from "../utils/routes";
import {createRoutes} from "../utils/create-routes";
import {ROUTES} from "../constants/routes";

import {NotFound} from "./not-found";
import {Suspense} from "../hoc/suspense";


const PublishedRoute = React.lazy(() => import('./published'))
const ProtectedRoute = React.lazy(() => import('./protected'))

export const Pages: React.FunctionComponent = () => {
    const isAuth: boolean = true;

    const publicRoutes = createRoutes(public_routes);
    const protectedRoutes = createRoutes(private_routes);


    return (
        <BrowserRouter>
            <Routes>
                <Route element={
                    <Suspense>
                        <PublishedRoute isAuth={isAuth} redirect={ROUTES.BROWSE}/>
                    </Suspense>
                }>
                    {publicRoutes}
                </Route>
                <Route element={
                    <Suspense>
                        <ProtectedRoute isAuth={isAuth} redirect={ROUTES.SING_IN}/>
                    </Suspense>
                }>
                    {protectedRoutes}
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
