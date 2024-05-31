import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./status.css";
import FilterComponent from "../../components/FilterComponent";
import Landing2Component from "../../components/Landing2Component";
const diperpanjang = () => {
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
                    <div className="card-diperpanjang-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Kumpulkan Sumbangan Untuk Panti Asuhan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 25.000.000</Card.Text>
                      <div>
                        <ProgressBar now={80} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 10.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-diperpanjang-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Alat Elektronik Bekas Untuk Pelajar</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={20} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 10.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-diperpanjang-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Mukjizat tuk Ratusan Pejuang Transplantasi Hati</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={40} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 25.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-diperpanjang-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Anak Daerah Untuk Mendapatkan Pendidikan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.90.000.000</Card.Text>
                      <div>
                        <ProgressBar now={35} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 20.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-diperpanjang-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Tunaikan Zakat Maal Anda Sekarang!</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 20.000.000</Card.Text>
                      <div>
                        <ProgressBar now={98} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 19.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-diperpanjang-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bersama Berbagi Kebahagiaan di Hari Raya</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={50} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 50.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
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

export default diperpanjang;
