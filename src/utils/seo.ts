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
export function generateDevicePaths(modelsData: Record<string, string[]>) {
  const paths = [];
  
  for (const [brand, models] of Object.entries(modelsData)) {
    for (const model of models) {
      paths.push({
        params: {
          brand: slugify(brand),
          model: slugify(model)
        },
        props: {
          modelName: model,
          brandName: brand
        }
      });
    }
  }
  
  return paths;
}
