import React from 'react';
import { LinksWrapper } from './LinksSection.styled';

const LinksSection = () => {
    return (
        <LinksWrapper>
            <div style={{width: "58%"}}>
                <h6>PROUDLY CANADIAN</h6>
                <p style={{marginTop: "20px"}}>
                    As a premier photo and video outlet, we are full 
                    line dealers for the entire range of photographic equipment and supplies.
                </p>
                <p style={{marginTop: "30px"}}>
                    Whether you are a leading professional or new to photography, our expert 
                    staff are always ready to assist you in finding the perfect equipment at great prices.
                </p>
            </div>
            <div style={{width: "18%"}}>
                <h6>OUR SERVICES</h6>
                <ul>
                    <li><a href="">Rentals</a></li>
                    <li><a href="">Repairs</a></li>
                    <li><a href="">Returns and Exchanges</a></li>
                    <li><a href="">Shipping Policy</a></li>
                    <li><a href="">Warranties</a></li>
                </ul>
            </div>
            <div style={{width: "18%"}}>
                <h6>ABOUT US</h6>
                <ul>
                    <li><a href="">Location and Hours</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Why Shop With Us</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Refund Policy</a></li>
                </ul>
            </div>
        </LinksWrapper>
    );
}

export default LinksSection;