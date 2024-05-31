import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, ProgressBar, Nav } from "react-bootstrap";
const CardDonasiLain = () => {
  return (
    <div>
      <Row>
        <Col>
          <Row className="gap-6 max-md:flex-col">
            <Col xs={12} sm={6} md={3} style={{ marginBottom: "1rem" }}>
              <Card>
                <div className="card-bencana-img3">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Title className="title-donasi">Peduli Bencana Erupsi dan Banjir Lahar</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 70.000.000</Card.Text>
                      <div>
                        <ProgressBar now={30} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 20.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailBencana">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} style={{ marginBottom: "1rem" }}>
              <Card>
                <div className="card-img2">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Title>Pray For Gunung Semeru Lumajang</Card.Title>
                  <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                  <div>
                    <ProgressBar now={80} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <br />
                  <Card.Text>
                    Rp 40.206.000
                    <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailBencana">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} style={{ marginBottom: "1rem" }}>
              <Card>
                <div className="card-img3">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Title>Peduli Bencana Erupsi & Banjir Lahar</Card.Title>
                  <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.70.000.000</Card.Text>
                  <div>
                    <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <br />
                  <Card.Text>
                    Rp. 0
                    <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailBencana">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={3} style={{ marginBottom: "1rem" }}>
              <Card>
                <div className="card-img4">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Title>Meraih Syurga Bersama Anak Yatim </Card.Title>
                  <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.10.000.000</Card.Text>
                  <div>
                    <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <br />
                  <Card.Text>
                    Rp. 0
                    <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailSosial">
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
    </div>
  );
};

export default CardDonasiLain;
