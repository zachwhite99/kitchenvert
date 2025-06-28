import type { Recipe, PantryItem, Ingredient } from '../types/recipe';

export interface RecipeMatch {
  recipe: Recipe;
  cookability: number; // 0-1, where 1 is fully cookable
  missingIngredients: Ingredient[];
  availableIngredients: Ingredient[];
}

/**
 * Calculate how cookable a recipe is with the given pantry items
 * @param recipe The recipe to check
 * @param pantryItems The available pantry items
 * @returns RecipeMatch object with cookability score and missing ingredients
 */
export function calculateRecipeCookability(
  recipe: Recipe,
  pantryItems: PantryItem[]
): RecipeMatch {
  const pantryIngredients = pantryItems.map(item => item.ingredient);
  const missingIngredients: Ingredient[] = [];
  const availableIngredients: Ingredient[] = [];

  // Check each recipe ingredient against pantry
  for (const recipeIngredient of recipe.ingredients) {
    const pantryMatch = findIngredientMatch(recipeIngredient, pantryIngredients);
    
    if (pantryMatch) {
      availableIngredients.push(pantryMatch);
    } else {
      missingIngredients.push(recipeIngredient);
    }
  }

  const cookability = recipe.ingredients.length > 0 
    ? availableIngredients.length / recipe.ingredients.length 
    : 0;

  return {
    recipe,
    cookability,
    missingIngredients,
    availableIngredients
  };
}

/**
 * Find a matching ingredient in the pantry
 * @param recipeIngredient The ingredient from the recipe
 * @param pantryIngredients The available pantry ingredients
 * @returns Matching ingredient or null if not found
 */
function findIngredientMatch(
  recipeIngredient: Ingredient,
  pantryIngredients: Ingredient[]
): Ingredient | null {
  return pantryIngredients.find(pantryIngredient => 
    pantryIngredient.item.toLowerCase() === recipeIngredient.item.toLowerCase() &&
    pantryIngredient.unit.toLowerCase() === recipeIngredient.unit.toLowerCase() &&
    pantryIngredient.number >= recipeIngredient.number
  ) || null;
}

/**
 * Get all recipes ordered by cookability
 * @param recipes List of recipes to check
 * @param pantryItems Available pantry items
 * @returns Array of RecipeMatch objects sorted by cookability (highest first)
 */
export function getCookableRecipes(
  recipes: Recipe[],
  pantryItems: PantryItem[]
): RecipeMatch[] {
  const recipeMatches = recipes.map(recipe => 
    calculateRecipeCookability(recipe, pantryItems)
  );

  return recipeMatches.sort((a, b) => b.cookability - a.cookability);
}

/**
 * Get fully cookable recipes (cookability = 1)
 * @param recipes List of recipes to check
 * @param pantryItems Available pantry items
 * @returns Array of fully cookable recipes
 */
export function getFullyCookableRecipes(
  recipes: Recipe[],
  pantryItems: PantryItem[]
): RecipeMatch[] {
  return getCookableRecipes(recipes, pantryItems).filter(
    match => match.cookability === 1
  );
} 