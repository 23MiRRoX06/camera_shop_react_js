import React from 'react';
import { PaymentSocialWrapper, IconBox, Icon } from './PaymentSocialSection.styled';
import twitter from '../../../../assets/images/social_media/twitter.png';
import instagram from '../../../../assets/images/social_media/instagram.png';
import facebook from '../../../../assets/images/social_media/facebook.png';
import youtube from '../../../../assets/images/social_media/youtube.png';

import applepay from '../../../../assets/images/payments/apple_pay.png';
import googlepay from '../../../../assets/images/payments/google_pay.svg';
import mastercard from '../../../../assets/images/payments/mastercard.png';
import skrill from '../../../../assets/images/payments/skrill.png';
import paypal from '../../../../assets/images/payments/paypal.svg';
import visa from '../../../../assets/images/payments/visa.png';

const PaymentSocialSection = () => {
    return (
        <PaymentSocialWrapper>
            <p>
                © The Camera Store
                Powered by Shopify
            </p>
            <div>
                <IconBox>
                    <li style={{marginRight: "15px"}}><Icon src={twitter} alt="twitter"/></li>
                    <li style={{marginRight: "15px"}}><Icon src={instagram} alt="instagram"/></li>
                    <li style={{marginRight: "15px"}}><Icon src={facebook} alt="facebook"/></li>
                    <li style={{marginRight:"15px"}}><Icon src={youtube} alt="youtube"/></li>
                </IconBox>
            </div>
            <div>
                <IconBox>
                    <li style={{marginRight: "15px"}}><Icon src={applepay} alt="twitter"/></li>
                    <li style={{marginRight: "15px"}}><Icon src={googlepay} alt="instagram"/></li>
                    <li style={{marginRight: "15px"}}><Icon src={mastercard} alt="facebook"/></li>
                    <li style={{marginRight:"15px"}}><Icon src={skrill} alt="youtube"/></li>
                    <li style={{marginRight:"15px"}}><Icon src={paypal} alt="youtube"/></li>
                    <li style={{marginRight:"15px"}}><Icon src={visa} alt="youtube"/></li>
                </IconBox>
            </div>
        </PaymentSocialWrapper>
    );
}

export default PaymentSocialSection;