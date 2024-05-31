import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./diurutkan.css";
import FilterComponent from "../../components/FilterComponent";
import Landing2Component from "../../components/Landing2Component";
const mendesak = () => {
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
                    <div className="card-mendesak-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Warga Terdampak Banjir di Sumbar</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={30} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 15.546.876                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-mendesak-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Anak dengan Penyakit Kronis Gagal Berobat</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 116.650.000</Card.Text>
                      <div>
                        <ProgressBar now={20} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 40.282.072                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-mendesak-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Asap Tebal Kebakaran Hutan Kalbar!</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.500.000.000</Card.Text>
                      <div>
                        <ProgressBar now={45} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 249.546.876                        
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
                    <div className="card-mendesak-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Selimut Gaza! Bantu Mereka Di Pengungsian</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-mendesak-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donatur Tetap Untuk 22 Anak Panti Asuhan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={18} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={75} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 4.350.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-mendesak-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Kepala Hamzah Kembali Normal</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 90.000.000</Card.Text>
                      <div>
                        <ProgressBar now={14} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={2} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 8.500.000
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
    </div>  )
}

export default mendesak