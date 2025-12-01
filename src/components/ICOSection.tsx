import { Calendar, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ICOSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Coming January 2026</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            ICO Launch <span className="text-gradient-accent">2026</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start the new year with the next major upgrade in the crypto world — 
            a blockchain ecosystem designed for scalability, transparency, and worldwide use.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-card/50 backdrop-blur-sm border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left flex-1">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 text-gradient-primary">
                January 1st, 2026
              </h3>
              <p className="text-lg text-muted-foreground mb-4">
                Official Initial Coin Offering
              </p>
              <div className="flex items-center gap-2 justify-center md:justify-start text-primary">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">A New Year Revolution</span>
              </div>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100M+</div>
                <div className="text-sm text-muted-foreground">Total Supply</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Global</div>
                <div className="text-sm text-muted-foreground">Availability</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
