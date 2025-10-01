import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../widgets/Navbar";
import Footer from "../widgets/Footer";

 const Home = lazy(() => import("../components/home/Home"));
const AboutUs = lazy(() => import("../components/aboutus/AboutUs"));
const Construction = lazy(() => import("../components/construction/Construction"));
const ContactUs = lazy(() => import("../components/ContactUs/HelpSection"));

function index() {
  return (
    <>
      <Router>
      

        <Suspense fallback={<div>Loading page...</div>}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
           <Route path="/construction" element={<Construction />} />
          <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>

  );
}

export default index;
