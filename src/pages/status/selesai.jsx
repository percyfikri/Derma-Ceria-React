import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./status.css";
import FilterComponent from "../../components/FilterComponent";
import Landing2Component from "../../components/Landing2Component";
const selesai = () => {
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
                    <div className="card-selesai-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Berkontribusi dalam Membangun Rumah Ibadah</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 150.000.000</Card.Text>
                      <div>
                        <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 150.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-selesai-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Berbagi Kasih Untuk Yatim Piatu & Dhu&apos;afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 10.000.000</Card.Text>
                      <div>
                        <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
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
                    <div className="card-selesai-img3">
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
                    <div className="card-selesai-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Anak Daerah Untuk Mendapatkan Pendidikan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
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
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-selesai-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi  Peduli dan Tanggap Bencana Gempa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 20.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
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
                    <div className="card-selesai-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Mari Sumbangkan Teknologi Gerakan Sosial!</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 100.000.000
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

export default selesai;
