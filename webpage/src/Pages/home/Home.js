import React, { useState, useEffect } from 'react';
import './style.css';
import Head from '../../components/head/Head';

function Home() {
  const [scrollOpacity, setScrollOpacity] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const fadeInStart = 100; 
    const maxOpacity = 1;
    const scrollOpacityValue = Math.min(1, (scrollPosition - fadeInStart) / 200); 

    setScrollOpacity(scrollOpacityValue > 0 ? scrollOpacityValue : 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <Head />
      <section className="full-section" style={{ opacity: scrollOpacity }}>
      </section>
      <section className="full-section" style={{ opacity: scrollOpacity }}>
      </section>
    </div>
  );
}

export default Home;