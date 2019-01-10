import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Navbar,
  Nav,
  NavLink,
  NavItem
} from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

const Header = () => (
  <header>
    <Navbar
      fixed="top"
      color="light"
      light
      expand="xs"
      className="border-bottom border-gray bg-white"
      style={{ height: 80 }}
    >
      <Container>
        <Row noGutters className="position-relative w-100 align-items-center">
          <Col className="d-none d-lg-flex justify-content-start">
            <Nav className="mrx-auto" navbar>
              <NavItem className="d-flex align-items-center">
                <NavLink
                  className="font-weight-bold"
                  tag={RRNavLink}
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink
                  className="font-weight-bold"
                  tag={RRNavLink}
                  to="/about"
                >
                  About Us
                </NavLink>
              </NavItem>
              <NavItem className="d-flex align-items-center">
                <NavLink
                  className="font-weight-bold"
                  tag={RRNavLink}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col className="d-none d-lg-flex justify-content-end">
            <Form inline>
              <Input type="search" placeholder="Search My Articles" />
              <Button type="submit" color="secondary" className="mr-3" outline>
                Search
              </Button>
            </Form>
            <Form inline>
              <RRNavLink to="/signin">
                <Button color="info" outline>
                  SignIn
                </Button>
              </RRNavLink>
              <RRNavLink to="/signup">
                <Button color="success" outline>
                  SignUp
                </Button>
              </RRNavLink>
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
  </header>
);

export default Header;
