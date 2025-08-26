import { useState } from 'react';
import { ShopifyService, ShopifyCheckout, useCheckout } from '@/lib/shopify';
import { useToast } from '@/hooks/use-toast';

export const useShopify = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkout, setCheckout] = useState<ShopifyCheckout | null>(null);
  const { toast } = useToast();
  const { getStoredCheckoutId, setStoredCheckoutId, clearStoredCheckoutId } = useCheckout();

  // Crear checkout y redirigir a Shopify
  const buyNow = async (variantId: string, quantity: number = 1) => {
    if (!variantId) {
      toast({
        title: "Error de configuración",
        description: "ID del producto no configurado. Contacta al administrador.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Crear checkout directamente con el producto
      const newCheckout = await ShopifyService.createCheckoutWithProduct(variantId, quantity);
      
      setCheckout(newCheckout);
      setStoredCheckoutId(newCheckout.id);
      
      // Mostrar éxito y redirigir
      toast({
        title: "¡Producto agregado!",
        description: "Redirigiendo a Shopify para completar la compra...",
      });

      // Redirigir a Shopify después de un breve delay
      setTimeout(() => {
        window.open(newCheckout.webUrl, '_blank');
      }, 1500);

    } catch (error) {
      console.error('Error en buyNow:', error);
      toast({
        title: "Error en la compra",
        description: "Hubo un problema al procesar tu pedido. Intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Agregar a carrito existente
  const addToCart = async (variantId: string, quantity: number = 1) => {
    if (!variantId) {
      toast({
        title: "Error de configuración",
        description: "ID del producto no configurado.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      let currentCheckout = checkout;
      const storedCheckoutId = getStoredCheckoutId();

      // Si no hay checkout actual, intentar recuperar el guardado
      if (!currentCheckout && storedCheckoutId) {
        currentCheckout = await ShopifyService.getCheckout(storedCheckoutId);
      }

      // Si aún no hay checkout, crear uno nuevo
      if (!currentCheckout) {
        currentCheckout = await ShopifyService.createCheckout();
        setStoredCheckoutId(currentCheckout.id);
      }

      // Agregar producto al checkout
      const updatedCheckout = await ShopifyService.addToCheckout(
        currentCheckout.id, 
        variantId, 
        quantity
      );
      
      setCheckout(updatedCheckout);
      
      toast({
        title: "¡Producto agregado!",
        description: "El producto se agregó a tu carrito.",
      });

      return updatedCheckout;

    } catch (error) {
      console.error('Error en addToCart:', error);
      toast({
        title: "Error al agregar",
        description: "No se pudo agregar el producto al carrito.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Obtener checkout actual
  const getCurrentCheckout = async () => {
    const storedCheckoutId = getStoredCheckoutId();
    if (storedCheckoutId) {
      try {
        const currentCheckout = await ShopifyService.getCheckout(storedCheckoutId);
        setCheckout(currentCheckout);
        return currentCheckout;
      } catch (error) {
        console.error('Error getting current checkout:', error);
        clearStoredCheckoutId();
      }
    }
    return null;
  };

  // Limpiar checkout
  const clearCheckout = () => {
    setCheckout(null);
    clearStoredCheckoutId();
  };

  return {
    isLoading,
    checkout,
    buyNow,
    addToCart,
    getCurrentCheckout,
    clearCheckout,
  };
};