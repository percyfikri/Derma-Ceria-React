import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import "./donasi.css";

const Donasi = () => {
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
            <div className="d-flex justify-content-start" style={{ marginLeft: "8rem" }}>
              <a href="#" className="btn btn-warning" style={{ fontSize: "0.9rem" }}>
                Lihat Selengkapnya
              </a>
            </div>
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
                  <li className="square-bullet">Bencana</li>
                  <li className="square-bullet">Sosial</li>
                  <li className="square-bullet">Pendidikan</li>
                  <li className="square-bullet">Kesehatan</li>
                  <li className="square-bullet">Kerohanian</li>
                  <li className="square-bullet">Teknologi</li>
                </ul>
                <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                  <li className="first-list">
                    <b>Campaign</b>
                  </li>
                  <hr className="my-4" />
                  <li className="square-bullet">Normal</li>
                  <li className="square-bullet">Zakat</li>
                  <li className="square-bullet">Qurban</li>
                </ul>
                <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                  <li className="first-list">
                    <b>Status</b>
                  </li>
                  <hr className="my-4" />
                  <li className="square-bullet">Berlangsung</li>
                  <li className="square-bullet">Selesai</li>
                  <li className="square-bullet">Diperpanjang</li>
                </ul>
                <ul style={{ listStyle: "square", paddingLeft: "0" }}>
                  <li className="first-list">
                    <b>Diurutkan</b>
                  </li>
                  <hr className="my-4" />
                  <li className="square-bullet">Paling Populer</li>
                  <li className="square-bullet">Akan Berakhir</li>
                  <li className="square-bullet">Terbaru</li>
                  <li className="square-bullet">Terlama</li>
                  <li className="square-bullet">Mendesak</li>
                </ul>
              </div>
            </Col>

            <Col>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img1">
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
                  <Card>
                    <div className="card-img2">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Pray For Semeru Lumajang</Card.Title>
                      <Card.Text>Mari memberikan sentuhan harapan bagi mereka yang terkena dampak bencana di Semeru, Lumajang. Setiap sumbanganmu adalah langkah nyata menuju pemulihan. Mari bantu saudara kita yang membutuhkan!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={80} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp 40.206.000</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img3">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Erupsi & Banjir Lahar</Card.Title>
                      <Card.Text>Bantu mereka yang terdampak erupsi dan banjir lahar. Setiap sumbanganmu berarti bagi pemulihan keadaan mereka. Bersama kita bisa membuat perbedaan. Sumbangkan donasimu sekarang!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.70.000.000</Card.Text>
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
                  <Card>
                    <div className="card-img4">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Bersama Anak Yatim </Card.Title>
                      <Card.Text>Untuk meraih masa depan yang lebih baik. Sumbanganmu adalah sinar terang bagi mereka. Mari menciptakan perubahan positif. Donasikan sekarang!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.10.000.000</Card.Text>
                      <div>
                        <ProgressBar now={0} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp. 0</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img5">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Sumbangan Panti asuhan</Card.Title>
                      <Card.Text>Ayo bergabung dalam gerakan kemanusiaan! Setiap sumbanganmu membantu menciptakan perbedaan bagi yang membutuhkan. Bersama, kita beri harapan dan mengubah hidup!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 25.000.000</Card.Text>
                      <div>
                        <ProgressBar now={25} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp 10.000.000</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img6">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Berbagi Yatim Dhu&apos;afa</Card.Title>
                      <Card.Text>Bantu anak yatim & dhu&apos;afa untuk meraih masa depan yang lebih cerah. Sumbanganmu adalah cahaya di dalam kegelapan. Mari kita jaga mereka dengan kasih sayang. Donasikan sekarang!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 10.000.000</Card.Text>
                      <div>
                        <ProgressBar now={75} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp. 0</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img7">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Tanggap Bencana</Card.Title>
                      <Card.Text>
                        Ayo tunjukkan kepedulian kita! Mari bergabung dalam gerakan kebaikan ini dengan memberikan donasi sebesar apapun yang kita mampu. Bersama kita membangun kembali masa depan bagi Kabupaten Cianjur lebih baik.
                      </Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.20.000.000</Card.Text>
                      <div>
                        <ProgressBar now={75} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp 20.000</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img8">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Pendidikan Anak Daerah</Card.Title>
                      <Card.Text>Bersama-sama, kita bisa memberikan akses pendidikan yang berkualitas bagi anak-anak daerah. Setiap sumbanganmu membuka peluang baru bagi masa depan mereka. Mari berikan dukungan sekarang!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp 5.000.000</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img9">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Pendidikan Anak Dhu&apos;afa</Card.Title>
                      <Card.Text>Bantu ciptakan masa depan lebih cerah bagi masyarakat kurang mampu di Indonesia melalui pendidikan. Sumbanganmu memberikan harapan yang nyata. Mari bergandengan tangan, donasikan sekarang!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
                      <div>
                        <ProgressBar now={20} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp. 10.611.123</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row className="gap-6 max-md:flex-col max-md:gap-0">
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img10">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Donasi Darurat Pasien ICU</Card.Title>
                      <Card.Text>Bantu kami menyelamatkan nyawa pasien ICU dalam keadaan darurat. Setiap detik berharga. Sumbanganmu akan langsung memberikan bantuan medis yang diperlukan. Mari bersama, donasikan sekarang!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={23} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp 22.543.111</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs={12} sm={6} md={4} style={{ marginBottom: "1rem" }}>
                  <Card>
                    <div className="card-img11">
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
                  <Card>
                    <div className="card-img12">
                      <Card.Img variant="top" />
                    </div>
                    <Card.Body>
                      <Card.Title>Akses Sehat Masyarakat</Card.Title>
                      <Card.Text>Bantu kami dalam mempermudah akses kesehatan masyarakat kurang mampu disekitar kita. Sumbanganmu membawa perubahan yang nyata bagi mere. Mari bergandengan tangan, donasikan sekarang!</Card.Text>
                      <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
                      <div>
                        <ProgressBar now={100} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
                      </div>{" "}
                      <br />
                      <Card.Text>Rp. 100.000.000</Card.Text>
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
  );
};

export default Donasi;
