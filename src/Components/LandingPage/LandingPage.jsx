import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ImageGrid from './ImageGrid';
import MissionSection from './MissionSection';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';
import Footer from './Footer';
// It's a good practice to put all the styles for the landing page in one file.
// Or you can import each component's CSS file here.
import './Header.css';
import './HeroSection.css';
import './ImageGrid.css';
import './MissionSection.css';
import './Testimonials.css';
import './CallToAction.css';
import './Footer.css';
// import './LandingPage.css'; // You might want a main CSS file for the landing page container

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ImageGrid />
        <MissionSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;