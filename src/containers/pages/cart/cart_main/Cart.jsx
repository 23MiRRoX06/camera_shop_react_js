import React from 'react';
import Link from 'react-router-dom/Link';
import RowCardItem from '../../../../components/row_item_card/RowItemCard'
import { CartWrapper, HeadingContainer, PriceContainer } from './Cart.styled';
import { ContinueButton, BackButton, ButtonsContainer } from '../bottom_buttons/BottomButtons.styled';
import { useSelector } from 'react-redux';


const Cart = () => {
    const cameras = useSelector((state) => state.cameras);

    const totalPrice = cameras.length > 0 ? cameras.map((camera) => camera.price).reduce((a, b) => a + b) : 0;

    return (
        <>
            <CartWrapper>
                <HeadingContainer><div><h1>Shoping Cart</h1></div></HeadingContainer>
                {
                    cameras.map(({ id, modelName, image, price }) => (
                        <RowCardItem id={id} modelName={modelName}
                        image={image} price={price} />
                    ))
                }
                <PriceContainer><div><h3>Total price: ${totalPrice}</h3></div></PriceContainer>
            </CartWrapper>
            <ButtonsContainer>
                <Link to="/catalog"><BackButton>Back</BackButton></Link>
                <Link to="/cart/checkout"><ContinueButton>Continue</ContinueButton></Link>
            </ButtonsContainer>
        </>
    );
}

export default Cart;
