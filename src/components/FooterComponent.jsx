import React from "react";
import Logo from "../assets/logos/logoVertikal.png";
import Location from "../assets/icons/location.png";
import Telepon from "../assets/icons/tlp.png";
import Instagram from "../assets/icons/ig.png";
import Email from "../assets/icons/email.png";

const Footer = () => {
  return (
    <footer className="bg-color-hitam text-white py-5">
      <div className="container-fluid px-5">
        {/* Containt Footer */}
        <div className="row">
          <div className="col">
            <div className="row">
              <a href="/" className="px-3 d-flex align-items-center me-auto">
                <img src={Logo} alt="logo" style={{ maxWidth: "100px" }} />
              </a>
              <div className="px-3">
                <p className="mt-3">Platform Donasi DermaCeria adalah tempat yang memungkinkan Anda untuk memberikan bantuan dengan mudah dan menyenangkan, serta memberikan dampak positif langsung kepada mereka yang membutuhkan.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h5 className="mb-3">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <img src={Telepon} alt="icon location" className="me-2 img-fluid" style={{ maxWidth: "20px" }} />
                  <a href="#" className="text-white text-decoration-none">
                    0896 3100 3500
                  </a>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <img src={Instagram} alt="icon location" className="me-2 img-fluid" style={{ maxWidth: "20px" }} />
                  <a href="#" className="text-white text-decoration-none">
                    dermaceria
                  </a>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <img src={Email} alt="icon location" className="me-2 img-fluid" style={{ maxWidth: "20px" }} />
                  <a href="#" className="text-white text-decoration-none">
                    dermaceria@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <h5 className="mb-3">Address</h5>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start">
                  <img src={Location} alt="icon location" className="me-2 img-fluid" style={{ width: "17px", height: "20px", alignSelf: "flex-start" }} />
                  <a href="#" className="text-white text-decoration-none" style={{ alignSelf: "flex-start" }}>
                    Jl. Matraman Raya No.134, Kb. Manggis, Kec. Matraman, Jakarta 13150
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">© 2024 All rights reserved</p>
            <a href="#" className="text-white">
              Privacy policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="text-white">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
