import React from 'react';
import { CardCover, RowCameraCard, DeleteButton, InfoBox } from './RowItemCard.styled';
import { removeFromCart } from '../../redux/actions/actions'
import { useDispatch } from 'react-redux';

const RowCardItem = ({ id, modelName, price, image }) => {
    const dispatch = useDispatch();

    const deleteFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <RowCameraCard
        hoverable
        cover={
            <CardCover src={image} />
        }>
            <InfoBox>
                <div><h2>{modelName}</h2></div>
                <div><h1>${price}</h1></div>
                <div><DeleteButton onClick={() => deleteFromCartHandler(id)}>Delete</DeleteButton></div>
            </InfoBox>
        </RowCameraCard>
    );
}

export default RowCardItem;