import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./event.css";


const event = () => {
  return (
    <div>
      {/* landing page */}
      <div className="color-landing" style={{ position: "relative", minHeight: "85vh" }}>
        <Container>
          <div className="event-landing">
            <h1>Donasi Bencana Alam Ke SULBAR</h1>
            <p>Pada bulan Januari, keluarga Besar PIKK PLN Pusat telah melaksanakan bantuan kemanusiaan untuk korban gempa ke daerah Mamuju Sulawesi Barat dan korban banjir di Kalimantan Selatan.</p>
          </div>
        </Container>
      </div>

      {/* card */}
      <div className="eventcard" style={{ position: "relative", minHeight: "70vh" }}>
        <Container>
          <Row className="gap-6 max-md:flex-col max-md:gap-0 ">
            <Col>
              <Card className="w-100">
                <div className="card-event-img1">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.2rem" }}>Charity Children Camp SARENITY</Card.Title>
                  <Card.Text>
                    Sesuai dengan nama serenity yaitu ketena, mahasiswa Fakultas Kedokteran dan Ilmu Kesehatan. Atma Jaya berharap untuk bisa memberikan kebahagiaan, ketenangan, dan kedamaian untuk pesertanya.
                    <br />
                    <br />
                    Dimulai sejak 18 April 2024
                    <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                      Lihat Selengkapnya
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="w-100">
                <div className="card-event-img2">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.1rem" }}>CHARITY TOGETHER WITH DIESNATALIS FASILKOM</Card.Title>
                  <Card.Text>
                    Dalam rangka ungkapan syukur Diesnatalis Fasilkom Unsika yang ke 3 th, kami mengajak anda untuk ikut merayakan kegiatan ini dengan cara.
                    <br />
                    <br />
                    Dimulai sejak 18 April 2024
                    <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                      Lihat Selengkapnya
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="w-100">
                <div className="card-event-img3">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Title style={{ fontSize: "1.3rem" }}>Sport Event </Card.Title>
                  <Card.Text>
                    Selain memberikan dukungan dengan memberikan donasi tunai dalam kegiatan di Derma Ceria kita bisa menemukan sport Event yang tak hanya menyenangkan tetapi juga menginspirasi.
                    <br />
                    <br />
                    Dimulai sejak 18 April 2024
                    <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                      Lihat Selengkapnya
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* end card */}
    </div>
  );
};

export default event;
