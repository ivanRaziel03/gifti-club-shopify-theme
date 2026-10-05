# Estado del proyecto — Gifti Club Shopify

- Repositorio analizado: `ivanRaziel03/gifti-club`
- Tema base: Dawn (copia de trabajo local)
- Prefijo de secciones: `gf-`
- Estado: tema construido como borrador no publicado
- Tienda Shopify: pendiente de confirmar la tienda de destino

## Lectura de la aplicación original

La aplicación original es una tienda de regalos personalizados para México. Su experiencia principal está formada por:

- Barra y navegación sticky con búsqueda, categorías, cuenta, favoritos, notificaciones y bolsa.
- Héroe de alto contraste en azul noche con coral y menta; promesa de personalización y envío.
- Catálogo filtrable por llaveros, termos, ropa, cuadros/ofrendas y gaming, con orden por destacados, precio y calificación.
- Tarjetas con imagen secundaria al pasar el cursor, badge, valoración, precio anterior, favorito y acción de personalización/agregar.
- Constructor “Arma tu Regalo en 3 Pasos”: pieza base, grabado y empaque/dedicatoria.
- Prueba social con testimonios verificados y newsletter de descuento.
- Carrito, checkout y cuentas que en Shopify deben pasar a las funciones nativas del tema/plataforma, no a Firebase.

## Ficha visual

- **Frase resumen:** regalos emocionales y personalizables con una interfaz premium, cercana y mexicana.
- **Lienzo:** `#F8F9FA` claro; bloques protagonistas en azul noche `#0B1B3D`.
- **Paleta:** coral `#E06A55` para conversión; menta `#38FFD0` para detalles de confianza; tinta azul noche `#0B1B3D`.
- **Tipografía:** sans moderna, titulares grandes y compactos, botones redondeados, tarjetas de 22px.
- **Fotos:** tarjetas cuadradas y héroe de producto; `image_picker` editable en el personalizador.
- **Firmas:** banda de marca animada, pills, hover a segunda imagen, favoritos locales, constructor en 3 pasos.

## Secciones creadas

- `gf-hero`: héroe, CTA, imagen destacada, beneficios editables.
- `gf-marquee`: banda de marca.
- `gf-value-props`: cuatro beneficios configurables.
- `gf-collection`: colección real de Shopify y tarjetas de producto.
- `gf-builder`: constructor con productos de una colección y propiedades de línea para grabado/empaque/dedicatoria.
- `gf-testimonials`: tres testimonios editables.
- `gf-product-card`: tarjeta compartida con hover, favorito y precio.
- `gf-styles.css` / `gf-scripts.js`: identidad visual y comportamiento seguro.

## Decisiones de migración

1. Los productos hardcodeados en `src/data/products.ts` no se copian como datos falsos: se reemplazan por productos y variantes reales de Shopify.
2. El carrito, las variantes, el checkout y las cuentas quedan en Dawn/Shopify.
3. El grabado, el empaque y la dedicatoria viajan como propiedades de línea en el carrito.
4. Firebase, modales de autenticación y notificaciones push no se fuerzan en el tema; requieren una app o integración aparte.
5. Las imágenes remotas de Unsplash de la demo se sustituyen por imágenes propias mediante el editor visual.

## Pendientes para conectar con una tienda

- Confirmar el dominio `*.myshopify.com` de destino.
- Crear/importar los productos y variantes reales, especialmente las tallas de hoodies/playeras.
- Crear colección principal (por ejemplo `Gifti Club`) y colección de productos personalizables para el constructor.
- Subir logo e imágenes reales desde el editor visual.
- Revisar textos legales, transportistas, métodos de pago y políticas.
- Revisar/ajustar el WhatsApp y redes sociales.
- Previsualizar en móvil y escritorio dentro de Shopify antes de publicar.
