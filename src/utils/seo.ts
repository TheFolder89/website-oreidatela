/**
 * Converts a string to a URL-friendly slug.
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .normalize('NFD') // separate accent from letter
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/[^\w-]+/g, '') // remove all non-word chars
    .replace(/--+/g, '-') // replace multiple - with single -
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, ''); // trim - from end of text
}

/**
 * Generates an array of path objects for Astro's getStaticPaths.
 */
export function generateDevicePaths(modelsData: Record<string, string[]>, servicesData: any[]) {
  const paths = [];

  for (const [brandSlug, models] of Object.entries(modelsData)) {
    // Find the corresponding service for this brand
    const service = servicesData.find(s => s.brand === brandSlug || s.slug === `pecas-${brandSlug}`);

    for (const model of models) {
      paths.push({
        params: {
          brand: brandSlug,
          model: slugify(model)
        },
        props: {
          modelName: model,
          brandName: brandSlug,
          service: service // Include the service data for the layout
        }
      });
    }
  }

  return paths;
}

/**
 * Generates an array of path objects for Astro's getStaticPaths for brands.
 */
export function generateBrandPaths(modelsData: Record<string, string[]>) {
  const paths = [];

  for (const [brand, models] of Object.entries(modelsData)) {
    paths.push({
      params: {
        brand: brand
      },
      props: {
        brandName: brand,
        models: models
      }
    });
  }

  return paths;
}
