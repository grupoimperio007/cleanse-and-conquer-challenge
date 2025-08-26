import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Zap, 
  Shield, 
  Target, 
  Droplets, 
  TrendingDown, 
  RefreshCw,
  Sparkles
} from "lucide-react";
import dtxTeaProduct from "@/assets/dtx-tea-product.png";
import epureCapsProduct from "@/assets/epure-caps-product.png";

export const ProductBenefits = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            FÓRMULA CIENTÍFICA COMPROBADA
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Doble Acción
            <span className="block text-primary-light">Desintoxicante</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dos productos complementarios que trabajan en sinergia para una desintoxicación completa y efectiva
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* EPURE-CAPS */}
          <Card className="bg-card border-0 shadow-card hover:shadow-wellness transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <img 
                  src={epureCapsProduct} 
                  alt="EPURE-CAPS" 
                  className="w-40 h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Badge className="mb-3 bg-primary text-primary-foreground">PASO 1</Badge>
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                EPURE-CAPS
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Desintoxicación Profunda de Órganos Vitales
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-accent/50 rounded-lg">
                  <Heart className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Protege tu Hígado</h4>
                    <p className="text-sm text-muted-foreground">Promueve la eliminación de toxinas y mejora las funciones hepáticas</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-accent/50 rounded-lg">
                  <Droplets className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Limpia tus Riñones</h4>
                    <p className="text-sm text-muted-foreground">Mejora el rendimiento renal y la filtración natural</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-accent/50 rounded-lg">
                  <Shield className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Reduce Inflamación</h4>
                    <p className="text-sm text-muted-foreground">Combate la inflamación crónica desde la raíz</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* DTX TEA */}
          <Card className="bg-card border-0 shadow-card hover:shadow-wellness transition-all duration-300 group">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-6">
                <img 
                  src={dtxTeaProduct} 
                  alt="DTX Tea" 
                  className="w-40 h-auto group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <Badge className="mb-3 bg-primary-light text-primary-foreground">PASO 2</Badge>
              <CardTitle className="text-3xl font-bold text-primary mb-2">
                DTX TEA
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Desintoxicación Digestiva y Pérdida de Peso
              </p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 bg-accent/50 rounded-lg">
                  <RefreshCw className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Limpia tu Colon</h4>
                    <p className="text-sm text-muted-foreground">Elimina toxinas acumuladas y mejora la salud intestinal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-accent/50 rounded-lg">
                  <Zap className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Mejora Digestión</h4>
                    <p className="text-sm text-muted-foreground">Optimiza el funcionamiento de tu sistema digestivo</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-accent/50 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary">Promueve Pérdida de Peso</h4>
                    <p className="text-sm text-muted-foreground">Acelera el metabolismo y combate el estreñimiento</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Synergy Section */}
        <div className="text-center">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Target className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
              <h3 className="text-3xl font-bold mb-4">Sinergia Perfecta</h3>
              <p className="text-xl mb-6 opacity-90">
                Cuando se usan juntos, EPURE-CAPS y DTX TEA crean una desintoxicación 
                completa que transforma tu salud desde adentro hacia afuera
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-warning">7-15</div>
                  <div className="text-sm opacity-80">Días para sentir los primeros cambios</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning">3-8kg</div>
                  <div className="text-sm opacity-80">Pérdida de peso promedio</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-warning">95%</div>
                  <div className="text-sm opacity-80">Satisfacción garantizada</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};