import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    overflow: auto;
    padding-left: 4px;
`;

export const ListItem = styled.div`
    width: 100%;
    height: 40px;
    margin-top: 7px;
    font-size: 10px;
    display: flex;
    z-index: 2;
`;

export const PokemonImg = styled.img`
    width: 100;
`;

export const PokemonInfoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const PokemonName = styled.input`
    font-size: 8px;
    border: none;
    width: 95%;
    font-family: 'PokemonGb';
`;

export const PokemonInfo = styled.div`
    display: flex;
    font-size: 7px;
    padding-left: 3px;

    & :first-child {
        margin-right: 5px;
    }
`;

export const NoDataContainer = styled.div`
    font-size: 10px;
    margin-top: 10px;
`;
