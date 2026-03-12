import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { LocationSection } from "./components/LocationSection";
// import { SpeakersSection } from "./components/SpeakersSection";
// import { ScheduleSection } from "./components/ScheduleSection";
import { PhotosSection } from "./components/PhotosSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LocationSection />
      {/* <SpeakersSection /> */}
      {/* <ScheduleSection /> */}
      <PhotosSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
