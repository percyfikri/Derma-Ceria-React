import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";

import Homepage from "./pages/homePage/homepage";
import Donasi from "./pages/donasiPage/donasi";
import Event from "./pages/eventPage/event";
import Blog from "./pages/blogPage/blog";
import LoginWithoutHeaderAndFooter from "./pages/loginPage/login";  // Perbaiki path impor
import Register from "./pages/registerPage/register";

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
      </Routes>
      {!isLoginPage && !isRegisterPage && <Footer />}
    </>
  );
}

export default App;
