import { describe, it, expect } from 'vitest';
import { 
  calculateRecipeCookability, 
  getCookableRecipes, 
  getFullyCookableRecipes 
} from '../recipeMatching';
import { mockRecipes } from '../../mocks/recipes';
import { mockPantryItems } from '../../mocks/pantry';
import type { Recipe, PantryItem } from '../../types/recipe';

describe('Recipe Matching', () => {
  describe('calculateRecipeCookability', () => {
    it('should calculate cookability correctly for partially cookable recipe', () => {
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
      expect(result.availableIngredients.length).toBeGreaterThan(0);
      expect(result.missingIngredients.length).toBeGreaterThan(0);
    });

    it('should handle recipe with no ingredients', () => {
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

    it('should identify all available ingredients correctly', () => {
      const recipeWithAvailableIngredients: Recipe = {
        id: 'available',
        name: 'Available Recipe',
        ingredients: [
          { item: 'eggs', number: 2, unit: 'large', category: 'dairy' },
          { item: 'flour', number: 1, unit: 'cup', category: 'baking' }
        ]
      };

      const result = calculateRecipeCookability(recipeWithAvailableIngredients, mockPantryItems);
      
      // Both ingredients should be available in our mock pantry
      expect(result.cookability).toBe(1);
      expect(result.availableIngredients.length).toBe(2);
      expect(result.missingIngredients.length).toBe(0);
    });
  });

  describe('getCookableRecipes', () => {
    it('should order recipes by cookability (highest first)', () => {
      const cookableRecipes = getCookableRecipes(mockRecipes, mockPantryItems);
      
      // Should be sorted by cookability (highest first)
      for (let i = 1; i < cookableRecipes.length; i++) {
        expect(cookableRecipes[i-1].cookability).toBeGreaterThanOrEqual(cookableRecipes[i].cookability);
      }
    });

    it('should handle empty pantry', () => {
      const emptyPantry: PantryItem[] = [];
      const cookableRecipes = getCookableRecipes(mockRecipes, emptyPantry);
      
      // All recipes should have 0 cookability with empty pantry
      cookableRecipes.forEach(match => {
        expect(match.cookability).toBe(0);
        expect(match.availableIngredients.length).toBe(0);
        expect(match.missingIngredients.length).toBe(match.recipe.ingredients.length);
      });
    });

    it('should return all recipes when pantry is provided', () => {
      const cookableRecipes = getCookableRecipes(mockRecipes, mockPantryItems);
      
      expect(cookableRecipes.length).toBe(mockRecipes.length);
    });
  });

  describe('getFullyCookableRecipes', () => {
    it('should return only recipes with cookability of 1', () => {
      const fullyCookableRecipes = getFullyCookableRecipes(mockRecipes, mockPantryItems);
      
      // All returned recipes should have cookability of 1
      fullyCookableRecipes.forEach(match => {
        expect(match.cookability).toBe(1);
        expect(match.missingIngredients.length).toBe(0);
      });
    });

    it('should return empty array when no recipes are fully cookable', () => {
      const emptyPantry: PantryItem[] = [];
      const fullyCookableRecipes = getFullyCookableRecipes(mockRecipes, emptyPantry);
      
      expect(fullyCookableRecipes.length).toBe(0);
    });
  });

  describe('ingredient matching logic', () => {
    it('should match ingredients case-insensitively', () => {
      const recipe: Recipe = {
        id: 'case-test',
        name: 'Case Test Recipe',
        ingredients: [
          { item: 'EGGS', number: 2, unit: 'LARGE', category: 'dairy' }
        ]
      };

      const result = calculateRecipeCookability(recipe, mockPantryItems);
      
      // Should match despite case differences
      expect(result.cookability).toBeGreaterThan(0);
    });

    it('should require sufficient quantity', () => {
      const recipe: Recipe = {
        id: 'quantity-test',
        name: 'Quantity Test Recipe',
        ingredients: [
          { item: 'eggs', number: 10, unit: 'large', category: 'dairy' } // More than available
        ]
      };

      const result = calculateRecipeCookability(recipe, mockPantryItems);
      
      // Should not match due to insufficient quantity
      expect(result.cookability).toBe(0);
      expect(result.missingIngredients.length).toBe(1);
    });
  });
}); 