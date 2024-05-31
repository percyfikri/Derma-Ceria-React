import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col, Card, ProgressBar } from "react-bootstrap";
import ProfileComponent from "../../components/ProfileComponent";
import Profile1 from "../../assets/icons/profile1.png";
import Profile2 from "../../assets/icons/profile2.png";
import Profile3 from "../../assets/icons/profile3.png";
import Profile4 from "../../assets/icons/profile4.png";
import Profile5 from "../../assets/icons/profile5.png";
import Profile6 from "../../assets/icons/profile6.png";
import Boxcoin from "../../assets/icons/boxCoin.png";
import Shareicon from "../../assets/icons/share.svg";
const DanaBarangComponent = () => {
  return (
    <div>
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
                  <a href="#" className="btn btn-warning" style={{ width: "95%", position: "relative", margin: "auto" }}>
                    Donasi
                    <img src={Boxcoin} alt="icon box" className=" me-2 img-fluid" style={{ width: "15px", height: "15px", marginTop: "-3px", marginLeft: "5px" }} />
                  </a>
                  <a href="#" className="btn btn-outline-secondary" type="button" style={{ width: "95%", position: "relative", margin: "auto", color: "black" }}>
                    
                    Dibagikan
                    <img src={Shareicon} alt="icon share" className="me-2 img-fluid" style={{ width: "15px", height: "15px", marginLeft: "5px" }} />
                  </a>
                </Row>
                <Row className="d-grid gap-2 mt-3" style={{ placeItems: "center", width: "99%", height: "120px", border: "1px solid black", borderRadius: "5px", padding: "4px", margin: "auto" }}>
                  <ProfileComponent />
                  <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                  <a href="" style={{ color: "grey", textAlign: "center", height: "200px" }}>
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
                        <img src={Profile1} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "60px" }} />
                      </Col>
                      <Col>
                        <h6 className="mt-4" style={{ fontWeight: "bold" }}>
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
                        <img src={Profile2} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "60px" }} />
                      </Col>
                      <Col>
                        <h6 style={{ fontWeight: "bold" }}>Rp. 2.000.000</h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh AGUS TIRROREJO</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>2 hari yang lalu</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile3} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "60px" }} />
                      </Col>
                      <Col>
                        <h6 style={{ fontWeight: "bold" }}>Rp. 500.000</h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Siti Aisyah</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Baru Saja</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                  </Row>
                  <a href="" style={{ fontSize: "15px", color: "grey", textAlign: "center" }}>
                    Lihat semua Donasi
                  </a>
                </Row>
              </Card>
            </Row>
            <Row>
              <Card>
                <Card.Title style={{ fontWeight: "bold", fontSize: "15px" }}>
                  Barang Terkumpul
                  <h4 className="mt-2" style={{ fontWeight: "bold" }}>
                    Rp. 5.000.000
                  </h4>
                </Card.Title>
                <div>
                  <ProgressBar now={10} variant="warning" style={{ width: "100%", height: "10px" }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <Card.Text className="mt-2" style={{ color: "grey" }}>
                  dari target =&gt; Rp. 50.000.000
                </Card.Text>
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
                  <a href="#" className="btn btn-warning" style={{ width: "95%", position: "relative", margin: "auto" }}>
                    Donasi
                    <img src={Boxcoin} alt="icon box" className=" me-2 img-fluid" style={{ width: "15px", height: "15px", marginTop: "-3px", marginLeft: "5px" }} />
                  </a>
                  <a href="#" className="btn btn-outline-secondary" type="button" style={{ width: "95%", position: "relative", margin: "auto", color: "black" }}>
                    
                    Dibagikan
                    <img src={Shareicon} alt="icon share" className="me-2 img-fluid" style={{ width: "15px", height: "15px", marginLeft: "5px" }} />
                  </a>
                </Row>
                <Row className="d-grid gap-2 mt-3" style={{ placeItems: "center", width: "100%", height: "120px", border: "1px solid black", borderRadius: "5px", padding: "4px", margin: "auto" }}>
                  <ProfileComponent />
                  <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                  <a href="" style={{ color: "grey", textAlign: "center", height: "200px" }}>
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
                        <img src={Profile4} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "60px" }} />
                      </Col>
                      <Col>
                        <h6 style={{ fontWeight: "bold" }}>Alat Tulis</h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Kamarudin</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>1 hari yang lalu</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile5} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "60px" }} />
                      </Col>
                      <Col>
                        <h6 style={{ fontWeight: "bold" }}>Pakaian</h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Jujun Junaedi</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Baru Saja</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                    <Row className="align-items-center">
                      <Col xs="auto">
                        <img src={Profile6} alt="icon profile" className="mt-2 me-2 img-fluid" style={{ maxWidth: "60px" }} />
                      </Col>
                      <Col>
                        <h6 style={{ fontWeight: "bold" }}>Al-Qur&apos;an</h6>
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Oleh Sutejo</p>
                      </Col>
                      <Col xs="auto">
                        <p style={{ color: "grey", fontSize: "10px", fontStyle: "italic" }}>Baru Saja</p>
                      </Col>
                    </Row>
                    <hr className="my-2" style={{ width: "100%", margin: "0 auto" }} />
                  </Row>
                  <a href="" style={{ fontSize: "15px", color: "grey", textAlign: "center" }}>
                    Lihat semua Donasi
                  </a>
                </Row>
              </Card>
            </Row>
    </div>
  )
}

export default DanaBarangComponent