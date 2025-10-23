import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../widgets/Navbar";
import Footer from "../widgets/Footer";
import BlogPage from "../components/blog/BlogPage";

const Home = lazy(() => import("../components/home/Home"));
const AboutUs = lazy(() => import("../components/aboutus/AboutUs"));
const Construction = lazy(() => import("../components/construction/Construction"));
const ContactUs = lazy(() => import("../components/ContactUs/HelpSection"));
const OfferSection = lazy(() => import("../pages/offer/OfferSection"));
const Projects = lazy(() => import("../pages/project/Projects"));
const ServicesGrid = lazy(() => import("../pages/services/ServicesGrid"));
const AwardSection = lazy(() => import("../pages/certificate/Certificate"));
const ProjectsHandled = lazy(() => import("../pages/projectshandled/ProjectsHandled"));
const CookiePolicy = lazy(() => import("../pages/policies/CookiePolicy"));
const PrivacyPolicy = lazy(() => import("../pages/policies/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("../pages/policies/RefundPolicy"));
const TermsConditions = lazy(() => import("../pages/policies/TermsConditions"));
const HotelDetail = lazy(() => import("../pages/hoteldetail/HotelDetail"));
const LeaderProfile = lazy(() => import("../pages/leaderprofile/LeaderProfile"));
const ContactForm = lazy(() => import("../pages/contact/ContactForm"));












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
            <Route path="/offersection" element={<OfferSection />} />
            <Route path="/projects" element={< Projects />} />
            <Route path="/servicesgrid" element={< ServicesGrid />} />
            <Route path="/awardsection" element={< AwardSection />} />
            <Route path="/projectshandled" element={< ProjectsHandled />} />

            <Route path="/cookiepolicy" element={< CookiePolicy />} />
            <Route path="/privacypolicy" element={< PrivacyPolicy />} />
            <Route path="/refundpolicy" element={< RefundPolicy />} />
            <Route path="/termsconditions" element={< TermsConditions />} />
             <Route path="/blog" element={< BlogPage />} /> 
             <Route path="/hoteldetail" element={< HotelDetail />} /> 
             <Route path="/leaderprofile" element={< LeaderProfile />} /> 
              <Route path="/contactform" element={<  ContactForm />} /> 


             ContactForm
           



             

             
            


          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>

  );
}

export default index;
