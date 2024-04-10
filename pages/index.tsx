import { HeroImageRight } from '../components/Sections/Hero/HeroImageRight';
import { StatsSection } from '../components/Sections/Stats/StatsSection';
import { ServicesSection } from '../components/Sections/Services/ServicesSection';
import { StoriesCarousel } from '../components/Sections/Stories/StoriesSection';
import RootLayout from '../app/layout';



export default function HomePage() {
  return (
    <RootLayout>
      <HeroImageRight />
      <StatsSection />
      <ServicesSection />
      <StoriesCarousel />
    </RootLayout>
  );
}
