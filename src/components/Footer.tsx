import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Heart,
  Star,
  CheckCircle
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        
        {/* Trust Indicators */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-6 py-2">
            <Shield className="w-4 h-4 mr-2" />
            GARANTÍA Y SEGURIDAD
          </Badge>
          
          <div className="grid md:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="font-semibold">100% Natural</div>
              <div className="text-sm opacity-80">Ingredientes certificados</div>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="font-semibold">Garantía 30 días</div>
              <div className="text-sm opacity-80">Satisfacción garantizada</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="font-semibold">4.9/5 Estrellas</div>
              <div className="text-sm opacity-80">Miles de reseñas positivas</div>
            </div>
            <div className="text-center">
              <Heart className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="font-semibold">Aprobado FDA</div>
              <div className="text-sm opacity-80">Instalaciones certificadas</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+52 55 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@plenniadtx.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="font-bold text-lg mb-4">Horarios</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <div>
                  <div>Lun - Vie: 9am - 6pm</div>
                  <div>Sáb: 10am - 2pm</div>
                  <div>Dom: Cerrado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <div className="space-y-2 text-sm">
              <div><a href="#" className="hover:text-primary-glow transition-colors">Términos y Condiciones</a></div>
              <div><a href="#" className="hover:text-primary-glow transition-colors">Política de Privacidad</a></div>
              <div><a href="#" className="hover:text-primary-glow transition-colors">Política de Reembolsos</a></div>
              <div><a href="#" className="hover:text-primary-glow transition-colors">Preguntas Frecuentes</a></div>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">PLENNIA</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Transformando vidas a través de productos naturales de la más alta calidad.</p>
              <p className="text-xs">© 2024 PLENNIA. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <Card className="bg-primary-foreground/10 border-primary-foreground/20">
            <CardContent className="p-6">
              <div className="text-xs text-center space-y-2 opacity-80">
                <p><strong>Descargo de responsabilidad:</strong> Los resultados individuales pueden variar. Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad.</p>
                <p>Las declaraciones de este sitio web no han sido evaluadas por la COFEPRIS. Consulte con su médico antes de usar si está embarazada, amamantando o tiene alguna condición médica.</p>
                <p><strong>*Testimonios:</strong> Los resultados mostrados no son típicos y pueden variar por persona. Las imágenes de productos son representativas.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  );
};