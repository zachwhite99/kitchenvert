# KitchenVert Frontend Development Guide

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Run tests**:
   ```bash
   npm run test          # Run all tests
   npm run test:ui       # Interactive test UI
   npm run test:headed   # Run tests with browser visible
   npm run test:debug    # Debug mode
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── mocks/              # Mock data for development
│   ├── recipes.ts      # Sample recipes
│   └── pantry.ts       # Sample pantry items
├── types/              # TypeScript definitions
│   └── recipe.ts       # Recipe, Ingredient, PantryItem interfaces
├── utils/              # Utility functions
│   └── recipeMatching.ts # Recipe matching algorithm
└── App.tsx             # Main app component
```

## 🧪 Testing

### E2E Tests (Playwright)
- **Location**: `tests/`
- **Configuration**: `playwright.config.ts`
- **Run**: `npm run test`

### Test Structure
- `tests/app.spec.ts` - Basic app functionality tests
- `tests/recipeMatching.spec.ts` - Recipe matching algorithm tests

### Adding New Tests
1. Create test file in `tests/` directory
2. Import test utilities: `import { test, expect } from '@playwright/test'`
3. Write test cases using Playwright's API
4. Run tests to verify functionality

## 🎨 Component Development

### Creating New Components
1. Create component file in `src/components/`
2. Use TypeScript interfaces from `src/types/`
3. Import mock data from `src/mocks/` for development
4. Add component tests as needed

### Example Component Structure
```typescript
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
  cookability?: number;
  onSelect?: (recipe: Recipe) => void;
}

export function RecipeCard({ recipe, cookability, onSelect }: RecipeCardProps) {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      {/* Component content */}
    </div>
  );
}
```

## 🔧 Recipe Matching Algorithm

The recipe matching system is located in `src/utils/recipeMatching.ts`:

- `calculateRecipeCookability()` - Calculate how cookable a recipe is
- `getCookableRecipes()` - Get all recipes ordered by cookability
- `getFullyCookableRecipes()` - Get recipes that can be made with current pantry

### Usage Example
```typescript
import { getCookableRecipes } from '../utils/recipeMatching';
import { mockRecipes } from '../mocks/recipes';
import { mockPantryItems } from '../mocks/pantry';

const cookableRecipes = getCookableRecipes(mockRecipes, mockPantryItems);
```

## 📱 Mock Data

### Recipes (`src/mocks/recipes.ts`)
- 4 sample recipes with full ingredient lists
- Includes cooking steps, prep time, cook time
- Categorized ingredients

### Pantry Items (`src/mocks/pantry.ts`)
- 15 sample pantry items
- Includes expiry dates and categories
- Realistic quantities and units

### Adding More Mock Data
1. Add new items to the appropriate mock file
2. Follow the existing data structure
3. Use realistic values for testing
4. Update tests if needed

## 🎯 Next Development Steps

### 1. Create Basic Components
- [ ] `RecipeCard` - Display recipe information
- [ ] `IngredientList` - Show recipe ingredients
- [ ] `PantryItem` - Display pantry item
- [ ] `CookabilityBadge` - Show recipe cookability

### 2. Build Pages
- [ ] `HomePage` - Recipe list with cookability
- [ ] `RecipeDetailPage` - Full recipe view
- [ ] `PantryPage` - Manage pantry items
- [ ] `CookableRecipesPage` - Filtered recipe list

### 3. Add Routing
- [ ] Set up React Router
- [ ] Create navigation between pages
- [ ] Add route protection for future auth

### 4. Enhance UI
- [ ] Add responsive design
- [ ] Implement dark mode
- [ ] Add loading states
- [ ] Improve accessibility

## 🔍 Debugging

### Development Server
- Hot reload enabled
- Open browser dev tools for console logs
- Use React DevTools extension

### Testing
- Use `npm run test:ui` for interactive debugging
- Use `npm run test:debug` for step-by-step debugging
- Check test reports in `playwright-report/`

### Common Issues
- **TypeScript errors**: Check imports and type definitions
- **Test failures**: Verify mock data and component structure
- **Build errors**: Run `npm run lint` to check for issues

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Playwright Testing](https://playwright.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/) 