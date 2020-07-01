import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <div className="header">
      <Navbar>
        <Container>
          <NavbarBrand href="/">All Students</NavbarBrand>
          <Nav>
            <NavItem>
              <Link className="btn btn-primary" to="/add">+</Link>
            </NavItem>
          </Nav>

        </Container>
      </Navbar>
    </div>
  )
}
