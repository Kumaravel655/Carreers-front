import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlights from "./Highlights";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import Footer from "./common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
