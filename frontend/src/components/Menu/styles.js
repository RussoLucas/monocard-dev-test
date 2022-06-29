import styled from 'styled-components';

export const Container = styled.div`
    width: 100px;
    height: 120px;
    background-color: #fff;
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 3;
`;

export const BorderImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
`;

export const ListContainer = styled.div`
    width: 100%;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 10px;
    z-index: 3;
`;

export const ListItem = styled.div`
    z-index: 3;
    font-size: 8px;
    cursor: pointer;
    margin-bottom: 8px;
`;
