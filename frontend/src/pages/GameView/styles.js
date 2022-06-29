import styled from 'styled-components';
import GameViewBackground from '../../assets/images/game-image.png';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: url(${GameViewBackground});
    background-size: cover;
`;

export default Container;
