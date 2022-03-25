import React from "react";
import {createPortal} from 'react-dom';

import {Container, Overlay, Inner, Button, Close} from './styles';

import {IPlayerVideo} from './@types';

interface IPlayerContext {
    isShowPlayer: boolean,
    setShowPlayer: (bool: ((bool: boolean) => boolean) | boolean) => void,
}

const PlayerContext = React.createContext<IPlayerContext>({} as IPlayerContext);

export default function Player({children}: React.PropsWithChildren<unknown>) {
    const [isShowPlayer, setShowPlayer] = React.useState<boolean>(false);


    return (
        <PlayerContext.Provider value={{isShowPlayer, setShowPlayer}}>
            <Container>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({src, children}: React.PropsWithChildren<IPlayerVideo>) {
    const {isShowPlayer, setShowPlayer} = React.useContext<IPlayerContext>(PlayerContext);

    return isShowPlayer ? createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid='player'>
            <Inner>
                <video id='player' controls onClick={(e) => e.stopPropagation()}>
                    <source src={src} type='video/mp4'/>
                </video>
                <Close/>
            </Inner>
        </Overlay>, document.body
    ) : null;
}

Player.Button = function PlayerButton({children}: React.PropsWithChildren<unknown>) {
    const {setShowPlayer} = React.useContext<IPlayerContext>(PlayerContext);
    return <Button onClick={() => setShowPlayer(bool => !bool)}>Play</Button>
}