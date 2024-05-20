// import React from 'react'
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import BackgroundImage from "../../assets/images/bg.jpg";
import Logo from "../../assets/logos/logoHorizontal.png";
import "../../index.css";
import "./login.css";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center overlay-text">
      <Row className="w-100">
        <Col md={6} className="d-none d-md-block p-0">
          <div className="h-100 w-100">{/* mengosongkan bagian kiri */}</div>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <div className="login-form" style={{ maxWidth: "550px", width: "100%" }}>
            <div className="text-center mb-1">
              <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
              </div>
            </div>
            <h3 className="mb-3">Selamat Datang!</h3>
            <p>Buat akun atau Masuk untuk mulai menggunakan Dermaceria</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Masukkan Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Masukkan Kata sandi</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
              </Form.Group>
              <Form.Group controlId="formRole">
                <Form.Label>Pilih Role</Form.Label>
                <Form.Control as="select">
                  <option>Donatur</option>
                  <option>Penggalang</option>
                </Form.Control>
              </Form.Group>
              <Button variant="warning" type="submit" className="w-100 mb-3">
                Masuk
              </Button>
              <p className="text-center">Atau</p>
              <Button variant="outline-warning" type="button" className="w-100 mb-3">
                Masuk dengan Google
              </Button>
              <div className="text-center">
                <p>
                  Belum punya akun? <Link to="/register">Buat Akun</Link>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default login;
