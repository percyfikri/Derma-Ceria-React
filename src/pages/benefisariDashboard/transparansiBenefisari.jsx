import React from "react";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import Search from "../../assets/icons/search.svg";

const TransparansiBenefisari = () => {
  const data = [
    { no: 1, type: "Anggaran Program", status: "None", req: "Optional" },
    { no: 2, type: "Foto/Video Dokumentasi", status: "None", req: "Required" },
    { no: 3, type: "Testimonial Penerima Manfaat", status: "None", req: "Required" },
  ];

  const handleAddItem = (item) => {
    console.log("Add item:", item);
  };

  return (
    <Container>
      <h1 style={{ fontSize: "30px", fontWeight: "bold", marginTop: "3rem", position: "relative", marginBottom: "1rem" }}>Hallo, User</h1>
      <Row>
        <Col>
          <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "1rem" }}>Donasi Anda baru-baru ini</h1>
        </Col>
        <Col>
          <div className="col">
            <div className="input-container" style={{ marginBottom: "1.5rem" }} >
              <img src={Search} alt="search" />
              <input type="text" placeholder="Search" className="form-control mx-2 bg-light" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ marginBottom: "5rem" }} >
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Type</th>
                <th>Status</th>
                <th>Requirement (Req)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.no}>
                  <td>{item.no}</td>
                  <td>{item.type}</td>
                  <td>{item.status}</td>
                  <td>{item.req}</td>
                  <td>
                    <Button className="btn btn-warning" onClick={() => handleAddItem(item)}>Add</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default TransparansiBenefisari;
