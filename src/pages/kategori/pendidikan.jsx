import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar, Nav } from "react-bootstrap";
import "./kategori.css";
import FilterComponent from "../../components/FilterComponent";
import Landing2Component from "../../components/Landing2Component";
const pendidikan = () => {
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
                    <div className="card-pend-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Pendidikan Anak Yatim & Dhu&apos;afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailPendidikan">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-pend-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Berbagi Paket Pendidikan Untuk Masa Depan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={20} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp 10.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailPendidikan">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-pend-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Berdayakan Ratusan Perempuan Pencari Nafkah</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.500.000.000</Card.Text>
                      <div>
                        <ProgressBar now={90} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 444.870.966
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailPendidikan">
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
                    <div className="card-pend-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Anak Daerah Untuk Mendapatkan Pendidikan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailPendidikan">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-pend-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Pendidikan Masyarakat Kurang Mampu</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={25} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp 10.611.123
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailPendidikan">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-pend-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Gantikan 10.000 Mushaf Untuk Siswa Pelosok</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 20.000.000</Card.Text>
                      <div>
                        <ProgressBar now={15} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 4.010.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailPendidikan">
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

export default pendidikan;
