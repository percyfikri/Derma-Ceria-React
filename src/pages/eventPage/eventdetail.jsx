import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import "./event.css";
import Kaos from "../../assets/images/kaosdetail.jpeg";

const EventDetail = () => {
  return (
    <div className="bg-white">
      {/* landing page */}
      <div className="detail-event-landing" style={{ position: "relative", minHeight: "100vh" }}></div>

      <div>
        <Row>
          <Col md={5} style={{ textAlign: "left", marginTop: "60px", marginBottom: "30px", marginLeft: "45px", fontSize: "16px" }}>
            <h4 style={{ fontWeight: "bold" }}>Deskripsi</h4>
            <p>
              Kami mengadalan sebuah event yang menjadi sebuah kegiatan positif dan diselingi dengan memberikan donasi tunai dan kegiatan tersebut dinamai “Sport Event”. Guna dibuatnya kegiatan tersebut untu membantu masayarakat yang dimana
              hasil pendaftaran tersebut akan dialihkan untuk dana membantu anak kanker. Saat ini, kita semua memiliki kesempatan untuk memberikan dukungan yang sangat dibutuhkan kepada mereka. Dengan mengikuti kegiatan ini dan biaya yang
              dipungut hanya berupa pedaftaran.Event ini tepatnya dilaksanakan dijakarta. Ayo, mari bersama-sama memberikan dukungan dengan cara yang mudah dan bermakna.
            </p>
          </Col>
          <Col md={5}>
            <Container className="my-5 p-5 rounded" style={{ backgroundColor: "#f7f3e8", marginTop: "50px", maxHeight: "330px", width: "40em" }}>
              <Row>
                <Col>
                  <div style={{ fontSize: "15px" }}>
                    <p>
                      <strong>Nama Event</strong>
                      <span style={{ marginLeft: "12px" }}> : Sport</span>
                    </p>
                    <p>
                      <strong>Hari/Tanggal</strong>
                      <span style={{ marginLeft: "8px" }}> : Sabtu, 16 Mei 2024</span>
                    </p>
                    <p>
                      <strong>Pukul</strong>
                      <span style={{ marginLeft: "54px" }}> : 09.00 - 12.00</span>
                    </p>
                    <p>
                      <strong>Tempat</strong>
                      <span style={{ marginLeft: "43px" }}> : Stadion</span>
                    </p>
                    <p>
                      <strong>Benefit</strong>
                      <span style={{ marginLeft: "43px" }}> : Kaos</span>
                    </p>
                  </div>
                </Col>
                <Col>
                  <Card style={{ maxWidth: "200px", margin: "0 auto" }}>
                    <Card.Img src={Kaos} alt="kaos -Event-Page" style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }} />
                  </Card>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EventDetail;
