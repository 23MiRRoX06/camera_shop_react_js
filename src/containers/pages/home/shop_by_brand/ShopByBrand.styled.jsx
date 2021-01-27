import styled from 'styled-components';

export const ShopByBrandWrapper = styled.div`
    width: 100%;
    height: 285px;
    margin: 60px 0;
`;

export const ShopByBrandHeader = styled.div`
    width: 80%;
    margin: 0 auto;
    height: 30px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    h2 {
        color: #F11B18;
        font-size: 20px;
    }

    a {
        font-size: 17px;
        color: #F11B18;
        font-weight: 600;
    }
`;

export const BrandsContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    img {
        transition: 1.2s;
    }

    img:hover {
        transform: scale(1.1);
    }
`;