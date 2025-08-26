import Client from 'shopify-buy';

// Configuración de Shopify - Reemplaza con tus datos reales
const SHOPIFY_DOMAIN = 'tu-tienda.myshopify.com'; // Cambia por tu dominio
const SHOPIFY_STOREFRONT_TOKEN = 'tu-storefront-access-token'; // Token público del Storefront API

// Crear cliente de Shopify
export const shopifyClient = Client.buildClient({
  domain: SHOPIFY_DOMAIN,
  storefrontAccessToken: SHOPIFY_STOREFRONT_TOKEN,
});

// IDs de productos - Los obtienes desde el admin de Shopify
export const PRODUCT_IDS = {
  DTX_COMBO: 'gid://shopify/Product/XXXXXXXXXX', // Reemplazar con ID real
  EPURE_CAPS: 'gid://shopify/Product/XXXXXXXXXX',
  DTX_TEA: 'gid://shopify/Product/XXXXXXXXXX',
};

// Tipos para TypeScript
export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  images: Array<{
    src: string;
    altText?: string;
  }>;
  variants: Array<{
    id: string;
    title: string;
    price: {
      amount: string;
      currencyCode: string;
    };
    available: boolean;
  }>;
}

export interface ShopifyCheckout {
  id: string;
  webUrl: string;
  subtotalPrice: {
    amount: string;
    currencyCode: string;
  };
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
  lineItems: Array<{
    id: string;
    quantity: number;
    title: string;
    variant: {
      id: string;
      price: {
        amount: string;
        currencyCode: string;
      };
    };
  }>;
}

// Funciones para interactuar con Shopify
export class ShopifyService {
  
  // Obtener producto por ID
  static async getProduct(productId: string): Promise<ShopifyProduct | null> {
    try {
      const product = await shopifyClient.product.fetch(productId);
      return product as ShopifyProduct;
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }

  // Crear checkout
  static async createCheckout(): Promise<ShopifyCheckout> {
    try {
      const checkout = await shopifyClient.checkout.create();
      return checkout as ShopifyCheckout;
    } catch (error) {
      console.error('Error creating checkout:', error);
      throw new Error('No se pudo crear el checkout');
    }
  }

  // Agregar productos al checkout
  static async addToCheckout(
    checkoutId: string, 
    variantId: string, 
    quantity: number = 1
  ): Promise<ShopifyCheckout> {
    try {
      const lineItemsToAdd = [{
        variantId,
        quantity,
      }];

      const checkout = await shopifyClient.checkout.addLineItems(checkoutId, lineItemsToAdd);
      return checkout as ShopifyCheckout;
    } catch (error) {
      console.error('Error adding to checkout:', error);
      throw new Error('No se pudo agregar al carrito');
    }
  }

  // Crear checkout directo con producto
  static async createCheckoutWithProduct(
    variantId: string, 
    quantity: number = 1
  ): Promise<ShopifyCheckout> {
    try {
      const lineItemsToAdd = [{
        variantId,
        quantity,
      }];

      const checkout = await shopifyClient.checkout.create({
        lineItems: lineItemsToAdd,
      });

      return checkout as ShopifyCheckout;
    } catch (error) {
      console.error('Error creating checkout with product:', error);
      throw new Error('No se pudo procesar la compra');
    }
  }

  // Obtener checkout existente
  static async getCheckout(checkoutId: string): Promise<ShopifyCheckout | null> {
    try {
      const checkout = await shopifyClient.checkout.fetch(checkoutId);
      return checkout as ShopifyCheckout;
    } catch (error) {
      console.error('Error fetching checkout:', error);
      return null;
    }
  }
}

// Hook para localStorage del checkout
export const useCheckout = () => {
  const CHECKOUT_KEY = 'shopify-checkout-id';

  const getStoredCheckoutId = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(CHECKOUT_KEY);
    }
    return null;
  };

  const setStoredCheckoutId = (checkoutId: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(CHECKOUT_KEY, checkoutId);
    }
  };

  const clearStoredCheckoutId = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(CHECKOUT_KEY);
    }
  };

  return {
    getStoredCheckoutId,
    setStoredCheckoutId,
    clearStoredCheckoutId,
  };
};