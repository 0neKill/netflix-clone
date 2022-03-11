import React from "react";

import {OptFormContainer} from "../";

import According from "./components";

import faqsData from '../../fixtures/faqs.json';

export const AccordingContainer: React.FunctionComponent = () => {
    return (
        <According>
            <According.Title>Frequently Asked Questions</According.Title>
            {
                faqsData.map(item => (
                    <According.Item key={item.id}>
                        <According.Header id={item.id}>{item.header}</According.Header>
                        <According.Body id={item.id}>{item.body}</According.Body>
                    </According.Item>
                ))
            }
            <OptFormContainer/>
        </According>
    )
}