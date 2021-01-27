import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const CarouselImage = styled.img`
    width: 100%;
    height: 640px;
`;

export const NewsWrapper = styled.div`
    width: 80%;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ShowMoreButton = styled.button`
    width: 140px;
    height: 50px;
    background-color: #F11B18;
    font-weight: 500;
    font-size: 18px;
    border: none;
    border-radius: 9px;
    color: white;
`;

export const ShowMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    button:hover, button:focus {
        background-color: red;
    }
`;