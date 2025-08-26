import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  X, 
  ShoppingCart, 
  Shield, 
  Truck,
  CreditCard,
  Clock,
  Zap,
  Gift,
  Star
} from "lucide-react";
import dtxTeaProduct from "@/assets/dtx-tea-product.png";
import epureCapsProduct from "@/assets/epure-caps-product.png";

export const PricingSection = () => {
  const [isOrdering, setIsOrdering] = useState(false);

  const handleOrder = () => {
    setIsOrdering(true);
    // Aquí irá la integración con Shopify
    console.log("Procesando orden...");
    setTimeout(() => setIsOrdering(false), 2000);
  };

  return (
    <section id="order-section" className="py-16 lg:py-24 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">
            <Gift className="w-4 h-4 mr-2" />
            OFERTA ESPECIAL DE LANZAMIENTO
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Invierte en tu
            <span className="block text-primary-light">Salud Hoy</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            El precio de transformar tu salud nunca había sido tan accesible
          </p>
        </div>

        {/* Pricing Comparison */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Individual Products */}
          <Card className="bg-card border-border shadow-card relative">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-primary mb-2">
                Productos Individuales
              </CardTitle>
              <p className="text-muted-foreground">Si los compraras por separado</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img src={epureCapsProduct} alt="EPURE-CAPS" className="w-12 h-12" />
                    <span className="font-medium">EPURE-CAPS</span>
                  </div>
                  <span className="font-bold text-lg">$1,200</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img src={dtxTeaProduct} alt="DTX TEA" className="w-12 h-12" />
                    <span className="font-medium">DTX TEA</span>
                  </div>
                  <span className="font-bold text-lg">$895</span>
                </div>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="line-through text-muted-foreground">$2,095</span>
                </div>
              </div>

              <div className="text-center">
                <Button variant="outline" disabled className="w-full">
                  <X className="w-4 h-4 mr-2" />
                  No Disponible por Separado
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Combo Offer - Highlighted */}
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-warning text-warning-foreground font-bold px-6 py-2">
                <Star className="w-4 h-4 mr-1" />
                MÁS POPULAR
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-6 pt-8">
              <CardTitle className="text-3xl font-bold mb-2">
                Reto DTX Completo
              </CardTitle>
              <p className="opacity-90">Los 2 productos + Bonos exclusivos</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">$1,925</div>
                <div className="text-lg opacity-80">
                  <span className="line-through">$2,095</span> Ahorras $170
                </div>
                <Badge variant="secondary" className="mt-2">
                  8% de Descuento
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>EPURE-CAPS (60 cápsulas)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>DTX TEA (30 sobres)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Guía de alimentación digital</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Plan de ejercicios de 30 días</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Soporte WhatsApp 24/7</span>
                </div>
              </div>

              <Button 
                onClick={handleOrder}
                disabled={isOrdering}
                variant="secondary" 
                size="lg" 
                className="w-full text-lg font-bold py-4 shadow-lg hover:shadow-xl transition-all"
              >
                {isOrdering ? (
                  <>
                    <Zap className="w-5 h-5 mr-2 animate-spin" />
                    Procesando...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    ¡ORDENAR AHORA!
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* After Results */}
          <Card className="bg-card border-border shadow-card">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-primary mb-2">
                Después del Reto
              </CardTitle>
              <p className="text-muted-foreground">Si quisieras continuar</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">$2,400</div>
                <p className="text-muted-foreground">Precio regular futuro</p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-warning" />
                  <span>Sin descuentos especiales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-warning" />
                  <span>Sin bonos incluidos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-warning" />
                  <span>Sin soporte personalizado</span>
                </div>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground italic">
                  "Ojalá hubiera aprovechado la oferta de lanzamiento"
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  - Cliente regular
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment & Guarantee Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <Truck className="w-12 h-12 text-success mx-auto mb-4" />
              <h4 className="font-bold text-primary mb-2">Envío GRATIS</h4>
              <p className="text-sm text-muted-foreground">A toda la República Mexicana en 2-5 días hábiles</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <Shield className="w-12 h-12 text-success mx-auto mb-4" />
              <h4 className="font-bold text-primary mb-2">Garantía 30 Días</h4>
              <p className="text-sm text-muted-foreground">Si no ves resultados, te devolvemos tu dinero</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <CreditCard className="w-12 h-12 text-success mx-auto mb-4" />
              <h4 className="font-bold text-primary mb-2">Pago Seguro</h4>
              <p className="text-sm text-muted-foreground">Acepta tarjetas, transferencias y pagos en OXXO</p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4">⏰ ¡Solo por Tiempo Limitado!</h3>
              <p className="text-xl mb-6 opacity-90">
                Esta oferta especial termina pronto. No dejes que tu salud espere más.
              </p>
              <Button 
                onClick={handleOrder}
                disabled={isOrdering}
                variant="secondary" 
                size="lg" 
                className="text-xl px-12 py-4 font-bold shadow-lg hover:shadow-xl transition-all"
              >
                {isOrdering ? "Procesando..." : "¡SÍ, QUIERO TRANSFORMAR MI SALUD!"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};