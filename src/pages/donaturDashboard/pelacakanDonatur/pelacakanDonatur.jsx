import React from "react";
import ProgresHorizontal from "../../../assets/images/progress1.png";
import ProgressVertikal from "../../../assets/images/progress2.png";
import "./pelacakanDonatur.css";

const pelacakanDonatur = () => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Pelacakan Donasi</h1>
        </div>
        <div className="detail-1">
          <div className="rowdetail1-1">
            <div className="no-tracking">
              <h5>No. Tracking</h5>
              <p>089123456789</p>
            </div>
            <div className="nama-pengirim">
              <h5>Nama Pengirim</h5>
              <p>Mr. Leo Dewanto</p>
            </div>
          </div>
          <div className="rowdetail1-2">
            <div className="pengiriman">
              <h5>Pengiriman</h5>
              <p>Pembarahuan Terakhir Minggu, 05 Mei 2024</p>
            </div>
            <div className="kontak-pengirim">
              <h5>Kontak Pengirim</h5>
              <p>089123456789</p>
            </div>
          </div>
        </div>

        <div className="detail-2">
          <div className="tracking">
            <img src={ProgresHorizontal} alt="" />
          </div>
          <div className="riwayat">
            <div className="title-riwayat">
              <h5>Riwayat Tracking</h5>
            </div>
            <div className="detailTracking">
              <div className="left">
                <img src={ProgressVertikal} alt="" />
              </div>
              <div className="right">
                <div className="rowRiwayat">
                  <div className="keterangan">
                    <div className="dateTime">
                      <div className="date">05 Mei 2024</div>
                      <div className="time">16.00</div>
                    </div>
                    <div className="desc">
                      <p>Donasi telah sampai oleh yang bersangkutan</p>
                    </div>
                  </div>
                </div>
                <div className="rowRiwayat">
                  <div className="keterangan">
                    <div className="dateTime">
                      <div className="date">05 Mei 2024</div>
                      <div className="time">05.00</div>
                    </div>
                    <div className="desc">
                      <p>Donasi sedang diantar ke alamat tujuan</p>
                    </div>
                  </div>
                </div>
                <div className="rowRiwayat">
                  <div className="keterangan">
                    <div className="dateTime">
                      <div className="date">03 Mei 2024</div>
                      <div className="time">13.00</div>
                    </div>
                    <div className="desc">
                      <p>Donasi telah sampai di kota Jakarta</p>{" "}
                    </div>
                  </div>
                </div>
                <div className="rowRiwayat">
                  <div className="keterangan">
                    <div className="dateTime">
                      <div className="date">01 Mei 2024</div>
                      <div className="time">09.45</div>
                    </div>
                    <div className="desc">
                      <p>Donasi sedang dalam proses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pelacakanDonatur;
