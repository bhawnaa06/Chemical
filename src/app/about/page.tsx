'use client';

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurJourney from '@/components/about/OurJourney';
import OurVision from '@/components/about/OurVision';
import BackedBySupport from '@/components/about/BackedBySupport';
import FutureOfLabs from '@/components/about/FutureOfLabs';

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <OurJourney />
      <OurVision />
      <BackedBySupport />
      <FutureOfLabs />
    </main>
  );
};

export default AboutPage;