import React from "react";
import Player from "./components";


export const PlayerContainer: React.FunctionComponent = () => {
    return (
        <Player>
            <Player.Button/>
            <Player.Video src='/videos/bunny.mp4'/>
        </Player>
    )
}