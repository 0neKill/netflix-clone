import React from "react";
import {ILoading} from "./@types";
import {Spinner, LockBody, Picture, ReleaseBody} from './styles';

export default function Loading({src}: React.PropsWithChildren<ILoading>) {
    return (
        <Spinner>
            <LockBody/>
            <Picture src={src}/>
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody/>
}