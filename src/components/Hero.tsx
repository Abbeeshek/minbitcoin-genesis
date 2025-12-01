import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-dark opacity-90" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Pre-Sale Is Live</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          MiniBitcoin
          <br />
          <span className="text-gradient-primary">Launchpad</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: '0.2s' }}>
          The Future Begins Now
        </p>

        <p className="text-lg text-foreground/80 mb-12 animate-fade-in max-w-2xl mx-auto" style={{ animationDelay: '0.3s' }}>
          Your early access window to secure tokens before global exposure. 
          Join a fast-growing ecosystem built for real innovation, utility, and long-term growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg font-semibold glow-primary animate-glow-pulse"
          >
            Join Pre-Sale Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-6 text-lg font-semibold"
          >
            View Whitepaper
          </Button>
        </div>
      </div>
    </section>
  );
};
