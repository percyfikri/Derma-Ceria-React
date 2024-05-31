import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Tab, Nav, ProgressBar } from "react-bootstrap";
import DetGambar from "../../assets/images/detailPendidikan.jpg";
import GambarPendidikan from "../../assets/images/pend1.jpg";
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

const detailPendidikan = () => {
  return (
    <div>
      <Container className="my-4">
        <Row>
          <Col lg={7}>
            <h4 style={{ fontWeight: "bold" }}>Donasi Pendidikan Anak Yatim</h4>
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
                      Membangun Masa Depan Bersama Yayasan Cahaya Ilahi: Yayasan Cahaya Ilahi adalah tempat yang menjadi jembatan harapan bagi anak-anak yatim dan dhuafa untuk meraih pendidikan yang layak. Kami berkomitmen untuk memberikan akses pendidikan berkualitas kepada mereka yang membutuhkan, sehingga mereka dapat tumbuh dan berkembang menjadi individu yang mandiri dan berdaya.
                      </p>
                      <p>
                      Pendampingan Setiap Langkah: Di Yayasan Cahaya Ilahi, kami tidak hanya menyediakan layanan pendidikan, tetapi juga memberikan pendampingan secara pribadi kepada setiap anak. Setiap langkah mereka dalam perjalanan pendidikan mereka didukung dengan penuh kasih sayang dan perhatian, sehingga mereka merasa didengar, dihargai, dan didukung sepenuhnya.
                      </p>
                      <p>Investasi dalam Potensi Anak Bangsa: Donasi Anda tidak hanya menjadi sumbangan, tetapi juga merupakan investasi dalam potensi anak bangsa. Dengan memberikan akses pendidikan yang berkualitas kepada anak-anak yatim dan dhuafa, kita membantu membangun masa depan bangsa yang lebih cerah dan berdaya saing.</p>

                      <img src={DetGambar} alt="detgambar" style={{ maxWidth: "100%" }} />
                      <p>
                      Berikan Mereka Kunci Keberhasilan: Pendidikan adalah kunci keberhasilan dalam hidup. Dengan berdonasi kepada Yayasan Cahaya Ilahi, Anda memberikan mereka kunci untuk membuka pintu menuju masa depan yang lebih baik. Setiap sumbangan Anda adalah langkah penting dalam memberikan kesempatan belajar kepada anak-anak yang membutuhkan.
                      </p>

                      <p>
                      Satu Donasi, Banyak Impian Terwujud: Satu donasi kecil dari Anda dapat membuat banyak impian terwujud. Bersama-sama, kita bisa menciptakan perbedaan yang nyata dalam hidup anak-anak yatim dan dhuafa. Mari bergabung dalam misi kami untuk memberikan pendidikan yang layak bagi mereka. Bersama, kita bisa membangun masa depan yang lebih baik untuk generasi mendatang.
                      </p>
                      <p>
                      Dampak yang Luas, Hasil yang Langgeng: Donasi Anda memiliki dampak jangka panjang yang melampaui batas waktu dan ruang. Ketika Anda berdonasi untuk pendidikan anak yatim dan dhuafa di Yayasan Cahaya Ilahi, Anda memberikan investasi yang akan terus berbuah dalam bentuk perubahan positif yang berkelanjutan dalam kehidupan mereka. Bersama-sama, mari kita terus bekerja keras untuk membuka pintu kesempatan bagi mereka yang membutuhkan, sehingga kita dapat menciptakan dunia yang lebih baik untuk semua. 

Mari Berdonasi Sekarang !
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
                    Rp. 5.000.000
                  </h4>
                </Card.Title>
                <div>
                  <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "8px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <Card.Text className="mt-2" style={{ color: "grey" }}>
                  dari target =&gt; Rp. 50.000.000
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

export default detailPendidikan;
