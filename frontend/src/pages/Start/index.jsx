import React from 'react';
import pikachuStartScreen from '../../assets/images/pikachu-start-screen.gif';
import StyledImg from './styles';

export default function Start() {
    return (
        <div>
            <StyledImg src={pikachuStartScreen} />
        </div>
    );
}
