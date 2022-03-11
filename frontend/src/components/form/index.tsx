import React from "react";
import Form from "./components";


interface IProps {
    title: 'Sing In' | 'Sing Up',
    error: string,

}

export const FormContainer: React.FunctionComponent<IProps> = ({title, error, children}) => {

    return (
        <Form>
            <Form.Title>{title}</Form.Title>
            {error && <Form.Error>{error}</Form.Error>}
            {children}
            <Form.TextSmall>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
            </Form.TextSmall>
        </Form>
    )
}