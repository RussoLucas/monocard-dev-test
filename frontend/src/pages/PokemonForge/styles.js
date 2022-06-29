import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokemonInfoContainer = styled.div`
    width: 60%;
    height: 90%;
    padding-bottom: 5px;
`;

export const PokemonInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    font-size: 10px;
`;

export const ImgContainer = styled.div`
    width: 40%;
    height: 90%;
    display: flex;
    align-items: center;

    & :first-child {
        width: 100%;
    }
`;
