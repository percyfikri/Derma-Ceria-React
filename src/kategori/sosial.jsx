import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./kategori.css";
const sosial = () => {
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
                        <div className="card-sos-img1">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title className="title-donasi">Sumbangan Panti asuhan</Card.Title>
                          <Card.Text>
                          Ayo bergabung dalam gerakan kemanusiaan! Setiap sumbanganmu membantu menciptakan perbedaan bagi yang membutuhkan. Bersama, kita bisa memberikan harapan dan mengubah hidup . Mari salurkan demi kebahagiaan mereka bantuanmu sekarang!
                          </Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 25.000.000</Card.Text>
                          <div>
                            <ProgressBar now={70} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 10.000.000</Card.Text>
                        </Card.Body>
    
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-sos-img2">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Bersama Anak Yatim Dhu&apos;afa</Card.Title>
                          <Card.Text>Sumbanganmu adalah sinar terang bagi mereka yang membutuhkan. Mari bersama-sama menciptakan perubahan positif. Donasikan sekarang!</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 10.000.000</Card.Text>
                          <div>
                            <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp 0</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-sos-img3">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Berbagi Kasih Yatim Dhu&apos;afa</Card.Title>
                          <Card.Text>
                          Bantu anak yatim & dhu&apos;afa untuk meraih masa depan yang lebih cerah. Sumbanganmu adalah cahaya di dalam kegelapan. Mari kita jaga mereka dengan kasih sayang. Donasikan sekarang!</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 10.000.000</Card.Text>
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
                        <div className="card-sos-img4">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Peduli Difabel</Card.Title>
                          <Card.Text>Mari kita berikan dukungan penuh kepada para difabel atau para penyandang disabilitas. Ayo donasi sekarang!</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 20.000.000</Card.Text>
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
                        <div className="card-sos-img5">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Bantu 1000 Guru Pelosok Daerah </Card.Title>
                          <Card.Text>Fasilitas yang terbatas, membuat para guru bekerja dengan ala kadarnya.</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                          <div>
                            <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp 0</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-sos-img6">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Bantu ABK Terlantar Hidup</Card.Title>
                          <Card.Text>Karena bentuk perhatian sekecil apapun akan sangat berarti bagi mereka, agar adik-adik ini tahu mereka nggak sendirian.</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 70.000.000</Card.Text>
                          <div>
                            <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
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

export default sosial