import { Card } from "@/components/ui/card";
import { Brain, ExternalLink, GitBranch, Search, FileText, Lightbulb, TrendingUp, Users, Shield, Camera, Network } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Solution {
  icon: typeof Brain;
  link?: string;
}

const solutionIcons: Solution[] = [
  { icon: Brain, link: "https://ROC-analise-csvs-I2A2-replitcomdupe22.replit.app" },
  { icon: GitBranch },
  { icon: Search },
  { icon: FileText },
  { icon: Lightbulb, link: "https://roc-mini-cenarios-replitcomdupe22.replit.app" },
  { icon: TrendingUp },
  { icon: Users },
  { icon: Shield },
  { icon: Camera },
  { icon: Network }
];

export default function ApplicationsSection() {
  const { t } = useLanguage();
  const handleNavigate = (link?: string) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <section
      id="applications"
      className="min-h-screen flex items-center justify-center py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 
            className="text-3xl md:text-4xl font-semibold mb-4"
            data-testid="text-section-title"
          >
            {t.solutions.title}
          </h2>
          <p 
            className="text-muted-foreground text-lg"
            data-testid="text-section-subtitle"
          >
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solutions.items.map((solution, index) => {
            const Icon = solutionIcons[index].icon;
            const link = solutionIcons[index].link;
            return (
              <Card
                key={index}
                onClick={() => handleNavigate(link)}
                className={`p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group ${link ? 'cursor-pointer' : ''}`}
                data-testid={`card-solution-${index}`}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-10 h-10 text-primary" data-testid={`icon-${index}`} />
                  </div>
                  
                  <div>
                    <h3 
                      className="text-lg font-semibold mb-2 flex items-center justify-center gap-2"
                      data-testid={`text-solution-title-${index}`}
                    >
                      {solution.title}
                      {link && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
                    </h3>
                    <p 
                      className="text-sm text-muted-foreground font-medium mb-3"
                      data-testid={`text-solution-description-${index}`}
                    >
                      {solution.description}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {solution.details}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <footer className="mt-24 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            {t.footer.copyright}{" "}
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy-policy"
            >
              {t.footer.privacy}
            </a>
            {" "}|{" "}
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms-of-use"
            >
              {t.footer.terms}
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
