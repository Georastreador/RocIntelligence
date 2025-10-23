import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-card-border rounded-lg p-2">
      <Languages className="w-4 h-4 text-muted-foreground" />
      <Button
        variant={language === 'pt' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('pt')}
        className="h-8 px-3"
        data-testid="button-language-pt"
      >
        PT
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="h-8 px-3"
        data-testid="button-language-en"
      >
        EN
      </Button>
    </div>
  );
}
