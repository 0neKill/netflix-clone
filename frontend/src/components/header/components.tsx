import React from "react";
import {Link} from 'react-router-dom';
import {ILogo, IProps, IRoutes} from "./@types";
import {Background, Logo, Container, ButtonLink} from "./styles";


export default function Header({bg = true, src, children}: React.PropsWithChildren<IProps>) {
    return bg ? <Background src={src}>{children}</Background> : <>{children}</>;
}

Header.Frame = function HeaderFrame({children}: React.PropsWithChildren<unknown>) {
    return <Container>{children}</Container>
}
Header.Logo = function HeaderLogo({to, alt, src}: React.PropsWithChildren<ILogo>) {
    return (
        <Link to={to}>
            <Logo src={src} alt={alt}/>
        </Link>
    )
}
Header.ButtonLink = function HeaderButtonLink({children, to}: React.PropsWithChildren<IRoutes>) {
    return <ButtonLink to={to}>{children}</ButtonLink>
}