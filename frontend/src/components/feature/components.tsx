import React from "react";

import {Container, Title, SubTitle} from './styles';

export default function Feature({children}: React.PropsWithChildren<unknown>) {
    return <Container>{children}</Container>
}

Feature.Title = function FeatureTitle({children}: React.PropsWithChildren<unknown>) {
    return <Title>{children}</Title>
}
Feature.SubTitle = function FeatureSubTitle({children}: React.PropsWithChildren<unknown>) {
    return <SubTitle>{children}</SubTitle>
}