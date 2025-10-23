import { Card } from "@/components/ui/card";
import { Brain, ExternalLink } from "lucide-react";

export default function ApplicationsSection() {
  const handleNavigate = () => {
    window.open('https://ROC-analise-csvs-I2A2-replitcomdupe22.replit.app', '_blank');
  };

  return (
    <section
      id="applications"
      className="min-h-screen flex items-center justify-center py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto w-full">
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

        <div className="flex justify-center">
          <Card
            onClick={handleNavigate}
            className="max-w-md w-full p-12 text-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 group"
            data-testid="card-application-csv"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Brain className="w-10 h-10 text-primary" data-testid="icon-brain" />
              </div>
              
              <div>
                <h3 
                  className="text-xl font-semibold mb-2 flex items-center justify-center gap-2"
                  data-testid="text-app-title"
                >
                  Analise_CSVs_IA_I2A2
                  <ExternalLink className="w-4 h-4 text-muted-foreground" data-testid="icon-external-link" />
                </h3>
                <p 
                  className="text-muted-foreground"
                  data-testid="text-app-description"
                >
                  Análise Inteligente de Dados CSV
                </p>
              </div>

              <p className="text-sm text-muted-foreground">
                Processe e analise arquivos CSV utilizando algoritmos avançados de inteligência artificial
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
