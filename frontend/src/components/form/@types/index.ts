import React from "react";

export interface ILink {
    to: string,
}

export interface IBase {
    handlerSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
}

export interface ITextInput {
    type: "email" | "password" | "text",
    value: string,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ISubmit {
    type: 'submit'
    disable: boolean,
}