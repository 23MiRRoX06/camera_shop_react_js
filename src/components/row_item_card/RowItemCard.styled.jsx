import styled from 'styled-components';
import { Card } from 'antd';

export const CardCover = styled.img`
    height: 110px;
    width: 137.5px;
    border-radius: 20px;
`;

export const RowCameraCard = styled(Card)`
    width: 100%;
    height: 120px;
    display: flex;
    padding: 5px 5px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

export const DeleteButton = styled.button`
    width: 110px;
    height: 50px;
    background-color: transparent;
    font-size: 18px;
    border-color: #F11B18;
    border-radius: 9px;
    color: #F11B18;
`;

export const InfoBox = styled.div`
    display: flex;
    width: 600px;
    justify-content: space-between;
    align-items: center;
`;