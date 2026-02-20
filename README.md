# SGAdmin Landing

Landing corporativa para promoción del producto SGAdmin.

## Incluye

- Hero comercial con propuesta de valor
- Seccion de funcionalidades ERP
- Flujo de implementación
- Planes y precios
- Clientes y testimonios
- FAQ
- Formulario de "Pedir más información / Solicitar demo"
- Endpoint API local de captacion de leads (`/api/leads`)

## Ejecutar

```bash
npm install
npm run dev
```

Abrir: `http://localhost:3000`

## Estructura

- `app/page.tsx`: pagina principal
- `components/landing/LandingPage.tsx`: secciones de la landing
- `components/landing/LeadForm.tsx`: formulario de captacion
- `app/api/leads/route.ts`: endpoint local para registrar lead
- `app/globals.css`: sistema visual y estilos globales
