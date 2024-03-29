import React from "react";

import Jumbotron from './components';

import jumbo from "../../fixtures/jumbo.json";

import {Direction} from "./@types";

export const JumbotronContainer: React.FunctionComponent = () => {
    return (
        <Jumbotron.Container>
            {
                jumbo.map((item) => (
                    <Jumbotron key={item.id} direction={item.direction as Direction}>
                        <Jumbotron.Pane>
                            <Jumbotron.Title>{item.title}</Jumbotron.Title>
                            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                        </Jumbotron.Pane>
                        <Jumbotron.Pane>
                            <Jumbotron.Image src={item.image} alt={item.alt}/>
                        </Jumbotron.Pane>
                    </Jumbotron>
                ))
            }
        </Jumbotron.Container>
    )
}