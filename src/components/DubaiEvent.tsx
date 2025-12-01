import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Megaphone } from "lucide-react";

const highlights = [
  {
    icon: Users,
    text: "Keynote from MiniBitcoin founders"
  },
  {
    icon: Megaphone,
    text: "Global partnership reveals"
  },
  {
    icon: Calendar,
    text: "Major announcements"
  },
  {
    icon: Users,
    text: "Investor meetups"
  }
];

export const DubaiEvent = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0 bg-gradient-dark" />
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Dubai 2026</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Grand Global <span className="text-gradient-accent">Opening</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              The official MiniBitcoin global launch event will be hosted in Dubai, 
              the world's most advanced crypto & fintech capital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-accent/20"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{highlight.text}</span>
                </div>
              );
            })}
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-accent/20 rounded-2xl p-8 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              This mega-event will feature media coverage, special showcases, and Dubai sets the stage 
              for MiniBitcoin's international debut.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-accent text-accent-foreground hover:opacity-90 transition-opacity px-8 py-6 text-lg font-semibold glow-accent"
            >
              Register Your Interest
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
