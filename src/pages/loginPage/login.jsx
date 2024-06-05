import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineGoogle } from 'react-icons/ai';
import Logo from "../../assets/logos/logoHorizontal.png";
import "../../index.css";
import "./login.css";

const LoginWithoutHeaderAndFooter = () => {
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
          <div className="copyright-text">
            <h4>Derma Ceria</h4>
            <p>Satukan hati, berbagi kebaikan</p>
            <p>melalui donasi online!</p>
          </div>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <div className="login-form" style={{ maxWidth: "550px", width: "100%" }}>
            <div className="text-center mb-1">
              <div className="logo-container">
                <Link to="/">
                  <img src={Logo} alt="Logo" className="logo" onClick={(e) => {e.stopPropagation();}} />
                </Link>
              </div>
            </div>
            <h3 className="mb-3">Selamat Datang!</h3>
            <p>Buat akun atau Masuk untuk mulai menggunakan Dermaceria</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Masukan Email" value={email} onChange={handleEmailChange} className="form-control-custom"/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Masukan Kata Sandi" value={password} onChange={handlePasswordChange} className="form-control-custom"/>
              </Form.Group>
              <Form.Group controlId="formRole">
                <Form.Select className="form-control-custom">
                    <option>Pilih Role</option>
                    <option value="1">Donatur</option>
                    <option value="2">Penggalang Dana</option>
                  </Form.Select>
              </Form.Group>
              <Button variant="warning" type="submit" className="w-100 mb-3">
                Masuk
              </Button>
              <p className="text-center">Atau</p>
              <div className="text-center">
                <p>
                  Belum punya akun? <Link to="/register">Buat Akun</Link>
                </p>
              </div>
              <Button variant="warning" type="button" className="w-100 mb-3">
                <AiOutlineGoogle style={{ color: 'black', marginRight: '8px' }} />
                Masuk dengan Google
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginWithoutHeaderAndFooter;