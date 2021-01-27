import styled from 'styled-components';

export const FooterWrapper = styled.div`
    height: 485px;
    display: flex;
    justify-content: center;
    h6 {
        color: #F11B18;
        font-size: 16px;
        font-weight: 600;
    }

    a {
        font-size: 17px;
        color: #4F4F4F;
    }

    p {
        font-size: 17px;
        color: #4F4F4F;
    }

    li {
        margin-top: 3px;
    }

    a:hover {
        color: #F11B18;
    }
`;

export const FooterInner = styled.div`
    width: 80%;
    height: 100%;
`;