import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar, Nav } from "react-bootstrap";
import "./kategori.css";
import FilterComponent from "../../components/FilterComponent";
import Landing2Component from "../../components/Landing2Component";
const kesehatan = () => {
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
                    <div className="card-sehat-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Cepat Untuk Pasien ICU Keadaan Darurat</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={23} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 22.543.111
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailKesehatan">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-sehat-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Jaminan Kesehatan Untuk Dhu&apos;afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={56} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 55.510.220
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailKesehatan">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-sehat-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Mudahkan Akses Kesehatan Masyarakat</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 100.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailKesehatan">
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
                    <div className="card-sehat-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Para Pejuang Transplantasi Hati</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.60.000.000</Card.Text>
                      <div>
                        <ProgressBar now={85} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 45.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailKesehatan">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-sehat-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Untuk Membeli Kaki Palsu</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={60} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 33.250.005
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailKesehatan">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-sehat-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Anak dengan Kondisi Kronis Untuk Berobat</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 116.650.000</Card.Text>
                      <div>
                        <ProgressBar now={15} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 40.282.072
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailKesehatan">
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

export default kesehatan;
