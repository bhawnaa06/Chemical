import HeroSection from '../components/home/HeroSection';
import WhyStudySmart from '@/components/home/WhyStudySmart';
import WhySmartSection from '@/components/home/WhySmartSection';
import ServicesSection from '@/components/home/ServicesSection';
import PopularCourses from '@/components/home/PopularCourses';
import SuccessStories from '@/components/home/SuccessStories';






export default function Home() {
  return (
    <>
      <main>
         <HeroSection />
         <WhyStudySmart />
         {/* <StudyDestinationsSlider/> */}
         {/* <PartnersSection/> */}
         <ServicesSection/>
         <WhySmartSection/>
         <SuccessStories/>
           <PopularCourses/>
     
      </main>
    </>
  );
}
