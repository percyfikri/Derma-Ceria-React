/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
// import Filter  from "./components/FilterComponent";

import Homepage from "./pages/homePage/homepage";
import Donasi from "./pages/donasiPage/donasi";
import Event from "./pages/eventPage/event";
import Blog from "./pages/blogPage/blog";
import LoginWithoutHeaderAndFooter from "./components/LoginWithoutHeaderAndFooter";
import Register from "./pages/registerPage/register";

// list donasi
import Pendidikan from "./pages/kategori/pendidikan";
import Bencana from "./pages/kategori/bencana";
import Kesehatan from "./pages/kategori/kesehatan";
import Sosial from "./pages/kategori/sosial";
import Teknologi from "./pages/kategori/teknologi";

import Zakat from "./pages/campaign/zakat";
import Qurban from "./pages/campaign/qurban";

import Berlangsung from "./pages/status/berlangsung";
import Diperpanjang from "./pages/status/diperpanjang";
import Selesai from "./pages/status/selesai";

import Populer from "./pages/diurutkan/populer";
import Berakhir from "./pages/diurutkan/berakhir";
import Terbaru from "./pages/diurutkan/terbaru";
import Terlama from "./pages/diurutkan/terlama";
import Mendesak from "./pages/diurutkan/mendesak";
// end of list

// detail Donasi
import Detailpendidikan from "./pages/detailDonasi/detailPendidikan";
import Detailbencana from "./pages/detailDonasi/detailBencana";
import Detailkesehatan from "./pages/detailDonasi/detailKesehatan";
import Detailsosial from "./pages/detailDonasi/detailSosial";
import Detailteknologi from "./pages/detailDonasi/detailTeknologi";

import Detailzakat from "./pages/detailDonasi/detailZakat";
import Detailqurban from "./pages/detailDonasi/detailQurban";
// end of detail donasi

// dashboard Donatur
import Dashboarddonatur from "./pages/donaturDashboard/dashboardDonatur";
import Riwayatdonasi from "./pages/donaturDashboard/riwayatDonasi";
import TransparansiDonatur from "./pages/donaturDashboard/transparansiDonatur";
// end of dashboard donatur

// dashbord benefisari
import Dashboardbenefisari from "./pages/benefisariDashboard/dashboardBenefisari";
import Programkampanye from "./pages/benefisariDashboard/programKampanye";
import Transparansibenefisari from "./pages/benefisariDashboard/transparansiBenefisari";
// end of dashboard benefisari

// Donasi Uang dan Barang
import PayDonasiUang from "./pages/payDonasiUang/payDonasiUang";
//end of Donasi Uang dan Barang

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";

  return (
    <>
      {!isLoginPage && !isRegisterPage && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<LoginWithoutHeaderAndFooter />} />
        <Route path="/register" element={<Register />} />

        {/* filter donasi */}
        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/bencana" element={<Bencana />} />
        <Route path="/kesehatan" element={<Kesehatan />} />
        <Route path="/sosial" element={<Sosial />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/zakat" element={<Zakat />} />
        <Route path="/qurban" element={<Qurban />} />

        <Route path="/berlangsung" element={<Berlangsung />} />
        <Route path="/diperpanjang" element={<Diperpanjang />} />
        <Route path="/selesai" element={<Selesai />} />

        <Route path="/populer" element={<Populer />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/mendesak" element={<Mendesak />} />
        {/* end of filter donasi */}

        {/* detail Donasi */}
        <Route path="/detailpendidikan" element={<Detailpendidikan />} />
        <Route path="/detailbencana" element={<Detailbencana />} />
        <Route path="/detailkesehatan" element={<Detailkesehatan />} />
        <Route path="/detailsosial" element={<Detailsosial />} />
        <Route path="/detailteknologi" element={<Detailteknologi />} />

        <Route path="/detailzakat" element={<Detailzakat />} />
        <Route path="/detailqurban" element={<Detailqurban />} />

        {/* dashboard Donatur */}
        <Route path="/dashboardDonatur" element={<Dashboarddonatur />} />
        <Route path="/riwayatDonasi" element={<Riwayatdonasi />} />
        <Route path="/transparansiDonatur" element={<TransparansiDonatur />} />
        {/* end of detail Donasi */}

        {/* Donasi Uang dan Barang */}
        <Route path="/payDonasiUang" element={<PayDonasiUang />} />
        {/* end of Donasi Uang dan Barang */}

        {/* dashboard benefisari */}
        <Route path="/dashboardBenefisari" element={<Dashboardbenefisari />} />
        <Route path="/programKampanye" element={<Programkampanye />} />
        <Route path="/transparansiBenefisari" element={<Transparansibenefisari />} />
        {/* end of dashboard benefisari */}
      </Routes>
      {!isLoginPage && !isRegisterPage && <Footer />}
    </>
  );
}

export default App;
