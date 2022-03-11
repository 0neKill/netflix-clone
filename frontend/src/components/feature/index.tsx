import React from "react";
import Feature from "./components";


export const FeatureContainer: React.FunctionComponent = ({children}) => {
    return (
        <Feature>
            <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
            <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
            {children}
        </Feature>
    )

}