import React from 'react';
import { Nav } from 'react-bootstrap';
import { HouseDoor, People, FileText, BoxArrowLeft } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';
import "./sidebar.css";
import logo from "../assets/logos/logoHorizontal.png"; 

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 text-white bg-dark sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img src={logo} alt="Dermaceria Logo" className="sidebar-logo" />
      </a>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/dashboardDonatur" className="text-white">
            <HouseDoor className="me-2" /> Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/program-kampanye" className="text-white">
            <People className="me-2" /> Program Kampanye
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/pelacakanDonatur" className="text-white">
            <FileText className="me-2" /> Pelacakan Donasi
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/transparansiDonatur" className="text-white">
            <FileText className="me-2" /> Transparansi Donasi
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/donasi" className="text-white">
            <BoxArrowLeft className="me-2" /> Keluar
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
