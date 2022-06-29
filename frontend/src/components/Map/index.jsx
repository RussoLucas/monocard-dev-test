import React from 'react';
import MenuBorder from '../../assets/images/menu-border.png';
import { BorderImg, Container, TextContainer } from './styles';

export default function Map() {
    return (
        <Container>
            <BorderImg src={MenuBorder} />
            <TextContainer>
                <div>Press START to go to game view</div>
                <div>
                    Press SELECT to open menu with your pokédex and pokemon
                    generator
                </div>
                <div>Inside pokédex is your pokémon list</div>
                <div>
                    Click in your pokémon name inside pokédex to rename it
                </div>
            </TextContainer>
        </Container>
    );
}
