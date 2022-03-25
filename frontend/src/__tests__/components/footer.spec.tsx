import React from "react";
import {render,screen} from "@testing-library/react";
import {FooterContainer} from "../../components";


describe('Footer component', () => {
    it('render the Footer component', () => {
        const {container} = render(<FooterContainer/>);
        expect(screen.getByText('Questions? Contact us')).toBeTruthy();
        expect(screen.getByText('Netflix United Kingdom')).toBeTruthy();
        expect(container).toMatchSnapshot();
    })
})