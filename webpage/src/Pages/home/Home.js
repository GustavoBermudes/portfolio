import React, { useState, useEffect } from 'react';
import './style.css';
import Head from '../../components/head/Head';

function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(0.4);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const fadeInStart = 260;
    const scrollOpacityValue = Math.min(1, (scrollPosition - fadeInStart) / 300);

    setScrollOpacity(scrollOpacityValue > 0.4 ? scrollOpacityValue : 0.4);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Head />
      <section className="full-section">
        <div className="background-div" style={{ opacity: scrollOpacity }}></div>
        <div className="content-div">
          <div className="right-content">
            <h2>WEB</h2>
            <h2>DESIGNER</h2>
          </div>
          <div className="left-content">
            <p>I'm a web designer who creates minimalist web pages. <br/ >I'm passionate about crafting projects that blend functional and aesthetic design to deliver engaging digital experiences.</p>
          </div>
        </div>
      </section>
      <section className="full-section">
        <div className="background-div" style={{ opacity: scrollOpacity }}></div>
        <div className="content-div">
        
        </div>
      </section>
    </div>
  );
}

export default Home;