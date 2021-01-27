import React from 'react';
import { ShopByBrandWrapper, ShopByBrandHeader, BrandsContainer } from './ShopByBrand.styled';
import sony from '../../../../assets/images/brands/sony.jpg';
import nikon from '../../../../assets/images/brands/nikon.jpg';
import panasonic from '../../../../assets/images/brands/panasonic.jpg';
import fujifilm from '../../../../assets/images/brands/fujifilm.jpg';
import pentax from '../../../../assets/images/brands/pentax.jpg';
import canon from '../../../../assets/images/brands/canon.jpg';

const ShopByBrand = () => {
    return (
        <ShopByBrandWrapper>
            <ShopByBrandHeader>
                <h2>Shop By Brand</h2>
                <a href="">View all</a>
            </ShopByBrandHeader>
            <BrandsContainer>
                <a><img src={canon} alt="canon logo" height="212" width="212"/></a>
                <a><img src={nikon} alt="nikon logo" height="212" width="212"/></a>
                <a><img src={sony} alt="sony logo" height="212" width="212"/></a>
                <a><img src={panasonic} alt="panasonic logo" height="212" width="212"/></a>
                <a><img src={pentax} alt="pentax logo" height="212" width="212"/></a>
                <a><img src={fujifilm} alt="fujifilm logo" height="212" width=""/></a>
            </BrandsContainer>
        </ShopByBrandWrapper>
    );
}

export default ShopByBrand;