# Lilix - Web artesanal de jabones y velas

Sitio web responsive en React (sin backend) para catálogo, cesta y pedido de productos naturales.

## Ejecutar en local

1. Abre terminal en esta carpeta.
2. Ejecuta:

```bash
python3 -m http.server 5173
```

3. Abre en el navegador: `http://localhost:5173`

## Archivos principales

- `index.html`: estructura base y carga de React.
- `app.js`: componentes, datos de productos, lógica de cesta y formularios.
- `styles.css`: diseño pastel boutique, responsive y animaciones.
- `logo-lilix.svg`: logo provisional.

## Personalización del logo

Si quieres usar tu logo final exacto, sustituye el archivo `logo-lilix.svg` por tu versión (mismo nombre) o cambia la ruta en `app.js` (componente `Header`).

## Funcionalidades incluidas

- Header fijo con navegación e icono de cesta con contador.
- Inglés y libras esterlinas como idioma y moneda principales.
- Selector de moneda entre GBP, EUR y USD con tipos HMRC mensuales de abril de 2026.
- Hero principal con CTA.
- Categorías clicables (filtran y desplazan al catálogo).
- Galería con hover, zoom y sombras.
- Galería única con filtros para Velas, Jabones y Packs.
- Cesta funcional (sumar, restar, eliminar, subtotal y total).
- Persistencia de cesta en `localStorage`.
- Formulario de pedido con resumen en vivo.
- Confirmación al enviar pedido.
- Sección de contacto con formulario, Instagram y WhatsApp.
