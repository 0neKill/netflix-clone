import React from "react";
import Loading from "./components";

interface IProps {
    src: string,
    loading: boolean,
}

export const LoadingContainer: React.FunctionComponent<IProps> = ({src, loading}) => {
    return (
        <>
            {
                loading ? <Loading src={src}/> : <Loading.ReleaseBody/>
            }
        </>
    )
}