import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";

import Homepage from "./pages/homePage/homepage";
import Donasi from "./pages/donasiPage/donasi";
import Event from "./pages/eventPage/event";
import Blog from "./pages/blogPage/blog";
import LoginWithoutHeaderAndFooter from "./components/LoginWithoutHeaderAndFooter";
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
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
};

export default App;
