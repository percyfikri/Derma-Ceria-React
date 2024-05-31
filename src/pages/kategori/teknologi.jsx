import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar, Nav } from "react-bootstrap";
import "./kategori.css";
import FilterComponent from "../../components/FilterComponent";
import Landing2Component from "../../components/Landing2Component";
const teknologi = () => {
  return (
    <div>
      <Landing2Component/>
      <div className="donasicard w-100 min-vh-100">
        <Container className="px-4">
          <Row>
            <FilterComponent />

            <Col>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-tekno-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Laptop Untuk Remaja Milenial</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTeknologi">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-tekno-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Pengadaan Laptop Media Pembelajaran</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={3} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp 1.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTeknologi">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-tekno-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Alat Elektronik Bekas Untuk Pelajar</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.60.000.000</Card.Text>
                      <div>
                        <ProgressBar now={20} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp.15.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTeknologi">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-tekno-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Dukung Peralatan Multimedia Dakwah</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTeknologi">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-tekno-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Mari Sumbangkan Teknologi Gerakan Sosial!</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={25} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp 10.611.123
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTeknologi">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-tekno-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Ayo Donasi Teknologi Untuk Pelajar!</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={15} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 22.134.786
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTeknologi">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* end card */}
    </div>
  );
};

export default teknologi;
