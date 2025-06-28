import { test, expect } from '@playwright/test';
import { calculateRecipeCookability, getCookableRecipes, getFullyCookableRecipes } from '../src/utils/recipeMatching';
import { mockRecipes } from '../src/mocks/recipes';
import { mockPantryItems } from '../src/mocks/pantry';
import type { Recipe, PantryItem } from '../src/types/recipe';

test.describe('Recipe Matching', () => {
  test('should calculate cookability correctly', async () => {
    // Test with a simple recipe that should be partially cookable
    const simpleRecipe: Recipe = {
      id: 'test-1',
      name: 'Test Recipe',
      ingredients: [
        { item: 'eggs', number: 2, unit: 'large', category: 'dairy' },
        { item: 'milk', number: 1, unit: 'cup', category: 'dairy' },
        { item: 'flour', number: 1, unit: 'cup', category: 'baking' }
      ]
    };

    const result = calculateRecipeCookability(simpleRecipe, mockPantryItems);
    
    // Should have eggs and flour available, but milk might be missing or insufficient
    expect(result.cookability).toBeGreaterThan(0);
    expect(result.cookability).toBeLessThanOrEqual(1);
    expect(result.recipe).toBe(simpleRecipe);
  });

  test('should identify fully cookable recipes', async () => {
    const fullyCookableRecipes = getFullyCookableRecipes(mockRecipes, mockPantryItems);
    
    // Should return recipes that can be made with available ingredients
    expect(fullyCookableRecipes.length).toBeGreaterThanOrEqual(0);
    
    // All returned recipes should have cookability of 1
    fullyCookableRecipes.forEach(match => {
      expect(match.cookability).toBe(1);
      expect(match.missingIngredients.length).toBe(0);
    });
  });

  test('should order recipes by cookability', async () => {
    const cookableRecipes = getCookableRecipes(mockRecipes, mockPantryItems);
    
    // Should be sorted by cookability (highest first)
    for (let i = 1; i < cookableRecipes.length; i++) {
      expect(cookableRecipes[i-1].cookability).toBeGreaterThanOrEqual(cookableRecipes[i].cookability);
    }
  });

  test('should handle empty pantry', async () => {
    const emptyPantry: PantryItem[] = [];
    const cookableRecipes = getCookableRecipes(mockRecipes, emptyPantry);
    
    // All recipes should have 0 cookability with empty pantry
    cookableRecipes.forEach(match => {
      expect(match.cookability).toBe(0);
      expect(match.availableIngredients.length).toBe(0);
      expect(match.missingIngredients.length).toBe(match.recipe.ingredients.length);
    });
  });

  test('should handle recipe with no ingredients', async () => {
    const emptyRecipe: Recipe = {
      id: 'empty',
      name: 'Empty Recipe',
      ingredients: []
    };

    const result = calculateRecipeCookability(emptyRecipe, mockPantryItems);
    
    expect(result.cookability).toBe(0);
    expect(result.availableIngredients.length).toBe(0);
    expect(result.missingIngredients.length).toBe(0);
  });
}); 