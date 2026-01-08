import { describe, it, expect } from 'vitest';
import { generateDevicePaths } from './seo';

describe('generateDevicePaths', () => {
  it('should generate paths for all models in the data', () => {
    const mockModels = {
      'iphone': ['iPhone 15', 'iPhone 14'],
      'samsung': ['Galaxy S24']
    };
    
    const paths = generateDevicePaths(mockModels);
    
    expect(paths).toContainEqual({ params: { brand: 'iphone', model: 'iphone-15' }, props: { modelName: 'iPhone 15', brandName: 'iphone' } });
    expect(paths).toContainEqual({ params: { brand: 'iphone', model: 'iphone-14' }, props: { modelName: 'iPhone 14', brandName: 'iphone' } });
    expect(paths).toContainEqual({ params: { brand: 'samsung', model: 'galaxy-s24' }, props: { modelName: 'Galaxy S24', brandName: 'samsung' } });
    expect(paths.length).toBe(3);
  });

  it('should handle special characters and spaces in model names for slugs', () => {
    const mockModels = {
      'apple-watch': ['Apple Watch Ultra 2 (2023)']
    };
    
    const paths = generateDevicePaths(mockModels);
    
    expect(paths[0].params.model).toBe('apple-watch-ultra-2-2023');
  });
});
