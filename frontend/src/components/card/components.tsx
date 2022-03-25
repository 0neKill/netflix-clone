import React from "react";

import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Meta,
    Item,
    Image,
    Entities,
    Feature,
    FeatureClose,
    FeatureText,
    FeatureTitle,
    Content,
    Maturity
} from './styles';

import {ICardItem, ItemType, IFeatureCardContext, IImage} from "./@types";


const FeatureCardContext = React.createContext<IFeatureCardContext>({} as IFeatureCardContext);

export default function Card({children}: React.PropsWithChildren<unknown>) {
    const [itemFeature, setItemFeature] = React.useState<ItemType>({} as ItemType);
    const [isShowFeature, setIsShowFeature] = React.useState<boolean>(false);
    return (
        <FeatureCardContext.Provider value={{
            itemFeature,
            isShowFeature,
            setItemFeature,
            setIsShowFeature
        }}>
            <Container>{children}</Container>
        </FeatureCardContext.Provider>
    )
}

Card.Group = function CardGroup({children}: React.PropsWithChildren<unknown>) {
    return <Group>{children}</Group>
}
Card.Title = function CardTitle({children}: React.PropsWithChildren<unknown>) {
    return <Title>{children}</Title>
}
Card.SubTitle = function CardSubTitle({children}: React.PropsWithChildren<unknown>) {
    return <SubTitle>{children}</SubTitle>
}
Card.Text = function CardText({children}: React.PropsWithChildren<unknown>) {
    return <Text>{children}</Text>
}

Card.Entities = function CardEntities({children}: React.PropsWithChildren<unknown>) {
    return <Entities>{children}</Entities>
}

Card.Meta = function CardMeta({children}: React.PropsWithChildren<unknown>) {
    return <Meta>{children}</Meta>
}

Card.Feature = function CardFeature({children}: React.PropsWithChildren<unknown>) {
    const {isShowFeature, itemFeature, setIsShowFeature} = React.useContext<IFeatureCardContext>(FeatureCardContext);
    console.log(isShowFeature)
    return isShowFeature ?
        <Feature src={itemFeature.images.large}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setIsShowFeature(false)}>
                    <img src='/images/icons/close.png' alt='close'/>
                </FeatureClose>
                <Group margin='30px 0' flexDirection='row' alignItems='center'>
                    <Maturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight='bold'>
                        {
                            itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)
                        }
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature> : null;
}

Card.Item = function CardItem({item, children}: React.PropsWithChildren<ICardItem>) {
    const {setItemFeature, setIsShowFeature} = React.useContext<IFeatureCardContext>(FeatureCardContext);
    const handlerOnClick = () => {
        console.log('Item')
        setItemFeature(item);
        setIsShowFeature(true);
    }
    return <Item onClick={handlerOnClick}>{children}</Item>
}

Card.Image = function CardImage({src, alt}: React.PropsWithChildren<IImage>) {
    return <Image src={src} alt={alt}/>
}
