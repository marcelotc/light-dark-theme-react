import React, { useContext } from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import {ThemeContext} from 'styled-components';
import {shade} from 'polished';

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const {colors, title} = useContext(ThemeContext);

    return (
        <Container>
            Hello world
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.1, colors.primary)}
                onColor={colors.secondary }
            ></Switch>
        </Container>
    )
}

export default Header;