# Track Plan: Programmatic SEO for Device Models

## Phase 1: Data Structure & Routing Foundation [checkpoint: d7c169e]
- [x] Task: Create `[brand]/[model]` dynamic route structure dcbe6e3
    - [ ] Subtask: Create file `src/pages/modelos/[brand]/[model].astro`.
    - [ ] Subtask: Implement `getStaticPaths` to read from `src/data/models.json` and generate all brand/model combinations.
    - [ ] Subtask: Verify that all expected routes are generated during build.
- [x] Task: Create Brand Index Page b810e20
    - [ ] Subtask: Create file `src/pages/modelos/[brand]/index.astro`.
    - [ ] Subtask: Implement `getStaticPaths` for brands.
    - [ ] Subtask: List all models for the current brand on this page.
- [ ] Task: Conductor - User Manual Verification 'Data Structure & Routing Foundation' (Protocol in workflow.md)

## Phase 2: Page Implementation & Component Design [checkpoint: 6f85d59]
- [x] Task: Design Model Landing Page Layout 859465e
    - [ ] Subtask: Implement the visual layout using Tailwind CSS.
    - [ ] Subtask: Integrate `Header`, `Footer`, and `Breadcrumbs`.
    - [ ] Subtask: Display Dynamic H1 (Model Name) and Hero section.
- [x] Task: Implement Service Listing Component 8944760
    - [ ] Subtask: Read services from `src/data/services.json` matching the brand.
    - [ ] Subtask: Render the list of services (Screen, Battery, etc.) with price and duration.
    - [ ] Subtask: Add CTA buttons (WhatsApp/Budget).
- [ ] Task: Conductor - User Manual Verification 'Page Implementation & Component Design' (Protocol in workflow.md)

## Phase 3: SEO Optimization & Metadata
- [x] Task: Implement SEO Meta Tags ef9a333
    - [ ] Subtask: Dynamic Title Tag (e.g., "Conserto de [Model] em Salvador - O Rei da Tela").
    - [ ] Subtask: Dynamic Meta Description.
    - [ ] Subtask: Canonical URLs.
- [ ] Task: Implement JSON-LD Structured Data
    - [ ] Subtask: Generate `Product` schema for the device.
    - [ ] Subtask: Generate `Service` or `RepairService` schema for the services offered.
- [ ] Task: Conductor - User Manual Verification 'SEO Optimization & Metadata' (Protocol in workflow.md)

## Phase 4: Verification & Polish
- [ ] Task: Validate Internal Linking
    - [ ] Subtask: Ensure "Modelos" link in Footer/Header points to a main index or brand selection.
    - [ ] Subtask: Check Breadcrumb navigation flow.
- [ ] Task: Performance Check
    - [ ] Subtask: Run Lighthouse check on a generated model page.
    - [ ] Subtask: Verify mobile responsiveness.
- [ ] Task: Conductor - User Manual Verification 'Verification & Polish' (Protocol in workflow.md)
