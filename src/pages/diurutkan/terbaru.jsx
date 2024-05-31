import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar, Nav } from "react-bootstrap";
import "./diurutkan.css";
import FilterComponent from "../../components/FilterComponent";
import Landing2Component from "../../components/Landing2Component";
const terbaru = () => {
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
                    <div className="card-terbaru-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Anak Berkebutuhan Khusus Hidup Layak</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTerbaru">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Ribuan Warga yang Terdampak Banjir Lahar</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={30} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 15.546.876                        
                      <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTerbaru">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Asap Tebal Kebakaran Hutan Kalbar!</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 500.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 249.546.876                        
                      <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTerbaru">
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
                    <div className="card-terbaru-img4">
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
                      Rp. 40.282.072                        
                      <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTerbaru">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Gantikan 10.000 Mushaf Milik Santri yang Usang</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTerbaru">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bersama Berbagi Kebahagiaan di Hari Raya</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 60.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={11} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailTerbaru">
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
    </div>  )
}

export default terbaru