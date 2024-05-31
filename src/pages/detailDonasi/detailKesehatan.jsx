import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Tab, Nav, ProgressBar } from "react-bootstrap";
import DetGambar from "../../assets/images/detailKesehatan.jpg";
import GambarPendidikan from "../../assets/images/sehat1.jpg";
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

const detailKesehatan = () => {
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col lg={7}>
            <h4 style={{ fontWeight: "bold" }}>Donasi Darurat Kesehatan</h4>
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
                        Ketika seseorang masuk ke Unit Perawatan Intensif (ICU), mereka berada dalam kondisi kritis yang memerlukan perawatan medis intensif dan biaya yang sangat tinggi. Pasien ICU seringkali membutuhkan peralatan medis
                        khusus, obat-obatan mahal, dan penanganan oleh tenaga medis yang berpengalaman. Bantuan dan dukungan dari masyarakat sangat diperlukan untuk meringankan beban finansial yang dihadapi oleh keluarga pasien.
                      </p>
                      <p>
                        Pasien dalam keadaan darurat di ICU sering kali memerlukan intervensi medis segera untuk menyelamatkan nyawa mereka. Keadaan ini mencakup kondisi seperti serangan jantung, cedera parah, infeksi berat, atau komplikasi
                        penyakit kronis. Biaya perawatan di ICU sangat mahal dan seringkali tidak sepenuhnya ditanggung oleh asuransi kesehatan, membuat keluarga pasien berada dalam situasi yang sangat sulit. Donasi dari masyarakat dapat
                        memberikan bantuan yang sangat berarti dalam situasi kritis ini.
                      </p>
                      <p>Kami mengajak seluruh masyarakat untuk berdonasi guna membantu pasien ICU yang sedang dalam kondisi darurat.</p>

                      <img src={DetGambar} alt="detgambar" style={{ maxWidth: "100%" }} />
                      <p>
                        Kami berkomitmen untuk mengelola setiap donasi dengan penuh transparansi dan akuntabilitas. Laporan penggunaan dana akan dipublikasikan secara berkala kepada para donatur dan masyarakat luas. Dana yang terkumpul akan
                        digunakan secara langsung untuk menutupi biaya perawatan pasien ICU, termasuk biaya obat-obatan, peralatan medis, dan layanan medis lainnya. Kami juga akan bekerja sama dengan rumah sakit untuk memastikan bantuan
                        disalurkan secara efektif.
                      </p>

                      <p>
                        Kami mengajak seluruh lapisan masyarakat untuk berdonasi dan memberikan bantuan bagi pasien ICU yang sedang dalam keadaan darurat. Dengan berdonasi, Anda turut menyelamatkan nyawa dan memberikan harapan kepada mereka
                        yang sedang berjuang dalam kondisi kritis. Bantuan Anda, sekecil apapun, sangat berarti dan dapat membuat perbedaan besar bagi keluarga yang sedang menghadapi masa-masa sulit ini.
                      </p>
                      <p>
                        Setiap donasi yang Anda berikan akan membawa dampak positif yang nyata. Selain membantu menutupi biaya perawatan medis yang mahal, donasi Anda juga memberikan dukungan moral bagi keluarga pasien. Melalui kebersamaan
                        dan gotong royong, kita dapat membantu sesama dalam menghadapi situasi darurat. Mari kita wujudkan rasa kepedulian dan solidaritas dengan berdonasi untuk pasien ICU yang sedang berjuang untuk hidup mereka. Bersama,
                        kita bisa memberikan harapan dan kesempatan kedua bagi mereka.
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
                    Rp. 22.543.111
                  </h4>
                </Card.Title>
                <div>
                  <ProgressBar now={23} variant="warning" style={{ width: "100%", height: "8px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <Card.Text className="mt-2" style={{ color: "grey" }}>
                  dari target =&gt; Rp. 100.000.000
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
                          Oksigen
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

export default detailKesehatan;
