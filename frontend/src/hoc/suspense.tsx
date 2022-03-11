import React from "react";

export const Suspense: React.FunctionComponent = ({children}) => (
    <React.Suspense fallback={<div>loading...</div>}>{children}</React.Suspense>
)