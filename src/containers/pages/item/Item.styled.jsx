import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const ItemWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;

export const FlexContainer = styled.div`
    margin: 40px 0;
    display: flex;
    justify-content: space-between;
    
    button:hover, button:focus {
        background-color: red;
    }
`;

export const ItemImage = styled.img`
    width: 40%;
`;

export const ItemButton = styled.button`
    width: 170px;
    height: 44px;
    background-color: #F11B18;
    font-weight: 500;
    font-size: 17px;
    border: none;
    color: white;
    border-radius: 9px;
`;

