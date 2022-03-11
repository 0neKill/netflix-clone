import React from "react";
import {FormContainer} from "../components/form";

export interface ICreateInitialState {
    title: 'Sing In' | 'Sing Up',
    initialState: {
        password: string,
        emailAddress: string,
        firstName?: string,
    }
}

type InitialState = ICreateInitialState['initialState'];

interface IHandlerFunction {
    handlerSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
    handlerChangeValue: (field: keyof Omit<InitialState, 'error'>) => (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const withFormsTemplate = <T extends ICreateInitialState>(Wrapper: React.FunctionComponent<InitialState & IHandlerFunction>, createInitialState: () => T): React.FunctionComponent => {

    return () => {
        const {title, initialState} = createInitialState();
        const [value, setValue] = React.useState<InitialState>(initialState);
        const [error, setError] = React.useState<string>('');

        const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setError("This's error")
            //request server
        }

        const handlerChangeValue = (field: keyof Omit<InitialState, 'error'>) => (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setValue(prevState => ({
                ...prevState,
                [field]: value,
            }))
        }

        return (
            <FormContainer title={title} error={error}>
                <Wrapper {...value}
                         handlerSubmit={handlerSubmit}
                         handlerChangeValue={handlerChangeValue}
                />
            </FormContainer>
        )
    }
}