import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./dashboardDonatur.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboardDonatur.css";
import Search from "../../assets/icons/search.svg";

const dashboardDonatur = () => {
  // eslint-disable-next-line no-unused-vars
  const rows = 6;
  // eslint-disable-next-line no-unused-vars
  const columns = 6;

  //value Judul
  const headers = ["No", "Tanggal", "Donasi", "Jumlah Donasi", "Program", "Penerima"];

  //data table
  const data = [
    ["1", "07-05-2024", "Dana", "Rp. 50.000", "Santunan Yatim", "Yayasan Chahya Ilahi"],
    ["2", "07-05-2024", "Dana", "Rp. 200.000", "Bantu Dhuafa", "Nenek Sutiem"],
    ["3", "07-05-2024", "Dana", "Rp. 100.000", "Qurban", "Yayasan Al Huda"],
    ["4", "07-05-2024", "Barang", "Bangku Sekolah", "Bantu Sekolah", "Yayasan Adi Bungsu"],
    ["5", "07-05-2024", "Pakaian", "Baju", "Bencana", "Panti Asuhan Pelita"],
    ["6", "07-05-2024", "Dana", "Rp. 2.000.000", "Santunan Yatim", "Panti Asuhan Pelita"],
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
                <Card.Title style={{ fontSize: "27px", fontWeight: "bold" }}>Jumlah Donasi</Card.Title>
                <Card.Text style={{ fontSize: "23px", fontWeight: "bold", color: "#f8b22d" }}>15</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Donasi Anda baru-baru ini</h1>
          </Col>
          <Col>
            <div className="col">
            <div className="input-container">
                <img src={Search} alt="search" />
                <input type="text" placeholder="Search" className="form-control mx-2 bg-light" />
              </div>            </div>
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
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default dashboardDonatur;
