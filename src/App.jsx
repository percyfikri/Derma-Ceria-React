import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";

import Homepage from "./pages/homePage/homepage";
import Donasi from "./pages/donasiPage/donasi";
import Event from "./pages/eventPage/event";
import Blog from "./pages/blogPage/blog";
import LoginWithoutHeaderAndFooter from "./components/LoginWithoutHeaderAndFooter";
import Register from "./pages/registerPage/register";

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
        <Route path="/berakhir" element={<Berakhir />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/terlama" element={<Terlama />} />
        <Route path="/mendesak" element={<Mendesak />} />
      </Routes>
      {!isLoginPage && !isRegisterPage && <Footer />}
    </>
  );
}

export default App;
