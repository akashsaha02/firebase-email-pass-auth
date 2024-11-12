import React, { useState } from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import Features from '../../components/Features/Features';

const Home = () => {

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection  />
      <Features />
    </div>
  );
};

export default Home;