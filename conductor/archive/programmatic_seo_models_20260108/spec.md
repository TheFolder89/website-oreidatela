# Track Specification: Programmatic SEO for Device Models

## 1. Goal
Maximize search visibility (SEO) by generating dedicated static landing pages for every specific device model (e.g., "iPhone 15 Pro Max", "Samsung Galaxy S24 Ultra") and brand offered by O Rei da Tela. These pages will list all available repair services for that specific model.

## 2. Requirements

### 2.1 Functional
- **Dynamic Routing:** Implement Astro dynamic routes to handle `/[brand]/[model]` or similar URL structure.
- **Data Source:** Utilize `src/data/models.json` (listing models per brand) and `src/data/services.json` (listing services per brand/category) to populate the pages.
- **Content:** Each page must display:
    - Device Model Name (H1)
    - Breadcrumbs (Home > Marca > Modelo)
    - List of available services (e.g., Screen Replacement, Battery, Board Repair) with estimated prices and duration.
    - CTA for "Orçamento" or "WhatsApp".
    - SEO Meta tags (Title, Description, Canonical).
    - Structured Data (JSON-LD) for `Service` and `Product` (or `RepairService`).
- **Index:** A "Brand" index page (e.g., `/modelos/iphone`) listing all models for that brand.

### 2.2 Non-Functional
- **Performance:** Pages must be statically generated (SSG) at build time for instant loading.
- **SEO:** Title tags must be optimized (e.g., "Conserto de iPhone 15 Pro Max em Salvador | O Rei da Tela").
- **Design:** Consistent with the current "Tech-Centric & Modern" design system using Tailwind CSS.

## 3. Architecture
- **Route Structure:**
    - `/modelos/[brand]/` -> Lists all models for a specific brand.
    - `/modelos/[brand]/[model]/` -> Specific landing page for the device.
- **Components:** Reuse existing components like `Header`, `Footer`, `Breadcrumbs`, and potentially create a new `ServiceList` component.
- **Data Fetching:** Use Astro's `getStaticPaths` to generate routes from the JSON data files.

## 4. User Flow
1. User searches for "Troca de tela iPhone 15 Pro Max Salvador".
2. User lands on `oreidatela.com.br/modelos/iphone/iphone-15-pro-max`.
3. User sees the specific service details and price.
4. User clicks "Agendar Reparo" or "WhatsApp".
