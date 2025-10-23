import { Card } from "@/components/ui/card";
import { Brain, ExternalLink, GitBranch, Search, FileText, Lightbulb, TrendingUp, Users } from "lucide-react";

interface Solution {
  title: string;
  description: string;
  details: string;
  icon: typeof Brain;
  link?: string;
}

const solutions: Solution[] = [
  {
    title: "ROC Analise de CSVs com agentes de IA",
    description: "Análise Inteligente de Dados CSV",
    details: "Processe e analise arquivos CSV utilizando algoritmos avançados de inteligência artificial",
    icon: Brain,
    link: "https://ROC-analise-csvs-I2A2-replitcomdupe22.replit.app"
  },
  {
    title: "ROC Fase 1",
    description: "Análise e decomposição de problemas",
    details: "Decomponha problemas complexos em componentes gerenciáveis com metodologia estruturada",
    icon: GitBranch
  },
  {
    title: "ROC Athena",
    description: "Scraping e Oráculo",
    details: "Coleta inteligente de dados e análise preditiva para insights estratégicos",
    icon: Search
  },
  {
    title: "ROC AI Agent 4 DOCs",
    description: "Agente especializado em análise estratégica de Documentos",
    details: "Extraia e analise informações de documentos com precisão usando IA",
    icon: FileText
  },
  {
    title: "ROC MCen",
    description: "Criando mini-cenários com IA",
    details: "Gere cenários estratégicos personalizados para planejamento e tomada de decisão",
    icon: Lightbulb
  },
  {
    title: "ROC CapPol Monitor",
    description: "Análise de Capital Político",
    details: "Monitore e analise tendências de capital político em tempo real",
    icon: TrendingUp
  },
  {
    title: "ROC Avl Pos Pol",
    description: "Análise Política Estratégica e de Convites/Ligações",
    details: "Avalie posicionamentos políticos e relações estratégicas com análise avançada",
    icon: Users
  }
];

export default function ApplicationsSection() {
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
            Nossas Soluções
          </h2>
          <p 
            className="text-muted-foreground text-lg"
            data-testid="text-section-subtitle"
          >
            Ferramentas avançadas para análise de dados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                onClick={() => handleNavigate(solution.link)}
                className={`p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group ${solution.link ? 'cursor-pointer' : ''}`}
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
                      {solution.link && <ExternalLink className="w-4 h-4 text-muted-foreground" />}
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
      </div>
    </section>
  );
}
