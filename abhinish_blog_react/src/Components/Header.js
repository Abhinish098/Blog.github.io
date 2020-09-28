import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Button,
} from 'reactstrap';

const Headerset = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
        <NavbarBrand href="/" style={{fontFamily:"Roboto", color:"white"}}>Abhinish Sharma</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#" style={{fontFamily:"Roboto", color:"white"}}>Projects & Achievements</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{fontFamily:"Roboto", color:"white"}}>Writings</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={{fontFamily:"Roboto", color:"white"}}>Games</NavLink>
            </NavItem>
          </Nav>
          <NavbarText><Button outline color="success">DOWNLOAD MY RESUME</Button>{' '}</NavbarText>
        </Collapse>
      </Navbar>
    );
}

export default Headerset;