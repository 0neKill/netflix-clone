import React from "react";

import OptForm from "./components";

export const OptFormContainer: React.FunctionComponent = () => {
    return (
        <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Break/>
            <OptForm.Input placeholder='Email address'/>
            <OptForm.Button>Try it now</OptForm.Button>
        </OptForm>
    )
}