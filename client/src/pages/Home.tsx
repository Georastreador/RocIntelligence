import { useRef } from "react";
import HeroSection from "@/components/HeroSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import LanguageSelector from "@/components/LanguageSelector";

export default function Home() {
  const applicationsRef = useRef<HTMLDivElement>(null);

  const scrollToApplications = () => {
    applicationsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      <LanguageSelector />
      <HeroSection onExploreClick={scrollToApplications} />
      <div ref={applicationsRef}>
        <ApplicationsSection />
      </div>
    </div>
  );
}
