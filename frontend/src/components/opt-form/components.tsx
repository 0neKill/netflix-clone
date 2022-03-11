import React from "react";
import {Container, Input, Button, Text, Break} from "./styles";
import {IInput} from "./@types";

export default function OptForm({children}: React.PropsWithChildren<unknown>) {
    return <Container>{children}</Container>
}

OptForm.Input = function OptFormInput({placeholder}: React.PropsWithChildren<IInput>) {
    return <Input placeholder={placeholder}/>
}
OptForm.Button = function OptFormButton({children}: React.PropsWithChildren<unknown>) {
    return <Button>
        {children} <img src='/images/icons/chevron-right.png' alt='Try Now'/>
    </Button>
}

OptForm.Text = function OptFormText({children}: React.PropsWithChildren<unknown>) {
    return <Text>{children}</Text>
}

OptForm.Break = function OptFormBreak() {
    return <Break/>
}