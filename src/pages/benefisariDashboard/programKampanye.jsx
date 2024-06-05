import React from "react";
// import { Link } from "react-router-dom";
import { Row, Col, Card, ProgressBar, Nav, Container } from "react-bootstrap";
import Search from "../../assets/icons/search.svg";

const programKampanye = () => {
  return (
    <div>
      <Container>
        <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "2rem", marginBottom: "2rem", position: "relative" }}>Program Kampanye</h1>
        <Row>
          <Col>
            <h1 style={{ fontSize: "25px", fontWeight: "bold", marginBottom: "1rem" }}>Kampanye Anda</h1>
          </Col>
          <Col>
            <div className="col">
              <div className="input-container">
                <img src={Search} alt="search" />
                <input type="text" placeholder="Search" className="form-control mx-2 bg-light" />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gap-6 max-md:flex-col max-md:gap-0">
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card style={{ width: "22rem" }}>
              <div className="card-bencana-img3">
                <Card.Img variant="top" />
              </div>
              <Card.Body>
                <Card.Title>Donasi Peduli dan Tanggap Bencana Gempa</Card.Title>
                <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 70.000.000</Card.Text>
                <div>
                  <ProgressBar now={30} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <br />
                <Card.Text>
                  Rp. 20.000.000
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%", marginLeft: "0.5rem" }}>
                    <Nav.Link href="#">Edit</Nav.Link>
                  </h1>
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%" }}>
                    <Nav.Link href="#">Hapus</Nav.Link>
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card style={{ width: "22rem" }}>
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
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%", marginLeft: "0.5rem" }}>
                    <Nav.Link href="#">Edit</Nav.Link>
                  </h1>
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%" }}>
                    <Nav.Link href="#">Hapus</Nav.Link>
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card style={{ width: "22rem" }}>
              <div className="card-pend-img1">
                <Card.Img variant="top" />
              </div>
              <Card.Body>
                <Card.Title>Donasi Pendidikan Anak Yatim dan Dhu&apos;afa</Card.Title>
                <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                <div>
                  <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <br />
                <Card.Text>
                  Rp. 5.000.000
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%", marginLeft: "0.5rem" }}>
                    <Nav.Link href="#">Edit</Nav.Link>
                  </h1>
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%" }}>
                    <Nav.Link href="#">Hapus</Nav.Link>
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="gap-6 max-md:flex-col max-md:gap-0">
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card style={{ width: "22rem" }}>
              <div className="card-sos-img3">
                <Card.Img variant="top" />
              </div>
              <Card.Body>
                <Card.Title>Berbagi Kasih untuk Yatim dan Dhu&apos;afa</Card.Title>
                <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 10.000.000</Card.Text>
                <div>
                  <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <br />
                <Card.Text>
                  Rp. 0
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%", marginLeft: "0.5rem" }}>
                    <Nav.Link href="#">Edit</Nav.Link>
                  </h1>
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%" }}>
                    <Nav.Link href="#">Hapus</Nav.Link>
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card style={{ width: "22rem" }}>
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
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%", marginLeft: "0.5rem" }}>
                    <Nav.Link href="#">Edit</Nav.Link>
                  </h1>
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%" }}>
                    <Nav.Link href="#">Hapus</Nav.Link>
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card style={{ width: "22rem" }}>
              <div className="card-bencana-img6">
                <Card.Img variant="top" />
              </div>
              <Card.Body>
                <Card.Title>Asap Tebal Kebakaran Hutan Kepung Kalbar!</Card.Title>
                <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 500.000.000</Card.Text>
                <div>
                  <ProgressBar now={40} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <br />
                <Card.Text>
                  Rp. 249.546.876
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%", marginLeft: "0.5rem" }}>
                    <Nav.Link href="#">Edit</Nav.Link>
                  </h1>
                  <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "20%" }}>
                    <Nav.Link href="#">Hapus</Nav.Link>
                  </h1>
                </Card.Text>
              </Card.Body>
            </Card>
            <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em", fontWeight: "bold", width: "50%" }}>
              <Nav.Link href="#">Tambah Kampanye</Nav.Link>
            </h1>
          </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default programKampanye;
