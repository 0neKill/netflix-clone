import React from "react";


import Header from "./components";

import logo from '../../assets/logo.svg';

import {ROUTES} from "../../constants/routes";

export const HeaderContainer: React.FunctionComponent = ({children}) => {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix logo'/>
                <Header.ButtonLink to={ROUTES.SING_IN}>Sing in</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}