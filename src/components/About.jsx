import React from 'react';
import AboutImages from './AboutImages';
import AboutUs from './AboutUs';
import Footer from './Footer';
import './about.css';

function About() {
  return (
    <div>
      <div className="about-container">
        <div
          className="about-left"
          style={{ overflow: 'auto' }}
        >
          <AboutImages />
        </div>

        <div className="about-right">
          <AboutUs />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
