import { Welcome } from '../components/Welcome/Welcome';
import { HeroImageRight } from '../components/Sections/Hero/HeroImageRight';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { StatsSection } from '../components/Sections/Stats/StatsSection';
import RootLayout from '../app/layout';



export default function HomePage() {
  return (
    <RootLayout>
      <HeroImageRight />
      <StatsSection />
      <Welcome />
      <ColorSchemeToggle />
    </RootLayout>
  );
}
