import React from "react";
import Card from "./components";
import {Slide} from "./@types";
import {PlayerContainer} from "../player";

interface IProps {
    slides: Array<Slide>
}

export const CardContainer: React.FunctionComponent<IProps> = ({slides}) => {
    return (
        <Card.Group>
            {
                slides.map(slide => (
                    <Card key={slide.id}>
                        <Card.Title>{slide.title}</Card.Title>
                        <Card.Entities>
                            {
                                slide.items.map(item => (
                                    <Card.Item key={item.id} item={item}>
                                        <Card.Image src={item.images.small} alt={item.title}/>
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                ))
                            }
                        </Card.Entities>
                        <Card.Feature>
                            <PlayerContainer/>
                        </Card.Feature>
                    </Card>
                ))
            }
        </Card.Group>
    )
}