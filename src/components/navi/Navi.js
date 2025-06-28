import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarText,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

function Navi(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">React Course</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ms-auto' navbar>
              <NavItem className='my-auto'>
                <NavbarText><Link style={{ textDecoration: 'none' }} to={"/"}>AnaSayfa</Link></NavbarText>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            <CartSummary/>
          </Nav>
        </Collapse>
          
      </Navbar>
    </div>
  );
}

export default Navi;