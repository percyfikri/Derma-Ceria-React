import React from "react";
import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../../assets/icons/search.svg";
const dashboardBenefisari = () => {
  // eslint-disable-next-line no-unused-vars
  const rows = 4;
  // eslint-disable-next-line no-unused-vars
  const columns = 6;

  //value Judul
  const headers = ["No", "Campaign", "Donasi/Target", "Status"];

  //data table
  const data = [
    ["1", "Donasi bantuan untuk anak Indonesia", "Rp. 20.000.000", "Berlangsung"],
    ["2", "Donasi darurat pasien ICU", "Rp. 20.000.000",  "Berlangsung"],
    ["3", "Donasi korban gempa bumi", "Rp. 20.000.000", "Berlangsung"],
    ["4", "Donasi paket takjil", "Rp. 10.000.000", "Selesai"],
    ["5", "Donasi untuk Palestina", "Rp. 30.000.000", "Berlangsung"],
    ["6", "Donasi korban banjir", "Rp. 20.000.000", "Selelasai"],
  ];
  const renderTableHeader = () => {
    return headers.map((header, index) => (
      <th key={index} style={{ backgroundColor: "#f8b22d", color: "#231f20" }}>
        {header}
      </th>
    ));
  };

  const renderTableBody = () => {
    return data.map((rowData, rowIndex) => (
      <tr key={rowIndex} style={{ backgroundColor: "#f7f3e8", color: "#333" }}>
        {rowData.map((cellData, cellIndex) => (
          <td key={cellIndex}>{cellData}</td>
        ))}
      </tr>
    ));
  };

  return (
    <div>
      <Container>
        <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "3rem", position: "relative" }}>Hallo, User</h1>
        <Row className="d-flex flex-wrap justify-content-center" style={{ position: "relative" }}>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center h-70">
              <Card.Body className="position-relative">
                <Card.Title style={{ fontSize: "27px", fontWeight: "bold" }}>Total Donasi</Card.Title>
                <Card.Text className="color-orange" style={{ fontSize: "23px", fontWeight: "bold", color: "#f8b22d" }}>
                  Rp. 10.000.000
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="text-center h-70">
              <Card.Body>
                <Card.Title style={{ fontSize: "27px", fontWeight: "bold" }}>Campaign</Card.Title>
                <Card.Text style={{ fontSize: "23px", fontWeight: "bold", color: "#f8b22d" }}>2</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} className="mb-4">
            <Card className="text-center h-70">
              <Card.Body>
                <Card.Title style={{ fontSize: "27px", fontWeight: "bold" }}>Total Pencairan Dana</Card.Title>
                <Card.Text style={{ fontSize: "23px", fontWeight: "bold", color: "#f8b22d" }}>Rp. 5.000.000</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Kampanye Anda baru-baru ini</h1>
          </Col>
          <Col>
            <div className="col">
              <div className="input-container">
                <img src={Search} alt="search" />
                <input type="text" placeholder="Search" className="form-control mx-2 bg-light" />
              </div>{" "}
            </div>
          </Col>
        </Row>
        <Row>
          <div className="container my-5">
            <table className="table table-bordered table-striped position-relative">
              <thead className="table-header">
                <tr>{renderTableHeader()}</tr>
              </thead>
              <tbody className="table-body">{renderTableBody()}</tbody>
            </table>
            <h1 className="btn btn-warning" style={{ width: "20%", float: "right", fontSize: "1em" }}>
              <Nav.Link href="#">Upload Kampanye</Nav.Link>
            </h1>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default dashboardBenefisari;
