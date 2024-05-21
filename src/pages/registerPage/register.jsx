import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logos/logoHorizontal.png';
import '../../index.css';
import './register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center overlay-text">
      <Row className="w-100 justify-content-center">
        <Col md={6} className="d-none d-md-block p-0">
          <div className="h-100 w-100"></div>
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <div className="login-form" style={{ maxWidth: '550px', width: '100%' }}>
            <div className="text-center mb-1">
              <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
              </div>
            </div>
            <h3 className="mb-3">Buat Akun Baru!</h3>
            <p>Isi formulir di bawah untuk membuat akun baru.</p>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label></Form.Label> {/* Tambahkan Form.Label */}
                <Form.Control type="text" placeholder="Masukkan Nama" value={name} onChange={handleNameChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label></Form.Label> 
                <Form.Control type="email" placeholder="Masukkan Email" value={email} onChange={handleEmailChange} />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
              <Form.Label></Form.Label> 
                <Form.Control type="password" placeholder="Masukkan Kata Sandi" value={password} onChange={handlePasswordChange} />
              </Form.Group>
              <Form.Group controlId="formRole">
                <Form.Label></Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Pilih Role</option>
                    <option value="1">Donatur</option>
                    <option value="2">Penggalang Dana</option>
                  </Form.Select>
                  <Form.Label></Form.Label>
                {/* <Form.Control as="select">
                  <option value="">Pilih Role</option>
                  <option>Donatur</option>
                  <option>Penggalang</option>
                </Form.Control> */}
              </Form.Group>
              <Button variant="warning" type="submit" className="w-100 mb-3">Daftar</Button>
              <div className="text-center">
                <p>Sudah punya akun? <Link to="/login">Masuk</Link></p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
