import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBorder from '../../assets/images/menu-border.png';
import { BorderImg, Container, ListContainer, ListItem } from './styles';

export default function Menu({ toggleMenu }) {
    const navigate = useNavigate();

    const redirect = (route) => {
        navigate(route);
        toggleMenu(false);
    };

    return (
        <Container>
            <BorderImg alt="border" src={MenuBorder} />
            <ListContainer>
                <ListItem onClick={() => redirect('/pokemon-forge')}>
                    GENERATE POKéMON
                </ListItem>
                <ListItem onClick={() => redirect('/pokemon-list')}>
                    POKéDEX
                </ListItem>
            </ListContainer>
        </Container>
    );
}
