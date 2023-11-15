import React from "react";
import HeadBanner from "../../components/banner/HeadBanner";
import Services from "../../components/services/Services";
import Ad from "../../components/advertise/Ad";
import Testimonials from "../../components/testimonials/Testimonials";
import Connection from "../../components/connection/Connection";
import Promotions from "../../components/Promotions/Promotions";
import StaffProfiles from "../../components/StaffProfiles/StaffProfiles";
import BlogSection from "../../components/BlogSection/BlogSection";
import Navbar from "../../components/shared/navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import ProductFeature from "../../components/ProductFeature/ProductFeature";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeadBanner />
      <Services />
      <Ad />
      <ProductFeature />
      <Promotions />
      <StaffProfiles />
      <BlogSection />
      <Testimonials />
      <Connection />
      <Footer />
    </>
  );
};

export default Home;
