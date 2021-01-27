import React from 'react';
import { FooterWrapper, FooterInner } from './Footer.styled';
import LinksSection from './info_and_links/LinksSection';
import PaymentSocialSection from './payment_and_social_media/PaymentSocialSection';

const Footer = () => {
    return (
        <FooterWrapper>
            <FooterInner>
                <hr style={{opacity: 50}}></hr>
                <LinksSection />
                <PaymentSocialSection />
            </FooterInner>
        </FooterWrapper>
    );
};

export default Footer;