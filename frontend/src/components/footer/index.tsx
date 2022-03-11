import React from "react";
import Footer from './components';
import footer from '../../fixtures/footer.json';

export const FooterContainer: React.FunctionComponent = () => {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us</Footer.Title>
            <Footer.Break/>
            <Footer.Row>
                {
                    footer.map((vector, index) => (
                        <Footer.Column key={index}>
                            {
                                vector.map(item => (
                                    <Footer.Link key={item.id} href={item.href}>{item.title}</Footer.Link>
                                ))
                            }
                        </Footer.Column>
                    ))
                }
            </Footer.Row>
            <Footer.Break/>
            <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
    )
}