import React from "react";

const Recipes = () => {
  const sampleRecipes = [
    { title: "Spaghetti Bolognese", description: "A hearty Italian classic." },
    {
      title: "Veggie Stir Fry",
      description: "Fast, colorful, and nutritious.",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Recipes</h1>
      <button className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
        Create New
      </button>
      <ul className="space-y-4">
        {sampleRecipes.map((recipe, idx) => (
          <li key={idx} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-bold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
