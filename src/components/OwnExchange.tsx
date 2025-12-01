import { Card } from "@/components/ui/card";
import { Zap, Shield, Wallet, RefreshCw, Layers, Lock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra-fast Trading",
    description: "Lightning-speed execution on every transaction"
  },
  {
    icon: Layers,
    title: "Staking & Farming",
    description: "Earn rewards through liquidity pools"
  },
  {
    icon: RefreshCw,
    title: "Cross-chain Swaps",
    description: "Seamless multi-blockchain support"
  },
  {
    icon: Wallet,
    title: "Integrated Wallet",
    description: "Built-in MiniBitcoin wallet connectivity"
  },
  {
    icon: Shield,
    title: "Institutional Security",
    description: "Bank-grade protection for your assets"
  },
  {
    icon: Lock,
    title: "Secure Trading",
    description: "Advanced security protocols"
  }
];

export const OwnExchange = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            MiniBitcoin <span className="text-gradient-primary">Exchange</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A next-generation trading hub and the central engine of the entire MiniBitcoin ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
