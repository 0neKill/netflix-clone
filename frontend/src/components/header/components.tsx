import React from "react";
import {Link} from 'react-router-dom';
import {ILogo, IPicture, IProps, IRoutes, ITextLink, ISearch} from "./@types";
import {
    Background,
    Logo,
    Container,
    ButtonLink,
    Feature,
    Text,
    FeatureCallOut,
    TextLink,
    Group,
    Picture,
    Profile,
    Dropdown,
    Search,
    SearchIcon,
    SearchInput,
    PlayButton
} from "./styles";


export default function Header({bg = true, src, dontShowOnSmallViewPort, children}: React.PropsWithChildren<IProps>) {
    return bg ? <Background src={src}
                            dontShowOnSmallViewPort={dontShowOnSmallViewPort}>{children}</Background> : <>{children}</>;
}

Header.Frame = function HeaderFrame({children}: React.PropsWithChildren<unknown>) {
    return <Container>{children}</Container>
}
Header.Search = function HeaderSearch({searchTerm, handlerChangeSearchTerm}: React.PropsWithChildren<ISearch>) {
    const [isActive, setIsActive] = React.useState<boolean>(false);

    const handlerIsActiveSearch = () => setIsActive(isActive => !isActive);
    console.log(isActive)
    return (
        <Search>
            <SearchIcon onClick={handlerIsActiveSearch}>
                <img src='/images/icons/search.png' alt='Search'/>
            </SearchIcon>
            <SearchInput value={searchTerm}
                         onChange={e => handlerChangeSearchTerm(e.target.value)}
                         placeholder='Search films and series'
                         active={isActive}
            />
        </Search>
    )
}
Header.Group = function HeaderGroup({children}: React.PropsWithChildren<unknown>) {
    return <Group>{children}</Group>
}
Header.Profile = function HeaderProfile({children}: React.PropsWithChildren<unknown>) {
    return <Profile>{children}</Profile>
}
Header.Dropdown = function HeaderDropdown({children}: React.PropsWithChildren<unknown>) {
    return <Dropdown>{children}</Dropdown>
}

Header.Picture = function HeaderPicture({src}: React.PropsWithChildren<IPicture>) {
    return <Picture src={src}/>
}

Header.Feature = function HeaderFeature({children}: React.PropsWithChildren<unknown>) {
    return <Feature>{children}</Feature>
}
Header.FeatureCallOut = function HeaderFeatureCallOut({children}: React.PropsWithChildren<unknown>) {
    return <FeatureCallOut>{children}</FeatureCallOut>
}

Header.Text = function HeaderText({children}: React.PropsWithChildren<unknown>) {
    return <Text>{children}</Text>
}
Header.TextLink = function HeaderTextLink({children, active}: React.PropsWithChildren<ITextLink>) {
    return <TextLink active={active}>{children}</TextLink>
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
Header.PlayButton = function HeaderPlayButton({children}: React.PropsWithChildren<unknown>) {
    return <PlayButton>{children}</PlayButton>
}
