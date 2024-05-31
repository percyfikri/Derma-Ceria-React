import React from "react";
import Verfikasi from "../assets/icons/verifikasi-icon.svg";
import Logo from "../assets/logos/logoKuning.png";

const ProfileComponent = () => {
  return (
    <div className="d-flex justify-content-left">
      <img src={Logo} alt="icon logo" className="mt-2 me-2 img-fluid" style={{ width: "35px", height: "35px"}} />
      <h5 className="mt-3" style={{ fontSize: "15px" }}>Dermaceria</h5>
      <img src={Verfikasi} alt="icon verifikasi" className="mt-1 me-2 img-fluid" style={{ maxWidth: "20px", marginLeft: "6px" }} />
    </div>
  );
};

export default ProfileComponent;
