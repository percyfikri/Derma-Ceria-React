import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./kategori.css";
import FilterComponent from "../../components/FilterComponent";
import Landing2Component from "../../components/Landing2Component";
const sosial = () => {
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
                    <div className="card-sos-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Kumpulkan Sumbangan Untuk Panti Asuhan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 25.000.000</Card.Text>
                      <div>
                        <ProgressBar now={70} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
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
                    <div className="card-sos-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Meraih Syurga bersama Anak Yatim Dhu&apos;afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 10.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp 0
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-sos-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Berbagi Kasih untuk Yatim Dhu&apos;afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 10.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 0
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
                    <div className="card-sos-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Ayo Peduli Terhadap Orang-Orang Difabel!</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 20.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 0
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-sos-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Guru Pelosok Daerah dengan Sedekah Subuh</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp 0
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-sos-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Anak Berkebutuhan Khusus Hidup Layak</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 70.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 0
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

export default sosial;
