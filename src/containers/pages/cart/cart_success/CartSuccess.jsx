import React from 'react';
import Link from 'react-router-dom/Link';
import { HeaderContainer, SuccessWrapper } from './CartSuccess.styled';
import { ContinueButton } from '../bottom_buttons/BottomButtons.styled'
import success from '../../../../assets/images/success.png';

const CartSuccess = () => {
    return (
        <SuccessWrapper>
            <HeaderContainer><div><h1>Success</h1></div></HeaderContainer>
            <div><img src={success}/></div>
            <div><Link to="/catalog"><ContinueButton>To Catalog</ContinueButton></Link></div>
        </SuccessWrapper>
    );
}

export default CartSuccess;