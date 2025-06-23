'use client';

import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import OurJourney from '@/components/about/OurJourney';
import OurVision from '@/components/about/OurVision';
import OurTeam from '@/components/about/OurTeam';
import OurInvestor from '@/components/about/OurInvestor';
import OurDeveloperTeam from '@/components/about/OurDeveloperTeam';
import BackedBySupport from '@/components/about/BackedBySupport';
import FutureOfLabs from '@/components/about/FutureOfLabs';

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <OurJourney />
      <OurVision />
      <OurTeam />
      {/* <OurInvestor /> */}
      {/* <OurDeveloperTeam /> */}
      <BackedBySupport />
      <FutureOfLabs />
    </main>
  );
};

export default AboutPage;