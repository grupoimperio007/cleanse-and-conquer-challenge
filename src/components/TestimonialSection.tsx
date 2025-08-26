import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, TrendingDown, Heart, Zap } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    age: 34,
    location: "Ciudad de México",
    weight_lost: "7kg",
    days: 30,
    rating: 5,
    text: "No podía creer lo bien que me sentí después del reto. Perdí 7kg, mi digestión mejoró completamente y tengo más energía que nunca. Mi piel también se ve increíble.",
    highlight: "Perdí 7kg en 30 días",
    avatar: "MG"
  },
  {
    name: "Carlos Ramírez",
    age: 42,
    location: "Guadalajara",
    weight_lost: "5kg",
    days: 25,
    rating: 5,
    text: "Como ejecutivo, mi alimentación era terrible. El reto DTX me ayudó a limpiar mi cuerpo y ahora duermo mejor, tengo más claridad mental y menos fatiga.",
    highlight: "Más energía y claridad mental",
    avatar: "CR"
  },
  {
    name: "Ana Jiménez",
    age: 29,
    location: "Monterrey",
    weight_lost: "6kg",
    days: 28,
    rating: 5,
    text: "Sufría de estreñimiento crónico y inflamación. En solo 4 semanas mi digestión se reguló completamente y bajé una talla completa. ¡Increíble!",
    highlight: "Digestión regulada al 100%",
    avatar: "AJ"
  },
  {
    name: "Roberto Silva",
    age: 38,
    location: "Puebla",
    weight_lost: "8kg",
    days: 30,
    rating: 5,
    text: "El sabor del té es delicioso y las cápsulas no me causaron molestias. Los resultados hablan por sí solos: 8kg menos y me siento 10 años más joven.",
    highlight: "8kg perdidos, se siente renovado",
    avatar: "RS"
  }
];

export const TestimonialSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-6 py-2">
            <Heart className="w-4 h-4 mr-2" />
            TESTIMONIOS REALES
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Resultados que
            <span className="block text-primary-light">Hablan por Sí Solos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Miles de personas ya han transformado su salud con el Reto DTX 30 días
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-16">
          <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
            <CardContent className="py-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-warning mb-2">15,247+</div>
                  <div className="text-sm opacity-90">Personas Transformadas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-warning mb-2">6.2kg</div>
                  <div className="text-sm opacity-90">Pérdida Promedio</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-warning mb-2">97%</div>
                  <div className="text-sm opacity-90">Recomendarían el Producto</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-warning mb-2">4.9★</div>
                  <div className="text-sm opacity-90">Calificación Promedio</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0 shadow-card hover:shadow-wellness transition-all duration-300">
              <CardContent className="p-6">
                
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.age} años • {testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                    ))}
                  </div>
                </div>

                {/* Highlight Badge */}
                <Badge className="mb-4 bg-success text-success-foreground">
                  <TrendingDown className="w-3 h-3 mr-1" />
                  {testimonial.highlight}
                </Badge>

                {/* Quote */}
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent opacity-30" />
                  <p className="text-muted-foreground italic pl-6 mb-4">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Results */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <TrendingDown className="w-4 h-4 text-success" />
                      <span className="font-semibold text-success">{testimonial.weight_lost}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{testimonial.days} días</span>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Verificado ✓
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-accent border-0 shadow-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                ¿Listo para Ser el Siguiente Testimonio?
              </h3>
              <p className="text-muted-foreground mb-6">
                Únete a los miles que ya han transformado su salud y siéntete mejor que nunca
              </p>
              <div className="text-4xl">🌟</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};