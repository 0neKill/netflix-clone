import React from "react";

import {Container, Base, Error, Title, Text, TextSmall, Link, Input, Submit} from './styles';
import {IBase, ILink, ISubmit, ITextInput} from "./@types";


export default function Form({children}: React.PropsWithChildren<unknown>) {
    return <Container>{children}</Container>
}

Form.Base = function FormBase({children, handlerSubmit}: React.PropsWithChildren<IBase>) {
    return <Base onSubmit={handlerSubmit}>{children}</Base>
}
Form.Error = function FormError({children}: React.PropsWithChildren<unknown>) {
    return <Error>{children}</Error>
}
Form.Title = React.memo(function FormTitle({children}: React.PropsWithChildren<unknown>) {
    return <Title>{children}</Title>
})
Form.Text = function FormText({children}: React.PropsWithChildren<unknown>) {
    return <Text>{children}</Text>
}
Form.TextSmall = React.memo(function FormTextSmall({children}: React.PropsWithChildren<unknown>) {
    return <TextSmall>{children}</TextSmall>
})
Form.TextLink = function FormLink({children, to}: React.PropsWithChildren<ILink>) {
    return <Link to={to}>{children}</Link>
}
Form.TextInput = React.memo(function FormInput({
                                                   children,
                                                   type,
                                                   onChange,
                                                   value,
                                                   placeholder
                                               }: React.PropsWithChildren<ITextInput>) {
    return <Input placeholder={placeholder} type={type} onChange={onChange} value={value}>{children}</Input>
})
Form.Submit = function FormSubmit({children, type, disable}: React.PropsWithChildren<ISubmit>) {
    return <Submit type={type} disabled={disable}>{children}</Submit>
}
