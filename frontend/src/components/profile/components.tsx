import React from 'react';
import {Container, List, Item, Title, Picture, Name} from './styles';
import {IPicture} from "./@types";


export default function Profiles({children}: React.PropsWithChildren<unknown>) {
    return <Container>{children}</Container>
}

Profiles.Title = function ProfilesTitle({children}: React.PropsWithChildren<unknown>) {
    return <Title>{children}</Title>
}

Profiles.List = function ProfilesList({children}: React.PropsWithChildren<unknown>) {
    return <List>{children}</List>
}
Profiles.User = function ProfilesUser({children}: React.PropsWithChildren<unknown>) {
    return <Item>{children}</Item>
}
Profiles.Picture = function ProfilesUser({children, src}: React.PropsWithChildren<IPicture>) {
    return <Picture src={src || `/images/misc/loading.gif`}/>
}
Profiles.Name = function ProfilesUser({children}: React.PropsWithChildren<unknown>) {
    return <Name>{children}</Name>
}