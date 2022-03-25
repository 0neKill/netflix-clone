import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import {AccordingContainer} from "../../components";

describe('Footer component', () => {

    it('render the Footer component', () => {
        const {container} = render(<AccordingContainer/>);
        expect(container).toMatchSnapshot();
    })

    it('click header and visible body', () => {
        render(<AccordingContainer/>);
        const header = screen.getAllByTestId('header-test');
        expect(screen.queryAllByTestId('body-test')[0]).toBeFalsy();
        fireEvent.click(header[0]);
        expect(screen.getAllByTestId('body-test')[0]).toBeTruthy();
        fireEvent.click(header[0]);
        expect(screen.queryAllByTestId('body-test')[0]).toBeFalsy();
    })

})