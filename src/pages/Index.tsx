import { Hero } from "@/components/Hero";
import { ICOSection } from "@/components/ICOSection";
import { ExchangeListings } from "@/components/ExchangeListings";
import { OwnExchange } from "@/components/OwnExchange";
import { DubaiEvent } from "@/components/DubaiEvent";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ICOSection />
      <ExchangeListings />
      <OwnExchange />
      <DubaiEvent />
      <Footer />
    </div>
  );
};

export default Index;
