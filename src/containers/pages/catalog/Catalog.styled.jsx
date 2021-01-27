import styled from 'styled-components';


export const CatalogWrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export const CatalogManagerContainer = styled.div`
    padding: 0 10%;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F8F8F8;
    color: white;

    button {
        background-color: #F11B18;
        border: none;
        color: white;
    }

    button:hover, button:focus {
        background-color: red;
        color: white;
        font-weight: 600;
    }
`;