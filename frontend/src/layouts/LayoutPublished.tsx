import React from "react";
import {AccordingContainer, FooterContainer, HeaderContainer, JumbotronContainer} from "../components";
import {useLocation} from "react-router-dom";

export const LayoutPublished: React.FunctionComponent = ({children}) => {
    const location = useLocation();
    const isHome: boolean = location.pathname === '/';

    return (
        <>
            <HeaderContainer>
                {children}
            </HeaderContainer>
            {
                isHome && (
                    <>
                        <JumbotronContainer/>
                        <AccordingContainer/>
                    </>
                )
            }

            <FooterContainer/>
        </>
    )
}