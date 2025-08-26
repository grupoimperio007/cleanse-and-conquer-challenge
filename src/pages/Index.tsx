import { HeroSection } from "@/components/HeroSection";
import { ProductBenefits } from "@/components/ProductBenefits";
import { TestimonialSection } from "@/components/TestimonialSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductBenefits />
      <TestimonialSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
