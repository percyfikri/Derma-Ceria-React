import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Tab, Nav, ProgressBar } from "react-bootstrap";
import DetGambar from "../../assets/images/detailSosial.jpg";
import GambarPendidikan from "../../assets/images/sos3.jpg";
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

const detailSosial = () => {
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col lg={7}>
            <h4 style={{ fontWeight: "bold" }}>Donasi Sosial Kemanusiaan</h4>
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
                      <p>
                      Dalam dunia yang penuh dengan tantangan dan ketidakpastian, banyak individu dan komunitas yang memerlukan bantuan mendesak. Program donasi sosial kemanusiaan bertujuan untuk meringankan penderitaan mereka yang terdampak oleh bencana alam, kemiskinan, konflik, dan berbagai kondisi darurat lainnya. Dengan berkontribusi, Anda turut serta dalam misi mulia untuk menciptakan dunia yang lebih baik dan penuh empati.
                      </p>
                      <p>
                      Banyak saudara kita yang saat ini hidup dalam kondisi yang sangat memprihatinkan. Mereka membutuhkan bantuan dalam bentuk makanan, pakaian, tempat tinggal, pendidikan, dan layanan kesehatan. Donasi Anda dapat memberikan mereka akses ke kebutuhan dasar ini, serta memberikan harapan baru untuk masa depan yang lebih cerah. Setiap rupiah yang Anda sumbangkan dapat membuat perbedaan besar dalam kehidupan mereka yang kurang beruntung.
                      </p>
                      <p>
                      Penggalangan dana untuk sosial kemanusiaan dilakukan melalui berbagai saluran yang mudah diakses, termasuk transfer bank, donasi online, dan pengumpulan dana langsung di berbagai acara dan kegiatan komunitas.
                      </p>

                      <img src={DetGambar} alt="detgambar" style={{ maxWidth: "100%" }} />
                      <p>
                      Setiap donasi yang kami terima akan dikelola dengan penuh tanggung jawab. Kami berkomitmen untuk menyediakan laporan penggunaan dana secara berkala yang dapat diakses oleh semua donatur. Hal ini dilakukan untuk memastikan bahwa dana yang terkumpul benar-benar digunakan untuk membantu mereka yang membutuhkan. Audit independen juga dilakukan secara rutin untuk menjaga integritas program ini dan kepercayaan para donatur.
                      </p>

                      <p>
                      Kami mengajak seluruh masyarakat untuk berdonasi demi kemanusiaan. Dengan berdonasi, Anda menunjukkan solidaritas dan kepedulian terhadap sesama. Setiap kontribusi, sekecil apapun, sangat berarti bagi mereka yang sedang dalam kesulitan. Bersama, kita bisa menciptakan perubahan positif dan memberikan harapan baru kepada mereka yang membutuhkan. Mari bersama-sama wujudkan dunia yang lebih adil dan berperikemanusiaan melalui donasi Anda.
                      </p>
                      <p>
                      Donasi Anda tidak hanya memberikan bantuan materiil, tetapi juga memberikan dukungan moral dan harapan kepada mereka yang berada dalam situasi sulit. Melalui bantuan Anda, banyak nyawa dapat diselamatkan, dan kualitas hidup banyak orang dapat ditingkatkan. Kita dapat membangun komunitas yang lebih kuat dan tangguh, di mana setiap orang memiliki kesempatan untuk hidup layak. Bergabunglah dengan kami dalam gerakan kemanusiaan ini, dan jadilah bagian dari perubahan positif yang nyata di dunia ini.
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
                    Rp. 0
                  </h4>
                </Card.Title>
                <div>
                  <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "8px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <Card.Text className="mt-2" style={{ color: "grey" }}>
                  dari target =&gt; Rp. 10.000.000
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
                <Card.Title style={{ fontWeight: "bold", fontSize: "15px" }}>Barang Terkumpul</Card.Title>
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
                          Pakaian
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
                          Makanan
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
                          Al-Quran
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

export default detailSosial;
