import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import Pendidikan from "../../assets/icons/pendidikan.png";
import Kesehatan from "../../assets/icons/kesehatan.png";
import Kerohanian from "../../assets/icons/kerohanian.png";
import Bencana from "../../assets/icons/bencana.png";
import Teknologi from "../../assets/icons/teknologi.png";
import Sosial from "../../assets/icons/sosial.png";
import BrandPeduli1 from "../../assets/images/brandpeduli1.png";
import BrandPeduli2 from "../../assets/images/brandpeduli2.png";
import BrandPeduli3 from "../../assets/images/brandpeduli3.png";
import BrandPeduli4 from "../../assets/images/brandpeduli4.png";
import SubGambar from "../../assets/images/homepage.jpeg";

import "./homepage.css";

const Homepage = () => {
  return (
    <div className="color-landing w-100 min-vh-100">
      {/* Banner */}
      <div className="color-landing " style={{ position: "relative", minHeight: "80vh" }}>
        <Container>
          <div className="home-landing">
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
      {/* Banner */}

      {/* Pilih Kategori Donasi */}
      <div className="donasicard w-100 pb-5">
        <Container className="px-3">
          <Col>
            <Row>
              <Col>
                <Card className="py-5">
                  <div className="title size-title-category font-bold px-3 pb-4">Pilih Kategori Donasi</div>
                  <Row className="px-5">
                    <Col>
                      <div className="col text-center mt-3">
                        <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                          <img src={Pendidikan} alt="icon pendidikan" style={{ maxWidth: "120px" }} />
                          <p className="size-desc-category mt-4 mb-0">Pendidikan</p>
                        </a>
                      </div>
                    </Col>
                    <Col>
                      <div className="col text-center mt-3">
                        <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                          <img src={Kesehatan} alt="icon Kesehatan" style={{ maxWidth: "120px" }} />
                          <p className="size-desc-category mt-4 mb-0">Kesehatan</p>
                        </a>
                      </div>
                    </Col>
                    <Col>
                      <div className="col text-center mt-3">
                        <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                          <img src={Bencana} alt="icon Bencana" style={{ maxWidth: "120px" }} />
                          <p className="size-desc-category mt-4 mb-0">Bencana Alam</p>
                        </a>
                      </div>
                    </Col>
                    <Col>
                      <div className="col text-center mt-3">
                        <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                          <img src={Teknologi} alt="icon Teknologi" style={{ maxWidth: "120px" }} />
                          <p className="size-desc-category mt-4 mb-0">Teknologi</p>
                        </a>
                      </div>
                    </Col>
                    <Col>
                      <div className="col text-center mt-3">
                        <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                          <img src={Sosial} alt="icon Sosial" style={{ maxWidth: "120px" }} />
                          <p className="size-desc-category mt-4 mb-0">Sosial</p>
                        </a>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
      {/* end Pilih Kategori Donasi */}

      {/* card rekomendasi */}
      <Row className="gap-6 max-md:flex-col max-md:gap-0 mx-5 mb-5">
        <div className="title size-title-category font-bold pb-4">Rekomendasi Penggalangan Dana</div>
        <Col>
          <Card className="w-100">
            <div className="card-imgs1">
              <Card.Img variant="top" />
            </div>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.2rem" }}>Bantuan untuk anak Indonesia!</Card.Title>
              <Card.Text>
                Dibutuhkan penggalangan dana untuk lebih dari 100 anak-anak yang terkena kanker di Indonesia. Setiap sumbangan Anda memiliki potensi untuk menyelamatkan sebuah kehidupan dan memberikan harapan bagi masa depan mereka.
                Bersama-sama, kita bisa menjadi alasan di balik senyum mereka.
              </Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 300.000.000</Card.Text>
              <div>
                <ProgressBar now={45} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />{" "}
              </div>{" "}
              <br />
              <Card.Text>Rp. 120.000.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="w-100">
            <div className="card-imgs2">
              <Card.Img variant="top" />
            </div>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.2rem" }}>Donasi Korban Banjir</Card.Title>
              <Card.Text>
                Saudara-saudara kita membutuhkan bantuanmu! Donasikan sekarang untuk membantu korban banjir. Setiap kontribusimu akan membawa sinar harapan di tengah keterpurukan. Mari bersama-sama, kita bantu mereka bangkit dan pulih dari
                bencana ini
              </Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 35.000.000</Card.Text>
              <div>
                <ProgressBar now={60} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
              </div>{" "}
              <br />
              <Card.Text>Rp. 17.000.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="w-100">
            <div className="card-imgs3">
              <Card.Img variant="top" />
            </div>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.2rem" }}>Donasi Korban Gempa Bumi</Card.Title>
              <Card.Text>
                Bantu saudara-saudara kita yang terkena dampak gempa bumi! Setiap donasimu memberi harapan baru. Bersama-sama, kita bisa membangun kembali komunitas yang terkena dampak. Ayo, mari berikan dukungan dan bantuan sekarang!Ayo,
                mari berikan dukungan dan bantuan sekarang!
              </Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp.50.000.000</Card.Text>
              <div>
                <ProgressBar now={75} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
              </div>{" "}
              <br />
              <Card.Text>Rp. 30.000.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* end card Rekomendasi */}

      {/* Banner ke-2 */}
      <div className="color-landing" style={{ position: "relative", minHeight: "calc(70vh - 2rem)" }}>
        <Container>
          <div className="homepage-banner2" style={{ height: "100%" }}>
            <Row>
              <Col className="d-flex align-items-center justify-content-center mt-5">
                {" "}
                <img src={SubGambar} alt="subgambar" style={{ maxWidth: "70%", borderRadius: "10px" }} />
              </Col>
              <Col>
                <Row>
                  <h1 className="fw-bold mt-5 pt-5 pb-3 px-5 font-orange">Komunitas Peduli sosial</h1>
                  <p className="fs-6 font-family-Helvetica px-5 pb-5 font-white">
                    Sekelompok individu yang berkomitmen untuk memperbaiki kondisi sosial, ekonomi, dan lingkungan di sekitarnya melalui berbagai kegiatan salah satunya adalah dengan berdonasi.
                  </p>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* Banner ke-2 */}

      {/* card pilihan */}
      <Row className="gap-6 max-md:flex-col max-md:gap-0 mx-5 mb-5">
        <div className="text-center">
          <div className="title size-title-category font-bold pb-4 py-5">
            <p>Pilihan DermaCeria</p>
          </div>
          <div className="title size-desc-category font-regular pb-4" style={{ maxWidth: "calc(100% - 2rem)" }}>
            <p>Berdonasi bukan hanya tentang memberi uang, tetapi juga tentang memberikan harapan dan kebaikan kepada mereka yang membutuhkan.</p>
          </div>
        </div>
        <Col>
          <Card className="w-100">
            <div className="card-imgs4">
              <Card.Img variant="top" />
            </div>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.2rem" }}>Donasi Korban Erupsi</Card.Title>
              <Card.Text>Dalam momen krisis akibat erupsi Gunung Semeru Bersama-sama, mari kita membangun kembali kehidupan mereka yang terpukul dan membawa kembali kehangatan bagi yang terluka. Yuk Berdonasi Sekarang !</Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 50.000.000</Card.Text>
              <div>
                <ProgressBar now={75} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />{" "}
              </div>{" "}
              <br />
              <Card.Text>Rp. 33.000.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="w-100">
            <div className="card-imgs5">
              <Card.Img variant="top" />
            </div>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.2rem" }}>Donasi Untuk Palestina</Card.Title>
              <Card.Text>Bantu Palestina, hentikan penderitaan! Donasikan sekarang untuk memberi bantuan mendesak. Setiap donasi membawa harapan baru bagi mereka yang terdampak. Mari Berdonasi Sekarang !</Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 100.000.000</Card.Text>
              <div>
                <ProgressBar now={90} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
              </div>{" "}
              <br />
              <Card.Text>Rp. 92.000.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="w-100">
            <div className="card-imgs6">
              <Card.Img variant="top" />
            </div>
            <Card.Body>
              <Card.Title style={{ fontSize: "1.2rem" }}>Donasi Pembebasan Lahan</Card.Title>
              <Card.Text>Ayo bersama kita wujudkan pendidikan yang lebih baik! Sumbangkan untuk pembebasan lahan madrasah. Setiap donasi membuka pintu kesempatan bagi generasi mendatang. Mari Berdonasi Sekarang !</Card.Text>
              <Card.Text style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>Rp. 150.000.000</Card.Text>
              <div>
                <ProgressBar now={30} variant="warning" style={{ width: "100%", height: "5px" }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />{" "}
              </div>{" "}
              <br />
              <Card.Text>Rp. 55.000.000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* end card pilihan */}

      {/* Banner ke-3 */}
      <div className="color-landing " style={{ position: "relative", minHeight: "calc(70vh - 2rem)" }}>
        <Container>
          <div className="homepage-banner3" style={{ height: "calc(100% - 7rem)" }}>
            <div className="row font-white text-center font-orange font-bold" style={{ margin: "5rem" }}>
              <Row className="gap-8 max-md:flex-col max-md:gap-0">
                <Col>
                  <p className="size-title-landing py-3">5000</p>
                  <p className="size-desc-landing">Donasi</p>
                </Col>
                <Col>
                  <p className="size-title-landing py-3">110</p>
                  <p className="size-desc-landing">Sukarelawan</p>
                </Col>
                <Col>
                  <p className="size-title-landing py-3">654</p>
                  <p className="size-desc-landing">Produk</p>
                </Col>
                <Col>
                  <p className="size-title-landing py-3">1311</p>
                  <p className="size-desc-landing">Lembaga</p>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      {/* Banner ke-2 */}

      {/* #TemanPeduli */}
      <div className="teman-peduli ">
        <div className="text-center">
          <div className="title size-title-category font-bold pb-4">
            <p>#TemanPeduli</p>
          </div>
        </div>
        <div className="donasicard w-100 " style={{ paddingBottom: "7rem" }}>
          <Container>
            <Col>
              <Row>
                <Col>
                  <Card className="py-5" style={{ maxWidth: "100%", margin: "auto" }}>
                    <Row>
                      <Col>
                        <div className="col text-center mt-3">
                          <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                            <img src={BrandPeduli1} alt="icon brandpeduli1" style={{ maxWidth: "120px" }} />
                            <p className="size-desc-category mt-4 mb-0">BAZNAZ</p>
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div className="col text-center mt-3">
                          <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                            <img src={BrandPeduli2} alt="brandpeduli2" style={{ maxWidth: "120px" }} />
                            <p className="size-desc-category mt-4 mb-0">JNE Express</p>
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div className="col text-center mt-3">
                          <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                            <img src={BrandPeduli3} alt="brandpeduli3" style={{ maxWidth: "120px" }} />
                            <p className="size-desc-category mt-4 mb-0">Bank BRI</p>
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div className="col text-center mt-3">
                          <a href="#" style={{ textDecoration: "none", fontWeight: "bold", color: "inherit" }}>
                            <img src={BrandPeduli4} alt="brandpeduli4" style={{ maxWidth: "120px" }} />
                            <p className="size-desc-category mt-4 mb-0">Metro Data</p>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Container>
        </div>
      </div>
      {/* end #TemanPeduli */}
    </div>
  );
};
export default Homepage;
