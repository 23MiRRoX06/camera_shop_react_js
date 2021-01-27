import styled from 'styled-components';
import { Navbar, Nav, Button } from 'react-bootstrap';

export const NavBar = styled(Navbar)`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const NavItem = styled(Nav.Item)`
    height: 44px;
    width: 140px;
    a.nav-link.active {
        background-color: #F11B18;
        font-weight: 500;
        color: white!important;
    }

    .nav-link {
        font-size: 17px
    }
`;

export const Logo = styled.img`
    height: 93px;
    width: 140px;
`;

export const ButtonContainer = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
`;

export const ButtonAuth = styled(Button)`
    width: 140px;
    height: 44px;
    background-color: #F11B18;
    font-weight: 500;
`;


