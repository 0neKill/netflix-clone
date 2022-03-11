import React from 'react';
import {Container, Inner, Item, Header, Title, Body} from './styles';


interface IToggleContext {
    selectedItem: number | null,
    handlerSetToggle: (id: number) => void,
}

const ToggleContext = React.createContext<IToggleContext>({} as IToggleContext);


export default function According({children}: React.PropsWithChildren<unknown>) {
    const [selectedItem, setSelectedItem] = React.useState<number | null>(null);

    const handlerSetToggle = (id: number) => {
        setSelectedItem(prevId => prevId === id ? null : id);
    }

    return (
        <Container>
            <ToggleContext.Provider value={{selectedItem, handlerSetToggle}}>
                <Inner>{children}</Inner>
            </ToggleContext.Provider>
        </Container>
    )
}


According.Title = function AccordingTitle({children}: React.PropsWithChildren<unknown>) {
    return <Title>{children}</Title>
}


According.Item = function AccordingItem({children}: React.PropsWithChildren<unknown>) {
    return <Item>{children}</Item>
}

According.Header = function AccordingHeader({children, id}: React.PropsWithChildren<{ id: number }>) {
    const {handlerSetToggle, selectedItem} = React.useContext(ToggleContext);
    return <Header onClick={handlerSetToggle.bind(this, id)}>
        {children}
        {
            selectedItem === id ?
                <img src='/images/icons/close-slim.png' alt='Close'/> :
                <img src='/images/icons/add.png' alt='Open'/>
        }
    </Header>
}
According.Body = function AccordingBody({children, id}: React.PropsWithChildren<{ id: number }>) {
    const {selectedItem} = React.useContext(ToggleContext);
    return selectedItem === id ? <Body>{children}</Body> : null;
}