import { describe, it, expect } from 'vitest';
import { generateDevicePaths, generateBrandPaths } from './seo';

describe('generateDevicePaths', () => {
  it('should generate paths for all models in the data', () => {
    const mockModels = {
      'iphone': ['iPhone 15', 'iPhone 14'],
      'samsung': ['Galaxy S24']
    };
    const mockServices = [
      { brand: 'iphone', name: 'Conserto de iPhone' },
      { brand: 'samsung', name: 'Conserto de Samsung' }
    ];
    
    const paths = generateDevicePaths(mockModels, mockServices);
    
    expect(paths).toContainEqual({ params: { brand: 'iphone', model: 'iphone-15' }, props: { modelName: 'iPhone 15', brandName: 'iphone', service: mockServices[0] } });
    expect(paths.length).toBe(3);
  });

  it('should handle special characters and spaces in model names for slugs', () => {
    const mockModels = {
      'apple-watch': ['Apple Watch Ultra 2 (2023)']
    };
    
    const paths = generateDevicePaths(mockModels, []);
    
    expect(paths[0].params.model).toBe('apple-watch-ultra-2-2023');
  });
});

describe('generateBrandPaths', () => {
  it('should generate paths for all brands in the data', () => {
    const mockModels = {
      'iphone': ['iPhone 15'],
      'samsung': ['Galaxy S24']
    };
    
    const paths = generateBrandPaths(mockModels);
    
    expect(paths).toContainEqual({ params: { brand: 'iphone' }, props: { brandName: 'iphone', models: ['iPhone 15'] } });
    expect(paths).toContainEqual({ params: { brand: 'samsung' }, props: { brandName: 'samsung', models: ['Galaxy S24'] } });
    expect(paths.length).toBe(2);
  });
});
