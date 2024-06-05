import { React } from "react";
import { MDBSwitch } from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "../../index.css";
import "./payDonasiUang.css";

const padDonasiUang = () => {
  return (
    <>
      <div className="title-donasiUang">
        <h1>Donasi Uang</h1>
      </div>
      <div className="container-donasiUang">
        <div className="container-donasiUang-left">
          <div className="title-form">
            <h3>Data Diri</h3>
          </div>
          <div className="form">
            <div className="buttonAnonym my-4">
              <MDBSwitch defaultChecked id="flexSwitchCheckChecked" label="Sembunyikan Nama Saya (Anonim)" />
            </div>
            <Form className="form-donasiUang mb-3">
              <Form.Group className="form-group-donasiUang my-4" controlId="formBasicEmail">
                {/* <Form.Label>Nama Lengkap</Form.Label> */}
                <Form.Control type="email" placeholder="Nama Lengkap" />
                {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
              </Form.Group>
              <Form.Group className="form-group-donasiUang my-4" controlId="formBasicEmail">
                {/* <Form.Label></Form.Label> */}
                <Form.Control type="input" placeholder="No. Telepon" />
              </Form.Group>
              <Form.Group className="form-group-donasiUang my-4" controlId="formBasicEmail">
                {/* <Form.Label></Form.Label> */}
                <Form.Control type="email" placeholder="Email (Opsional)" />
              </Form.Group>
              <Form.Group className="form-group-donasiUang my-4" controlId="formBasicEmail">
                {/* <Form.Label></Form.Label> */}
                <Form.Control type="text" placeholder="Pesan (Opsional)" style={{ height: "5rem " }} />
              </Form.Group>
            </Form>
          </div>
        </div>

        <div className="container-donasiUang-right">
          <div className="title-Pembayaran">
            <h3>Pilih Nominal Donasi</h3>
          </div>
          <div>
            <Button className="button-nominal">Rp. 30.000</Button>
            <Button className="button-nominal">Rp. 50.000</Button>
            <Button className="button-nominal">Rp. 70.000</Button>
            <Button className="button-nominal">Rp. 100.000</Button>
          </div>
          <hr />
          <p>Nominal Lainnya</p>
          <div className="nominal-lainya">
            <p>Rp. </p>
            <Form.Control type="text" placeholder="Masukkan Nominal" />
          </div>
          <div className="div my-2" style={{ fontSize: "10px", color: "gray", padding: "0 3rem" }}>
            Minimum Donasi Rp. 20.000
          </div>
          <Button className="button-pembayaran">Pilih Metode Pembayaran</Button>
        </div>
      </div>
    </>
  );
};

export default padDonasiUang;
