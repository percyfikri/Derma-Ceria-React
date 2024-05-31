import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar, Nav } from "react-bootstrap";
import "./donasi.css";
import FilterComponent from "../../components/FilterComponent";

const Donasi = () => {
  return (
    <div>
      {/* landing page */}
      <div className="color-landing " style={{ position: "relative", minHeight: "80vh" }}>
        <Container>
          <div className="donasi-landing">
            <h1>
              Pintu Menuju <br />
              Kebahagiaan
            </h1>
            <p>
              Donasi adalah kilatan cahaya di tengah kegelapan, sebuah pelukan hangat dalam dinginnya dunia. Dengan memberi, kita menghidupkan percikan harapan, memperkuat jalinan kemanusiaan, dan membawa keajaiban bagi mereka yang
              membutuhkan.
            </p>
            <div className="d-flex justify-content-start" style={{ marginLeft: "8rem" }}>
              <a href="#" className="btn btn-warning" style={{ fontSize: "0.9rem" }}>
                Lihat Selengkapnya
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* card */}
      <div className="donasicard w-100 min-vh-100">
        <Container className="px-4">
          <Row>
            <FilterComponent />

            <Col>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title className="title-donasi">Donasi Pendidikan Anak Yatim & Dhu&apos;afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
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
                  <Card>
                    <div className="card-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Pray For Gunung Semeru Lumajang</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={80} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
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
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Peduli Bencana Erupsi & Banjir Lahar</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.70.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
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
              </Row>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Meraih Syurga Bersama Anak Yatim & Dhu&apos;afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.10.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
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
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Kumpulkan Sumbangan Untuk Panti Asuhan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 25.000.000</Card.Text>
                      <div>
                        <ProgressBar now={25} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>
                        Rp 10.000.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailSosial">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Berbagi Kasih Untuk Yatim Piatu & Dhu’afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 10.000.000</Card.Text>
                      <div>
                        <ProgressBar now={75} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
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
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img7">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Peduli dan Tanggap Bencana Gempa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.20.000.000</Card.Text>
                      <div>
                        <ProgressBar now={75} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>
                        Rp 20.000
                        <h1 className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                        <Nav.Link href="/detailBencana">
                          Donasi
                        </Nav.Link>                        
                        </h1>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img8">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Anak Daerah Untuk Mendapatkan Pendidikan</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>
                        Rp 5.000.000
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
                  <Card>
                    <div className="card-img9">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Pendidikan Masyarakat Kurang Mampu</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={20} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>
                        Rp. 10.611.123
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
                  <Card>
                    <div className="card-img10">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Cepat Untuk Pasien ICU Keadaan Darurat</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={23} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>
                        Rp 22.543.111
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
                  <Card>
                    <div className="card-img11">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Jaminan Kesehatan Untuk Dhu&apos;afa</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={56} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
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
                  <Card>
                    <div className="card-img12">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Mudahkan Akses Kesehatan Masyarakat</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
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
            </Col>
          </Row>
        </Container>
      </div>
      {/* end card */}
    </div>
  );
};

export default Donasi;
