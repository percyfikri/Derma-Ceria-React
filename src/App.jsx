import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";

import Homepage from "./pages/homePage/homepage";
import Donasi from "./pages/donasiPage/donasi";
import Event from "./pages/eventPage/event";
import Blog from "./pages/blogPage/blog";
import LoginWithoutHeaderAndFooter from "./components/LoginWithoutHeaderAndFooter";

import Pendidikan from "./kategori/pendidikan";
import Bencana from "./kategori/bencana";
import Kesehatan from "./kategori/kesehatan";
import Sosial from "./kategori/sosial";
import Teknologi from "./kategori/teknologi";

import Zakat from "./campaign/zakat";
import Qurban from "./campaign/qurban";

import Derlangsung from "./status/berlangsung";
import Diperpanjang from "./status/diperpanjang";
import Selesai from "./status/selesai";

import Populer from "./diurutkan/populer";
import Berakhir from "./diurutkan/berakhir";
import Terbaru from "./diurutkan/terbaru";
import Terlama from "./diurutkan/terlama";
import Mendesak from "./diurutkan/mendesak";
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<LoginWithoutHeaderAndFooter />} />

        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/bencana" element={<Bencana />} />
        <Route path="/kesehatan" element={<Kesehatan />} />
        <Route path="/sosial" element={<Sosial />} />
        <Route path="/teknologi" element={<Teknologi />} />

        <Route path="/zakat" element={<Zakat />} />
        <Route path="/qurban" element={<Qurban />} />

        <Route path="/berlangsung" element={<Derlangsung />} />
        <Route path="/diperpanjang" element={<Diperpanjang />} />
        <Route path="/selesai" element={<Selesai />} />

        <Route path="/populer" element={<Populer />} />
        <Route path="/berakhir" element={<Berakhir />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/terlama" element={<Terlama />} />
        <Route path="/mendesak" element={<Mendesak />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
