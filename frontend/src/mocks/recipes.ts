import type { Recipe } from '../types/recipe';

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    name: 'Spaghetti Carbonara',
    ingredients: [
      { item: 'spaghetti', number: 1, unit: 'pound', category: 'pasta' },
      { item: 'eggs', number: 4, unit: 'large', category: 'dairy' },
      { item: 'pecorino cheese', number: 1, unit: 'cup', category: 'dairy' },
      { item: 'pancetta', number: 8, unit: 'ounces', category: 'meat' },
      { item: 'black pepper', number: 1, unit: 'teaspoon', category: 'spices' },
      { item: 'salt', number: 1, unit: 'teaspoon', category: 'spices' }
    ],
    steps: [
      'Bring a large pot of salted water to boil',
      'Cook spaghetti according to package directions',
      'Meanwhile, cook pancetta in a large skillet until crispy',
      'In a bowl, whisk together eggs, cheese, and pepper',
      'Drain pasta, reserving 1 cup of pasta water',
      'Add hot pasta to skillet with pancetta',
      'Remove from heat and quickly stir in egg mixture',
      'Add pasta water as needed to create a creamy sauce'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4
  },
  {
    id: '2',
    name: 'Chicken Stir Fry',
    ingredients: [
      { item: 'chicken breast', number: 1, unit: 'pound', category: 'meat' },
      { item: 'broccoli', number: 2, unit: 'cups', category: 'vegetables' },
      { item: 'carrots', number: 2, unit: 'medium', category: 'vegetables' },
      { item: 'soy sauce', number: 3, unit: 'tablespoons', category: 'condiments' },
      { item: 'garlic', number: 3, unit: 'cloves', category: 'vegetables' },
      { item: 'ginger', number: 1, unit: 'tablespoon', category: 'spices' },
      { item: 'vegetable oil', number: 2, unit: 'tablespoons', category: 'oils' },
      { item: 'rice', number: 2, unit: 'cups', category: 'grains' }
    ],
    steps: [
      'Cook rice according to package directions',
      'Cut chicken into bite-sized pieces',
      'Heat oil in a wok or large skillet over high heat',
      'Add chicken and cook until browned, about 5 minutes',
      'Add garlic and ginger, cook for 30 seconds',
      'Add vegetables and stir fry for 3-4 minutes',
      'Add soy sauce and cook for 1 minute more',
      'Serve over rice'
    ],
    prepTime: 15,
    cookTime: 20,
    servings: 4
  },
  {
    id: '3',
    name: 'Greek Salad',
    ingredients: [
      { item: 'cucumber', number: 1, unit: 'large', category: 'vegetables' },
      { item: 'tomatoes', number: 4, unit: 'medium', category: 'vegetables' },
      { item: 'red onion', number: 1, unit: 'small', category: 'vegetables' },
      { item: 'feta cheese', number: 1, unit: 'cup', category: 'dairy' },
      { item: 'kalamata olives', number: 1, unit: 'cup', category: 'condiments' },
      { item: 'olive oil', number: 3, unit: 'tablespoons', category: 'oils' },
      { item: 'lemon juice', number: 2, unit: 'tablespoons', category: 'condiments' },
      { item: 'oregano', number: 1, unit: 'teaspoon', category: 'spices' }
    ],
    steps: [
      'Chop cucumber, tomatoes, and red onion',
      'Combine vegetables in a large bowl',
      'Add feta cheese and olives',
      'Whisk together olive oil, lemon juice, and oregano',
      'Pour dressing over salad and toss gently',
      'Serve immediately'
    ],
    prepTime: 15,
    cookTime: 0,
    servings: 6
  },
  {
    id: '4',
    name: 'Chocolate Chip Cookies',
    ingredients: [
      { item: 'all-purpose flour', number: 2.25, unit: 'cups', category: 'baking' },
      { item: 'butter', number: 1, unit: 'cup', category: 'dairy' },
      { item: 'brown sugar', number: 0.75, unit: 'cup', category: 'baking' },
      { item: 'white sugar', number: 0.75, unit: 'cup', category: 'baking' },
      { item: 'eggs', number: 2, unit: 'large', category: 'dairy' },
      { item: 'vanilla extract', number: 2, unit: 'teaspoons', category: 'baking' },
      { item: 'chocolate chips', number: 2, unit: 'cups', category: 'baking' },
      { item: 'baking soda', number: 1, unit: 'teaspoon', category: 'baking' },
      { item: 'salt', number: 1, unit: 'teaspoon', category: 'spices' }
    ],
    steps: [
      'Preheat oven to 375°F (190°C)',
      'Cream together butter and sugars',
      'Beat in eggs and vanilla',
      'Mix in flour, baking soda, and salt',
      'Stir in chocolate chips',
      'Drop rounded tablespoons onto baking sheets',
      'Bake for 9-11 minutes until golden brown',
      'Cool on baking sheets for 2 minutes, then transfer to wire racks'
    ],
    prepTime: 20,
    cookTime: 10,
    servings: 24
  }
]; 