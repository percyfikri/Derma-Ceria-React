import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Homepage from "./pages/Homepage/homepage";
import Donasi from "./pages/Donasipage/donasi";
import Event from "./pages/Eventpage/event";
import Blog from "./pages/BlogPage/blog";
import Login from "./pages/Loginpage/login";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donasi" element={<Donasi />} />
        <Route path="/event" element={<Event />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
