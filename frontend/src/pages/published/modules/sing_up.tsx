import React from "react";
import {ICreateInitialState, withFormsTemplate} from "../../../hoc/withForm";
import Form from "../../../components/form/components";
import {ROUTES} from "../../../constants/routes";

const createInitialState = (): ICreateInitialState => ({
    title: 'Sing Up',
    initialState: {
        password: '',
        emailAddress: '',
        firstName: '',
    }
})

export const SingUp = withFormsTemplate((props) => {

    const {handlerChangeValue, handlerSubmit, password, emailAddress, firstName} = props;
    const isValid = password && emailAddress && firstName;

    return (
        <>
            <Form.Base handlerSubmit={handlerSubmit}>
                <Form.TextInput type="text"
                                placeholder='First Name'
                                value={firstName!}
                                onChange={handlerChangeValue('firstName')}/>
                <Form.TextInput type="email"
                                placeholder='Email Address'
                                value={emailAddress}
                                onChange={handlerChangeValue('emailAddress')}/>
                <Form.TextInput type="password"
                                placeholder='Password'
                                value={password}
                                onChange={handlerChangeValue('password')}
                />
                <Form.Submit disable={!isValid} type='submit'>
                    Sing Up
                </Form.Submit>
            </Form.Base>
            <Form.Text>
                New to Netflix? <Form.TextLink to={ROUTES.SING_IN}>Sign in now.</Form.TextLink>
            </Form.Text>
        </>
    )
}, createInitialState)
