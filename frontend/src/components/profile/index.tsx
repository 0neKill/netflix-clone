import React from "react";
import Header from "../header/components";
import {ROUTES} from "../../constants/routes";
import logo from "../../assets/logo.svg";
import Profiles from "./components";

export const ProfileContainer: React.FunctionComponent = () => {
    return (
        <>
            <Header>
                <Header.Frame>
                    <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix logo'/>
                </Header.Frame>
            </Header>
            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User>
                        <Profiles.Picture
                            src='https://ilarge.lisimg.com/image/15838931/740full-dasha-taran-%28ii%29.jpg'/>
                        <Profiles.Name>Test user</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}