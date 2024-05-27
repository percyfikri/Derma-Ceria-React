import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./kategori.css";

const kerohanian = () => {
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
              </div>
            </Container>
          </div>
    
          {/* card */}
          <div className="donasicard w-100 min-vh-100">
            <Container className="px-4">
              <Row>
                <Col xs={2}>
                  <div className="flex flex-col text-xl text-black max-w-[283px]">
                  <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                      <li className="first-list">
                        <b>Kategori</b>
                      </li>
                      <hr className="my-4" />
                      <li className="square-bullet1"><Link to="/bencanaalam" target="_blank">Bencana</Link></li>
                      <li className="square-bullet2"><Link to="/sosial" target="_blank">Sosial</Link></li>
                      <li className="square-bullet3"><Link to="/pendidikan" target="_blank">Pendidikan</Link></li>
                      <li className="square-bullet4"><Link to="/kesehatan" target="_blank">Kesehatan</Link></li>
                      <li className="square-bullet4"><Link to="/kerohanian" target="_blank">Kerohanian</Link></li>
                      <li className="square-bullet5"><Link to="/teknologi" target="_blank">Teknologi</Link></li>
                    </ul>
                    <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                      <li className="first-list">
                        <b>Campaign</b>
                      </li>
                      <hr className="my-4" />
                      <li className="square-bullet6"><Link to="/normal" target="_blank">Normal</Link></li>
                      <li className="square-bullet7"><Link to="/zakat" target="_blank">Zakat</Link></li>
                      <li className="square-bullet8"><Link to="/qurban" target="_blank">Qurban</Link></li>
                    </ul>
                    <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                      <li className="first-list">
                        <b>Status</b>
                      </li>
                      <hr className="my-4" />
                      <li className="square-bullet9"><Link to="/normal" target="_blank">Berlangsung</Link></li>
                      <li className="square-bullet10"><Link to="/selesai" target="_blank">Selesai</Link></li>
                      <li className="square-bullet11"><Link to="/diperpanjang" target="_blank">Diperpanjang</Link></li>
                    </ul>
                    <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                      <li className="first-list">
                        <b>Diurutkan</b>
                      </li>
                      <hr className="my-4" />
                      <li className="square-bullet12"><Link to="/populer" target="_blank">Paling Populer</Link></li>
                      <li className="square-bullet13"><Link to="/berakhir" target="_blank">Akan Berakhir</Link></li>
                      <li className="square-bullet14"><Link to="/terbaru" target="_blank">Terbaru</Link></li>
                      <li className="square-bullet15"><Link to="/terlama" target="_blank">Terlama</Link></li>
                      <li className="square-bullet16"><Link to="/mendesak" target="_blank">Mendesak</Link></li>
                    </ul>
                  </div>
                </Col>
    
                <Col>
                  <Row className="gap-6 max-md:flex-col max-md:gap-0">
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                      <Card className="card-container">
                        <div className="card-kerohanian-img1">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ fontSize: "1.14rem" }}>Donasi Pembangunan Mushola</Card.Title>
                          <Card.Text>
                          Mari kita bersama-sama mewujudkan impian membangun mushola di lingkungan kita. Mushola ini akan menjadi tempat ibadah, belajar, dan berkumpul yang penuh berkah. Ayo berdonasi!
                          </Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 150.000.000</Card.Text>
                          <div>
                            <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 150.000.000</Card.Text>
                        </Card.Body>
    
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-kerohanian-img2">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Donasi Renovasi Masjid</Card.Title>
                          <Card.Text>Mari kita bersama-sama turut serta dalam upaya renovasi masjid kita tercinta. Masjid ini adalah pusat kegiatan ibadah dan komunitas yang membutuhkan perbaikan agar dapat lebih nyaman dan layak digunakan. Ayo berdonasi sekarang !</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                          <div>
                            <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 0</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-kerohanian-img3">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ fontSize: "1.146rem" }}>Donasi Pembangunan Ponpes</Card.Title>
                          <Card.Text>
                          Mari kita berpartisipasi dalam pembangunan pesantren tahfidz yang akan menjadi pusat pembelajaran Al-Qur&apos;an bagi generasi muda kita. Pesantren menjadi tempat mereka mengamalkan ajaran Al-Qur&apos;an.</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.100.000.000</Card.Text>
                          <div>
                            <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 0</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="gap-6 max-md:flex-col max-md:gap-0">
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-kerohanian-img4">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ fontSize: "1.2rem" }}>Pembangunan Rumah Yatim</Card.Title>
                          <Card.Text>mari kita bersama-sama berpartisipasi dalam pembangunan rumah yatim yang akan menjadi tempat tinggal, belajar, dan berkembang bagi anak-anak yatim. Rumah ini akan menjadi tempat yang penuh harapan bagi mereka.</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.20.000.000</Card.Text>
                          <div>
                            <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 0</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-kerohanian-img5">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ fontSize: "1.178rem" }}>Pembangunan Rumah Qur&apos;an</Card.Title>
                          <Card.Text>Mari berkontribusi dalam pembangunan Rumah Quran! Donasi Anda, kita dapat menyediakan tempat belajar yang nyaman dan mendukung bagi anak-anak untuk mendalami Al-Quran. Mari Berdonasi!</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                          <div>
                            <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 0</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-kerohanian-img6">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ fontSize: "1.1rem" }}>Sedekah Mukena Layak Tuk Puluhan Santriwati Yatim</Card.Title>
                          <Card.Text>Diantara syarat diterimanya sholat adalah menutup aurat dan suci dari hadats. salah satu ikhtiar untuk memenuhi syarat tersebut adalah dengan menggunakan mukena yang layak.</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 70.000.000</Card.Text>
                          <div>
                            <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 0</Card.Text>
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
  )
}

export default kerohanian