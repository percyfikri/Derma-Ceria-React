import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./blog.css";
const event = () => {
  return (
    <div>
      {/* Landing page */}
      <div className="blog-class" style={{ position: "relative", minHeight: "80vh" }}>
        <Container>
          <Row>
            <Col>
              <div className="blog-landing">
                <h1>5 Tujuan Donasi dan Manfaatnya</h1>
                <p>
                  Donasi adalah tindakan pemberian sukarela yang bertujuan untuk membantu individu, kelompok, atau lembaga yang membutuhkan. Tindakan ini merupakan wujud nyata kepedulian sosial dan empati terhadap sesama. Donasi memiliki
                  tujuan yang bervariasi dan manfaatnya pun melibatkan banyak aspek.
                  <br />
                  <br />
                  <a href="#" className="btn btn-warning" style={{ float: "left", fontSize: "0.9em" }}>
                    Lihat Selengkapnya
                  </a>
                </p>
              </div>
            </Col>
            {/* <Col>
            <img loading="lazy"
      className="images-blog w-full aspect-[2] max-w-[515px]" />
            </Col> */}
          </Row>
        </Container>
      </div>

      {/* Card */}
      <div className="blogcard" style={{ position: "relative", minHeight: "70vh" }}>
        <Container>
          <Row className="gap-6 max-md:flex-col max-md:gap-0 ">
            <Col>
              <Card className="w-100">
                <div className="card-blog-img1">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Text>Tidak hanya dengan berdonasi dalamberbentuk uang,tetapi bersama Dermaceria dapat berdonasi dengan berupa donasi barang secara sukarela dan DermaCeria sudah terbukti terpercaya</Card.Text>
                  <Card.Text className="blog-end">DermaCeria | 02 Apri 2024</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="w-100">
                <div className="card-blog-img2">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Text>Tips agar dapat berdonasi secara rutin maka luangkan waktumu dengan mempedulikan masyarakat yang membutuhkan dan kiranya tanamkan bahwa pentingnya berdonatur secara rutin.</Card.Text>
                  <Card.Text className="blog-end">DermaCeria | 12 Februari 2024</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="w-100">
                <div className="card-blog-img3">
                  <Card.Img variant="top" />
                </div>
                <Card.Body>
                  <Card.Text>Bersama dengan DermaCeria membantu adik yang kurang mampu dalam perekonomian dengan tubuh yang sedang sakit dan membutuhkan uluran tangan sedikit donasi anda berarti untuk membantu pengobatan </Card.Text>
                  <Card.Text className="blog-end">DermaCeria | 08 Maret 2024</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* end card */}
    </div>
  );
};

export default event;
