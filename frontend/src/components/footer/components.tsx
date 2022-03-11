import React from "react";
import {ILink, } from "./@types";
import {Container, Row, Link, Text, Title, Column, Break} from "./styles";


export default function Footer({children}: React.PropsWithChildren<unknown>) {
    return <Container>{children}</Container>
}


Footer.Row = function FooterRow({children}: React.PropsWithChildren<unknown>) {
    return <Row>{children}</Row>
}


Footer.Column = function FooterColumn({children}: React.PropsWithChildren<unknown>) {
    return <Column>{children}</Column>
}

Footer.Link = function FooterLink({children, href}: React.PropsWithChildren<ILink>) {
    return <Link href={href}>{children}</Link>
}

Footer.Title = function FooterTitle({children}: React.PropsWithChildren<unknown>) {
    return <Title>{children}</Title>
}

Footer.Text = function FooterText({children}: React.PropsWithChildren<unknown>) {
    return <Text>{children}</Text>
}
Footer.Break = function FooterBreak({children}: React.PropsWithChildren<unknown>) {
    return <Break>{children}</Break>
}