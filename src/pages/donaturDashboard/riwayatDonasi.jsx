import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./dashboardDonatur.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboardDonatur.css";

const riwayatDonasi = () => {
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
        <Row>
          <Col>
            <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "3rem" }}>Riwayat Donasi</h1>
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
              <Nav.Link href="/donasi">Donasi Sekarang</Nav.Link>
            </h1>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default riwayatDonasi;
