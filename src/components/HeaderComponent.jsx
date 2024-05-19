import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../assets/logos/logoHorizontal.png";
import "../index.css";
import { Row } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar className="bg-color-hitam">
        <Container className="d-flex justify-content-between">
          <Row>
            <Navbar.Brand href="/">
              <img src={Logo} alt="logo" style={{ width: "150px" }} />
            </Navbar.Brand>
          </Row>
          <Row>
            {" "}
            <input type="text" placeholder="Search" className="form-control mx-2 bg-light" style={{ width: "467px" }} />
          </Row>
          <Row className="my-2 ">
            <Nav className="me-auto d-flex align-items-center">
              <Nav.Link href="/donasi" className="text-white font-medium me-3 ">
                Donasi
              </Nav.Link>
              <Nav.Link href="/event" className="text-white font-medium me-3">
                Event
              </Nav.Link>
              <Nav.Link href="/blog" className="text-white font-medium me-5">
                Blog
              </Nav.Link>
              <div className="font-bold">
                <a href="/login" className="btn btn-warning" style={{ borderRadius: "30px", width: "107px", height: "39px", display: "flex", alignItems: "center", justifyContent: "center", padding: "0", flexShrink: "0" }}>
                  Login
                </a>
              </div>
            </Nav>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
