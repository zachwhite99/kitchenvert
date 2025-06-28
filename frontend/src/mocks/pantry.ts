import type { PantryItem } from '../types/recipe';

// TODO: think through if units should be optional, and should we restrict initial categories

export const mockPantryItems: PantryItem[] = [
  {
    id: '1',
    ingredient: { item: 'eggs', number: 6, unit: 'large', category: 'dairy' },
    expiryDate: new Date('2024-02-15'),
    category: 'dairy'
  },
  {
    id: '2',
    ingredient: { item: 'milk', number: 1, unit: 'gallon', category: 'dairy' },
    expiryDate: new Date('2024-02-10'),
    category: 'dairy'
  },
  {
    id: '3',
    ingredient: { item: 'bread', number: 1, unit: 'loaf', category: 'grains' },
    expiryDate: new Date('2024-02-08'),
    category: 'grains'
  },
  {
    id: '4',
    ingredient: { item: 'chicken breast', number: 2, unit: 'pounds', category: 'meat' },
    expiryDate: new Date('2024-02-12'),
    category: 'meat'
  },
  {
    id: '5',
    ingredient: { item: 'tomatoes', number: 6, unit: 'medium', category: 'vegetables' },
    expiryDate: new Date('2024-02-14'),
    category: 'vegetables'
  },
  {
    id: '6',
    ingredient: { item: 'onions', number: 3, unit: 'large', category: 'vegetables' },
    expiryDate: new Date('2024-02-20'),
    category: 'vegetables'
  },
  {
    id: '7',
    ingredient: { item: 'garlic', number: 1, unit: 'head', category: 'vegetables' },
    expiryDate: new Date('2024-02-25'),
    category: 'vegetables'
  },
  {
    id: '8',
    ingredient: { item: 'olive oil', number: 1, unit: 'bottle', category: 'oils' },
    expiryDate: new Date('2025-01-01'),
    category: 'oils'
  },
  {
    id: '9',
    ingredient: { item: 'salt', number: 1, unit: 'container', category: 'spices' },
    expiryDate: new Date('2026-01-01'),
    category: 'spices'
  },
  {
    id: '10',
    ingredient: { item: 'black pepper', number: 1, unit: 'container', category: 'spices' },
    expiryDate: new Date('2026-01-01'),
    category: 'spices'
  },
  {
    id: '11',
    ingredient: { item: 'rice', number: 2, unit: 'cups', category: 'grains' },
    expiryDate: new Date('2025-01-01'),
    category: 'grains'
  },
  {
    id: '12',
    ingredient: { item: 'pasta', number: 1, unit: 'pound', category: 'pasta' },
    expiryDate: new Date('2025-01-01'),
    category: 'pasta'
  },
  {
    id: '13',
    ingredient: { item: 'cheese', number: 1, unit: 'block', category: 'dairy' },
    expiryDate: new Date('2024-02-18'),
    category: 'dairy'
  },
  {
    id: '14',
    ingredient: { item: 'butter', number: 1, unit: 'stick', category: 'dairy' },
    expiryDate: new Date('2024-02-20'),
    category: 'dairy'
  },
  {
    id: '15',
    ingredient: { item: 'flour', number: 2, unit: 'cups', category: 'baking' },
    expiryDate: new Date('2025-01-01'),
    category: 'baking'
  }
]; 