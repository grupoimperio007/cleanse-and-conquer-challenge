# 🛒 Configuración de Shopify - Paso a Paso

## ✅ **Paso 1: Crear el Producto en Shopify**

### 1.1 Ir al Admin de Shopify
- Ve a tu tienda: `https://tu-tienda.myshopify.com/admin`
- Navega a **Productos > Todos los productos > Agregar producto**

### 1.2 Crear el Producto Principal
```
Título: Reto DTX 30 Días - PLENNIA
Precio: $1,925.00 MXN
SKU: DTX-COMBO-30D
Tipo de producto: Suplementos
Proveedor: PLENNIA
```

### 1.3 Descripción del Producto
```markdown
🌟 **RETO DTX 30 DÍAS - TRANSFORMACIÓN COMPLETA**

Desintoxica tu cuerpo y pierde hasta 8kg en 30 días con la combinación perfecta de EPURE-CAPS y DTX TEA.

**¿Qué incluye?**
✅ EPURE-CAPS (60 cápsulas) - Desintoxicación de hígado y riñones
✅ DTX TEA (30 sobres) - Limpieza de colon y pérdida de peso  
✅ Guía de alimentación digital (PDF)
✅ Plan de ejercicios de 30 días (PDF)
✅ Soporte WhatsApp 24/7

**Beneficios de EPURE-CAPS:**
• Elimina toxinas del hígado y riñones
• Mejora funciones hepáticas y renales  
• Reduce inflamación crónica

**Beneficios de DTX TEA:**
• Limpia el colon naturalmente
• Mejora la digestión
• Acelera la pérdida de peso
• Combate el estreñimiento

**Garantía:** 30 días o tu dinero de vuelta
**Envío:** GRATIS a toda México (2-5 días hábiles)
```

### 1.4 Agregar Imágenes
- Sube las imágenes de ambos productos desde `src/assets/`
- Agregar fotos adicionales del packaging
- Imagen principal debe mostrar ambos productos

### 1.5 Configurar Inventario
```
Seguimiento de inventario: ✓ (activado)
Cantidad disponible: 1000 (o tu stock real)
Continuar vendiendo cuando no esté en stock: ❌
```

---

## ✅ **Paso 2: Configurar Storefront API**

### 2.1 Crear Private App
1. Ve a **Configuración > Aplicaciones y canales de venta**
2. Clic en **Desarrollar aplicaciones**
3. Si no está habilitado, clic en **Permitir desarrollo de aplicaciones personalizadas**
4. Clic en **Crear una aplicación**

### 2.2 Configurar la App
```
Nombre de la aplicación: Landing DTX
Desarrollador de la aplicación: Tu nombre/empresa
```

### 2.3 Configurar Storefront API Access
1. Clic en **Configurar** en Storefront API
2. **Activar permisos de Storefront API access**
3. Seleccionar los siguientes permisos:
   ```
   ✅ unauthenticated_read_product_listings
   ✅ unauthenticated_read_product_inventory  
   ✅ unauthenticated_read_checkouts
   ✅ unauthenticated_write_checkouts
   ✅ unauthenticated_write_customers
   ✅ unauthenticated_read_content
   ```

### 2.4 Guardar y Obtener Token
1. Clic en **Guardar**
2. Clic en **Instalar aplicación**
3. **IMPORTANTE**: Copia el **Storefront access token** (solo se muestra una vez)

---

## ✅ **Paso 3: Obtener IDs de Productos**

### 3.1 Método Manual (Fácil)
1. Ve al producto creado en el admin de Shopify
2. En la URL verás algo como: `.../products/123456789`
3. El número es el **Product ID**
4. Para el **Variant ID**: Ve a **Variantes** y copia el ID de la variante

### 3.2 Método con GraphQL (Avanzado)
Usa el GraphQL Admin API con esta consulta:
```graphql
query {
  products(first: 10, query: "title:*DTX*") {
    edges {
      node {
        id
        title
        variants(first: 5) {
          edges {
            node {
              id
              title
              price
              sku
            }
          }
        }
      }
    }
  }
}
```

