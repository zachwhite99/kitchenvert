export interface Ingredient {
  item: string;      // Name of the ingredient
  number: number;    // Quantity
  unit: string;      // Unit of measurement (cups, grams, etc.)
  category?: string; // Optional for organization
}

export interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  steps?: string[]; // Optional cooking instructions
  prepTime?: number;
  cookTime?: number;
  servings?: number;
}

export interface PantryItem {
  id: string;
  ingredient: Ingredient;
  expiryDate?: Date;
  category?: string;
} 