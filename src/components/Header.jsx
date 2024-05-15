import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

// Import other components as needed

function Header() {
  return (
    <>
      {console.log("this is header")};
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Aneja Mall
          </Navbar.Brand>{" "}
          {/* Use Link component for brand */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/sale">
                Sale
              </Nav.Link>{" "}
              {/* Use Link component for each menu item */}
              <Nav.Link as={Link} to="new-Arrivals">
                New Arrivals
              </Nav.Link>
              <Nav.Link as={Link} to="/sarees">
                Sarees
              </Nav.Link>
              <Nav.Link as={Link} to="/suits">
                Suits
              </Nav.Link>
              <Nav.Link as={Link} to="/suits">
                Rajputani Poshak
              </Nav.Link>
              <NavDropdown title="Sarees" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/action3">
                  Jaipuri Sarees
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action4">
                  Silk Sarees
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action5">
                  Cotton Sarees
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action5">
                  Printed Sarees
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action5">
                  Casual Sarees
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action5">
                  Briadal Sarees
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/gowns">
                Gowns
              </Nav.Link>
              <Nav.Link as={Link} to="/wedding-collections">
                Kurti
              </Nav.Link>
              <Nav.Link as={Link} to="/lehengas">
                Lehengas
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
