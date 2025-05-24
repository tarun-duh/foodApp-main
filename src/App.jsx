import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Order from "./Pages/Order";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { db, auth } from "./Config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Gallery from "./Pages/Gallery";
import SuccessPage from "./Pages/SuccessPage";
import OrderHistory from "./Pages/OrderHistory";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/orders" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
