import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilterComponent = () => {
  return (
    <Col xs={2}>
      <div className="flex flex-col text-xl text-black max-w-[283px]">
        <ul style={{ listStyle: "square", paddingLeft: "0" }}>
          <li className="first-list">
            <b>Kategori</b>
          </li>
          <hr className="my-4" />
          <li className="square-bullet2">
            <Link to="/bencana">Bencana</Link>
          </li>
          <li className="square-bullet2">
            <Link to="/sosial">Sosial</Link>
          </li>
          <li className="square-bullet3">
            <Link to="/pendidikan">Pendidikan</Link>
          </li>
          <li className="square-bullet4">
            <Link to="/kesehatan">Kesehatan</Link>
          </li>
          <li className="square-bullet5">
            <Link to="/teknologi">Teknologi</Link>
          </li>
        </ul>
        <ul style={{ listStyle: "square", paddingLeft: "0" }}>
          <li className="first-list">
            <b>Campaign</b>
          </li>
          <hr className="my-4" />
          <li className="square-bullet7">
            <Link to="/zakat">Zakat</Link>
          </li>
          <li className="square-bullet8">
            <Link to="/qurban">Qurban</Link>
          </li>
        </ul>
        <ul style={{ listStyle: "square", paddingLeft: "0" }}>
          <li className="first-list">
            <b>Status</b>
          </li>
          <hr className="my-4" />
          <li className="square-bullet9">
            <Link to="/berlangsung">Berlangsung</Link>
          </li>
          <li className="square-bullet10">
            <Link to="/selesai">Selesai</Link>
          </li>
          <li className="square-bullet11">
            <Link to="/diperpanjang">Diperpanjang</Link>
          </li>
        </ul>
        <ul style={{ listStyle: "square", paddingLeft: "0" }}>
          <li className="first-list">
            <b>Diurutkan</b>
          </li>
          <hr className="my-4" />
          <li className="square-bullet12">
            <Link to="/populer">Paling Populer</Link>
          </li>
          <li className="square-bullet13">
            <Link to="/berakhir">Akan Berakhir</Link>
          </li>
          <li className="square-bullet14">
            <Link to="/terbaru">Terbaru</Link>
          </li>
          <li className="square-bullet15">
            <Link to="/terlama">Terlama</Link>
          </li>
          <li className="square-bullet16">
            <Link to="/mendesak">Mendesak</Link>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default FilterComponent;
