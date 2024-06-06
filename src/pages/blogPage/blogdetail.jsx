import React from "react";
import "./blog.css";
import Blogdetail from "../../assets/images/blogdetail.jpeg";

const blogdetail = () => {
  return (
    <div className="bg-white">
      <div className="detail-blog-landing" style={{ position: "relative", minHeight: "80vh" }}></div>

      <div style={{ marginTop: "31px", marginLeft: "45px", marginRight: "45px" }}>
        <h2 style={{ fontWeight: "bold" }}>5 Tujuan Donasi dan Manfaatnya</h2>
        <p> DermaCeria | Donasi | 12 FEBRUARI 2024</p>
        <img src={Blogdetail} alt="blog-pic" style={{ width: "100%" }} />
        <p className="mb-5" style={{marginTop:"20px",marginBottom:"0px"}}>
          Donasi adalah tindakan pemberian sukarela yang bertujuan untuk membantu individu,kelompok, atau lembaga yang membutuhkan. Tindakan ini merupakan wujud nyata kepedulian sosial dan empati terhadap sesama.Donasi memiliki tujuan yang
          bervariasi dan manfaatnya pun melibatkan banyak aspek.Tujuannya adalah membantu mereka yang membutuhkan,mendukung Penelitian dan pengembangan,Kemanusian Ditengah Bencana,Mendukung pengembangan Komunitas,Melindungi Lingkungan dan
          manfaatnya adalah Meringankan penderitaan,Mendorong perubahan sosial,Menginspirasi tindakan Lain,Menghubungkan manusia dan Membangun kepuasan batin
        </p>
      </div>
    </div>
  );
};

export default blogdetail;
