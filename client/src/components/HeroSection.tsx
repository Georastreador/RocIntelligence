import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@assets/generated_images/Futuristic_tech_background_8f4d7ada.png";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export default function HeroSection({ onExploreClick }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
          data-testid="text-hero-title"
        >
          ROC Intelligence
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground font-light mb-12 leading-relaxed max-w-2xl mx-auto"
          data-testid="text-hero-subtitle"
        >
          Plataforma de Desenvolvimento em OSINT, DSS e Soluções customizadas impulsionada por IA de última geração
        </p>
        
        <Button
          onClick={onExploreClick}
          size="lg"
          className="px-8 py-6 text-base uppercase tracking-wider shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
          data-testid="button-explore-platform"
        >
          Explorar Plataforma
        </Button>
      </div>

      <button
        onClick={onExploreClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to applications"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
