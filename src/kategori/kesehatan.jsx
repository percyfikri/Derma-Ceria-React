import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./kategori.css";


const kesehatan = () => {
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
                        <div className="card-sehat-img1">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title className="title-donasi">Donasi Darurat Pasien ICU</Card.Title>
                          <Card.Text>
                          Bantu kami menyelamatkan nyawa pasien ICU dalam keadaan darurat. Setiap detik berharga. Sumbanganmu akan langsung memberikan bantuan medis yang diperlukan. Mari bersama, donasikan sekarang!
                          </Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                          <div>
                            <ProgressBar now={23} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 22.543.111</Card.Text>
                        </Card.Body>
    
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-sehat-img2">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Jaminan Kesehatan Dhu&apos;afa</Card.Title>
                          <Card.Text>Bantu berikan jaminan kesehatan bagi dhu&apos;afa. Dengan sumbanganmu, kita bisa memberikan perlindungan yang mereka butuhkan. Mari bersama-sama menjaga kesehatan mereka. Donasikan sekarang!</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                          <div>
                            <ProgressBar now={56} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 55.510.220</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-sehat-img3">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ fontSize: "1.185rem" }}>Akses Kesehatan Masyarakat</Card.Title>
                          <Card.Text>
                          Bantu kami dalam upaya mempermudah akses kesehatan bagi masyarakat kurang mampu. Setiap sumbanganmu membawa perubahan yang nyata. Mari bergandengan tangan, donasikan sekarang!</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.100.000.000</Card.Text>
                          <div>
                            <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 100.000.000</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="gap-6 max-md:flex-col max-md:gap-0">
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-sehat-img4">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Mukjizat tuk Ratusan Pejuang Transplantasi Hati</Card.Title>
                          <Card.Text>&quot;Harusnya anak saya operasi transplantasi hati tapi terpaksa ditunda bertahun-tahun sampai hepatitisnya jadi sirosis. Biaya operasinya ratusan juta tapi keluarga kami nggak sanggup buat kumpulkan uangnya&quot;</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.60.000.000</Card.Text>
                          <div>
                            <ProgressBar now={85} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 45.000.000</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-sehat-img5">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title>Tolong! Kecelakaan Kerja, Diki Butuh Kaki Palsu</Card.Title>
                          <Card.Text> Diki adalah seorang pekerja keras yang bekerja sebagai pengupas kelapa, mencari nafkah bagi dirinya dan keluarganya di desa kecil tempat ia tinggal. Namun, takdir berkata lain ketika kecelakaan tragis menimpanya.</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                          <div>
                            <ProgressBar now={60} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 33.250.005</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                    <Card className="card-container">
                        <div className="card-sehat-img6">
                          <Card.Img variant="top" />
                        </div>
                        <Card.Body>
                          <Card.Title style={{ fontSize: "1.185rem" }}>KRITIS! Anak dengan Penyakit Kronis Gagal Berobat</Card.Title>
                          <Card.Text>Ketika mereka membutuhkan layanan pengobatan saat sakit atau ada orang terkasihnya yang meninggal dunia. Tentu sangat berat sebab tidak semua orang bisa membayar biayanya.</Card.Text>
                          <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 116.650.000</Card.Text>
                          <div>
                            <ProgressBar now={15} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} />{" "}
                          </div>{" "}
                          <br />
                          <Card.Text>Rp. 40.282.072</Card.Text>
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

export default kesehatan