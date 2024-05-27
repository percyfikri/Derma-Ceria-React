import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./kategori.css";

const pendidikan = () => {
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
                  <div className="card-pend-img1">
                    <Card.Img variant="top" />
                  </div>
                  <Card.Body>
                    <Card.Title className="title-donasi">Pendidikan Anak Yatim</Card.Title>
                    <Card.Text>
                      Bantu berikan pendidikan yang layak untuk anak yatim & dhu&apos;afa. Setiap sumbanganmu membuka pintu kesempatan baru bagi mereka. Mari kita berinvestasi dalam masa depan mereka bersama. Donasikan sekarang! div.
                    </Card.Text>
                    <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                    <div>
                      <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />{" "}
                    </div>{" "}
                    <br />
                    <Card.Text>Rp. 5.000.000</Card.Text>
                  </Card.Body>

                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
              <Card className="card-container">
                  <div className="card-pend-img2">
                    <Card.Img variant="top" />
                  </div>
                  <Card.Body>
                    <Card.Title>Berbagi Paket Pendidikan</Card.Title>
                    <Card.Text>Mari bersama-sama kita ciptakan masa depan yang lebih cerah bagi anak-anak yang kurang beruntung. Donasi Anda dapat membantu menyediakan buku, seragam, dan biaya sekolah bagi mereka yang membutuhkan. Ayo Berdonasi !</Card.Text>
                    <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                    <div>
                      <ProgressBar now={20} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                    </div>{" "}
                    <br />
                    <Card.Text>Rp 10.000.000</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
              <Card className="card-container">
                  <div className="card-pend-img3">
                    <Card.Img variant="top" />
                  </div>
                  <Card.Body>
                    <Card.Title>BERKAH SUBUH:</Card.Title>
                    <Card.Text>
                    <b>Bantu 100+ Perempuan Pencari Nafkah</b> <br />
                      Masih asing bagi kita dengan julukan “Perempuan Pencari Nafkah”. Namun, banyak sekali di luar sana perempuan hebat harus mengurus rumah tangga dan mencari nafkah untuk keluarga</Card.Text>
                    <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.500.000.000</Card.Text>
                    <div>
                      <ProgressBar now={90} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                    </div>{" "}
                    <br />
                    <Card.Text>Rp. 444.870.966</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="gap-6 max-md:flex-col max-md:gap-0">
              <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
              <Card className="card-container">
                  <div className="card-pend-img4">
                    <Card.Img variant="top" />
                  </div>
                  <Card.Body>
                    <Card.Title>Pendidikan Anak Daerah</Card.Title>
                    <Card.Text>Bersama-sama, kita bisa memberikan akses pendidikan yang berkualitas bagi anak-anak daerah. Setiap sumbanganmu membuka peluang baru bagi masa depan mereka. Mari berikan dukungan sekarang!</Card.Text>
                    <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.50.000.000</Card.Text>
                    <div>
                      <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                    </div>{" "}
                    <br />
                    <Card.Text>Rp. 5.000.000</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
              <Card className="card-container">
                  <div className="card-pend-img5">
                    <Card.Img variant="top" />
                  </div>
                  <Card.Body>
                    <Card.Title>Pendidikan Anak Dhu&apos;afa </Card.Title>
                    <Card.Text>Bantu ciptakan masa depan lebih cerah bagi masyarakat kurang mampu di Indonesia melalui pendidikan. Sumbanganmu akan memberikan kesempatan baru dan harapan yang nyata. Mari bergandengan tangan, donasikan sekarang!</Card.Text>
                    <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                    <div>
                      <ProgressBar now={25} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                    </div>{" "}
                    <br />
                    <Card.Text>Rp 10.611.123</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
              <Card className="card-container">
                  <div className="card-pend-img6">
                    <Card.Img variant="top" />
                  </div>
                  <Card.Body>
                    <Card.Title>Gantikan 10.000 Mushaf Milik Santri yang Usang</Card.Title>
                    <Card.Text>Tak hanya diberi tempat tinggal, para santri juga belajar ilmu agama dan menghafal Al-Quran. Mereka di sana begitu semangat mengejar cita-cita mereka menjadi ustadz dan hafidz Quran.</Card.Text>
                    <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 20.000.000</Card.Text>
                    <div>
                      <ProgressBar now={15} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                    </div>{" "}
                    <br />
                    <Card.Text>Rp. 4.010.000</Card.Text>
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

export default pendidikan