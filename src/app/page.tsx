import HeroSection from '../components/home/HeroSection';
import WhyStudySmart from '@/components/home/WhyStudySmart';
import WhySmartSection from '@/components/home/WhySmartSection';
import StudyDestinationsSlider from '@/components/home/StudyDestinationsSlider';
import ServicesSection from '@/components/home/ServicesSection';
import PopularCourses from '@/components/home/PopularCourses';
import SuccessStories from '@/components/home/SuccessStories';
import PartnersSection from '@/components/home/PartnersSection';






export default function Home() {
  return (
    <>
      <main>
         <HeroSection />
         <WhyStudySmart />
         <WhySmartSection/>
         <StudyDestinationsSlider/>
         <ServicesSection/>
         <PartnersSection/>
         <PopularCourses/>
         <SuccessStories/>
         
         
     
      </main>
    </>
  );
}
