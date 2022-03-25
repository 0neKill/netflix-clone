import React from "react";
import Header from "../../../components/header/components";
import {ROUTES} from "../../../constants/routes";
import logo from "../../../assets/logo.svg";
import {CardContainer, FooterContainer} from "../../../components";
import {Slide} from "../../../components/card/@types";
import Fuse from "fuse.js";


export const Browse: React.FunctionComponent = () => {
    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [filterSlides, setFilterSlides] = React.useState<Array<Slide>>(slidesTest);


    const handlerChangeSearchTerm = (value: string) => {
        const results = slidesTest.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilterSlides(results)
        setSearchTerm(value)
    };

    return (
        <>
            <Header src='joker1' dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt='Netflix logo'/>
                        <Header.TextLink>Series</Header.TextLink>
                        <Header.TextLink>Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search searchTerm={searchTerm}
                                       handlerChangeSearchTerm={handlerChangeSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture
                                src='https://ilarge.lisimg.com/image/15838931/740full-dasha-taran-%28ii%29.jpg'
                            />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture
                                        src='https://ilarge.lisimg.com/image/15838931/740full-dasha-taran-%28ii%29.jpg'
                                    />
                                    <Header.TextLink>user</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink>Sing out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the
                        streets of Gotham City. Arthur wears two masks — the one he paints for his day job as a clown,
                        and
                        the guise he projects in a futile attempt to feel like he's part of the world around
                        him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <CardContainer slides={filterSlides}/>
            <FooterContainer/>
        </>
    )
}
const slidesTest: Array<Slide> = [
    {
        id: '1', title: 'Documentaries', items: [
            {
                id: '1',
                title: 'Tiger King',
                description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
                genre: 'documentaries',
                maturity: 12,
                slug: 'tiger-king',
                images: {
                    large: '/images/series/documentaries/tiger-king/large.jpg',
                    small: '/images/series/documentaries/tiger-king/small.jpg'
                }
            },
        ]
    },
    {
        id: '2', title: 'Comedies', items: [
            {
                id: '1',
                title: 'The Office',
                description:
                    'A motley group of office workers go through hilarious misadventures at the Scranton, Pennsylvania, branch of the Dunder Mifflin Paper Company.',
                genre: 'comedies',
                maturity: 15,
                slug: 'the-office',
                images: {
                    large: '/images/series/comedies/the-office/large.jpg',
                    small: '/images/series/comedies/the-office/small.jpg'
                }
            },
        ]
    },

]