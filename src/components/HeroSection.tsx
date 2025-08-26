import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Star } from "lucide-react";
import dtxTeaProduct from "@/assets/dtx-tea-product.png";
import epureCapsProduct from "@/assets/epure-caps-product.png";

interface CountdownProps {
  targetDate: Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4 mb-8">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="text-center bg-card border rounded-lg p-3 shadow-card min-w-[60px]">
          <div className="text-2xl font-bold text-primary">{value.toString().padStart(2, '0')}</div>
          <div className="text-xs uppercase text-muted-foreground">{key}</div>
        </div>
      ))}
    </div>
  );
};

export const HeroSection = () => {
  const offerEndDate = new Date();
  offerEndDate.setDate(offerEndDate.getDate() + 3); // Oferta por 3 días

  const scrollToOrder = () => {
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10"></div>
      
      <div className="relative container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 px-6 py-2 text-sm font-semibold">
                <Star className="w-4 h-4 mr-2" />
                ¡OFERTA POR TIEMPO LIMITADO!
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Reto DTX
                <span className="block text-primary-glow">30 Días</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-foreground/90 font-medium">
                Desintoxica tu cuerpo completamente y pierde hasta 
                <span className="text-warning font-bold"> 8kg en 30 días</span> 
                de forma natural y segura
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="text-lg">Elimina toxinas del hígado y riñones</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="text-lg">Mejora tu digestión y metabolismo</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <CheckCircle className="w-6 h-6 text-success" />
                <span className="text-lg">Reduce inflamación crónica</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <p className="text-sm text-primary-foreground/80 mb-2">⏰ Esta oferta termina en:</p>
                <Countdown targetDate={offerEndDate} />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={scrollToOrder}
                  variant="secondary" 
                  size="lg" 
                  className="text-lg px-8 py-4 shadow-glow hover:shadow-wellness transition-all duration-300 font-bold"
                >
                  <Clock className="w-5 h-5 mr-2" />
                  ¡ORDENA AHORA!
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Ver Testimonios
                </Button>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-sm text-primary-foreground/70">
                ⭐ Más de 15,000 personas han transformado su salud
              </p>
            </div>
          </div>

          {/* Right Column - Product Images */}
          <div className="relative">
            <div className="relative z-10 flex justify-center items-center space-x-8">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={dtxTeaProduct} 
                  alt="DTX Tea - Té desintoxicante"
                  className="w-48 h-auto drop-shadow-2xl"
                />
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={epureCapsProduct} 
                  alt="EPURE-CAPS - Cápsulas desintoxicantes"
                  className="w-48 h-auto drop-shadow-2xl"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-success/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};