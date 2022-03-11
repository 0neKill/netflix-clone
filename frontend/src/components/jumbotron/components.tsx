import React from "react";

import {Container, Inner, Pane, Title, SubTitle, Image, Item} from './styles';

import {IImage, IProps} from "./@types";

export default function Jumbotron({children, direction = 'row'}: React.PropsWithChildren<IProps>) {
    return (
        <Item>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>

    )
}


Jumbotron.Container = function JumbotronContainer({children}: React.PropsWithChildren<unknown>) {
    return <Container>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children}: React.PropsWithChildren<unknown>) {
    return <Pane>{children}</Pane>
}

Jumbotron.Title = function JumbotronTitle({children}: React.PropsWithChildren<unknown>) {
    return <Title>{children}</Title>
}

Jumbotron.SubTitle = function JumbotronSubTitle({children}: React.PropsWithChildren<unknown>) {
    return <SubTitle>{children}</SubTitle>
}


Jumbotron.Image = function JumbotronImage({children, ...restProps}: React.PropsWithChildren<IImage>) {
    return <Image src={restProps.src} alt={restProps.alt}>{children}</Image>
}



