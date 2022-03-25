import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import {PlayerContainer} from '../../components';


describe('Player component', () => {
    it('render the Player component', () => {
        const {container} = render(<PlayerContainer/>);
        const playerButton = screen.getByText(/Play/i);
        expect(screen.queryByTestId('player')).toBeNull();
        fireEvent.click(playerButton);
        expect(container).toMatchSnapshot();
        expect(screen.getByTestId('player')).not.toBeNull();
    })
})

