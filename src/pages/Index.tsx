import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { SpeakersSection } from "@/components/sections/SpeakersSection";
import { VenueSection } from "@/components/sections/VenueSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PartnersSection />
      <ScheduleSection />
      <SpeakersSection />
      <VenueSection />
    </div>
  );
};

export default Index;
