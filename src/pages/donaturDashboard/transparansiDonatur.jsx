import React from "react";
import { Container, Card, Row, Col, Nav } from "react-bootstrap";
import Unduh from "../../assets/icons/iconUnduh.svg";
import Lapdonasi1 from "./../../assets/images/lapDonasi1.jpg";
import Lapdonasi2 from "./../../assets/images/lapDonasi2.jpg";
import Lapdonasi3 from "./../../assets/images/lapDonasi3.jpg";
import Testimonial1 from "./../../assets/images/testimonial1.jpg";
import Testimonial2 from "./../../assets/images/testimonial2.jpg";
import Testimonial3 from "./../../assets/images/testimonial3.jpg";

const transparansiDonatur = () => {
  return (
    <div>
      <Container>
        <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "3rem", marginBottom: "3rem" }}>Laporan Donasi</h1>
        <Row className="gap-6 max-md:flex-col max-md:gap-0">
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card>
              <img src={Lapdonasi1} alt="img-laporan-donasi1" className="img-laporan1" style={{backgroundSize: "cover", variant: "top"}}/>
              <Card.Body>
                <Card.Title className="title-donasi" style={{ fontWeight: "bold" }}>
                  2023
                </Card.Title>
                <Card.Text style={{ fontSize: "20px" }}>Laporan Donasi bantuan lansia</Card.Text>
                <Card.Text>
                  <div style={{ fontSize: "12px" }}>
                    <Nav.Link href="#">
                      <img src={Unduh} alt="Icon-unduh" />
                      Unduh
                    </Nav.Link>
                    <p>pdf file (size 4761.1 kb)</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card>
            <img src={Lapdonasi2} alt="img-laporan-donasi2" className="img-laporan2" style={{backgroundSize: "cover", variant: "top"}}/>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>2023</Card.Title>
                <Card.Text style={{ fontSize: "20px" }}>Laporan Donasi bantuan Fasilitas</Card.Text>
                <Card.Text>
                  <div style={{ fontSize: "12px" }}>
                    <Nav.Link href="#">
                      <img src={Unduh} alt="Icon-unduh" />
                      Unduh
                    </Nav.Link>
                    <p>pdf file (size 4761.1 kb)</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
            <Card>
            <img src={Lapdonasi3} alt="img-laporan-donasi3" className="img-laporan3" style={{backgroundSize: "cover", variant: "top"}}/>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>2023</Card.Title>
                <Card.Text style={{ fontSize: "20px" }}>Laporan Donasi bantuan Kesehatan</Card.Text>
                <Card.Text>
                  <div style={{ fontSize: "12px" }}>
                    <Nav.Link href="#">
                      <img src={Unduh} alt="Icon-unduh" />
                      Unduh
                    </Nav.Link>
                    <p>pdf file (size 4761.1 kb)</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "3rem", marginBottom: "3rem" }}>Dokumentasi</h1>
      
        <Row style={{alignItems: "center"}}>
          <Col >
            <img src={Testimonial1} alt="Testimonial1" className="img-testimonial"/>
          </Col>
          <Col><Card className="card-testimonial" style={{fontSize: "20px"}}>Saya, sebagai penerima bantuan lansia, mengucapkan terima kasih tulus atas bantuan Anda. Semoga Tuhan memberkati setiap langkah Anda.
          <br /><br />
          <b>Ibu Suryati</b>
         </Card></Col>
        </Row>
        <Row style={{alignItems: "center"}}>
          <Col >
            <img src={Testimonial2} alt="Testimonial2" className="img-testimonial"/>
          </Col>
          <Col><Card className="card-testimonial" style={{fontSize: "20px"}}>Kami, penerima bantuan untuk operasi katarak, menyampaikan ucapan terima kasih yang tulus kepada Anda semua. Semoga menjadi berkah bagi banyak orang.
          <br /><br />
          <b>Ibu Surinem</b></Card></Col>
        </Row>
        <Row style={{alignItems: "center"}}>
          <Col >
            <img src={Testimonial3} alt="Testimonial3" className="img-testimonial"/>
          </Col>
          <Col><Card className="card-testimonial" style={{fontSize: "20px", height: "200px"}}>Terima kasih atas kursi roda yang telah diberikan. Dengan ini, hidup kami menjadi lebih mudah dan lebih bermakna. Terima kasih atas kebaikan dan dukungan Anda.
          <br /><br />
          <b>Ibu Sutejo</b></Card></Col>
        </Row>
      </Container>
    </div>
  );
};

export default transparansiDonatur;
