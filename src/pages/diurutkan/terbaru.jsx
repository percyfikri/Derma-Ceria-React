import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./diurutkan.css";
const terbaru = () => {
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
                  <li className="square-bullet1">
                    <a href="/bencana" target="_blank" rel="noopener noreferrer">
                      Bencana
                    </a>
                  </li>
                  <li className="square-bullet2">
                    <Link to="/sosial" target="_blank">
                      Sosial
                    </Link>
                  </li>
                  <li className="square-bullet3">
                    <Link to="/pendidikan" target="_blank">
                      Pendidikan
                    </Link>
                  </li>
                  <li className="square-bullet4">
                    <Link to="/kesehatan" target="_blank">
                      Kesehatan
                    </Link>
                  </li>
                  <li className="square-bullet5">
                    <Link to="/teknologi" target="_blank">
                      Teknologi
                    </Link>
                  </li>
                </ul>
                <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                  <li className="first-list">
                    <b>Campaign</b>
                  </li>
                  <hr className="my-4" />
                  <li className="square-bullet7">
                    <Link to="/zakat" target="_blank">
                      Zakat
                    </Link>
                  </li>
                  <li className="square-bullet8">
                    <Link to="/qurban" target="_blank">
                      Qurban
                    </Link>
                  </li>
                </ul>
                <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                  <li className="first-list">
                    <b>Status</b>
                  </li>
                  <hr className="my-4" />
                  <li className="square-bullet9">
                    <Link to="/berlangsung" target="_blank">
                      Berlangsung
                    </Link>
                  </li>
                  <li className="square-bullet10">
                    <Link to="/selesai" target="_blank">
                      Selesai
                    </Link>
                  </li>
                  <li className="square-bullet11">
                    <Link to="/diperpanjang" target="_blank">
                      Diperpanjang
                    </Link>
                  </li>
                </ul>
                <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                  <li className="first-list">
                    <b>Diurutkan</b>
                  </li>
                  <hr className="my-4" />
                  <li className="square-bullet12">
                    <Link to="/populer" target="_blank">
                      Paling Populer
                    </Link>
                  </li>
                  <li className="square-bullet13">
                    <Link to="/berakhir" target="_blank">
                      Akan Berakhir
                    </Link>
                  </li>
                  <li className="square-bullet14">
                    <Link to="/terbaru" target="_blank">
                      Terbaru
                    </Link>
                  </li>
                  <li className="square-bullet15">
                    <Link to="/terlama" target="_blank">
                      Terlama
                    </Link>
                  </li>
                  <li className="square-bullet16">
                    <Link to="/mendesak" target="_blank">
                      Mendesak
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img1">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Anak Berkebutuhan Khusus Hidup Layak</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bantu Ribuan Warga yang Terdampak Banjir Lahar</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={30} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 15.546.876                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Asap Tebal Kebakaran Hutan Kalbar!</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 500.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 249.546.876                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Anak dengan Penyakit Kronis Gagal Berobat</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 116.650.000</Card.Text>
                      <div>
                        <ProgressBar now={20} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                      Rp. 40.282.072                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Gantikan 10.000 Mushaf Milik Santri yang Usang</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card className="card-container">
                    <div className="card-terbaru-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bersama Berbagi Kebahagiaan di Hari Raya</Card.Title>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 60.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={11} aria-valuemin={0} aria-valuemax={100} />
                      </div>
                      <br />
                      <Card.Text>
                        Rp. 5.000.000
                        <a href="#" className="btn btn-warning" style={{ float: "right", fontSize: "0.9em" }}>
                          Donasi
                        </a>
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
    </div>  )
}

export default terbaru