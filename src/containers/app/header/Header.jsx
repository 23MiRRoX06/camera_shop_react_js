import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link  from "react-router-dom/Link";
import { Logo, NavItem, NavBar, ButtonContainer, ButtonAuth } from './Header.styled';
import logo from '../../../assets/images/logo.jpg';

const Header = () => {
    return (
        <NavBar variant="light">
            <Navbar.Brand>
                <Link to="/">
                    <Logo src={logo} alt="logo"/>
                </Link>
            </Navbar.Brand>
            <Nav variant="pills" defaultActiveKey="/" fill>
                <NavItem>
                    <Nav.Link as={Link} to="/" href="/">Home</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link as={Link} to="/catalog" href="/catalog">Catalog</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link as={Link} to="/cart" href="/cart">Cart</Nav.Link>
                </NavItem>
            </Nav>
            <ButtonContainer>
                <ButtonAuth variant="danger">Sign in</ButtonAuth>
                <ButtonAuth variant="danger">Sign up</ButtonAuth>
            </ButtonContainer>
        </NavBar>
    );
};

export default Header;
