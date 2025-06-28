# KitchenVert 🍳

A smart recipe management app that helps you discover what you can cook with the ingredients you already have in your pantry.

## 🎯 App Goals

KitchenVert is designed to solve the common problem of "What can I cook with what I have?" by providing:

- **Recipe Storage**: Store and manage your favorite recipes
- **Pantry Management**: Keep track of ingredients you currently have at home
- **Smart Recipe Discovery**: Find recipes you can make with your current ingredients
- **Ingredient Optimization**: Get recipes ordered by "cookability" - from fully cookable to needing just a few more ingredients

## 🚀 Features

### Current Features
- Modern React + TypeScript frontend
- Responsive design with Tailwind CSS
- Fast development with Vite

### Planned Features
- **Recipe Management**
  - Store recipes with names and ingredient lists
  - Optional cooking steps for each recipe
  - Ingredient objects with item name, quantity, and unit of measurement

- **Pantry System**
  - Track current ingredients in your home
  - Add/remove ingredients as you use them
  - Categorize ingredients for better organization

- **Smart Recipe Matching**
  - Find recipes you can make with current ingredients
  - Order recipes by "cookability" (most ingredients available first)
  - Show missing ingredients for partially cookable recipes

- **User Authentication** (v2.0)
  - User accounts and login system
  - Personalized recipe collections

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Linting**: ESLint + TypeScript ESLint

### Testing (Planned)
- **E2E Testing**: Playwright (primary), Cypress (optional)
- **Unit Testing**: Vitest + React Testing Library
- **Component Testing**: Storybook

### Backend (Planned)
- **Database**: PostgreSQL
- **API**: Node.js/Express or FastAPI (Python)
- **Authentication**: JWT or OAuth2
- **ORM**: Prisma (Node.js) or SQLAlchemy (Python)

### Deployment (Planned)
- **Frontend**: Vercel, Netlify, or AWS S3 + CloudFront
- **Backend**: Railway, Heroku, or AWS EC2
- **Database**: Supabase, Railway, or AWS RDS
- **CI/CD**: GitHub Actions

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kitchenvert
   ```

2. **Install dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app running.

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
kitchenvert/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── assets/         # Static assets
│   │   ├── mocks/          # Mock data for development
│   │   ├── types/          # TypeScript type definitions
│   │   └── App.tsx         # Main app component
│   ├── public/             # Public assets
│   ├── package.json        # Dependencies and scripts
│   └── README.md           # Frontend-specific docs
├── backend/                 # Backend API (planned)
├── tests/                   # E2E tests (planned)
└── README.md               # This file
```

## 🎨 Data Models (Planned)

### Recipe
```typescript
interface Recipe {
  id: string;
  name: string;
  ingredients: Ingredient[];
  steps?: string[]; // Optional cooking instructions
  prepTime?: number;
  cookTime?: number;
  servings?: number;
}
```

### Ingredient
```typescript
interface Ingredient {
  item: string;      // Name of the ingredient
  number: number;    // Quantity
  unit: string;      // Unit of measurement (cups, grams, etc.)
  category?: string   // Optional for organization
}
```

### Pantry Item
```typescript
interface PantryItem {
  id: string;
  ingredient: Ingredient;
  expiryDate?: Date;
  category?: string;
}
```

## 🚧 Development Roadmap

### Phase 1: Frontend Development (Current)
- [x] Project setup with React + TypeScript + Vite
- [x] Mock data setup for recipes and pantry
- [x] TypeScript type definitions
- [x] Recipe matching algorithm (frontend logic)
- [x] Playwright E2E test setup
- [ ] Basic UI components (recipe cards, ingredient lists, etc.)
- [ ] Recipe listing and detail pages
- [ ] Pantry management interface
- [ ] Responsive design and UI polish

### Phase 2: Testing Implementation
- [x] Playwright E2E test setup
- [x] Basic test structure and configuration
- [x] Recipe matching utility tests
- [ ] Core user journey tests (add recipe, manage pantry, find cookable recipes)
- [ ] Component tests with React Testing Library
- [ ] Optional Cypress tests for specific scenarios
- [ ] CI/CD pipeline for automated testing

### Phase 3: Backend Development
- [ ] Backend API setup (Node.js/Express or FastAPI)
- [ ] PostgreSQL database design and setup
- [ ] API endpoints for recipes and pantry management
- [ ] Database migrations and seeding
- [ ] Frontend-backend integration
- [ ] Environment configuration

### Phase 4: Authentication & Security
- [ ] User authentication system (JWT/OAuth2)
- [ ] User registration and login flows
- [ ] Protected routes and API endpoints
- [ ] User-specific data isolation
- [ ] Password reset functionality

### Phase 5: Deployment & DevOps
- [ ] Staging environment setup with basic auth protection
- [ ] Production environment configuration
- [ ] Database backup and monitoring
- [ ] Performance optimization
- [ ] Security hardening

### Phase 6: Advanced Features
- [ ] Recipe sharing and social features
- [ ] Advanced filtering and search
- [ ] Meal planning
- [ ] Shopping list generation
- [ ] Nutritional information
- [ ] Recipe scaling

## 🧪 Testing Strategy

### E2E Testing with Playwright
- **Primary focus**: Core user journeys
- **Test scenarios**:
  - Adding a new recipe
  - Managing pantry ingredients
  - Finding cookable recipes
  - Recipe matching algorithm accuracy
  - Responsive design across devices
- **Current setup**: ✅ Configured with multiple browsers and mobile viewports

### Component Testing
- **Framework**: React Testing Library + Vitest
- **Coverage**: All reusable components
- **Focus**: Component behavior and accessibility

### API Testing (Future)
- **Framework**: Supertest or similar
- **Coverage**: All backend endpoints
- **Focus**: Data validation and error handling

## 🎯 Next Steps

### Immediate (Frontend Development)
1. **Create basic UI components**:
   - Recipe card component
   - Ingredient list component
   - Pantry item component
   - Recipe detail view

2. **Build main pages**:
   - Home page with recipe list
   - Recipe detail page
   - Pantry management page
   - Cookable recipes page

3. **Implement recipe matching UI**:
   - Display cookability scores
   - Show missing ingredients
   - Filter by cookability

### Testing Integration
- Run `npm run test` to execute Playwright tests
- Use `npm run test:ui` for interactive test debugging
- Update E2E tests as you build UI components

### Backend Planning
- **Database choice**: PostgreSQL is recommended for its reliability and features
- **API framework**: Consider Node.js/Express for JavaScript consistency, or FastAPI for Python if you prefer
- **Authentication**: JWT tokens for stateless authentication
- **Deployment**: Railway or Heroku for easy setup, AWS for more control

## 🔐 Authentication Strategy

### Phase 1: Basic Protection
- Staging environment with basic auth (username/password prompt)
- Simple session management

### Phase 2: Full Authentication
- JWT-based authentication
- User registration and login
- Password reset functionality
- Role-based access control (future)

## 🚀 Deployment Strategy

### Staging Environment
- **Purpose**: Testing and validation
- **Protection**: Basic auth prompt
- **Auto-deploy**: On main branch pushes
- **Database**: Separate staging instance

### Production Environment
- **Purpose**: Live application
- **Protection**: Full authentication system
- **Auto-deploy**: On tagged releases
- **Database**: Production instance with backups

## 🤝 Contributing

This project is in early development. Contributions are welcome! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

[Add your license information here]

---

**KitchenVert** - Making cooking easier, one recipe at a time! 🍽️
