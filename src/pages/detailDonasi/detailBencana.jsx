import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Tab, Nav, ProgressBar } from "react-bootstrap";
import DetGambar from "../../assets/images/detailBencana.jpg";
import GambarPendidikan from "../../assets/images/benc3.jpg";
import ProfileComponent from "../../components/ProfileComponent";
import Profile1 from "../../assets/icons/profile1.png";
import Profile2 from "../../assets/icons/profile2.png";
import Profile3 from "../../assets/icons/profile3.png";
import Profile4 from "../../assets/icons/profile4.png";
import Profile5 from "../../assets/icons/profile5.png";
import Profile6 from "../../assets/icons/profile6.png";
import Boxcoin from "../../assets/icons/boxCoin.png";
import Shareicon from "../../assets/icons/share.svg";
import CardDonasiLain from "../../components/CardDonasiLain";
import "./detaildonasi.css";

const detailBencana = () => {
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col lg={7}>
            <h4 style={{ fontWeight: "bold" }}>Donasi Peduli dan Tanggap Bencana Gempa</h4>
            <img src={GambarPendidikan} alt="gambarpendidikan" style={{ width: "100%", borderRadius: "15px" }} />
            <hr />
            <Tab.Container defaultActiveKey="description">
              <Card style={{ width: "100%" }}>
                <Card.Header>
                  <Nav variant="tabs" defaultActiveKey="description">
                    <Nav.Item>
                      <Nav.Link eventKey="description">Deskripsi</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Card.Header>
                <Card.Body>
                  <Tab.Content>
                    <Tab.Pane eventKey="description">
                      <p>Gempa berkekuatan 5,6 magnitudo mengguncang Kabupaten Cianjur, Jawa Barat. Guncangan gempa ini terasa hingga ke wilayah Jakarta dan sekitarnya.</p>
                      <p>
                        Setidaknya dalam bencana ini dikabarkan 268 jiwa meninggal dunia, 1.083 lainnya luka-luka, 58.362 jiwa mengungsi di beberapa titik, dan 22.198 unit bangunan infrastruktur seperti rumah warga, tempat ibadah, sekolah,
                        jembatan, rumah sakit, dan fasilitas umum lainnya mengalami kerusakan.
                      </p>

                      <img src={DetGambar} alt="detgambar" style={{ maxWidth: "100%" }} />
                      <p>
                        Dewan panasehat Supandi SE.sewaktu didatangi di kediamannya mengatakan kami sangat berharap seluruh pengurus Gibas cinta damai. masyarakat. elemen pemerintahan.ikut berpartisipasi membantu meringankan beban saudara
                        saudara kita yang tertimpah musibah yang ada di kabupaten cianjur
                      </p>

                      <p>Mari kita doakan para penyintas gempa agar mereka diberikan kesabaran dalam menghadapi bencana gempa yang terjadi, dan kita semua dapat berkontribusi menolong penyintas dengan memberikan donasi terbaik.</p>
                      <p>
                        Insaallah pada hari Senin ini hasil Pengalangan dana Peduli bencana alam ormas Gibas Cinta damai sektor batujaya nantinya dana yang terkumpul akan di kirim keposko di cianjur untuk dibagikan ke masyarakat yang
                        tertimpa musibah, semoga semua apa yang kita jalankan ini menjadi amal ibadah, semoga segala bencana yang datang menjadikan kita semua mengingat akan betapa maha kuasanya Allah Swt.
                      </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Card.Body>
              </Card>
            </Tab.Container>
          </Col>
          <Col>
            <Row style={{ marginTop: "39px" }}>
              <Card>
                <Card.Title style={{ fontWeight: "bold", fontSize: "15px" }}>
                  Dana Terkumpul
                  <h4 className="mt-2" style={{ fontWeight: "bold" }}>
                    Rp. 20.000.000
                  </h4>
                </Card.Title>
                <div>
                  <ProgressBar now={30} variant="warning" style={{ width: "100%", height: "8px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <Card.Text className="mt-2" style={{ color: "grey" }}>
                  dari target =&gt; Rp. 70.000.000
                </Card.Text>
                <div style={{ textAlign: "center" }}>
                  <Row className="justify-content-center" style={{ color: "grey" }}>
                    <Col>
                      70 <br /> Donasi
                    </Col>
                    <Col>
                      175 <br /> Dibagikan
                    </Col>
                    <Col>
                      30 <br /> Hari
                    </Col>
                  </Row>
                </div>
                <Row className="d-grid gap-2 mt-3" style={{ placeItems: "center" }}>
                  <h1 className="btn btn-warning" style={{ width: "95%", position: "relative", margin: "auto" }}>
                    <Nav.Link href="/payDonasiUang">
                      Donasi
                      <img src={Boxcoin} alt="icon box" className=" me-2 img-fluid" style={{ width: "15px", height: "15px", marginTop: "-3px", marginLeft: "5px" }} />
                    </Nav.Link>
                  </h1>
                  <h1 className="btn btn-outline-secondary" type="button" style={{ width: "95%", position: "relative", margin: "auto", color: "black" }}>
                    <Nav.Link href="/payDonasiBarang">
                      Dibagikan
                      <img src={Shareicon} alt="icon share" className="me-2 img-fluid" style={{ width: "15px", height: "15px", marginLeft: "5px" }} />
                    </Nav.Link>
                  </h1>
                </Row>
                <Row className="d-grid gap-2 mt-3" style={{ placeItems: "center", width: "99%", height: "120px", border: "1px solid black", borderRadius: "5px", padding: "4px", margin: "auto" }}>
                  <ProfileComponent />
                  <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                  <a href="/dashboard" style={{ color: "grey", textAlign: "center", height: "200px" }}>
                    Rincian Penggunaan Dana
                  </a>
                </Row>
                <Row className="mt-3" style={{ marginLeft: "10px", position: "flex" }}>
                  <h6 className="mt-2" style={{ fontWeight: "bold" }}>
                    Donasi
                  </h6>
                  <Row>
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile1} alt="icon profile" className="mt-1 me-2 img-fluid" style={{ maxWidth: "50px" }} />
                      </Col>
                      <Col>
                        <h6 className="mt-2" style={{ fontWeight: "bold" }}>
                          Rp. 2.000.000
                        </h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Juleha</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>2 hari yang lalu</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile2} alt="icon profile" className="mt-1 me-2 img-fluid" style={{ maxWidth: "50px" }} />
                      </Col>
                      <Col>
                        <h6 className="mt-2" style={{ fontWeight: "bold" }}>
                          Rp. 1.500.000
                        </h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh AGUS TIRROREJO</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>2 hari yang lalu</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile3} alt="icon profile" className="mt-1 me-2 img-fluid" style={{ maxWidth: "50px" }} />
                      </Col>
                      <Col>
                        <h6 className="mt-2" style={{ fontWeight: "bold" }}>
                          Rp. 500.000
                        </h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Siti Aisyah</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Baru Saja</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                  </Row>
                  <h1 style={{ fontSize: "15px", color: "grey", textAlign: "center" }}>
                    <Nav.Link href="/donasi">Lihat semua Donasi</Nav.Link>
                  </h1>
                </Row>
              </Card>
            </Row>
            <Row>
              <Card>
                <Card.Title style={{ fontWeight: "bold", fontSize: "15px" }}>
                  Barang Terkumpul
                </Card.Title>
                <div style={{ textAlign: "center" }}>
                  <Row className="justify-content-center" style={{ color: "grey" }}>
                    <Col>
                      56 <br /> Donasi
                    </Col>
                    <Col>
                      75 <br /> Dibagikan
                    </Col>
                    <Col>
                      10 <br /> Hari
                    </Col>
                  </Row>
                </div>
                <Row className="d-grid gap-2 mt-3" style={{ placeItems: "center" }}>
                  <h1 className="btn btn-warning" style={{ width: "95%", position: "relative", margin: "auto" }}>
                    <Nav.Link href="/payDonasiUang">
                      Donasi
                      <img src={Boxcoin} alt="icon box" className=" me-2 img-fluid" style={{ width: "15px", height: "15px", marginTop: "-3px", marginLeft: "5px" }} />
                    </Nav.Link>
                  </h1>
                  <h1 className="btn btn-outline-secondary" type="button" style={{ width: "95%", position: "relative", margin: "auto", color: "black" }}>
                    <Nav.Link href="/payDonasiBarang">
                      Dibagikan
                      <img src={Shareicon} alt="icon share" className="me-2 img-fluid" style={{ width: "15px", height: "15px", marginLeft: "5px" }} />
                    </Nav.Link>
                  </h1>
                </Row>
                <Row className="d-grid gap-2 mt-3" style={{ placeItems: "center", width: "100%", height: "120px", border: "1px solid black", borderRadius: "5px", padding: "4px", margin: "auto" }}>
                  <ProfileComponent />
                  <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                  <a href="/dashboard" style={{ color: "grey", textAlign: "center", height: "200px" }}>
                    Rincian Penggunaan Dana
                  </a>
                </Row>
                <Row className="mt-3" style={{ marginLeft: "10px", position: "flex" }}>
                  <h6 className="mt-2" style={{ fontWeight: "bold" }}>
                    Donasi
                  </h6>
                  <Row>
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile4} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "50px" }} />
                      </Col>
                      <Col>
                        <h6 className="mt-2" style={{ fontWeight: "bold" }}>
                          Alat Tulis
                        </h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Kamarudin</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>1 hari yang lalu</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile5} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "50px" }} />
                      </Col>
                      <Col>
                        <h6 className="mt-2" style={{ fontWeight: "bold" }}>
                          Pakaian
                        </h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Jujun Junaedi</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Baru Saja</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile6} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "50px" }} />
                      </Col>
                      <Col>
                        <h6 className="mt-2" style={{ fontWeight: "bold" }}>
                          Al-Qur&apos;an
                        </h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Sutejo</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Baru Saja</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                  </Row>
                  <h1 style={{ fontSize: "15px", color: "grey", textAlign: "center" }}>
                    <Nav.Link href="/donasi">Lihat semua Donasi</Nav.Link>
                  </h1>
                </Row>
              </Card>
            </Row>
          </Col>
        </Row>
        <Row>
          <h4 style={{ fontWeight: "bold" }}>Beragam Donasi Lainnya</h4>
          <CardDonasiLain />
        </Row>
      </Container>
    </div>
  );
};

export default detailBencana;
