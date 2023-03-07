import React from "react";
import "./home.css";

import HeroSection from "../../components/heroSection/heroSection";
import Footprints from "../../components/footprints/footprints";
import ServiceSection from "../../components/serviceSection/serviceSection";
import BlogSection from "../../components/blogSection/blogSection";

const Home = () => {
  return (
    <div className="page-container">
      <HeroSection />
      <Footprints />
      <ServiceSection />
      <BlogSection />
    </div>
  );
};

export default Home;
