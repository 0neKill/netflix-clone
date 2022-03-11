import React from "react";
import {ICreateInitialState, withFormsTemplate} from "../../../hoc/withForm";
import Form from "../../../components/form/components";
import {ROUTES} from "../../../constants/routes";

const createInitialState = (): ICreateInitialState => ({
    title: 'Sing In',
    initialState: {
        password: '',
        emailAddress: '',
    }
})



export const SingIn =  withFormsTemplate((props) => {

    const {handlerChangeValue, handlerSubmit, password, emailAddress} = props;
    const isValid = password && emailAddress;

    return (
        <>
            <Form.Base handlerSubmit={handlerSubmit}>
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
                    Sing In
                </Form.Submit>
            </Form.Base>
            <Form.Text>
                New to Netflix? <Form.TextLink to={ROUTES.SING_UP}>Sign up now.</Form.TextLink>
            </Form.Text>
        </>
    )
}, createInitialState)