---

## ✅ **Paso 4: Actualizar el Código**

### 4.1 Configurar Variables en `src/lib/shopify.ts`
```typescript
// Reemplazar estas variables con tus datos reales:
const SHOPIFY_DOMAIN = 'tu-tienda-real.myshopify.com';
const SHOPIFY_STOREFRONT_TOKEN = 'shpat_xxxxxxxxxxxxxxxxx';

// IDs de productos (ejemplo de formato)
export const PRODUCT_IDS = {
  DTX_COMBO: 'gid://shopify/Product/1234567890123',
};
```

### 4.2 Configurar Variant ID en `src/components/PricingSection.tsx`
```typescript
// Línea 25 - Reemplazar con tu Variant ID real:
const DTX_COMBO_VARIANT_ID = 'gid://shopify/ProductVariant/12345678901234';
```

---

## ✅ **Paso 5: Configurar Métodos de Pago**

### 5.1 Ir a Configuración de Pagos
1. **Configuración > Pagos**
2. Activar los proveedores que necesites:

### 5.2 Métodos Recomendados para México
```
✅ Shopify Payments (Tarjetas)
✅ PayPal Express Checkout  
✅ OXXO (vía Conekta/Stripe)
✅ Transferencia bancaria (manual)
✅ Mercado Pago (opcional)
```

### 5.3 Configurar OXXO
- Instalar app **Conekta** o **Stripe** desde App Store
- Configurar cuenta y activar pagos en OXXO
- Muy popular en México para comercio electrónico

---

## ✅ **Paso 6: Configurar Envíos**

### 6.1 Crear Perfil de Envío
1. **Configuración > Envío y entrega**
2. **Crear perfil de envío: "México"**

### 6.2 Configurar Zonas de Envío
```
🇲🇽 MÉXICO NACIONAL
- Estados incluidos: Todos los estados mexicanos
- Método: Envío estándar
- Precio: GRATIS (ya incluido en precio del producto)  
- Tiempo: 2-5 días hábiles
```

### 6.3 Paqueterías Recomendadas
```
✅ Fedex México
✅ DHL México  
✅ Paquete Express
✅ Redpack
✅ Estafeta
```

---

## ✅ **Paso 7: Personalizar Checkout**

### 7.1 Configurar Información de la Tienda
```
Configuración > General:
- Nombre de la tienda: PLENNIA México
- Email de contacto: info@plennia.mx
- Teléfono: +52 55 XXXX XXXX
- Dirección física en México
```

### 7.2 Políticas Legales
Crear páginas para:
- **Términos y Condiciones**
- **Política de Privacidad** 
- **Política de Reembolsos**
- **Política de Envíos**

---

## ✅ **Paso 8: Probar la Integración**

### 8.1 Modo de Prueba
1. Activar **modo de prueba** en pagos
2. Probar compra completa desde la landing
3. Verificar emails de confirmación
4. Probar diferentes métodos de pago

### 8.2 Checklist de Pruebas
```
☐ Botón "Ordenar Ahora" funciona
☐ Redirige correctamente a Shopify
☐ Información del producto es correcta
☐ Precios coinciden ($1,925 MXN)
☐ Checkout se completa sin errores
☐ Email de confirmación se envía
☐ Inventario se actualiza
```

---

## 🚨 **Datos Que Necesitas Recopilar**

Antes de hacer el deploy final, asegúrate de tener:

```
✅ Dominio de Shopify: ________________.myshopify.com
✅ Storefront Access Token: shpat_________________
✅ Product ID: gid://shopify/Product/____________
✅ Variant ID: gid://shopify/ProductVariant/_____
```

---

## 📞 **¿Necesitas Ayuda?**

Si tienes algún problema con la configuración:

1. **Documentación oficial**: https://shopify.dev/
2. **Soporte de Shopify**: Desde tu admin de Shopify
3. **GraphQL Explorer**: Para obtener IDs de productos

¡Una vez configurado esto, tu landing estará lista para vender! 🚀