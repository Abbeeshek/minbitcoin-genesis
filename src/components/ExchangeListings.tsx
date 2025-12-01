import { Card } from "@/components/ui/card";
import { Building2, TrendingUp } from "lucide-react";

const exchanges = [
  { name: "Binance", featured: true },
  { name: "KuCoin", featured: false },
  { name: "Gate.io", featured: false },
  { name: "Bybit", featured: false },
  { name: "BitMart", featured: false },
];

export const ExchangeListings = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Major Partnerships</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Global Exchange <span className="text-gradient-primary">Listings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Listed on the world's leading crypto exchanges, ensuring liquidity and trust from day one.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {exchanges.map((exchange, index) => (
            <Card 
              key={exchange.name}
              className={`p-6 text-center transition-all hover:scale-105 ${
                exchange.featured 
                  ? 'bg-gradient-accent border-accent glow-accent' 
                  : 'bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl font-bold mb-2">
                {exchange.name}
              </div>
              {exchange.featured && (
                <div className="flex items-center gap-1 justify-center text-xs font-semibold text-accent-foreground">
                  <TrendingUp className="w-3 h-3" />
                  <span>Featured</span>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            And more being finalized...
          </p>
        </div>
      </div>
    </section>
  );
};
